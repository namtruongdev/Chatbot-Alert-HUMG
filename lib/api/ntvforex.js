"use strict";

var _puppeteer = _interopRequireDefault(require("puppeteer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ntvForex {
  constructor() {}

  async getForexNews() {
    const browser = await _puppeteer.default.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto("http://ntvforex.com/news");
    const data = await page.evaluate(() => {
      let a = document.querySelectorAll('[href*="http://ntvforex.com/news/?id"]');
      a = [...a];
      let result = a.map(i => ({
        title: i.textContent,
        url: i.getAttribute('href')
      }));
      return result;
    });
    await browser.close();
    return data;
  }

}

module.exports = new ntvForex();