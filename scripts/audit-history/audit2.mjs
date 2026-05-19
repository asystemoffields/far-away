// Continuation audit: tests 4 onward, with corrected JD reading and no CSS.escape usage.
import { chromium } from 'playwright';
import fs from 'node:fs';

const BASE = 'http://127.0.0.1:8765';
const NOTES = [];
const note = (s) => { console.log(s); NOTES.push(s); };

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--use-gl=swiftshader'],
});

// CSS.escape polyfill for Node.
const cssEscape = (s) => String(s).replace(/([\0--\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~ ])/g, '\\$1');

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

// First, inspect DOM to find the JD display.
note('\n========== JD-display inspection ==========');
{
  const page = await newPage();
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  await page.waitForSelector('.dv-scene canvas');
  await page.waitForTimeout(4000);

  const jdDom = await page.evaluate(() => {
    const out = [];
    const all = document.querySelectorAll('*');
    for (const el of all) {
      const c = el.children.length;
      if (c > 0) continue;
      const t = (el.textContent || '').trim();
      // Heuristic: 7-digit JD with optional decimal
      const m = t.match(/^(?:JD[^0-9]*)?2\d{6}(?:\.\d+)?$/);
      if (m) {
        out.push({ tag: el.tagName, cls: el.className, id: el.id, text: t, parentCls: el.parentElement?.className });
      }
    }
    return out;
  });
  note(`JD-bearing leaf nodes: ${JSON.stringify(jdDom).slice(0, 1500)}`);

  // Sample all dv-* classes
  const dvClasses = await page.evaluate(() => {
    const set = new Set();
    document.querySelectorAll('[class*="dv-"]').forEach(el => {
      for (const c of el.classList) if (c.startsWith('dv-')) set.add(c);
    });
    return [...set].sort();
  });
  note(`dv-* class inventory: ${JSON.stringify(dvClasses)}`);

  await page.close();
}

