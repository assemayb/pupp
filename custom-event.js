const puppeteer = require("puppeteer");

(async () => {
  const browser = puppeteer.launch();
  const page = await browser.newPage();

  await page.exposeFunction("onCustomEvent", (e) => {
    console.log(`${e.type} fired`, e.detail || "");
  });

  /**
   * Attach an event listener to page to a capture a custom event on page load
   * @param { string } type Event name
   * @returns { !Promise }
   */
  
  function listenFor(type) {
    return page.evaluateOnNewDocument((type) => {
      document.addEventListener(type, (e) => {
        window.onCustomEvent({ type, detail: e.detail });
      });
    }, type);
  }

  await listenFor("app-ready");
  await page.goto("https://www.chromestatus.com/features", {
    waitUntil: "networkidle0",
  });
  await browser.close();
})();
