const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const dummieData = "hey there this is some radnom text!";
  const page = await browser.newPage();
  const searchInputSelector = ".gLFyf gsfi";
  await page.goto("https://www.google.com/");

  // this function runs in the browser context
  await page.evaluate(
    (searchInputSelector, dummieData) => {
      const inputElement = document.querySelector("input[name='q']");
      inputElement.value = "facebook";
      let searchBtnElement;
      setTimeout(
        (searchBtnElement = document.querySelector("input[class='gNO89b']")),
        500
      );
      searchBtnElement.click();

      const allSearchResult = document.querySelectorAll("div[class='g']");

      // const numOfSearchResult = Array.from(allSearchResult2).length
      console.log(allSearchResult.length);
    },
    searchInputSelector,
    dummieData
  );
  setTimeout(() => {
    browser.close();
  }, 100000);
})();
