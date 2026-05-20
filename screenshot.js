// screenshot.js
const { chromium, devices } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    ...devices["Desktop Chrome"],
    viewport: { width: 650, height: 1000 },
  });

  const page = await context.newPage();

  await page.goto("127.0.0.1:5500/rising_star_poster_rohit.html", {
    waitUntil: "networkidle",
  });

  await page.screenshot({
    path: "poster.png",
    fullPage: true,
  });

  await browser.close();
})();