// ========== TEST 4: LC plot interactions ==========
note('\n========== TEST 4: LC plot interactions (fixed) ==========');
{
  const page = await newPage();
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  await page.waitForSelector('.dv-plot canvas, .dv-plot .u-wrap canvas', { timeout: 10000 });
  await page.waitForTimeout(4500);

  // Sniff JD: prefer .dv-jd, otherwise read the entire .dv-plot text and look for the LAST JD-like number (the cursor's JD).
  async function readJd() {
    return await page.evaluate(() => {
      const explicit = document.querySelector('.dv-jd');
      if (explicit) {
        const m = (explicit.textContent || '').match(/(\d{7}(?:\.\d+)?)/);
        if (m) return Number(m[1]);
      }
      // Look in plot region for floating label / cursor JD
      const plot = document.querySelector('.dv-plot');
      if (plot) {
        const t = plot.textContent || '';
        const matches = [...t.matchAll(/(\d{7}(?:\.\d+)?)/g)];
        if (matches.length) return Number(matches[matches.length - 1][1]);
      }
      return null;
    });
  }

  // Also dump current DV plot/footer/controls text for context
  const plotText = await page.evaluate(() => (document.querySelector('.dv-plot')?.textContent || '').trim().slice(0, 200));
  const controlsText = await page.evaluate(() => (document.querySelector('.dv-controls')?.textContent || '').trim().slice(0, 300));
  note(`dv-plot text: ${plotText}`);
  note(`dv-controls text: ${controlsText}`);

  const jd0 = await readJd();
  note(`JD before click: ${jd0}`);

  // Click on the plot region. uPlot's data canvas is inside .u-over (the over canvas).
  const plotLoc = page.locator('.dv-plot canvas').first();
  const plotBox = await plotLoc.boundingBox();
  if (plotBox) {
    // Click in middle area
    await page.mouse.move(plotBox.x + plotBox.width * 0.25, plotBox.y + plotBox.height * 0.5);
    await page.mouse.down();
    await page.mouse.up();
    await page.waitForTimeout(500);
    const jd1 = await readJd();
    note(`JD after click @25%: ${jd1} (changed: ${jd1 !== jd0})`);

    // Try a different click target
    await page.mouse.click(plotBox.x + plotBox.width * 0.75, plotBox.y + plotBox.height * 0.5);
    await page.waitForTimeout(500);
    const jd2 = await readJd();
    note(`JD after click @75%: ${jd2} (changed-from-prev: ${jd2 !== jd1})`);
    await page.screenshot({ path: '/tmp/04_after_plot_click.png' });

    // Verify 3D body actually rotated by sampling canvas pixel hash
    const sceneHashFn = `
      (() => {
        const cv = document.querySelector('.dv-scene canvas');
        if (!cv) return null;
        // Read a 64x64 region from center via WebGL readPixels
        const gl = cv.getContext('webgl2') || cv.getContext('webgl');
        if (!gl) return 'no-gl';
        const w = 64, h = 64;
        const x = Math.floor(cv.width / 2 - w / 2);
        const y = Math.floor(cv.height / 2 - h / 2);
        const buf = new Uint8Array(w * h * 4);
        gl.readPixels(x, y, w, h, gl.RGBA, gl.UNSIGNED_BYTE, buf);
        let acc = 0;
        for (let i = 0; i < buf.length; i += 4) acc = ((acc * 31) + buf[i] + buf[i+1] * 7 + buf[i+2] * 13) | 0;
        return acc.toString(16);
      })()
    `;
    const sceneHashBefore = await page.evaluate(sceneHashFn);
    await page.mouse.click(plotBox.x + plotBox.width * 0.1, plotBox.y + plotBox.height * 0.5);
    await page.waitForTimeout(600);
    const sceneHashAfter = await page.evaluate(sceneHashFn);
    note(`Scene hash on click @10%: ${sceneHashBefore} -> ${sceneHashAfter} (changed: ${sceneHashBefore !== sceneHashAfter})`);

    // Hover cursor
    await page.mouse.move(plotBox.x + plotBox.width * 0.6, plotBox.y + plotBox.height * 0.4);
    await page.waitForTimeout(400);
    const crosshair = await page.evaluate(() => {
      const els = document.querySelectorAll('.u-cursor-pt, .u-cursor-x, .u-cursor-y');
      const anyVis = [...els].some(e => getComputedStyle(e).display !== 'none' && e.getBoundingClientRect().width > 0);
      return { count: els.length, anyVisible: anyVis };
    });
    note(`uPlot cursor: ${JSON.stringify(crosshair)}`);
  }

  // Play button
  const playLoc = page.locator('button[aria-label*="play" i]').first();
  const playPresent = await playLoc.count();
  note(`Play button found: ${playPresent}`);
  if (playPresent > 0) {
    const sceneHashFn = `
      (() => {
        const cv = document.querySelector('.dv-scene canvas');
        if (!cv) return null;
        const gl = cv.getContext('webgl2') || cv.getContext('webgl');
        if (!gl) return 'no-gl';
        const w = 64, h = 64;
        const x = Math.floor(cv.width / 2 - w / 2);
        const y = Math.floor(cv.height / 2 - h / 2);
        const buf = new Uint8Array(w * h * 4);
        gl.readPixels(x, y, w, h, gl.RGBA, gl.UNSIGNED_BYTE, buf);
        let acc = 0;
        for (let i = 0; i < buf.length; i += 4) acc = ((acc * 31) + buf[i] + buf[i+1] * 7 + buf[i+2] * 13) | 0;
        return acc.toString(16);
      })()
    `;
    const jdBeforePlay = await readJd();
    const sceneBefore = await page.evaluate(sceneHashFn);
    await playLoc.click();
    await page.waitForTimeout(2500);
    const jdDuringPlay = await readJd();
    const sceneDuring = await page.evaluate(sceneHashFn);
    note(`Play: JD ${jdBeforePlay} -> ${jdDuringPlay} (advanced: ${jdDuringPlay !== jdBeforePlay})`);
    note(`Play: scene hash ${sceneBefore} -> ${sceneDuring} (changed: ${sceneBefore !== sceneDuring})`);
    const ariaInPlay = await page.evaluate(() => {
      const b = document.querySelector('button[aria-label*="play" i], button[aria-label*="paus" i]');
      return b ? { ariaLabel: b.getAttribute('aria-label'), ariaPressed: b.getAttribute('aria-pressed') } : null;
    });
    note(`Play button while playing: ${JSON.stringify(ariaInPlay)}`);

    // Speed slider
    const sliders = await page.evaluate(() => [...document.querySelectorAll('input[type="range"]')].map(s => ({
      idx: [...document.querySelectorAll('input[type="range"]')].indexOf(s),
      label: (s.closest('label')?.textContent || '').trim(),
      value: s.value, min: s.min, max: s.max,
    })));
    const speedIdx = sliders.findIndex(s => /speed/i.test(s.label));
    if (speedIdx >= 0) {
      const t0 = await readJd();
      const sceneA = await page.evaluate(sceneHashFn);
      await page.evaluate(({ idx, val }) => {
        const inputs = document.querySelectorAll('input[type="range"]');
        const el = inputs[idx];
        el.value = String(val);
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
      }, { idx: speedIdx, val: sliders[speedIdx].max });
      await page.waitForTimeout(2000);
      const t1 = await readJd();
      const sceneB = await page.evaluate(sceneHashFn);
      note(`Speed max=${sliders[speedIdx].max}: JD ${t0} -> ${t1} in 2s; scene ${sceneA}/${sceneB}`);
    }

    // Switch curves while playing
    const lcSel = await page.evaluate(() => {
      const sels = [...document.querySelectorAll('select')];
      for (const s of sels) {
        // The LC selector should have many options (one per LC)
        if (s.options.length > 5) return { id: s.id, count: s.options.length, sample: [...s.options].slice(0, 3).map(o => o.textContent.trim()) };
      }
      return null;
    });
    note(`LC selector: ${JSON.stringify(lcSel)}`);
    if (lcSel) {
      const opt = await page.evaluate(() => {
        const sels = [...document.querySelectorAll('select')];
        for (const s of sels) {
          if (s.options.length > 5) return [...s.options].map(o => o.value);
        }
        return [];
      });
      // Switch to a different curve
      await page.evaluate(({ targetVal }) => {
        const sels = [...document.querySelectorAll('select')];
        for (const s of sels) {
          if (s.options.length > 5) {
            s.value = targetVal;
            s.dispatchEvent(new Event('change', { bubbles: true }));
            return;
          }
        }
      }, { targetVal: opt[5] || opt[1] });
      await page.waitForTimeout(2000);
      const tAfter = await readJd();
      note(`Switched to LC option idx 5 while playing: JD now ${tAfter}`);
    }
    // Pause
    await playLoc.click();
    await page.waitForTimeout(200);
  }
  await page.screenshot({ path: '/tmp/04_play_session.png' });
  note('Events during plot test:');
  for (const e of page.events) note(`  ${e}`);
  await page.close();
}

