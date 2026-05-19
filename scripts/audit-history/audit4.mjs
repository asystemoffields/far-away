// Audit v4: deep-dive into plot-click behaviour.
import { chromium } from 'playwright';

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--use-gl=swiftshader'],
});
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

const events = [];
page.on('console', m => events.push(`[console.${m.type()}] ${m.text()}`));
page.on('pageerror', e => events.push(`[pageerror] ${e.message}`));

await page.goto('http://127.0.0.1:8765/', { waitUntil: 'networkidle' });
await page.waitForSelector('.dv-plot canvas');
await page.waitForTimeout(4500);

// Patch the widget to log onScrub calls
await page.evaluate(() => {
  // Wrap the click listener
  window.__scrubs = [];
  const over = document.querySelector('.dv-plot .u-over');
  console.log('u-over bbox:', JSON.stringify(over.getBoundingClientRect()));
  console.log('u-over rect width:', over.clientWidth, 'height:', over.clientHeight);
});

// Get over bbox
const overBox = await page.evaluate(() => {
  const over = document.querySelector('.dv-plot .u-over');
  return over.getBoundingClientRect();
});
console.log('overBox:', overBox);

// Read JD marker before
const beforeLeft = await page.evaluate(() => parseFloat(document.querySelector('.lc-jd-marker').style.left));
console.log('marker left before click:', beforeLeft);

// Hover first
await page.mouse.move(overBox.x + overBox.width * 0.5, overBox.y + overBox.height * 0.5);
await page.waitForTimeout(200);

// uPlot needs the cursor to be active. The widget set drag.x=false, drag.y=false, but cursor itself is still active.
// Issue: u-over has cursor.lock? Maybe the cursor: { sync: { key: 'lc-cursor' } } config causes special handling.
// Let's see if a synthesized click via mouse.click works.

await page.mouse.click(overBox.x + overBox.width * 0.25, overBox.y + overBox.height * 0.5);
await page.waitForTimeout(500);
const afterLeft1 = await page.evaluate(() => parseFloat(document.querySelector('.lc-jd-marker').style.left));
console.log('after page.mouse.click @25%:', afterLeft1);

// Try a native dispatchEvent
const afterLeft2 = await page.evaluate(() => {
  const over = document.querySelector('.dv-plot .u-over');
  const r = over.getBoundingClientRect();
  const x = r.left + r.width * 0.7;
  const y = r.top + r.height * 0.5;
  const ev = new MouseEvent('click', { bubbles: true, cancelable: true, clientX: x, clientY: y, view: window });
  over.dispatchEvent(ev);
  return parseFloat(document.querySelector('.lc-jd-marker').style.left);
});
console.log('after dispatch click @70%:', afterLeft2);

await page.waitForTimeout(300);
const afterLeft2b = await page.evaluate(() => parseFloat(document.querySelector('.lc-jd-marker').style.left));
console.log('after 300ms idle:', afterLeft2b);

// Try mousedown+mouseup on the same point
await page.mouse.move(overBox.x + overBox.width * 0.9, overBox.y + overBox.height * 0.5);
await page.mouse.down();
await page.mouse.up();
await page.waitForTimeout(500);
const afterLeft3 = await page.evaluate(() => parseFloat(document.querySelector('.lc-jd-marker').style.left));
console.log('after mousedown+mouseup @90%:', afterLeft3);

// Direct invocation of the widget API? The widget is mounted but exposed how?
const apiInfo = await page.evaluate(() => {
  const w = window;
  return {
    keys: Object.keys(w).filter(k => /damit|viewer|widget|handle/i.test(k)),
  };
});
console.log('window API keys:', apiInfo);

console.log('\n--- console events ---');
for (const e of events) console.log(e);

await browser.close();
