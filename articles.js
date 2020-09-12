const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://news.ycombinator.com/");

  // Extract Articles from the page
  const resultSelector = ".storylink";
  const links = await page.evaluate((resultSelector) => {
    const anchors = Array.from(document.querySelectorAll(resultSelector));
    return anchors.map((anchor) => {
      const title = anchor.textContent.trim();
      console.log(title);
      return `${title}`;
    });
  }, resultSelector);
  console.log(links.join('\n'));
  await browser.close();
})();
