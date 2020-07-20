import axios from 'axios';
import fs from 'fs';
import puppeteer from 'puppeteer';

class Confess {
  constructor() {}
  async getImage(url) {
    const pat = 'public/confess.jpg';
    const writer = fs.createWriteStream(pat);

    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  }
  async getStatus(url) {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });
    await page.goto(url);
    const data = await page.evaluate(() => {
      let content = document.querySelectorAll(
        'div[data-visualcompletion="ignore-dynamic"]'
      );
      let img, string;
      content = [...content];
      if (
        parseInt(content[0].getElementsByTagName('abbr')[0].dataset.utime) >
        parseInt(content[1].getElementsByTagName('abbr')[0].dataset.utime)
      ) {
        if (content[0].getElementsByTagName('img')[1]) {
          img = content[0].getElementsByTagName('img')[1].dataset.src;
        }
        string = content[0].getElementsByClassName('userContent')[0].outerText;
        if (string.length > 1000) {
          string = string.substr(0, 1000);
        }
        return {
          post: string,
          image: img,
        };
      } else {
        if (content[1].getElementsByTagName('img')[1]) {
          img = content[1].getElementsByTagName('img')[1].dataset.src;
        }
        string = content[1].getElementsByClassName('userContent')[0].outerText;
        if (string.length > 1000) {
          string = string.substr(0, 1000);
        }
        return {
          post: string,
          image: img,
        };
      }
    });
    await browser.close();
    return data;
  }
}

module.exports = new Confess();
