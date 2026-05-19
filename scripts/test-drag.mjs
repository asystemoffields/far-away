// Verify the drag-to-orbit fix: load Hermione (defaults to earth view),
// drag on the canvas, confirm the camera moved.
import { chromium } from 'playwright';

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM || undefined,
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await page.waitForTimeout(15000); // pole-fit

await page.screenshot({ path: '/tmp/drag-before.png' });

const canvas = page.locator('.dv-scene canvas');
const box = await canvas.boundingBox();
if (!box) { console.error('no canvas'); process.exit(1); }
const cx = box.x + box.width / 2;
const cy = box.y + box.height / 2;

// Drag from center 200px down-right.
await page.mouse.move(cx, cy);
await page.mouse.down();
await page.mouse.move(cx + 200, cy + 100, { steps: 12 });
await page.mouse.up();
await page.waitForTimeout(500);

await page.screenshot({ path: '/tmp/drag-after.png' });

const viewMode = await page.evaluate(() => {
  const sel = document.querySelector('.dv-controls select');
  return sel ? sel.value : '?';
});
const cursor = await page.evaluate(() => {
  const c = document.querySelector('.dv-scene canvas');
  return c ? window.getComputedStyle(c).cursor : '?';
});

console.log(`view-mode dropdown after drag: ${viewMode}`);
console.log(`canvas cursor: ${cursor}`);
console.log(`console errors: ${errors.length}`);

await browser.close();
