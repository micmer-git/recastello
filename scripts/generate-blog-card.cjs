/**
 * Generate "La Domenica Sportiva" blog card image
 * Uses Puppeteer to render HTML → PNG
 *
 * Usage: node scripts/generate-blog-card.js
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'img', 'blog', '2026-03-16.png');

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=Oswald:wght@500;600;700&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px;
    height: 630px;
    font-family: 'Inter', sans-serif;
    background: #1A1A1A;
    overflow: hidden;
    position: relative;
  }

  /* Mountain silhouette background */
  .mountains {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 250px;
  }

  /* Green accent bar top */
  .top-bar {
    height: 6px;
    background: #00A651;
  }

  .content {
    padding: 48px 56px 0;
    position: relative;
    z-index: 2;
  }

  .tag {
    font-family: 'Oswald', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #00A651;
    margin-bottom: 16px;
  }

  .title {
    font-family: 'Oswald', sans-serif;
    font-size: 52px;
    font-weight: 700;
    color: white;
    line-height: 1.1;
    margin-bottom: 12px;
  }

  .subtitle {
    font-size: 18px;
    color: rgba(255,255,255,0.5);
    line-height: 1.5;
    max-width: 700px;
    margin-bottom: 36px;
  }

  .results {
    display: flex;
    gap: 16px;
  }

  .result-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-left: 4px solid #00A651;
    padding: 20px 24px;
    flex: 1;
    min-width: 0;
  }

  .result-card.podium {
    border-left-color: #FACC15;
    background: rgba(250,204,21,0.06);
  }

  .result-pos {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    font-family: 'Oswald', sans-serif;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .pos-gold { background: #FACC15; color: #78350F; }
  .pos-bronze { background: #D97706; color: white; }
  .pos-default { background: rgba(0,166,81,0.2); color: #00A651; }

  .result-name {
    font-family: 'Oswald', sans-serif;
    font-size: 17px;
    font-weight: 600;
    color: white;
    margin-bottom: 2px;
  }

  .result-race {
    font-size: 11px;
    color: #00A651;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .result-loc {
    font-size: 11px;
    color: rgba(255,255,255,0.35);
  }

  .footer {
    position: absolute;
    bottom: 32px;
    left: 56px;
    right: 56px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 2;
  }

  .footer-brand {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .logo-circle {
    width: 40px;
    height: 40px;
    background: #00A651;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    color: white;
    font-size: 18px;
  }

  .brand-text {
    font-size: 13px;
    color: rgba(255,255,255,0.4);
    font-weight: 600;
  }

  .footer-date {
    font-family: 'Oswald', sans-serif;
    font-size: 14px;
    color: rgba(255,255,255,0.3);
    letter-spacing: 0.1em;
  }
</style>
</head>
<body>
  <div class="top-bar"></div>

  <!-- Mountain silhouette -->
  <svg class="mountains" viewBox="0 0 1200 250" preserveAspectRatio="none">
    <polygon points="0,250 60,140 120,200 200,80 280,180 340,100 400,160 520,60 640,150 760,90 880,170 1000,50 1100,130 1200,80 1200,250" fill="#00A651" opacity="0.07"/>
    <polygon points="0,250 80,180 180,220 300,130 420,200 540,120 680,190 800,110 920,180 1060,100 1200,160 1200,250" fill="#00A651" opacity="0.05"/>
  </svg>

  <div class="content">
    <div class="tag">Blog Settimanale</div>
    <div class="title">La Domenica Sportiva</div>
    <div class="subtitle">Weekend di pioggia sulle Orobie ma i colori verde non si fermano. Dal campestre di Bergamo al trail del Resegone.</div>

    <div class="results">
      <div class="result-card podium">
        <div class="result-pos pos-gold">1</div>
        <div class="result-name">Isacco Costa</div>
        <div class="result-race">Test Gazzaniga-Orezzo</div>
        <div class="result-loc">Gazzaniga</div>
      </div>
      <div class="result-card podium">
        <div class="result-pos pos-bronze">3</div>
        <div class="result-name">Andrea Elia</div>
        <div class="result-race">Trail del Resegone</div>
        <div class="result-loc">Lecco</div>
      </div>
      <div class="result-card">
        <div class="result-pos pos-default">5</div>
        <div class="result-name">Vivien Bonzi</div>
        <div class="result-race">Trail del Resegone</div>
        <div class="result-loc">Lecco</div>
      </div>
      <div class="result-card">
        <div class="result-pos pos-default">10</div>
        <div class="result-name">Michele Merelli</div>
        <div class="result-race">Campestre Bergamo</div>
        <div class="result-loc">Bergamo</div>
      </div>
    </div>
  </div>

  <div class="footer">
    <div class="footer-brand">
      <div class="logo-circle">R</div>
      <div class="brand-text">La Recastello — Dal 1952</div>
    </div>
    <div class="footer-date">16 MARZO 2026</div>
  </div>
</body>
</html>`;

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: OUTPUT_PATH, type: 'png' });
  await browser.close();
  console.log('Generated:', OUTPUT_PATH);
})();
