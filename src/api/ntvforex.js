import puppeteer from 'puppeteer';

class ntvForex {
  constructor() {}

  async getForexNews() {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto(`http://ntvforex.com/news`);

    const data = await page.evaluate(() => {
      let a = document.querySelectorAll(
        '[href*="http://ntvforex.com/news/?id"]'
      );
      a = [...a];
      let result = a.map((i) => ({
        title: i.textContent,
        url: i.getAttribute('href'),
      }));
      return result;
    });
    await browser.close();
    return data;
  }
}

module.exports = new ntvForex();
