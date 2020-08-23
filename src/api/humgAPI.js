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
  getFullNextDate() {
    const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const d = new Date();
    const day = d.getDate() <= 31 ? d.getDate() + 1 : 1;
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
  getNextDay() {
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
    const nextDay = d.getDay() + 1;
    if (nextDay === 7) {
      return 'Chủ nhật';
    }
    return weekDay[nextDay];
  }
  async getSchedule(msv, name, id) {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      headless: false,
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
          subject += `\n\n📌 ${i[0]} (${i[1]}):\n\n📎 Phòng ${i[4]}\n📎 Tiết ${
            i[5]
          } - Tiết ${parseInt(i[6]) + parseInt(i[5]) - 1}\n📎 ${
            this.getTime(i[5]).batDau
          } - ${
            this.getTime(parseInt(i[6]) + parseInt(i[5]) - 1).ketThuc
          }\n📎 Giảng viên là ${i[7]}`;
        } else if (i[3].toLowerCase() === this.getDay().toLowerCase()) {
          subject += `\n\n📌 ${i[1]} (${i[2]}):\n\n📎 Phòng ${i[5]}\n📎 Tiết ${
            i[6]
          } - Tiết ${parseInt(i[7]) + parseInt(i[6]) - 1}\n📎 ${
            this.getTime(i[6]).batDau
          } - ${
            this.getTime(parseInt(i[7]) + parseInt(i[6]) - 1).ketThuc
          }\n📎 Giảng viên là ${i[8]}`;
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
  async getScheduleNextDay(msv, name) {
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
        if (i[2].toLowerCase() === this.getNextDay().toLowerCase()) {
          subject += `\n\n📌 ${i[0]} (${i[1]}):\n\n📎 Phòng ${i[4]}\n📎 Tiết ${
            i[5]
          } - Tiết ${parseInt(i[6]) + parseInt(i[5]) - 1}\n📎 ${
            this.getTime(i[5]).batDau
          } - ${
            this.getTime(parseInt(i[6]) + parseInt(i[5]) - 1).ketThuc
          }\n📎 Giảng viên là ${i[7]}`;
        }
      }

      switch (subject) {
        case '':
          await browser.close();
          return `Há há... Mai được nghỉ rồi ${name} ơi. Hôm nay cứ chơi thoải mái đê 😆`;
        default:
          await browser.close();
          return subject;
      }
    } else {
      await browser.close();
      return `Tuần này ${name} được nghỉ rồi. Sướng vậy ta 🤩`;
    }
  }
  async getTestSchedule(msv) {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto(
      `https://daotao.humg.edu.vn/Default.aspx?page=xemlichthi&id=${msv}`
    );

    const data = await page.evaluate(() => {
      let tr = document.querySelectorAll(
        `[onmouseover*="className ='rowOnmouseover-GridView '"]`
      );
      tr = [...tr];

      let result = tr.map((i) => ({
        subject: i.children[2].textContent.trim(),
        quantum: i.children[5].textContent.trim(),
        date: i.children[6].textContent.trim(),
        start: i.children[7].textContent.trim(),
        end:
          parseInt(i.children[7].textContent.trim()) +
          parseInt(i.children[8].textContent.trim()) -
          1,
        room: i.children[9].textContent.trim(),
        note: i.children[10].textContent.trim(),
      }));
      return result;
    });
    await browser.close();
    return data;
  }
  async getPoint(msv) {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1000, height: 768 });
    await page.goto(
      `https://daotao.humg.edu.vn/Default.aspx?page=xemdiemthi&id=${msv}`
    );
    await page.click(`#ctl00_ContentPlaceHolder1_ctl00_lnkChangeview2`);
    await page.waitForNavigation();
    await page.evaluate(() => {
      let _el = document
        .querySelector(`.view-table tr:last-child`)
        .scrollIntoView();
    });
    await page.screenshot({ path: 'public/screenshot.png' });
    await browser.close();
    return 'ok';
  }
}

module.exports = new Humg();
