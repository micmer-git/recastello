/**
 * Cloudflare Worker — Recastello Form Submissions → GitHub Issues
 *
 * Receives POST from contact/athlete forms, creates a GitHub Issue.
 * Photos are uploaded to the repo and linked in the issue.
 * PAT stored as Worker secret (never exposed).
 *
 * Deploy: cd worker && npx wrangler deploy
 * Secret: npx wrangler secret put GITHUB_TOKEN
 */

const REPO_OWNER = 'micmer-git';
const REPO_NAME = 'recastello';
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

      // Upload photos if present (array of { name, data } with base64)
      const photoUrls = [];
      if (data.photos && Array.isArray(data.photos)) {
        for (let i = 0; i < Math.min(data.photos.length, 3); i++) {
          const photo = data.photos[i];
          if (!photo.data) continue;
          const ext = photo.name?.split('.').pop() || 'jpg';
          const filename = `${dateStr}_${ts}_${i}.${ext}`;
          const url = await uploadImage(env, filename, photo.data);
          if (url) photoUrls.push(url);
        }
      }

      let title, body, labels;

      if (type === 'risultato') {
        title = `Risultato: ${data.gara || 'Gara'} — ${data.nome || ''} ${data.cognome || ''}`;
        labels = ['risultato', 'submission'];
        const photoSection = photoUrls.length > 0
          ? '\n### Foto\n' + photoUrls.map((u, i) => `![foto ${i + 1}](${u})`).join('\n') + '\n'
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
          photoSection,
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

      return new Response(
        JSON.stringify({ ok: true, issue: issue.number, url: issue.html_url, photos: photoUrls.length }),
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
