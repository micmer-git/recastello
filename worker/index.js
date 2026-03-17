/**
 * Cloudflare Worker — Recastello Form Submissions → GitHub Issues + Know-How Sync
 *
 * Receives POST from contact/athlete forms, creates a GitHub Issue.
 * Photos are uploaded to the repo and linked in the issue.
 * Know-How sync: extracts entities and saves structured markdown to micmer/recastello repo.
 *
 * PAT stored as Worker secret (never exposed).
 *
 * Deploy: cd worker && npx wrangler deploy
 * Secrets: npx wrangler secret put GITHUB_TOKEN
 *          npx wrangler secret put CALLMEBOT_APIKEY (optional)
 */

const REPO_OWNER = 'micmer-git';
const REPO_NAME = 'recastello';
const KNOWHOW_REPO_OWNER = 'micmer';
const KNOWHOW_REPO_NAME = 'recastello';
const ALLOWED_ORIGINS = [
  'https://micmer-git.github.io',
  'http://localhost:4321',
  'http://localhost:3000',
];

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

// WhatsApp notification via CallMeBot (free, requires one-time activation)
// Martina's number: 3489983632 (IT +39)
// Secret: CALLMEBOT_APIKEY (set after Martina activates the bot)
async function notifyWhatsApp(env, text) {
  if (!env.CALLMEBOT_APIKEY) return; // skip if not configured yet
  const phone = '+393489983632';
  const encoded = encodeURIComponent(text);
  try {
    await fetch(
      `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encoded}&apikey=${env.CALLMEBOT_APIKEY}`
    );
  } catch (e) { /* best effort */ }
}

// Upload a base64 image to the repo, return the raw URL
async function uploadImage(env, filename, base64Data) {
  const path = `submissions/photos/${filename}`;
  const res = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'RecastelloFormsWorker/1.0',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: `foto: ${filename}`,
        content: base64Data,
      }),
    }
  );
  if (!res.ok) return null;
  const json = await res.json();
  return json.content?.download_url || null;
}

// ============ KNOW-HOW SYNC FUNCTIONS ============

// Generate markdown for event/result
function generateEventMarkdown(data) {
  const now = new Date().toISOString().slice(0, 10);
  const slug = (data.gara || 'evento').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  const tags = ['#corsa', '#risultato', '#larecastello'];
  if (data.luogo) tags.push(`#${data.luogo.toLowerCase().replace(/\s+/g, '-')}`);

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

${tags.map(t => `- \`${t}\``).join('\n')}

---

## Note editoriali

[Da compilare: angoli interessanti per Domenica Sportiva, articoli, post social]

---

**Salvato:** ${now}  
**Per:** La Recastello / Domenica Sportiva / contenuti sportivi
`;
}

// Generate markdown for contact
function generateContactMarkdown(data) {
  const now = new Date().toISOString().slice(0, 10);
  const tags = ['#contatto', '#larecastello'];
  if (data.oggetto) tags.push(`#${data.oggetto.toLowerCase().replace(/\s+/g, '-')}`);

  return `# Contatto: ${data.nome || ''} ${data.cognome || ''}

**Email:** ${data.email || 'n/a'}  
**Oggetto:** ${data.oggetto || 'n/a'}  
**Fonte:** Form La Recastello (submission ${now})

---

## Messaggio

${data.messaggio || '_nessun messaggio_'}

---

## Tag per riutilizzo

${tags.map(t => `- \`${t}\``).join('\n')}

---

## Azioni suggerite

- [ ] Rispondere via email
- [ ] Archiviare in rubrica
- [ ] Valutare per contenuti futuri

---

