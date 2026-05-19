// Dev utility: capture a screenshot of the running Vite dev server using
// Playwright's bundled headless Chromium. Not part of the build; use it
// to quickly verify visual changes:
//   npm install --no-save playwright
//   node scripts/screenshot.mjs http://localhost:5173/ /tmp/demo.png [picker-id] [waitMs]
import { chromium } from 'playwright';

const url = process.argv[2] ?? 'http://localhost:5173/';
const out = process.argv[3] ?? '/tmp/demo.png';
const pickerValue = process.argv[4]; // optional: change asteroid via #picker
const waitMs = Number(process.argv[5] ?? 2500);

// CHROMIUM env var overrides the auto-detect; useful for sandboxes where
// Playwright's bundled browser is at a non-standard location.
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM || undefined,
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

const consoleErrors = [];
page.on('console', (msg) => {
  if (msg.type() === 'error') consoleErrors.push(`[${msg.type()}] ${msg.text()}`);
});
page.on('pageerror', (err) => consoleErrors.push(`[pageerror] ${err.message}`));

await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
if (pickerValue) {
  await page.selectOption('#picker', pickerValue);
}
await page.waitForTimeout(waitMs);
await page.screenshot({ path: out, fullPage: false });
console.log(`Screenshot saved to ${out}`);
console.log(`Status line: ${(await page.locator('#status').textContent()) ?? '(no #status)'}`);
const footerText = (await page.locator('.dv-footer span').first().textContent()) ?? '';
console.log(`Footer: ${footerText}`);
console.log(`Console errors (${consoleErrors.length}):`);
for (const e of consoleErrors) console.log(`  ${e}`);
await browser.close();
