// Audit script v3: read JD marker via DOM, use screenshot diff for scene change.
import { chromium } from 'playwright';
import fs from 'node:fs';
import crypto from 'node:crypto';

const BASE = 'http://127.0.0.1:8765';
const NOTES = [];
const note = (s) => { console.log(s); NOTES.push(s); };

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--use-gl=swiftshader'],
});

async function newPage(viewport = { width: 1400, height: 900 }) {
  const page = await browser.newPage({ viewport });
  const events = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') events.push(`[${m.type()}] ${m.text()}`); });
  page.on('pageerror', (e) => events.push(`[pageerror] ${e.message}`));
  page.on('requestfailed', (r) => events.push(`[reqfailed] ${r.url()} ${r.failure()?.errorText}`));
  page.on('response', (r) => { if (r.status() >= 400) events.push(`[http ${r.status()}] ${r.url()}`); });
  page.events = events;
  return page;
}

// Hash the screenshot bytes of a locator
async function locatorHash(loc) {
  try {
    const buf = await loc.screenshot({ timeout: 5000 });
    return crypto.createHash('sha1').update(buf).digest('hex').slice(0, 12);
  } catch (e) { return `err:${e.message.slice(0, 30)}`; }
}
// JD marker (the styled .u-over child div inserted by widget)
async function jdMarkerLeftPx(page) {
  return await page.evaluate(() => {
    const over = document.querySelector('.dv-plot .u-over');
    if (!over) return null;
    // The marker is a div child injected at init; find it by position-related styling.
    const candidates = [...over.querySelectorAll('div')];
    for (const d of candidates) {
      const s = getComputedStyle(d);
      // Looking for an absolutely-positioned thin element
      if (s.position === 'absolute' && parseFloat(s.left) >= 0 && s.display !== 'none') {
        if (parseFloat(s.width) < 6 && parseFloat(s.height) > 20) {
          return parseFloat(d.style.left || s.left);
        }
      }
    }
    // fallback: any abs-positioned narrow div
    for (const d of candidates) {
      const s = getComputedStyle(d);
      if (s.position === 'absolute') return parseFloat(d.style.left || s.left || 'NaN');
    }
    return null;
  });
}

