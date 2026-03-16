/**
 * Generate "La Domenica Sportiva" blog card — v2 with athlete quote
 */

const puppeteer = require('puppeteer');
const path = require('path');

const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'img', 'blog', '2026-03-16.png');

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=Oswald:wght@500;600;700&family=Yellowtail&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px;
    height: 630px;
    font-family: 'Inter', sans-serif;
    background: #1A1A1A;
    overflow: hidden;
    position: relative;
  }

  .mountains {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 280px;
  }

  .top-bar {
    height: 6px;
    background: linear-gradient(90deg, #00A651, #00C853, #00A651);
  }

  .content {
    padding: 44px 56px 0;
    position: relative;
    z-index: 2;
  }

  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 28px;
  }

  .tag {
    font-family: 'Oswald', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #00A651;
    margin-bottom: 8px;
  }

  .title {
    font-family: 'Oswald', sans-serif;
    font-size: 48px;
    font-weight: 700;
    color: white;
    line-height: 1.05;
  }

  .date-badge {
    font-family: 'Oswald', sans-serif;
    background: #00A651;
    color: white;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-align: center;
    line-height: 1.3;
  }

  .date-badge .day {
    font-size: 32px;
    font-weight: 700;
    display: block;
  }

  .quote-section {
    background: rgba(0,166,81,0.08);
    border-left: 4px solid #00A651;
    padding: 16px 24px;
    margin-bottom: 28px;
    max-width: 680px;
  }

  .quote-text {
    font-size: 16px;
    font-style: italic;
    color: rgba(255,255,255,0.7);
    line-height: 1.5;
    margin-bottom: 6px;
  }

  .quote-attr {
    font-size: 12px;
    color: #00A651;
    font-weight: 700;
    letter-spacing: 0.05em;
  }

  .results {
    display: flex;
    gap: 14px;
  }

  .result-card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.08);
    padding: 18px 20px;
    flex: 1;
    min-width: 0;
    position: relative;
    overflow: hidden;
  }

  .result-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
  }

  .result-card.gold::before { background: #FACC15; }
  .result-card.bronze::before { background: #D97706; }
  .result-card.green::before { background: #00A651; }

  .result-pos {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    font-family: 'Oswald', sans-serif;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .pos-gold { background: #FACC15; color: #78350F; }
  .pos-bronze { background: #D97706; color: white; }
  .pos-green { background: rgba(0,166,81,0.25); color: #00A651; }

  .result-name {
    font-family: 'Oswald', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: white;
    margin-bottom: 3px;
  }

  .result-race {
    font-size: 10px;
    color: #00A651;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 1px;
  }

  .result-loc {
    font-size: 10px;
    color: rgba(255,255,255,0.3);
  }

  .footer {
    position: absolute;
    bottom: 28px;
    left: 56px;
    right: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
  }

  .footer-brand {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .logo-circle {
    width: 36px;
    height: 36px;
    background: #00A651;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    color: white;
    font-size: 16px;
  }

  .brand-name {
    font-family: 'Yellowtail', cursive;
    font-size: 20px;
    color: rgba(255,255,255,0.5);
  }

  .brand-sub {
    font-size: 9px;
    color: #00A651;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  .footer-url {
    font-size: 11px;
    color: rgba(255,255,255,0.2);
    letter-spacing: 0.05em;
  }
</style>
</head>
<body>
  <div class="top-bar"></div>

  <svg class="mountains" viewBox="0 0 1200 280" preserveAspectRatio="none">
    <polygon points="0,280 60,160 140,220 220,90 320,190 400,110 480,170 580,60 680,160 780,100 880,180 980,50 1080,140 1200,80 1200,280" fill="#00A651" opacity="0.06"/>
    <polygon points="0,280 80,200 180,240 300,140 440,220 560,130 700,200 820,120 940,190 1080,110 1200,170 1200,280" fill="#00A651" opacity="0.04"/>
  </svg>

  <div class="content">
    <div class="header-row">
      <div>
        <div class="tag">La Domenica Sportiva</div>
        <div class="title">Guerrieri del Fango</div>
      </div>
      <div class="date-badge">
        <span class="day">16</span>
        MAR 2026
      </div>
    </div>

    <div class="quote-section">
      <div class="quote-text">"Top" — Michele Merelli vince a Gromo dopo 11 ore di trail nella neve</div>
      <div class="quote-attr">— Tre gare, un crescendo: 10° campestre → 3° strada → 1° trail</div>
    </div>

    <div class="results">
      <div class="result-card gold">
        <div class="result-pos pos-gold">1</div>
        <div class="result-name">Michele Merelli</div>
        <div class="result-race">Trail di Gromo</div>
        <div class="result-loc">11h — "Top"</div>
      </div>
      <div class="result-card gold">
        <div class="result-pos pos-gold">1</div>
        <div class="result-name">Isacco Costa</div>
        <div class="result-race">Test Gazzaniga-Orezzo</div>
        <div class="result-loc">Pre-Memorial Peket</div>
      </div>
      <div class="result-card bronze">
        <div class="result-pos pos-bronze">3</div>
        <div class="result-name">Andrea Elia</div>
        <div class="result-race">Trail del Resegone</div>
        <div class="result-loc">Lecco</div>
      </div>
      <div class="result-card green">
        <div class="result-pos pos-green">5</div>
        <div class="result-name">Vivien Bonzi</div>
        <div class="result-race">Trail del Resegone</div>
        <div class="result-loc">1a bergamasca</div>
      </div>
    </div>
  </div>

  <div class="footer">
    <div class="footer-brand">
      <div class="logo-circle">R</div>
      <div>
        <div class="brand-name">La Recastello</div>
        <div class="brand-sub">Dal 1952 — Gazzaniga</div>
      </div>
    </div>
    <div class="footer-url">micmer-git.github.io/recastello</div>
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
