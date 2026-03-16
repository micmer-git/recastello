/**
 * Cloudflare Worker — Recastello Form Submissions → GitHub Issues
 *
 * Receives POST from contact/athlete forms, creates a GitHub Issue
 * in the recastello repo. PAT stored as Worker secret (never exposed).
 *
 * Deploy: npx wrangler deploy --name recastello-forms
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

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';

    // CORS preflight
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
      const type = data._type || 'contatto'; // 'contatto' or 'risultato'

      let title, body, labels;

      if (type === 'risultato') {
        // Athlete result submission
        title = `Risultato: ${data.gara || 'Gara'} — ${data.nome || ''} ${data.cognome || ''}`;
        labels = ['risultato', 'submission'];
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
          ``,
          `---`,
          `_Inviato dal sito La Recastello il ${new Date().toLocaleDateString('it-IT')}_`,
        ].join('\n');
      } else {
        // General contact
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
          `_Inviato dal sito La Recastello il ${new Date().toLocaleDateString('it-IT')}_`,
        ].join('\n');
      }

      // Create GitHub Issue
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

      return new Response(JSON.stringify({ ok: true, issue: issue.number, url: issue.html_url }), {
        status: 201,
        headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
      });

    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 400,
        headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
      });
    }
  },
};