**Salvato:** ${now}
`;
}

// Upload markdown to know-how repo
async function uploadToKnowHow(env, filename, content, type) {
  const path = type === 'risultato' ? `know-how/events/${filename}` : `know-how/contacts/${filename}`;
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

// Sync to know-how (non-blocking, best-effort)
async function syncToKnowHow(env, data, type) {
  try {
    const markdown = type === 'risultato' ? generateEventMarkdown(data) : generateContactMarkdown(data);
    const filename = `${new Date().toISOString().slice(0, 10)}_${type}_${Date.now()}.md`;
    await uploadToKnowHow(env, filename, markdown, type);
  } catch (err) {
    console.error('Know-how sync error:', err.message);
  }
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'POST only' }), {
        status: 405,
        headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
      });
    }

    try {
      const data = await request.json();
      const type = data._type || 'contatto';
      const now = new Date();
      const dateStr = now.toISOString().slice(0, 10);
      const ts = now.getTime();

      // Extract photo data for later (don't block on upload)
      const photoEntries = [];
      if (data.photos && Array.isArray(data.photos)) {
        for (let i = 0; i < Math.min(data.photos.length, 3); i++) {
          const photo = data.photos[i];
          if (photo?.data) {
            const ext = photo.name?.split('.').pop() || 'jpg';
            photoEntries.push({ ext, data: photo.data, idx: i });
          }
        }
      }

      let title, body, labels;

      if (type === 'risultato') {
        title = `Risultato: ${data.gara || 'Gara'} — ${data.nome || ''} ${data.cognome || ''}`;
        labels = ['risultato', 'submission'];
        const photoNote = photoEntries.length > 0
          ? `\n### Foto\n_${photoEntries.length} foto allegate (vedi commento sotto)_\n`
          : '';
        body = [
          `## Invio Risultato Gara`,
          ``,
          `| Campo | Valore |`,
          `|-------|--------|`,
          `| **Atleta** | ${data.nome || ''} ${data.cognome || ''} |`,
          `| **Gara** | ${data.gara || ''} |`,
          `| **Luogo** | ${data.luogo || ''} |`,
          `| **Data** | ${data.data || ''} |`,
          `| **Posizione** | ${data.posizione || 'n/a'} |`,
          `| **Tempo** | ${data.tempo || 'n/a'} |`,
          `| **Instagram** | ${data.instagram ? '@' + data.instagram : 'non indicato'} |`,
          ``,
          `### Racconto`,
          data.racconto || '_nessun racconto_',
          photoNote,
          `---`,
          `_Inviato dal sito La Recastello il ${now.toLocaleDateString('it-IT')}_`,
        ].join('\n');
      } else {
        title = `Contatto: ${data.oggetto || 'Info'} — ${data.nome || ''} ${data.cognome || ''}`;
        labels = ['contatto', 'submission'];
        body = [
          `## Richiesta Contatto`,
          ``,
          `| Campo | Valore |`,
          `|-------|--------|`,
          `| **Nome** | ${data.nome || ''} ${data.cognome || ''} |`,
          `| **Email** | ${data.email || ''} |`,
          `| **Oggetto** | ${data.oggetto || ''} |`,
          ``,
          `### Messaggio`,
          data.messaggio || '_nessun messaggio_',
          ``,
          `---`,
          `_Inviato dal sito La Recastello il ${now.toLocaleDateString('it-IT')}_`,
        ].join('\n');
      }

      const ghResponse = await fetch(
        `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${env.GITHUB_TOKEN}`,
            Accept: 'application/vnd.github+json',
            'User-Agent': 'RecastelloFormsWorker/1.0',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, body, labels }),
        }
      );

      if (!ghResponse.ok) {
        const err = await ghResponse.text();
        return new Response(JSON.stringify({ error: 'GitHub API error', detail: err }), {
          status: 502,
          headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
        });
      }

      const issue = await ghResponse.json();

      // WhatsApp notification to Martina (best-effort, non-blocking)
      if (type === 'risultato') {
        const waMsg = `🏃 NUOVO RISULTATO — La Recastello\n\n`
          + `Atleta: ${data.nome || ''} ${data.cognome || ''}\n`
          + `Gara: ${data.gara || ''}\n`
          + `Luogo: ${data.luogo || ''}\n`
          + `Data: ${data.data || ''}\n`
          + `Posizione: ${data.posizione || 'n/a'}\n`
          + `Tempo: ${data.tempo || 'n/a'}\n`
          + (data.instagram ? `IG: @${data.instagram}\n` : '')
          + `\nRacconto: ${data.racconto || '-'}\n`
          + `\n📋 Issue: ${issue.html_url}`
          + (photoEntries.length > 0 ? `\n📸 ${photoEntries.length} foto allegate` : '');
        notifyWhatsApp(env, waMsg);
      } else {
        const waMsg = `📩 NUOVO CONTATTO — La Recastello\n\n`
          + `Da: ${data.nome || ''} ${data.cognome || ''}\n`
          + `Email: ${data.email || ''}\n`
          + `Oggetto: ${data.oggetto || ''}\n`
          + `\nMessaggio: ${data.messaggio || '-'}\n`
          + `\n📋 Issue: ${issue.html_url}`;
        notifyWhatsApp(env, waMsg);
      }

      // Upload photos after issue creation (non-blocking, best-effort)
      let uploadedPhotos = 0;
      if (photoEntries.length > 0) {
        const photoUrls = [];
        for (const p of photoEntries) {
          try {
            const filename = `${dateStr}_${ts}_${p.idx}.${p.ext}`;
            const url = await uploadImage(env, filename, p.data);
            if (url) photoUrls.push(url);
          } catch (e) { /* best effort */ }
        }
        uploadedPhotos = photoUrls.length;

        // Add photos as a comment on the issue
        if (photoUrls.length > 0) {
          const commentBody = '### Foto\n' + photoUrls.map((u, i) => `![foto ${i + 1}](${u})`).join('\n\n');
          await fetch(
            `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues/${issue.number}/comments`,
            {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${env.GITHUB_TOKEN}`,
                Accept: 'application/vnd.github+json',
                'User-Agent': 'RecastelloFormsWorker/1.0',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ body: commentBody }),
            }
          ).catch(() => {});
        }
      }

      // Know-How sync (non-blocking, best-effort)
      syncToKnowHow(env, data, type);

      return new Response(
        JSON.stringify({ ok: true, issue: issue.number, url: issue.html_url, photos: uploadedPhotos, knowHow: true }),
        { status: 201, headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' } }
      );

    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 400,
        headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
      });
    }
  },
};