// ========== TEST 4: plot interactions (v3) ==========
note('\n========== TEST 4: LC plot interactions (v3) ==========');
{
  const page = await newPage();
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  await page.waitForSelector('.dv-plot canvas, .dv-plot .u-wrap canvas', { timeout: 10000 });
  await page.waitForTimeout(4500);

  // Inspect what's inside .u-over
  const overChildren = await page.evaluate(() => {
    const over = document.querySelector('.dv-plot .u-over');
    if (!over) return null;
    return [...over.children].map(c => ({
      tag: c.tagName, cls: c.className,
      style: { left: c.style.left, top: c.style.top, w: c.style.width, h: c.style.height, position: getComputedStyle(c).position },
      bbox: c.getBoundingClientRect(),
    }));
  });
  note(`u-over children: ${JSON.stringify(overChildren)}`);

  const marker0 = await jdMarkerLeftPx(page);
  note(`JD marker left before click: ${marker0}`);

  // Click the .u-over directly (not the canvas).
  const overBox = await page.locator('.dv-plot .u-over').boundingBox();
  if (overBox) {
    // Click at 25%
    const x1 = overBox.x + overBox.width * 0.25;
    const y1 = overBox.y + overBox.height * 0.5;
    await page.mouse.click(x1, y1, { delay: 30 });
    await page.waitForTimeout(400);
    const marker1 = await jdMarkerLeftPx(page);
    note(`JD marker left after click @25%: ${marker1} (moved: ${marker1 !== marker0})`);

    // Scene change via locator screenshot
    const sceneHashBefore = await locatorHash(page.locator('.dv-scene'));
    const x2 = overBox.x + overBox.width * 0.8;
    await page.mouse.click(x2, y1, { delay: 30 });
    await page.waitForTimeout(800);
    const sceneHashAfter = await locatorHash(page.locator('.dv-scene'));
    const marker2 = await jdMarkerLeftPx(page);
    note(`JD marker left after click @80%: ${marker2}`);
    note(`Scene image hash on plot click: ${sceneHashBefore} -> ${sceneHashAfter} (changed: ${sceneHashBefore !== sceneHashAfter})`);
    await page.screenshot({ path: '/tmp/04_after_plot_click.png' });

    // Hover
    await page.mouse.move(overBox.x + overBox.width * 0.5, overBox.y + overBox.height * 0.4);
    await page.waitForTimeout(400);
    const crosshair = await page.evaluate(() => {
      const els = document.querySelectorAll('.u-cursor-pt, .u-cursor-x, .u-cursor-y');
      return { count: els.length, anyVisible: [...els].some(e => { const s = getComputedStyle(e); const r = e.getBoundingClientRect(); return s.display !== 'none' && (r.width > 0 || r.height > 0); }) };
    });
    note(`uPlot cursor visible: ${JSON.stringify(crosshair)}`);
    await page.screenshot({ path: '/tmp/04_hover_plot.png' });
  }

  // Play button — give the page some idle time first.
  const playLoc = page.locator('button[aria-label*="play" i]').first();
  if ((await playLoc.count()) > 0) {
    const sceneA = await locatorHash(page.locator('.dv-scene'));
    const markA = await jdMarkerLeftPx(page);
    await playLoc.click();
    await page.waitForTimeout(2500);
    const sceneB = await locatorHash(page.locator('.dv-scene'));
    const markB = await jdMarkerLeftPx(page);
    note(`Play 2.5s: marker ${markA} -> ${markB} (advanced: ${markA !== markB}); scene ${sceneA} -> ${sceneB} (changed: ${sceneA !== sceneB})`);
    const ariaInPlay = await page.evaluate(() => {
      const b = document.querySelector('button[aria-label*="play" i], button[aria-label*="paus" i]');
      return { ariaLabel: b?.getAttribute('aria-label'), ariaPressed: b?.getAttribute('aria-pressed') };
    });
    note(`Play state: ${JSON.stringify(ariaInPlay)}`);

    // Speed slider — measure marker advance over a fixed window
    const sliders = await page.evaluate(() => [...document.querySelectorAll('input[type="range"]')].map((s, idx) => ({
      idx, label: (s.closest('label')?.textContent || '').trim(), value: s.value, min: s.min, max: s.max,
    })));
    note(`Sliders: ${JSON.stringify(sliders)}`);
    const speedIdx = sliders.findIndex(s => /speed/i.test(s.label));
    if (speedIdx >= 0) {
      // Set speed to min, measure
      await page.evaluate((args) => {
        const el = document.querySelectorAll('input[type="range"]')[args.idx];
        el.value = args.val;
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
      }, { idx: speedIdx, val: sliders[speedIdx].min });
      await page.waitForTimeout(2000);
      const markLow = await jdMarkerLeftPx(page);
      await page.waitForTimeout(2000);
      const markLow2 = await jdMarkerLeftPx(page);
      const slowDelta = markLow2 - markLow;
      note(`Speed=${sliders[speedIdx].min}: marker advance ${slowDelta}px / 2s`);

      // Now max speed
      await page.evaluate((args) => {
        const el = document.querySelectorAll('input[type="range"]')[args.idx];
        el.value = args.val;
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
      }, { idx: speedIdx, val: sliders[speedIdx].max });
      await page.waitForTimeout(500);
      const markHi = await jdMarkerLeftPx(page);
      await page.waitForTimeout(2000);
      const markHi2 = await jdMarkerLeftPx(page);
      const fastDelta = markHi2 - markHi;
      note(`Speed=${sliders[speedIdx].max}: marker advance ${fastDelta}px / 2s`);
      note(`Tempo changed with slider: ${Math.abs(slowDelta - fastDelta) > 1}`);
    }

    // Switch curves while playing
    const curveSelectInfo = await page.evaluate(() => {
      const sels = [...document.querySelectorAll('select')].filter(s => s.options.length > 5);
      return sels.map(s => ({ id: s.id, count: s.options.length }));
    });
    note(`Curve select: ${JSON.stringify(curveSelectInfo)}`);
    if (curveSelectInfo.length > 0) {
      // Switch to LC #6 (idx 5) — 25 obs
      await page.evaluate(() => {
        const s = [...document.querySelectorAll('select')].filter(s => s.options.length > 5)[0];
        s.selectedIndex = 5;
        s.dispatchEvent(new Event('change', { bubbles: true }));
      });
      await page.waitForTimeout(2500);
      const markAfter = await jdMarkerLeftPx(page);
      const footerAfter = await page.evaluate(() => (document.querySelector('.dv-footer')?.textContent || '').trim());
      note(`After switching curves while playing: marker=${markAfter} footer=${footerAfter.slice(0, 200)}`);
    }

    // Pause
    await playLoc.click();
    await page.waitForTimeout(300);
  }
  await page.screenshot({ path: '/tmp/04_play_session.png' });
  note('Events:'); for (const e of page.events) note(`  ${e}`);
  await page.close();
}

await browser.close();
fs.writeFileSync('/tmp/audit3-notes.txt', NOTES.join('\n'));
console.log('\n=== TEST 4 DONE ===');
