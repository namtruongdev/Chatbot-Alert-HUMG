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

  async getSchedule(msv, name, id) {
    const browser = await _puppeteer.default.launch();
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
          subject += "\uD83D\uDCCC ".concat(i[0], " (").concat(i[1], "):\n          \r - Ph\xF2ng ").concat(i[4], "\n          \r - Ti\u1EBFt ").concat(i[5], " - Ti\u1EBFt ").concat(parseInt(i[6]) + parseInt(i[5]) - 1, "\n          \r - ").concat(this.getTime(i[5]).batDau, " - ").concat(this.getTime(parseInt(i[6]) + parseInt(i[5]) - 1).ketThuc, "\n          \r - Gi\u1EA3ng vi\xEAn l\xE0 ").concat(i[7], "\n          \n\n");
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

}

module.exports = new Humg();