// ========== TEST 5: c slider ==========
note('\n========== TEST 5: c slider 0 -> 0.5 ==========');
{
  const page = await newPage();
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  await page.waitForSelector('.dv-plot canvas');
  await page.waitForTimeout(4500);

  const sliders = await page.evaluate(() => [...document.querySelectorAll('input[type="range"]')].map((s, idx) => ({
    idx,
    label: (s.closest('label')?.textContent || s.previousElementSibling?.textContent || '').trim().slice(0, 80),
    min: s.min, max: s.max, value: s.value,
  })));
  note(`All sliders: ${JSON.stringify(sliders)}`);
  const cIdx = sliders.findIndex(s => /\bc\b|lambert|scatter/i.test(s.label) || (s.min === '0' && s.max === '0.5'));
  note(`c-slider idx: ${cIdx}`);

  async function plotHash() {
    return await page.evaluate(() => {
      const cvs = document.querySelectorAll('.dv-plot canvas');
      let acc = 0;
      for (const cv of cvs) {
        const ctx = cv.getContext('2d');
        if (!ctx) continue;
        const w = Math.min(cv.width, 800), h = Math.min(cv.height, 400);
        try {
          const data = ctx.getImageData(0, 0, w, h).data;
          for (let i = 0; i < data.length; i += 16) acc = (acc * 31 + data[i] + data[i + 1] * 7) | 0;
        } catch (_) {}
      }
      return acc.toString(16);
    });
  }

  if (cIdx >= 0) {
    const before = await plotHash();
    await page.evaluate(({ idx, val }) => {
      const el = document.querySelectorAll('input[type="range"]')[idx];
      el.value = val;
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
    }, { idx: cIdx, val: '0' });
    await page.waitForTimeout(800);
    const c0 = await plotHash();
    await page.screenshot({ path: '/tmp/05_c_zero.png' });
    await page.evaluate(({ idx, val }) => {
      const el = document.querySelectorAll('input[type="range"]')[idx];
      el.value = val;
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
    }, { idx: cIdx, val: '0.5' });
    await page.waitForTimeout(800);
    const c5 = await plotHash();
    await page.screenshot({ path: '/tmp/05_c_half.png' });
    note(`Plot hash: before=${before} c=0:${c0} c=0.5:${c5}`);
    note(`Curve visibly changes c=0 -> c=0.5: ${c0 !== c5}`);
  }
  await page.close();
}

