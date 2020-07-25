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
      let url = document.querySelectorAll(
        'div[data-testid="story-subtitle"] a[href^="/"]'
      );
      let img, string, time, uri;
      const result = [];
      const d = Date.now();
      url = [...url];
      content = [...content];
      for (i = 0; i < 4; i++) {
        time = parseInt(
          content[i].getElementsByTagName('abbr')[0].dataset.utime
        );
        if (d / 1000 - time <= 86400) {
          string =
            content[i]
              .getElementsByClassName('userContent')[0]
              .outerText.substr(0, 120) || 'Bài viết này không có tiêu đề 🤣';
          uri = 'https://www.facebook.com' + url[i].getAttribute('href');
          uri = uri.split('?')[0];
          if (content[i].querySelectorAll('a[rel="theater"]')) {
            const len =
              content[i].querySelectorAll('a[rel="theater"]').length - 1;

            if (content[i].querySelectorAll('a[rel="theater"]')[len]) {
              if (
                content[i].querySelectorAll('a[rel="theater"]')[len].dataset
                  .ploi !== undefined
              ) {
                img = content[i].querySelectorAll('a[rel="theater"]')[len]
                  .dataset.ploi;
              } else {
                const len2 = content[i].getElementsByTagName('img').length - 1;
                img = content[i].getElementsByTagName('img')[len2].dataset.src;
              }
            }
          }
          result.push({
            post: string,
            url: uri,
            image: img,
          });
        }
      }
      return result;
    });
    await browser.close();
    return data;
  }
}

module.exports = new Confess();
