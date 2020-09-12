/**
 * @fileoverview saving a screenshot of a webpage
 * 
 */

const puppeteer = require("puppeteer");

(async () => {
  console.log("script is running..");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://facebook.com/dsssssssssss");
  await page.screenshot({ path: "example.png" });
  await browser.close();
  console.log("script is Finished.");
})();
