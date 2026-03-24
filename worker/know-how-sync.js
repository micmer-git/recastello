/**
 * Cloudflare Worker Extension — Recastello Form → Know-How Sync
 *
 * Intercetta submissions dal form e salva informazioni strutturate
 * nel repo know-how per futuro riutilizzo (Domenica Sportiva, articoli, ecc.)
 *
 * Da aggiungere come route secondaria nel worker principale o come worker separato.
 */

const KNOWHOW_REPO_OWNER = 'micmer';
const KNOWHOW_REPO_NAME = 'recastello'; // o 'know-how' se repo separato

// Estrae entità da una submission
function extractEntities(data, type) {
  const entities = {
    persone: [],
    luoghi: [],
    eventi: [],
    risultati: [],
    tag: [],
  };

  if (type === 'risultato') {
    // Persona
    if (data.nome || data.cognome) {
      entities.persone.push({
        nome: `${data.nome || ''} ${data.cognome || ''}`.trim(),
        ruolo: 'atleta',
        instagram: data.instagram || null,
      });
    }
    // Evento
    if (data.gara) {
      entities.eventi.push({
        nome: data.gara,
        luogo: data.luogo || 'n/a',
        data: data.data || 'n/a',
      });
      entities.luoghi.push(data.luogo);
    }
    // Risultato
    if (data.posizione || data.tempo) {
      entities.risultati.push({
        atleta: `${data.nome || ''} ${data.cognome || ''}`.trim(),
        gara: data.gara,
        posizione: data.posizione || 'n/a',
        tempo: data.tempo || 'n/a',
      });
    }
    // Tag
    entities.tag.push('#corsa', '#risultato', '#larecastello');
    if (data.luogo) entities.tag.push(`#${data.luogo.toLowerCase().replace(/\s+/g, '-')}`);
  } else if (type === 'contatto') {
    // Persona
    if (data.nome || data.cognome) {
      entities.persone.push({
        nome: `${data.nome || ''} ${data.cognome || ''}`.trim(),
        ruolo: 'contatto',
        email: data.email || null,
      });
    }
    // Tag
    entities.tag.push('#contatto', '#larecastello');
    if (data.oggetto) {
      entities.tag.push(`#${data.oggetto.toLowerCase().replace(/\s+/g, '-')}`);
    }
  }

  return entities;
}

// Genera markdown per evento
function generateEventMarkdown(data, entities) {
  const now = new Date().toISOString().slice(0, 10);
  const slug = (data.gara || 'evento')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return `# ${data.gara || 'Evento'}

**Data:** ${data.data || 'n/a'}  
**Luogo:** ${data.luogo || 'n/a'}  
**Fonte:** Form La Recastello (submission ${now})  
**Atleta:** ${data.nome || ''} ${data.cognome || ''}

---

## Risultato

| Campo | Valore |
|-------|--------|
| **Posizione** | ${data.posizione || 'n/a'} |
| **Tempo** | ${data.tempo || 'n/a'} |

---

## Racconto

${data.racconto || '_nessun racconto_'}

---

## Tag per riutilizzo

${entities.tag.map(t => `- \`${t}\``).join('\n')}

---

## Note editoriali

[Da compilare: angoli interessanti per Domenica Sportiva, articoli, post social]

---

**Salvato:** ${now}  
**Per:** La Recastello / Domenica Sportiva / contenuti sportivi
`;
}

// Genera markdown per contatto
function generateContactMarkdown(data, entities) {
  const now = new Date().toISOString().slice(0, 10);

  return `# Contatto: ${data.nome || ''} ${data.cognome || ''}

**Email:** ${data.email || 'n/a'}  
**Oggetto:** ${data.oggetto || 'n/a'}  
**Fonte:** Form La Recastello (submission ${now})

---

## Messaggio

${data.messaggio || '_nessun messaggio_'}

---

## Tag per riutilizzo

${entities.tag.map(t => `- \`${t}\``).join('\n')}

---

## Azioni suggerite

- [ ] Rispondere via email
- [ ] Archiviare in rubrica
- [ ] Valutare per contenuti futuri

---

**Salvato:** ${now}
`;
}

// Upload file markdown su GitHub
async function uploadToKnowHow(env, filename, content, type) {
  const path = type === 'risultato' 
    ? `events/${filename}` 
    : `contacts/${filename}`;
    
  const res = await fetch(
    `https://api.github.com/repos/${KNOWHOW_REPO_OWNER}/${KNOWHOW_REPO_NAME}/contents/${path}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'RecastelloKnowHowSync/1.0',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: `know-how: ${type} ${filename}`,
        content: Buffer.from(content).toString('base64'),
      }),
    }
  );
  
  return res.ok;
}

// Handler principale (da integrare nel worker esistente)
export async function handleKnowHowSync(data, type, env) {
  try {
    const entities = extractEntities(data, type);
    const markdown = type === 'risultato'
      ? generateEventMarkdown(data, entities)
      : generateContactMarkdown(data, entities);
    
    const filename = `${new Date().toISOString().slice(0, 10)}_${type}_${Date.now()}.md`;
    const success = await uploadToKnowHow(env, filename, markdown, type);
    
    return { ok: success, filename };
  } catch (err) {
    console.error('Know-how sync error:', err);
    return { ok: false, error: err.message };
  }
}
