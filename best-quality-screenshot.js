// best-quality-screenshot.js
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: true,
  });

  const page = await browser.newPage({
    viewport: {
      width: 750, // higher resolution
      height: 1000,
    },
    deviceScaleFactor: 3, // retina quality (important)
  });

  await page.goto("127.0.0.1:5500/rising_star_poster_rohit.html", {
    waitUntil: "networkidle",
  });

  // Wait for Google Fonts to finish loading
  await page.evaluate(async () => {
    await document.fonts.ready;
  });

  // Optional: ensure poster fully rendered
  await page.waitForTimeout(2000);

  await page.screenshot({
    path: "poster-ultra-hq.png",
    fullPage: true,
    type: "png",
  });

  await browser.close();
})();
