// Behavioral audit of the DAMIT-coupled viewer.
// Serves /tmp/pages-mirror at http://127.0.0.1:8765.
import { chromium } from 'playwright';
import fs from 'node:fs';

const BASE = 'http://127.0.0.1:8765';
const NOTES = [];
const note = (s) => { console.log(s); NOTES.push(s); };

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--use-gl=swiftshader'],
});

async function newPage(viewport = { width: 1400, height: 900 }, options = {}) {
  const page = await browser.newPage({ viewport, ...options });
  const events = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') events.push(`[${m.type()}] ${m.text()}`); });
  page.on('pageerror', (e) => events.push(`[pageerror] ${e.message}`));
  page.on('requestfailed', (r) => events.push(`[reqfailed] ${r.url()} ${r.failure()?.errorText}`));
  page.on('response', (r) => { if (r.status() >= 400) events.push(`[http ${r.status()}] ${r.url()}`); });
  page.events = events;
  return page;
}

// ========== TEST 1: Demo SPA cold load ==========
note('\n========== TEST 1: Demo SPA cold load ==========');
{
  const page = await newPage();
  const t0 = Date.now();
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  const tNet = Date.now() - t0;
  // Wait for mesh + plot to be visible
  await page.waitForSelector('.dv-scene canvas', { timeout: 10000 });
  await page.waitForSelector('.dv-plot canvas, .dv-plot .u-wrap canvas, .dv-plot svg', { timeout: 10000 });
  const tTtI = Date.now() - t0;
  // Wait for the auto-fit header to appear (the "← published" pattern)
  let tFit = null;
  try {
    await page.waitForFunction(() => {
      const h = document.querySelector('.dv-header') || document.body;
      return h && /←\s*published/i.test(h.textContent || '');
    }, { timeout: 30000 });
    tFit = Date.now() - t0;
  } catch (_) {
    tFit = -1;
  }
  note(`networkidle: ${tNet}ms`);
  note(`canvas+plot visible (TTI): ${tTtI}ms`);
  note(`auto-fit header visible: ${tFit === -1 ? 'TIMEOUT (30s)' : `${tFit}ms`}`);

  // Header content
  const header = await page.evaluate(() => {
    const els = document.querySelectorAll('.dv-header, .dv-pole, .dv-fit-rms, [data-testid="header"]');
    return [...els].map(e => e.textContent.trim()).join(' | ');
  });
  note(`Header text: ${header.slice(0, 240)}`);
  // Footer
  const footer = await page.evaluate(() => {
    const els = document.querySelectorAll('.dv-footer, .dv-citation');
    return [...els].map(e => e.textContent.trim()).join(' | ');
  });
  note(`Footer text: ${footer.slice(0, 240)}`);
  await page.screenshot({ path: '/tmp/01_spa_cold.png' });
  note('Saved /tmp/01_spa_cold.png');
  note(`Events (errors/warnings/failed):`);
  for (const e of page.events) note(`  ${e}`);
  await page.close();
}

