import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlPath = path.resolve(__dirname, 'preview-image.html');
const outPath = path.resolve(__dirname, '..', 'public', 'convite', 'preview.jpg');

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});
const page = await ctx.newPage();

await page.goto('file://' + htmlPath, { waitUntil: 'networkidle' });
// Give fonts a final beat to settle
await page.waitForTimeout(800);

await page.screenshot({
  path: outPath,
  type: 'jpeg',
  quality: 88,
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});

await browser.close();
console.log('preview.jpg generated at', outPath);
