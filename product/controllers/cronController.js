"use strict";

var _cron = _interopRequireDefault(require("cron"));

var _dbController = _interopRequireDefault(require("./dbController"));

var _facebookAPI = _interopRequireDefault(require("../api/facebookAPI"));

var _humgAPI = _interopRequireDefault(require("../api/humgAPI"));

var _confessHUMG = _interopRequireDefault(require("../api/confessHUMG"));

var _news = _interopRequireDefault(require("../models/news"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cronJob = _cron.default.CronJob;

class Job {
  constructor() {}

  async getNews() {
    const page = ['https://www.facebook.com/pg/TuvancongtacsinhvienHUMG/posts/?ref=page_internal', 'https://www.facebook.com/pg/DTNHSV/posts/?ref=page_internal', 'https://www.facebook.com/pg/humg.edu/posts/?ref=page_internal', 'https://www.facebook.com/pg/humg.confession/posts/?ref=page_internal', 'https://www.facebook.com/pg/hvtcconfessions/posts/?ref=page_internal', 'https://www.facebook.com/pg/humgzoo/posts/?ref=page_internal', 'https://www.facebook.com/pg/AOFTroll/posts/?ref=page_internal'];
    const elements = [];

    for (let i of page) {
      const news = await _confessHUMG.default.getStatus(i);

      if (news.length !== 0) {
        for (let i of news) {
          let imgUrl = i.image ? i.image : 'https://res.cloudinary.com/alerthumg/image/upload/v1595312973/45783517_2009013512520434_753951418271924224_n_bin8dy.png';

          if (elements.length < 10) {
            elements.push({
              title: i.post,
              image_url: imgUrl,
              subtitle: 'Phóng viên Hấu 🍉',
              default_action: {
                type: 'web_url',
                url: i.url
              },
              buttons: [{
                type: 'web_url',
                url: i.url,
                title: 'Xem Thêm'
              }]
            });
          } else {
            break;
          }
        }
      }
    }

    return elements;
  }

  async guiLichHoc() {
    const job = new cronJob('0 0 5 * * *', async function () {
      const allMemberSub = await _dbController.default.getSub();

      if (allMemberSub.length !== 0) {
        for (let i of allMemberSub) {
          const msv = i.msv;
          const name = i.firstName;
          const uid = i.uid;
          const tkb = await _humgAPI.default.getSchedule(msv, name, uid);

          if (tkb.length > 72) {
            await _facebookAPI.default.callSendAPIWithTag(uid, "H\xF4m nay ".concat(_humgAPI.default.getFullDate(), ", ").concat(name, " ph\u1EA3i h\u1ECDc:"));
            await _facebookAPI.default.callSendAPIWithTag(uid, tkb);
            await _facebookAPI.default.callSendAPIWithTag(uid, "Nh\u1EDB \u0111i h\u1ECDc \u0111\u1EA7y \u0111\u1EE7 v\xE0 \u0111\xFAng gi\u1EDD nha... Y\xEAu ".concat(name, " 3000 \u2764"));
          } else {
            await _facebookAPI.default.callSendAPIWithTag(uid, tkb);
            await _facebookAPI.default.callSendAPIWithTag(uid, "Tuy \u0111\u01B0\u1EE3c ngh\u1EC9 h\u1ECDc nh\u01B0ng v\u1EABn ph\u1EA3i c\u1EADp nh\u1EADt tin t\u1EE9c nha ".concat(name, "... H\xE3y c\xF9ng \uD83C\uDF49 l\u01B0\u1EE3n 1 v\xF2ng quanh M\u1ECF xem c\xF3 nh\u1EEFng tin g\xEC HOT nh\xE9 \uD83D\uDE1D"));
            let elements = await _dbController.default.getNews();

            if (elements.data.length !== 0) {
              await _facebookAPI.default.sendTemplateGeneric(uid, elements.data);
            } else {
              await _facebookAPI.default.callSendAPIWithTag(uid, "Ch\xE1n tr\u01B0\u1EDDng th\u1EADt s\u1EF1 \uD83D\uDE05. H\xF4m nay kh\xF4ng c\xF3 b\u1EA5t c\u1EE9 tin n\xE0o \u0111\u1EC3 h\xF3ng c\u1EA3 ".concat(name, " \u01A1i!"));
            }
          }
        }
      }
    }, null, true, null);
    job.start();
  }

  async cronNews() {
    let that = await this.getNews();
    const job = new cronJob('0 */15 * * * *', async function () {
      await _news.default.updateMany({}, {
        data: that
      }, err => {
        if (err) {
          console.log("Update l\u1ED7i: ".concat(err));
        } else {
          console.log("\u0111\xE3 update tin t\u1EE9c th\xE0nh c\xF4ng");
        }
      });
    }, null, true, null);
    job.start();
  }

  async test() {
    let that = await this.getNews();
    await _news.default.updateMany({}, {
      data: that
    }, err => {
      if (err) {
        console.log("Update l\u1ED7i: ".concat(err));
      } else {
        console.log("\u0111\xE3 update tin t\u1EE9c th\xE0nh c\xF4ng");
      }
    });
  }

}

module.exports = new Job();