// ========== TEST 6: LC switcher exhaustively ==========
note('\n========== TEST 6: LC switcher ==========');
{
  const page = await newPage();
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  await page.waitForSelector('.dv-plot canvas');
  await page.waitForTimeout(4500);

  const lcInfo = await page.evaluate(() => {
    const sels = [...document.querySelectorAll('select')];
    for (const s of sels) {
      if (s.options.length > 5) return {
        id: s.id, count: s.options.length,
        sample0: s.options[0]?.textContent?.trim(),
        sample5: s.options[5]?.textContent?.trim(),
        sample19: s.options[19]?.textContent?.trim(),
        sampleLast: s.options[s.options.length - 1]?.textContent?.trim(),
      };
    }
    return null;
  });
  note(`LC selector: ${JSON.stringify(lcInfo)}`);

  if (lcInfo) {
    for (const idx of [0, 5, 19]) {
      if (idx >= lcInfo.count) continue;
      const t0 = Date.now();
      await page.evaluate((i) => {
        const s = [...document.querySelectorAll('select')].find(s => s.options.length > 5);
        s.selectedIndex = i;
        s.dispatchEvent(new Event('change', { bubbles: true }));
      }, idx);
      await page.waitForTimeout(2500);
      const dt = Date.now() - t0;
      const footer = await page.evaluate(() => (document.querySelector('.dv-footer')?.textContent || '').trim());
      note(`LC option idx ${idx}: ${dt}ms; footer: ${footer.slice(0, 220)}`);
      await page.screenshot({ path: `/tmp/06_lc_idx_${idx}.png` });
    }
  }
  note('Events during LC test:');
  for (const e of page.events) note(`  ${e}`);
  await page.close();
}

// ========== TEST 7: embed.html ==========
note('\n========== TEST 7: embed.html ==========');
{
  const page = await newPage();
  const t0 = Date.now();
  await page.goto(`${BASE}/embed.html`, { waitUntil: 'networkidle' });
  try {
    await page.waitForSelector('#host .dv-scene canvas', { timeout: 25000 });
  } catch (_) {
    note('TIMEOUT waiting for embed canvas');
  }
  await page.waitForTimeout(5000);
  const tTtI = Date.now() - t0;
  note(`embed.html TTI: ${tTtI}ms`);

  const info = await page.evaluate(() => {
    const host = document.getElementById('host');
    if (!host) return { error: 'no #host' };
    const header = host.querySelector('.dv-header');
    const footer = host.querySelector('.dv-footer');
    const cv = host.querySelector('.dv-scene canvas');
    return {
      headerText: (header?.textContent || '').trim().slice(0, 240),
      footerText: (footer?.textContent || '').trim().slice(0, 240),
      canvas: cv ? { w: cv.width, h: cv.height, cssW: cv.clientWidth, cssH: cv.clientHeight } : null,
    };
  });
  note(`embed info: ${JSON.stringify(info)}`);

  // Drag
  const cBox = await page.locator('#host .dv-scene canvas').boundingBox();
  if (cBox) {
    await page.mouse.move(cBox.x + cBox.width / 2, cBox.y + cBox.height / 2);
    await page.mouse.down();
    for (let i = 1; i <= 10; i++) await page.mouse.move(cBox.x + cBox.width / 2 + i * 12, cBox.y + cBox.height / 2 + i * 6);
    await page.mouse.up();
    await page.waitForTimeout(500);
  }
  await page.screenshot({ path: '/tmp/07_embed.png' });
  note('Events during embed.html:');
  for (const e of page.events) note(`  ${e}`);
  await page.close();
}

