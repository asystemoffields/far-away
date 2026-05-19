// Interactive smoke-test: load the page, switch through several LCs, verify
// the predicted-line stays sensible. Useful before commits.
import { chromium } from 'playwright';

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));

await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await page.waitForTimeout(15000); // let pole-fit complete for Hermione

const footers = [];
const lcSelector = '.dv-controls select.dv-select';
const lcOpts = await page.locator(lcSelector).first().locator('option').count();
console.log(`Hermione has ${lcOpts} light-curve options`);
for (const i of [0, 5, 10, 20, 30, 40]) {
  if (i >= lcOpts) continue;
  await page.selectOption(lcSelector, { index: i });
  await page.waitForTimeout(500);
  const footerText = await page.locator('.dv-footer span').first().textContent();
  footers.push(`LC ${i}: ${footerText?.trim()}`);
}
for (const f of footers) console.log(f);
console.log(`Errors: ${errors.length}`);
for (const e of errors.slice(0, 5)) console.log(`  ${e}`);

await browser.close();
