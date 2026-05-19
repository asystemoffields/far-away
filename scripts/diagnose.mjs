import { chromium } from 'playwright';
const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  args: ['--no-sandbox'],
});
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
const events = [];
page.on('console', (m) => events.push(`[console.${m.type()}] ${m.text()}`));
page.on('pageerror', (e) => events.push(`[pageerror] ${e.message}\n${e.stack}`));
page.on('requestfailed', (r) => events.push(`[reqfailed] ${r.url()} ${r.failure()?.errorText}`));
page.on('response', (r) => {
  if (r.status() >= 400) events.push(`[http ${r.status()}] ${r.url()}`);
});
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await page.waitForTimeout(2500);

// Check canvas pixel content
const sceneInfo = await page.evaluate(() => {
  const cv = document.querySelector('.dv-scene canvas');
  if (!cv) return { hasCanvas: false };
  const c = cv;
  return {
    hasCanvas: true,
    w: c.width, h: c.height,
    cssW: c.clientWidth, cssH: c.clientHeight,
  };
});
const sceneHostBox = await page.locator('.dv-scene').boundingBox();
const plotHostBox = await page.locator('.dv-plot').boundingBox();
const splitBox = await page.locator('.dv-split').boundingBox();

console.log('--- events ---');
for (const e of events) console.log(e);
console.log('--- DOM info ---');
console.log('scene canvas:', sceneInfo);
console.log('dv-scene box:', sceneHostBox);
console.log('dv-plot  box:', plotHostBox);
console.log('dv-split box:', splitBox);

await browser.close();