// ========== TEST 8: embed-element.html (Custom Element + Shadow DOM) ==========
note('\n========== TEST 8: embed-element.html ==========');
{
  const page = await newPage();
  const t0 = Date.now();
  await page.goto(`${BASE}/embed-element.html`, { waitUntil: 'networkidle' });
  let timedOut = false;
  try {
    await page.waitForFunction(() => {
      const el = document.querySelector('damit-viewer');
      if (!el || !el.shadowRoot) return false;
      return !!el.shadowRoot.querySelector('.dv-scene canvas');
    }, { timeout: 25000 });
  } catch (_) { timedOut = true; }
  await page.waitForTimeout(5000);
  note(`embed-element TTI: ${Date.now() - t0}ms (timedOut: ${timedOut})`);

  const shadowInfo = await page.evaluate(() => {
    const out = [];
    document.querySelectorAll('damit-viewer').forEach((el) => {
      const s = el.shadowRoot;
      if (!s) return out.push({ hasShadow: false });
      const cv = s.querySelector('.dv-scene canvas');
      const dvHeader = s.querySelector('.dv-header');
      const dvFooter = s.querySelector('.dv-footer');
      out.push({
        hasShadow: true,
        attrs: el.getAttributeNames().reduce((a, n) => { a[n] = el.getAttribute(n); return a; }, {}),
        canvas: cv ? { w: cv.width, h: cv.height, cssW: cv.clientWidth, cssH: cv.clientHeight } : null,
        headerText: dvHeader?.textContent?.trim().slice(0, 200),
        footerText: dvFooter?.textContent?.trim().slice(0, 200),
        styleEls: s.querySelectorAll('style').length,
        dvClasses: [...new Set([...s.querySelectorAll('[class*="dv-"]')].flatMap(e => [...e.classList].filter(c => c.startsWith('dv-'))))].sort(),
      });
    });
    return out;
  });
  note(`damit-viewer instances: ${JSON.stringify(shadowInfo, null, 0).slice(0, 2400)}`);
  await page.screenshot({ path: '/tmp/08_embed_element.png', fullPage: true });
  note('Events during embed-element.html:');
  for (const e of page.events) note(`  ${e}`);
  await page.close();
}

// ========== TEST 9: Responsive ==========
note('\n========== TEST 9: Responsive ==========');
for (const w of [1024, 768, 480, 360]) {
  const page = await newPage({ width: w, height: 800 });
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  await page.waitForSelector('.dv-scene canvas');
  await page.waitForTimeout(3500);
  const layout = await page.evaluate(() => {
    const split = document.querySelector('.dv-split');
    const scene = document.querySelector('.dv-scene');
    const plot = document.querySelector('.dv-plot');
    const controls = document.querySelector('.dv-controls');
    const header = document.querySelector('.dv-header');
    return {
      bodyW: document.body.clientWidth,
      splitW: split?.clientWidth, splitH: split?.clientHeight,
      sceneW: scene?.clientWidth, sceneH: scene?.clientHeight,
      plotW: plot?.clientWidth, plotH: plot?.clientHeight,
      controlsW: controls?.clientWidth, controlsH: controls?.clientHeight,
      headerH: header?.clientHeight,
      flexDir: split ? getComputedStyle(split).flexDirection : '?',
      headerText: header?.textContent?.trim()?.slice(0, 150),
    };
  });
  note(`@${w}px: ${JSON.stringify(layout)}`);
  await page.screenshot({ path: `/tmp/09_responsive_${w}.png`, fullPage: true });
  await page.close();
}

// ========== TEST 10: A11y ==========
note('\n========== TEST 10: A11y ==========');
{
  const page = await newPage();
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  await page.waitForSelector('.dv-scene canvas');
  await page.waitForTimeout(3500);
  const order = [];
  for (let i = 0; i < 16; i++) {
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => {
      const f = document.activeElement;
      if (!f) return null;
      return { tag: f.tagName, id: f.id, cls: f.className, ariaLabel: f.getAttribute('aria-label'), text: (f.textContent || '').trim().slice(0, 30) };
    });
    order.push(focused);
  }
  note(`Focus order (16 tabs): ${JSON.stringify(order)}`);

  const playAria = await page.evaluate(() => {
    const b = document.querySelector('button[aria-label*="play" i], button[aria-label*="paus" i]');
    return b ? { ariaLabel: b.getAttribute('aria-label'), ariaPressed: b.getAttribute('aria-pressed'), title: b.title, disabled: b.disabled } : null;
  });
  note(`Play button aria: ${JSON.stringify(playAria)}`);
  await page.close();

  // prefers-reduced-motion
  const page2 = await newPage();
  await page2.emulateMedia({ reducedMotion: 'reduce' });
  await page2.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  await page2.waitForSelector('.dv-scene canvas');
  await page2.waitForTimeout(3500);
  const reduced = await page2.evaluate(() => {
    const b = document.querySelector('button[aria-label*="play" i], button[aria-label*="paus" i]');
    return b ? { ariaLabel: b.getAttribute('aria-label'), disabled: b.disabled, ariaDisabled: b.getAttribute('aria-disabled'), title: b.title } : null;
  });
  note(`prefers-reduced-motion: play button: ${JSON.stringify(reduced)}`);
  await page2.screenshot({ path: '/tmp/10_reduced_motion.png' });
  await page2.close();
}