// ========== TEST 2: Picker exhaustively ==========
note('\n========== TEST 2: Picker each entry ==========');
{
  const page = await newPage();
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  await page.waitForSelector('.dv-scene canvas');
  await page.waitForTimeout(3000);

  // Discover picker
  const pickerInfo = await page.evaluate(() => {
    const sel = document.getElementById('picker') || document.querySelector('select[data-role="picker"]');
    if (!sel) return null;
    return {
      id: sel.id,
      options: [...sel.options].map(o => ({ value: o.value, label: o.textContent.trim() })),
    };
  });
  note(`Picker: ${JSON.stringify(pickerInfo)}`);

  if (pickerInfo) {
    for (let i = 0; i < pickerInfo.options.length; i++) {
      const opt = pickerInfo.options[i];
      const tSwitch = Date.now();
      await page.selectOption('#picker', opt.value);
      // Wait for header to update or for any settle.
      try {
        await page.waitForFunction((label) => {
          const t = document.body.textContent || '';
          return t.includes(label) || t.length > 0;
        }, opt.label, { timeout: 12000 });
      } catch (_) {}
      await page.waitForTimeout(3500);
      const dt = Date.now() - tSwitch;

      // Check 3D body: read pixel variance of the canvas (3D body should produce non-trivial variance).
      const canvasInfo = await page.evaluate(() => {
        const cv = document.querySelector('.dv-scene canvas');
        if (!cv) return null;
        return { w: cv.width, h: cv.height, cssW: cv.clientWidth, cssH: cv.clientHeight };
      });
      const headerNow = await page.evaluate(() => (document.querySelector('.dv-header')?.textContent || '').trim());
      const footerNow = await page.evaluate(() => (document.querySelector('.dv-footer')?.textContent || '').trim());
      note(`-- option "${opt.label}" (${opt.value}) switched in ${dt}ms`);
      note(`   canvas: ${JSON.stringify(canvasInfo)}`);
      note(`   header: ${headerNow.slice(0, 200)}`);
      note(`   footer: ${footerNow.slice(0, 220)}`);
      await page.screenshot({ path: `/tmp/02_picker_${i}_${opt.value.replace(/[^a-z0-9]/gi, '_')}.png` });
      note(`   saved /tmp/02_picker_${i}_${opt.value.replace(/[^a-z0-9]/gi, '_')}.png`);
    }

    // Rapid switching
    note('-- Rapid switching test (5 in a row, no waits) --');
    for (let i = 0; i < 5; i++) {
      const opt = pickerInfo.options[i % pickerInfo.options.length];
      await page.selectOption('#picker', opt.value);
    }
    await page.waitForTimeout(5000);
    const afterRapid = await page.evaluate(() => (document.querySelector('.dv-header')?.textContent || '').trim());
    note(`After rapid: ${afterRapid.slice(0, 200)}`);
    await page.screenshot({ path: '/tmp/02_picker_rapid.png' });
    note('Saved /tmp/02_picker_rapid.png');
    note('Events during picker tests:');
    for (const e of page.events) note(`  ${e}`);
  }
  await page.close();
}

// ========== TEST 3: 3D pane interactions ==========
note('\n========== TEST 3: 3D pane interactions (Hermione) ==========');
{
  const page = await newPage();
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  await page.waitForSelector('.dv-scene canvas');
  await page.waitForTimeout(4000);

  // Inspect view-mode dropdown before
  const viewModeBefore = await page.evaluate(() => {
    // Find select that has 'earth'/'free' options
    const sels = [...document.querySelectorAll('select')];
    for (const s of sels) {
      const vals = [...s.options].map(o => o.value);
      if (vals.includes('earth') || vals.includes('free')) {
        return { id: s.id, classes: s.className, value: s.value, options: vals };
      }
    }
    return null;
  });
  note(`view-mode dropdown before drag: ${JSON.stringify(viewModeBefore)}`);

  // Snapshot canvas pixel hash before drag
  const beforePixelHash = await page.evaluate(() => {
    const cv = document.querySelector('.dv-scene canvas');
    if (!cv) return null;
    const gl = cv.getContext('webgl2') || cv.getContext('webgl');
    if (!gl) return 'no-gl';
    // sample a single pixel from center
    return `${cv.width}x${cv.height}`;
  });

  const canvas = page.locator('.dv-scene canvas');
  const box = await canvas.boundingBox();
  if (!box) {
    note('NO CANVAS BOX — cannot test drag');
  } else {
    const cx = box.x + box.width / 2;
    const cy = box.y + box.height / 2;
    // Check default cursor
    const cursorRest = await page.evaluate(() => {
      const c = document.querySelector('.dv-scene canvas');
      return c ? getComputedStyle(c).cursor : '?';
    });
    note(`canvas cursor at rest: ${cursorRest}`);

    await page.mouse.move(cx, cy);
    await page.mouse.down();
    await page.waitForTimeout(50);
    const cursorWhileDown = await page.evaluate(() => {
      const c = document.querySelector('.dv-scene canvas');
      return c ? getComputedStyle(c).cursor : '?';
    });
    note(`canvas cursor while mouse down: ${cursorWhileDown}`);
    for (let i = 1; i <= 15; i++) {
      await page.mouse.move(cx + i * 14, cy + i * 6);
      await page.waitForTimeout(20);
    }
    await page.mouse.up();
    await page.waitForTimeout(300);

    const viewModeAfter = await page.evaluate(() => {
      const sels = [...document.querySelectorAll('select')];
      for (const s of sels) {
        const vals = [...s.options].map(o => o.value);
        if (vals.includes('earth') || vals.includes('free')) {
          return { value: s.value };
        }
      }
      return null;
    });
    note(`view-mode after drag: ${JSON.stringify(viewModeAfter)}`);
    await page.screenshot({ path: '/tmp/03_after_drag.png' });

    // Switch back to earth via dropdown
    if (viewModeAfter && viewModeAfter.value !== 'earth') {
      const sel = await page.evaluateHandle(() => {
        const sels = [...document.querySelectorAll('select')];
        for (const s of sels) {
          const vals = [...s.options].map(o => o.value);
          if (vals.includes('earth')) return s;
        }
        return null;
      });
      await sel.asElement().selectOption('earth');
      await page.waitForTimeout(500);
      const vm = await page.evaluate(() => {
        const sels = [...document.querySelectorAll('select')];
        for (const s of sels) {
          const vals = [...s.options].map(o => o.value);
          if (vals.includes('earth')) return s.value;
        }
        return null;
      });
      note(`view-mode after switching back to earth: ${vm}`);
      await page.screenshot({ path: '/tmp/03_back_to_earth.png' });
    }

    // Shift + scroll = zoom test
    await page.mouse.move(cx, cy);
    const beforeDistance = await page.evaluate(() => {
      // Hard to measure camera distance without internals. We'll just check scrollY does not move and that something animates.
      return { scrollY: window.scrollY };
    });
    await page.keyboard.down('Shift');
    await page.mouse.wheel(0, -300);
    await page.waitForTimeout(200);
    await page.keyboard.up('Shift');
    const afterShiftScroll = await page.evaluate(() => ({ scrollY: window.scrollY }));
    note(`Shift+wheel: window.scrollY ${beforeDistance.scrollY} -> ${afterShiftScroll.scrollY} (no page scroll expected)`);

    // Plain scroll = page scroll (NOT camera) — but on the SPA, there's likely no scroll bar. Force it.
    await page.evaluate(() => {
      document.body.style.minHeight = '3000px';
    });
    await page.mouse.move(cx, cy);
    const beforeScroll = await page.evaluate(() => window.scrollY);
    await page.mouse.wheel(0, 600);
    await page.waitForTimeout(300);
    const afterScroll = await page.evaluate(() => window.scrollY);
    note(`Plain wheel scrollY: ${beforeScroll} -> ${afterScroll} (page SHOULD scroll)`);
    await page.evaluate(() => { document.body.style.minHeight = ''; window.scrollTo(0, 0); });
  }

  note('Events during 3D-pane test:');
  for (const e of page.events) note(`  ${e}`);
  await page.close();
}

