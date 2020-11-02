"use strict";

var _cron = _interopRequireWildcard(require("cron"));

var _dbController = _interopRequireDefault(require("./dbController"));

var _facebookAPI = _interopRequireDefault(require("../api/facebookAPI"));

var _humgAPI = _interopRequireDefault(require("../api/humgAPI"));

var _confessHUMG = _interopRequireDefault(require("../api/confessHUMG"));

var _news = _interopRequireDefault(require("../models/news"));

var _loves = _interopRequireDefault(require("../models/loves"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const cronJob = _cron.default.CronJob;

class Job {
  constructor() {}

  static async getNews() {
    const page = ['https://www.facebook.com/pg/TuvancongtacsinhvienHUMG/posts/?ref=page_internal', 'https://www.facebook.com/pg/DTNHSV/posts/?ref=page_internal', 'https://www.facebook.com/pg/humg.edu/posts/?ref=page_internal', 'https://www.facebook.com/pg/humg.confession/posts/?ref=page_internal', 'https://www.facebook.com/pg/hvtcconfessions/posts/?ref=page_internal', 'https://www.facebook.com/pg/humgzoo/posts/?ref=page_internal', 'https://www.facebook.com/pg/AOFTroll/posts/?ref=page_internal'];
    const elements = [];

    for (let i of page) {
      const news = await _confessHUMG.default.getStatus(i);

      if (news.length !== 0) {
        for (let i of news) {
          let imgUrl = i.image ? i.image : 'https://res.cloudinary.com/alerthumg/image/upload/v1595312973/45783517_2009013512520434_753951418271924224_n_bin8dy.png';
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
        }
      }
    }

    return elements;
  }

  async guiLichHoc() {
    const job = new cronJob('0 0 5 * * *', // '1 * * * * *',
    async function () {
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
              if (elements.data.length <= 10) {
                await _facebookAPI.default.sendTemplateGeneric(uid, elements.data);
              } else {
                let tepm1 = elements.data.splice(10);
                await _facebookAPI.default.sendTemplateGeneric(uid, tepm1);
                let temp2 = elements.data.splice(0, 10);

                if (temp2.length <= 10) {
                  await _facebookAPI.default.sendTemplateGeneric(uid, temp2);
                } else {
                  temp2 = temp2.splice(10);
                  await _facebookAPI.default.sendTemplateGeneric(uid, temp2);
                }
              }
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
    const job = new cronJob('0 */15 * * * *', async function () {
      let data = await Job.getNews();
      await _news.default.updateOne({}, {
        data: data
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

  async radioTinhYeu() {
    const job = new _cron.CronJob('0 0 15 * * *', async () => {
      const uid = '3158604217508280';
      const data = await _dbController.default.getLove();
      const type = data.data[0].type;
      const sender = data.data[0].sender;
      const reciver = data.data[0].reciver;
      const title = data.data[0].title;
      const content = data.data[0].content;
      const message = data.data[0].message;
      await _facebookAPI.default.callSendAPIWithTag(uid, '[RADIO TÌNH YÊU]: Đã đến 15h rồi Linh ơi, cùng Hấu xem chương trình Radio Tình Yêu hôm nay có gì nhé!');
      await _facebookAPI.default.callSendAPIWithTag(uid, "Whoa! H\xF4m nay l\xE0 1 ".concat(type, " v\u1EDBi t\u1EF1a \u0111\u1EC1 ").concat(title, " \u0111\u01B0\u1EE3c g\u1EEDi t\u1EEB ").concat(sender, " \u0111\u1EBFn ").concat(reciver, " v\u1EDBi l\u1EDDi nh\u1EAFn: \"").concat(message, "\"."));
      await _facebookAPI.default.callSendAPIWithTag(uid, content);
    }, null, true, null);
    job.start();
  }

  async test() {
    let data = await Job.getNews();
    await _news.default.updateMany({}, {
      data: data
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