// ========== TEST 11: Mobile touch ==========
note('\n========== TEST 11: Mobile 375x720 touch drag ==========');
{
  const ctx = await browser.newContext({ viewport: { width: 375, height: 720 }, hasTouch: true, isMobile: true, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  const ev = [];
  page.on('pageerror', e => ev.push(`[pageerror] ${e.message}`));
  page.on('console', m => { if (m.type() === 'error') ev.push(`[error] ${m.text()}`); });
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  await page.waitForSelector('.dv-scene canvas');
  await page.waitForTimeout(4500);
  await page.screenshot({ path: '/tmp/11_mobile_before.png' });

  await page.evaluate(() => { document.body.style.minHeight = '2000px'; });
  const cBox = await page.locator('.dv-scene canvas').boundingBox();
  if (cBox) {
    const cx = cBox.x + cBox.width / 2;
    const cy = cBox.y + cBox.height / 2;

    // Capture scene pixels before
    const sceneFn = `
      (() => {
        const cv = document.querySelector('.dv-scene canvas');
        if (!cv) return null;
        const gl = cv.getContext('webgl2') || cv.getContext('webgl');
        if (!gl) return 'no-gl';
        const w = 64, h = 64;
        const x = Math.floor(cv.width / 2 - w / 2);
        const y = Math.floor(cv.height / 2 - h / 2);
        const buf = new Uint8Array(w * h * 4);
        gl.readPixels(x, y, w, h, gl.RGBA, gl.UNSIGNED_BYTE, buf);
        let acc = 0;
        for (let i = 0; i < buf.length; i += 4) acc = (acc * 31 + buf[i] + buf[i+1] * 7) | 0;
        return acc.toString(16);
      })()
    `;
    const sceneA = await page.evaluate(sceneFn);
    const scrollA = await page.evaluate(() => window.scrollY);

    await page.evaluate(({ x, y }) => {
      const cv = document.querySelector('.dv-scene canvas');
      const opts = { bubbles: true, cancelable: true };
      const T = (cx, cy) => new Touch({ identifier: 1, target: cv, clientX: cx, clientY: cy });
      cv.dispatchEvent(new TouchEvent('touchstart', { ...opts, touches: [T(x, y)], targetTouches: [T(x, y)], changedTouches: [T(x, y)] }));
      for (let i = 1; i <= 12; i++) {
        const t = T(x + i * 12, y + i * 5);
        cv.dispatchEvent(new TouchEvent('touchmove', { ...opts, touches: [t], targetTouches: [t], changedTouches: [t] }));
      }
      const tend = T(x + 144, y + 60);
      cv.dispatchEvent(new TouchEvent('touchend', { ...opts, touches: [], targetTouches: [], changedTouches: [tend] }));
    }, { x: cx, y: cy });
    await page.waitForTimeout(500);

    const sceneB = await page.evaluate(sceneFn);
    const scrollB = await page.evaluate(() => window.scrollY);
    note(`Touch drag: scrollY ${scrollA} -> ${scrollB}; scene ${sceneA} -> ${sceneB} (changed: ${sceneA !== sceneB})`);
    await page.screenshot({ path: '/tmp/11_mobile_after_touch.png' });
  }
  note('Events during mobile:'); for (const e of ev) note(`  ${e}`);
  await ctx.close();
}

// ========== TEST 12: Bundle ==========
note('\n========== TEST 12: Bundle health ==========');
{
  const res = await fetch(`${BASE}/damit-viewer.umd.js`);
  note(`UMD status: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  note(`UMD size: ${buf.byteLength} bytes (${(buf.byteLength / 1024).toFixed(1)} KB)`);
  const head = buf.slice(0, 400).toString('utf-8');
  note(`UMD head 400B: ${JSON.stringify(head)}`);
  const txt = buf.toString('utf-8');
  note(`UMD contains 'DAMITViewer': ${txt.includes('DAMITViewer')}`);
  note(`UMD UMD-pattern check: ${/typeof exports/.test(txt) && /define\.amd/.test(txt)}`);
}

await browser.close();
fs.writeFileSync('/tmp/audit2-notes.txt', NOTES.join('\n'));
console.log('\n=== DONE. Notes written to /tmp/audit2-notes.txt ===');
