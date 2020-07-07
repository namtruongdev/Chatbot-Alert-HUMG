import puppeteer from 'puppeteer';

class Humg {
  constructor() {}
  getFullDate() {
    const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const d = new Date();
    const day = d.getDate();
    const year = d.getFullYear();
    return `${day}/${month[d.getMonth()]}/${year}`;
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
      13: ['19 giờ 30 phút', '20 giờ 20 phút'],
    };

    const allTime = {
      batDau: time[tiet][0],
      ketThuc: time[tiet][1],
    };
    return allTime;
  }
  getDay() {
    const weekDay = [
      'Chủ nhật',
      'Thứ hai',
      'Thứ ba',
      'Thứ tư',
      'Thứ năm',
      'Thứ sáu',
      'Thứ bảy',
    ];
    const d = new Date();
    return weekDay[d.getDay()];
  }
  async getSchedule(msv, name, id) {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto(
      `https://daotao.humg.edu.vn/default.aspx?page=thoikhoabieu&sta=0&id=${msv}`
    );

    const data = await page.evaluate(() => {
      let td = document.querySelectorAll('td[onmouseover]');
      td = [...td];
      let result = td.map((i) => i.getAttribute('onmouseover'));
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
      let subject = ``;
      for (let i of tkb) {
        if (i[2].toLowerCase() === this.getDay().toLowerCase()) {
          subject += `📌 ${i[0]} (${i[1]}):
          \r - Phòng ${i[4]}
          \r - Tiết ${i[5]} - Tiết ${parseInt(i[6]) + parseInt(i[5]) - 1}
          \r - ${this.getTime(i[5]).batDau} - ${
            this.getTime(parseInt(i[6]) + parseInt(i[5]) - 1).ketThuc
          }
          \r - Giảng viên là ${i[7]}
          \n\n`;
        }
      }

      switch (subject) {
        case '':
          await browser.close();
          return `Há há... Hôm nay không phải học gì cả ${name} ơi. Nên vui hay buồn đây 😆`;
        default:
          await browser.close();
          return subject;
      }
    } else {
      await browser.close();
      return `Tuần này ${name} được nghỉ rồi. Sướng vậy ta 🤩`;
    }
  }
}

module.exports = new Humg();