// ========== TEST 4: LC plot interactions ==========
note('\n========== TEST 4: LC plot interactions ==========');
{
  const page = await newPage();
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  await page.waitForSelector('.dv-plot canvas, .dv-plot .u-wrap canvas', { timeout: 10000 });
  await page.waitForTimeout(4000);

  // Get JD marker location helper
  async function readJd() {
    return await page.evaluate(() => {
      const t = document.body.textContent || '';
      const m = t.match(/JD[^0-9]*([0-9]{7}(?:\.\d+)?)/);
      return m ? Number(m[1]) : null;
    });
  }
  const jd0 = await readJd();
  note(`JD before click: ${jd0}`);

  // Click on plot (anywhere)
  const plotBox = await page.locator('.dv-plot canvas, .dv-plot .u-wrap canvas').first().boundingBox();
  if (plotBox) {
    await page.mouse.click(plotBox.x + plotBox.width * 0.25, plotBox.y + plotBox.height * 0.6);
    await page.waitForTimeout(300);
    const jd1 = await readJd();
    note(`JD after click @25%: ${jd1} (changed: ${jd1 !== jd0})`);
    await page.screenshot({ path: '/tmp/04_after_plot_click.png' });

    // Hover
    await page.mouse.move(plotBox.x + plotBox.width * 0.6, plotBox.y + plotBox.height * 0.4);
    await page.waitForTimeout(300);
    const crosshair = await page.evaluate(() => {
      // uPlot shows .u-cursor-pt or .u-cursor-x
      const els = document.querySelectorAll('.u-cursor-pt, .u-cursor-x, .u-cursor-y');
      return { count: els.length, anyVisible: [...els].some(e => getComputedStyle(e).display !== 'none') };
    });
    note(`uPlot cursor elements present: ${JSON.stringify(crosshair)}`);
    await page.screenshot({ path: '/tmp/04_hover_plot.png' });
  } else {
    note('NO PLOT BOX');
  }

  // Play button
  const playSel = await page.evaluate(() => {
    const btns = [...document.querySelectorAll('button, [role="button"]')];
    for (const b of btns) {
      const a = (b.getAttribute('aria-label') || '').toLowerCase();
      const t = (b.textContent || '').trim().toLowerCase();
      if (a.includes('play') || /^▶|play|►/.test(t)) {
        return { aria: b.getAttribute('aria-label'), text: t, ariaPressed: b.getAttribute('aria-pressed'), disabled: b.disabled, cls: b.className };
      }
    }
    return null;
  });
  note(`Play button: ${JSON.stringify(playSel)}`);
  if (playSel) {
    const jdBeforePlay = await readJd();
    const playLocator = page.locator('button[aria-label*="play" i], button[aria-label*="Play" i]').first();
    const cnt = await playLocator.count();
    if (cnt > 0) {
      await playLocator.click();
      await page.waitForTimeout(2500);
      const jdDuringPlay = await readJd();
      const ariaPressedAfter = await page.evaluate(() => {
        const b = document.querySelector('button[aria-label*="play" i], button[aria-label*="Play" i], button[aria-label*="paus" i], button[aria-label*="Paus" i]');
        return b ? { ariaLabel: b.getAttribute('aria-label'), ariaPressed: b.getAttribute('aria-pressed') } : null;
      });
      note(`Play: JD ${jdBeforePlay} -> ${jdDuringPlay} after ~2.5s (advanced: ${jdDuringPlay !== jdBeforePlay})`);
      note(`Play button state during play: ${JSON.stringify(ariaPressedAfter)}`);

      // Speed slider?
      const speedSlider = await page.evaluate(() => {
        const inputs = [...document.querySelectorAll('input[type="range"]')];
        return inputs.map(i => ({ name: i.name, id: i.id, label: (i.closest('label')?.textContent || '').trim(), value: i.value, min: i.min, max: i.max }));
      });
      note(`Range inputs found: ${JSON.stringify(speedSlider)}`);

      // Change speed
      if (speedSlider.length > 0) {
        const speedTarget = speedSlider.find(s => /speed|x|tempo|play/i.test(s.label) || /speed/i.test(s.id)) || speedSlider[speedSlider.length - 1];
        const jdBeforeSpeedChange = await readJd();
        const target = await page.locator(`input[type="range"]#${CSS.escape(speedTarget.id)}`).count()
          ? page.locator(`input[type="range"]#${CSS.escape(speedTarget.id)}`).first()
          : page.locator('input[type="range"]').last();
        // Set max
        await target.evaluate((el) => {
          el.value = el.max;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          el.dispatchEvent(new Event('change', { bubbles: true }));
        });
        await page.waitForTimeout(2000);
        const jdAfterSpeed = await readJd();
        note(`Speed boosted: JD ${jdBeforeSpeedChange} -> ${jdAfterSpeed} in 2s`);
      }

      // Switch curves while playing
      const lcSelect = await page.evaluate(() => {
        const sels = [...document.querySelectorAll('select')];
        for (const s of sels) {
          if (/curve|lc|light/i.test(s.id) || /curve|lc|light/i.test(s.name || '')
             || [...s.options].some(o => /lc|JD|obs/i.test(o.textContent))) {
            return { id: s.id, name: s.name, value: s.value, count: s.options.length, sample: s.options[0]?.textContent };
          }
        }
        return null;
      });
      note(`LC selector: ${JSON.stringify(lcSelect)}`);
      if (lcSelect) {
        const lcSel = page.locator(`select#${CSS.escape(lcSelect.id)}`);
        await lcSel.selectOption({ index: 5 });
        await page.waitForTimeout(2000);
        const jdAfterCurveSwitch = await readJd();
        note(`After switching curve while playing: JD ${jdAfterCurveSwitch}`);
      }

      // Pause
      await playLocator.click();
      await page.waitForTimeout(200);
    }
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
  await page.waitForSelector('.dv-plot canvas', { timeout: 10000 });
  await page.waitForTimeout(4500);

  const sliders = await page.evaluate(() => {
    return [...document.querySelectorAll('input[type="range"]')].map(s => ({
      id: s.id, name: s.name,
      min: s.min, max: s.max, step: s.step, value: s.value,
      label: (s.closest('label')?.textContent || s.previousElementSibling?.textContent || '').trim().slice(0, 80),
    }));
  });
  note(`All sliders: ${JSON.stringify(sliders)}`);

  // Find c slider — looks like one with min=0, max=0.5 or near
  const cSlider = sliders.find(s => /\bc\b|lambert|scatter/i.test(s.label) || (s.min === '0' && s.max === '0.5'));
  if (cSlider) {
    note(`Found c slider: ${JSON.stringify(cSlider)}`);
    await page.screenshot({ path: '/tmp/05_c_before.png' });

    // Get canvas pixel hash before
    const before = await page.evaluate(() => {
      const cv = document.querySelector('.dv-plot canvas');
      if (!cv) return '';
      const ctx = cv.getContext('2d');
      if (!ctx) return 'no-2d';
      try {
        const data = ctx.getImageData(0, 0, Math.min(cv.width, 800), Math.min(cv.height, 400)).data;
        let h = 0;
        for (let i = 0; i < data.length; i += 4) h = (h * 31 + data[i]) | 0;
        return h.toString(16);
      } catch (_) { return 'err'; }
    });

    await page.locator(`input[type="range"]#${CSS.escape(cSlider.id)}`).evaluate((el) => {
      el.value = '0';
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
    });
    await page.waitForTimeout(500);
    await page.screenshot({ path: '/tmp/05_c_zero.png' });
    const midC = await page.evaluate(() => {
      const cv = document.querySelector('.dv-plot canvas');
      const ctx = cv.getContext('2d');
      const data = ctx.getImageData(0, 0, Math.min(cv.width, 800), Math.min(cv.height, 400)).data;
      let h = 0;
      for (let i = 0; i < data.length; i += 4) h = (h * 31 + data[i]) | 0;
      return h.toString(16);
    });

    await page.locator(`input[type="range"]#${CSS.escape(cSlider.id)}`).evaluate((el) => {
      el.value = '0.5';
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
    });
    await page.waitForTimeout(500);
    const high = await page.evaluate(() => {
      const cv = document.querySelector('.dv-plot canvas');
      const ctx = cv.getContext('2d');
      const data = ctx.getImageData(0, 0, Math.min(cv.width, 800), Math.min(cv.height, 400)).data;
      let h = 0;
      for (let i = 0; i < data.length; i += 4) h = (h * 31 + data[i]) | 0;
      return h.toString(16);
    });
    await page.screenshot({ path: '/tmp/05_c_half.png' });
    note(`Plot canvas hashes — before:${before} c=0:${midC} c=0.5:${high}`);
    note(`Curve changed visibly: ${midC !== high}`);
  } else {
    note('No c slider found by heuristic. Slider list above.');
  }
  await page.close();
}

// ========== TEST 6: LC switcher across many curves ==========
note('\n========== TEST 6: LC switcher exhaustively ==========');
{
  const page = await newPage();
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(4500);

  const lcSel = await page.evaluate(() => {
    const sels = [...document.querySelectorAll('select')];
    for (const s of sels) {
      if (s.options.length > 5 && (s.id === 'lc' || /curve|lc/i.test(s.id) || /curve|lc/i.test(s.name || '')
         || [...s.options].some(o => /obs|points|LC #/i.test(o.textContent)))) {
        return { id: s.id, count: s.options.length, sample: [...s.options].slice(0, 5).map(o => o.textContent.trim()) };
      }
    }
    return null;
  });
  note(`LC select: ${JSON.stringify(lcSel)}`);

  if (lcSel) {
    const targets = [0, 5, 19];
    for (const i of targets) {
      if (i >= lcSel.count) continue;
      const t0 = Date.now();
      await page.selectOption(`select#${CSS.escape(lcSel.id)}`, { index: i });
      // Wait for plot to redraw — heuristic: footer RMS update
      await page.waitForTimeout(2500);
      const dt = Date.now() - t0;
      const footerNow = await page.evaluate(() => (document.querySelector('.dv-footer')?.textContent || '').trim());
      note(`LC #${i + 1}: ${dt}ms — footer: ${footerNow.slice(0, 200)}`);
      await page.screenshot({ path: `/tmp/06_lc_${i + 1}.png` });
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
  await page.waitForSelector('#host .dv-scene canvas', { timeout: 20000 });
  await page.waitForTimeout(4000);
  const tTtI = Date.now() - t0;
  note(`embed.html TTI: ${tTtI}ms`);
  const headerText = await page.evaluate(() => (document.querySelector('#host .dv-header')?.textContent || '').trim());
  const footerText = await page.evaluate(() => (document.querySelector('#host .dv-footer')?.textContent || '').trim());
  note(`embed header: ${headerText.slice(0, 240)}`);
  note(`embed footer: ${footerText.slice(0, 240)}`);
  // try a drag
  const cBox = await page.locator('#host .dv-scene canvas').boundingBox();
  if (cBox) {
    await page.mouse.move(cBox.x + cBox.width / 2, cBox.y + cBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(cBox.x + cBox.width / 2 + 100, cBox.y + cBox.height / 2 + 80, { steps: 10 });
    await page.mouse.up();
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
  // Wait for shadow DOM canvas
  try {
    await page.waitForFunction(() => {
      const el = document.querySelector('damit-viewer');
      if (!el || !el.shadowRoot) return false;
      return !!el.shadowRoot.querySelector('.dv-scene canvas');
    }, { timeout: 30000 });
  } catch (_) {
    note('TIMEOUT waiting for damit-viewer shadow canvas');
  }
  await page.waitForTimeout(4000);
  const tTtI = Date.now() - t0;
  note(`embed-element.html canvas TTI: ${tTtI}ms`);

  const shadowInfo = await page.evaluate(() => {
    const out = [];
    document.querySelectorAll('damit-viewer').forEach((el, i) => {
      const s = el.shadowRoot;
      if (!s) return out.push({ i, hasShadow: false });
      const cv = s.querySelector('.dv-scene canvas');
      const dvHeader = s.querySelector('.dv-header');
      const dvFooter = s.querySelector('.dv-footer');
      const dvPlot = s.querySelector('.dv-plot');
      const dvScene = s.querySelector('.dv-scene');
      out.push({
        i, hasShadow: true,
        attrs: el.getAttributeNames().map(n => `${n}=${el.getAttribute(n)}`),
        canvas: cv ? { w: cv.width, h: cv.height, cssW: cv.clientWidth, cssH: cv.clientHeight } : null,
        headerText: dvHeader?.textContent.trim().slice(0, 200),
        footerText: dvFooter?.textContent.trim().slice(0, 200),
        plotW: dvPlot?.clientWidth,
        plotH: dvPlot?.clientHeight,
        sceneW: dvScene?.clientWidth,
        sceneH: dvScene?.clientHeight,
        styleEls: s.querySelectorAll('style').length,
      });
    });
    return out;
  });
  note(`damit-viewer instances: ${JSON.stringify(shadowInfo)}`);
  await page.screenshot({ path: '/tmp/08_embed_element.png', fullPage: true });
  note('Saved /tmp/08_embed_element.png (fullPage)');
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
    const cs = document.querySelector('.dv-scene')?.clientWidth;
    return {
      splitW: split?.clientWidth, splitH: split?.clientHeight,
      sceneW: scene?.clientWidth, sceneH: scene?.clientHeight,
      plotW: plot?.clientWidth, plotH: plot?.clientHeight,
      controlsW: controls?.clientWidth, controlsH: controls?.clientHeight,
      flexDir: split ? getComputedStyle(split).flexDirection : '?',
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

  // Tab through and record focus order
  const order = [];
  for (let i = 0; i < 15; i++) {
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => {
      const f = document.activeElement;
      if (!f) return null;
      return {
        tag: f.tagName,
        id: f.id,
        ariaLabel: f.getAttribute('aria-label'),
        text: (f.textContent || '').trim().slice(0, 30),
        type: f.getAttribute('type'),
      };
    });
    order.push(focused);
  }
  note(`Focus order (15 tabs): ${JSON.stringify(order)}`);

  // Play button aria
  const playAria = await page.evaluate(() => {
    const b = document.querySelector('button[aria-label*="play" i], button[aria-label*="paus" i]');
    return b ? {
      ariaLabel: b.getAttribute('aria-label'),
      ariaPressed: b.getAttribute('aria-pressed'),
      title: b.title, role: b.getAttribute('role'),
      disabled: b.disabled,
    } : null;
  });
  note(`Play button aria: ${JSON.stringify(playAria)}`);

  await page.close();

  // prefers-reduced-motion test
  const page2 = await newPage({ width: 1400, height: 900 });
  await page2.emulateMedia({ reducedMotion: 'reduce' });
  await page2.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  await page2.waitForSelector('.dv-scene canvas');
  await page2.waitForTimeout(3500);
  const playReduced = await page2.evaluate(() => {
    const b = document.querySelector('button[aria-label*="play" i], button[aria-label*="paus" i]');
    return b ? { ariaLabel: b.getAttribute('aria-label'), disabled: b.disabled, ariaDisabled: b.getAttribute('aria-disabled') } : null;
  });
  note(`prefers-reduced-motion: play button: ${JSON.stringify(playReduced)}`);
  await page2.screenshot({ path: '/tmp/10_reduced_motion.png' });
  await page2.close();
}

// ========== TEST 11: Mobile (touch drag) ==========
note('\n========== TEST 11: Mobile 375x720 touch drag ==========');
{
  const context = await browser.newContext({
    viewport: { width: 375, height: 720 },
    hasTouch: true,
    isMobile: true,
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  const events = [];
  page.on('console', (m) => { if (m.type() === 'error') events.push(`[error] ${m.text()}`); });
  page.on('pageerror', (e) => events.push(`[pageerror] ${e.message}`));
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  await page.waitForSelector('.dv-scene canvas');
  await page.waitForTimeout(4000);
  await page.screenshot({ path: '/tmp/11_mobile_before.png', fullPage: false });
  const before = await page.evaluate(() => ({ scrollY: window.scrollY }));

  // Force body height for scroll test
  await page.evaluate(() => { document.body.style.minHeight = '2000px'; });

  const cBox = await page.locator('.dv-scene canvas').boundingBox();
  if (cBox) {
    const cx = cBox.x + cBox.width / 2;
    const cy = cBox.y + cBox.height / 2;
    // Touch drag using the touchscreen API
    try {
      await page.touchscreen.tap(cx, cy);
    } catch (_) {}
    // Use CDP-style touch drag via page.evaluate dispatching TouchEvent
    await page.evaluate(({ x, y }) => {
      const cv = document.querySelector('.dv-scene canvas');
      if (!cv) return;
      const T = (id, cx, cy) => new Touch({ identifier: id, target: cv, clientX: cx, clientY: cy });
      const t1 = T(1, x, y);
      cv.dispatchEvent(new TouchEvent('touchstart', { touches: [t1], targetTouches: [t1], changedTouches: [t1], bubbles: true, cancelable: true }));
      for (let i = 1; i <= 12; i++) {
        const tn = T(1, x + i * 12, y + i * 5);
        cv.dispatchEvent(new TouchEvent('touchmove', { touches: [tn], targetTouches: [tn], changedTouches: [tn], bubbles: true, cancelable: true }));
      }
      const tend = T(1, x + 144, y + 60);
      cv.dispatchEvent(new TouchEvent('touchend', { touches: [], targetTouches: [], changedTouches: [tend], bubbles: true, cancelable: true }));
    }, { x: cx, y: cy });
    await page.waitForTimeout(300);
    const after = await page.evaluate(() => ({ scrollY: window.scrollY }));
    note(`Touch drag: scrollY ${before.scrollY} -> ${after.scrollY}`);
    await page.screenshot({ path: '/tmp/11_mobile_after_touch.png', fullPage: false });
  } else {
    note('No canvas in mobile view');
  }
  note('Events during mobile:');
  for (const e of events) note(`  ${e}`);
  await context.close();
}

// ========== TEST 12: Bundle health ==========
note('\n========== TEST 12: Bundle health ==========');
{
  const res = await fetch(`${BASE}/damit-viewer.umd.js`);
  note(`UMD status: ${res.status}`);
  const buf = await res.arrayBuffer();
  note(`UMD size: ${buf.byteLength} bytes (${(buf.byteLength / 1024).toFixed(1)} KB)`);
  const head = Buffer.from(buf.slice(0, 500)).toString('utf-8');
  note(`UMD head 500B: ${JSON.stringify(head)}`);
  // Check if DAMITViewer name is exported
  const fullText = Buffer.from(buf).toString('utf-8');
  note(`UMD exports DAMITViewer string match: ${/DAMITViewer/.test(fullText)}`);
  note(`UMD UMD wrapper match: ${/typeof exports|module\.exports|define\.amd|self\.DAMITViewer|global\.DAMITViewer/.test(fullText)}`);
}

await browser.close();
fs.writeFileSync('/tmp/audit-notes.txt', NOTES.join('\n'));
console.log('\n=== DONE. Notes written to /tmp/audit-notes.txt ===');
