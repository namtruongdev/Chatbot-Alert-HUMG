"use strict";

var _puppeteer = _interopRequireDefault(require("puppeteer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Humg {
  constructor() {}

  getFullDate() {
    const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const d = new Date();
    const day = d.getDate();
    const year = d.getFullYear();
    return "".concat(day, "/").concat(month[d.getMonth()], "/").concat(year);
  }

  getFullNextDate() {
    const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const d = new Date();
    const day = d.getDate() <= 31 ? d.getDate() + 1 : 1;
    const year = d.getFullYear();
    return "".concat(day, "/").concat(month[d.getMonth()], "/").concat(year);
  }

  getTime(tiet) {
    const time = {
      1: ['6 giờ 45 phút', '7 giờ 35 phút'],
      2: ['7 giờ 45 phút', '8 giờ 35 phút'],
      3: ['8 giờ 45 phút', '9 giờ 35 phút'],
      4: ['9 giờ 45 phút', '10 giờ 35 phút'],
      5: ['10 giờ 45 phút', '11 giờ 35 phút'],
      6: ['12 giờ 30 phút', '13 giờ 20 phút'],
      7: ['13 giờ 30 phút', '14 giờ 20 phút'],
      8: ['14 giờ 30 phút', '15 giờ 20 phút'],
      9: ['15 giờ 30 phút', '16 giờ 20 phút'],
      10: ['16 giờ 30 phút', '17 giờ 20 phút'],
      11: ['17 giờ 30 phút', '18 giờ 20 phút'],
      12: ['18 giờ 30 phút', '19 giờ 20 phút'],
      13: ['19 giờ 30 phút', '20 giờ 20 phút']
    };
    const allTime = {
      batDau: time[tiet][0],
      ketThuc: time[tiet][1]
    };
    return allTime;
  }

  getDay() {
    const weekDay = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    const d = new Date();
    return weekDay[d.getDay()];
  }

  getNextDay() {
    const weekDay = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    const d = new Date();
    const nextDay = d.getDay() + 1;

    if (nextDay === 7) {
      return 'Chủ nhật';
    }

    return weekDay[nextDay];
  }

  async getSchedule(msv, name, id) {
    const browser = await _puppeteer.default.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto("https://daotao.humg.edu.vn/default.aspx?page=thoikhoabieu&sta=0&id=".concat(msv));
    const data = await page.evaluate(() => {
      let td = document.querySelectorAll('td[onmouseover]');
      td = [...td];
      let result = td.map(i => i.getAttribute('onmouseover'));
      return result;
    });
    const rg = /[^']+/g;
    const tkb = [];

    if (data.length !== 0) {
      for (let i of data) {
        let result = i.match(rg);
        let temp = [];

        for (let i of result) {
          if (i !== ',') temp.push(i);
        }

        const final = temp.slice(1, 11);
        tkb.push(final);
      }

      let subject = "";

      for (let i of tkb) {
        if (i[2].toLowerCase() === this.getDay().toLowerCase()) {
          subject += "\uD83D\uDCCC ".concat(i[0], " (").concat(i[1], "):\n- Ph\xF2ng ").concat(i[4], "\n- Ti\u1EBFt ").concat(i[5], " - Ti\u1EBFt ").concat(parseInt(i[6]) + parseInt(i[5]) - 1, "\n- ").concat(this.getTime(i[5]).batDau, " - ").concat(this.getTime(parseInt(i[6]) + parseInt(i[5]) - 1).ketThuc, "\n- Gi\u1EA3ng vi\xEAn l\xE0 ").concat(i[7], "\n");
        }
      }

      switch (subject) {
        case '':
          await browser.close();
          return "H\xE1 h\xE1... H\xF4m nay kh\xF4ng ph\u1EA3i h\u1ECDc g\xEC c\u1EA3 ".concat(name, " \u01A1i. N\xEAn vui hay bu\u1ED3n \u0111\xE2y \uD83D\uDE06");

        default:
          await browser.close();
          return subject;
      }
    } else {
      await browser.close();
      return "Tu\u1EA7n n\xE0y ".concat(name, " \u0111\u01B0\u1EE3c ngh\u1EC9 r\u1ED3i. S\u01B0\u1EDBng v\u1EADy ta \uD83E\uDD29");
    }
  }

  async getScheduleNextDay(msv, name) {
    const browser = await _puppeteer.default.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto("https://daotao.humg.edu.vn/default.aspx?page=thoikhoabieu&sta=0&id=".concat(msv));
    const data = await page.evaluate(() => {
      let td = document.querySelectorAll('td[onmouseover]');
      td = [...td];
      let result = td.map(i => i.getAttribute('onmouseover'));
      return result;
    });
    const rg = /[^']+/g;
    const tkb = [];

    if (data.length !== 0) {
      for (let i of data) {
        let result = i.match(rg);
        let temp = [];

        for (let i of result) {
          if (i !== ',') temp.push(i);
        }

        const final = temp.slice(1, 11);
        tkb.push(final);
      }

      let subject = "";

      for (let i of tkb) {
        if (i[2].toLowerCase() === this.getNextDay().toLowerCase()) {
          subject += "\uD83D\uDCCC ".concat(i[0], " (").concat(i[1], "):\n          \r - Ph\xF2ng ").concat(i[4], "\n          \r - Ti\u1EBFt ").concat(i[5], " - Ti\u1EBFt ").concat(parseInt(i[6]) + parseInt(i[5]) - 1, "\n          \r - ").concat(this.getTime(i[5]).batDau, " - ").concat(this.getTime(parseInt(i[6]) + parseInt(i[5]) - 1).ketThuc, "\n          \r - Gi\u1EA3ng vi\xEAn l\xE0 ").concat(i[7], "\n          \n\n");
        }
      }

      switch (subject) {
        case '':
          await browser.close();
          return "H\xE1 h\xE1... Mai \u0111\u01B0\u1EE3c ngh\u1EC9 r\u1ED3i ".concat(name, " \u01A1i. H\xF4m nay c\u1EE9 ch\u01A1i tho\u1EA3i m\xE1i \u0111\xEA \uD83D\uDE06");

        default:
          await browser.close();
          return subject;
      }
    } else {
      await browser.close();
      return "Tu\u1EA7n n\xE0y ".concat(name, " \u0111\u01B0\u1EE3c ngh\u1EC9 r\u1ED3i. S\u01B0\u1EDBng v\u1EADy ta \uD83E\uDD29");
    }
  }

  async getTestSchedule(msv) {
    const browser = await _puppeteer.default.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto("https://daotao.humg.edu.vn/Default.aspx?page=xemlichthi&id=".concat(msv));
    const data = await page.evaluate(() => {
      let tr = document.querySelectorAll("[onmouseover*=\"className ='rowOnmouseover-GridView '\"]");
      tr = [...tr];
      let result = tr.map(i => ({
        subject: i.children[2].textContent.trim(),
        quantum: i.children[5].textContent.trim(),
        date: i.children[6].textContent.trim(),
        start: i.children[7].textContent.trim(),
        end: parseInt(i.children[7].textContent.trim()) + parseInt(i.children[8].textContent.trim()) - 1,
        room: i.children[9].textContent.trim(),
        note: i.children[10].textContent.trim()
      }));
      return result;
    });
    await browser.close();
    return data;
  }

  async getPoint(msv) {
    const browser = await _puppeteer.default.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      headless: false
    });
    const page = await browser.newPage();
    await page.setViewport({
      width: 1366,
      height: 768
    });
    await page.goto("https://daotao.humg.edu.vn/Default.aspx?page=xemdiemthi&id=".concat(msv));
    await page.click('#ctl00_ContentPlaceHolder1_ctl00_lnkChangeview2');
    await page.waitForNavigation();
    await page.mouse.move(0, 0);
    await page.waitForNavigation();
    await page.mouse.down();
    await page.screenshot({
      path: 'screenshot.png'
    });
  }

}

module.exports = new Humg();