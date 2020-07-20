"use strict";

var _cron = _interopRequireDefault(require("cron"));

var _dbController = _interopRequireDefault(require("./dbController"));

var _facebookAPI = _interopRequireDefault(require("../api/facebookAPI"));

var _humgAPI = _interopRequireDefault(require("../api/humgAPI"));

var _confessHUMG = _interopRequireDefault(require("../api/confessHUMG"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cronJob = _cron.default.CronJob;

class Job {
  constructor() {}

  async getAllMemberSub() {}

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
            await _facebookAPI.default.callSendAPIWithTag(uid, "Tuy \u0111\u01B0\u1EE3c ngh\u1EC9 h\u1ECDc nh\u01B0ng v\u1EABn ph\u1EA3i c\u1EADp nh\u1EADt tin t\u1EE9c nha ".concat(name, "... H\xE3y \u0111i c\xF9ng \uD83C\uDF49 l\u01B0\u1EE3n 1 v\xF2ng quanh M\u1ECF xem c\xF3 nh\u1EEFng tin g\xEC HOT nh\xE9 \uD83D\uDE1D"));
            const page = ['https://www.facebook.com/pg/humgzoo/posts/?ref=page_internal', 'https://www.facebook.com/pg/humg.confession/posts/?ref=page_internal', 'https://www.facebook.com/pg/humg.edu/posts/?ref=page_internal', 'https://www.facebook.com/pg/DTNHSV/posts/?ref=page_internal', 'https://www.facebook.com/pg/TuvancongtacsinhvienHUMG/posts/?ref=page_internal'];
            let dem = 0;

            for (let i of page) {
              const news = await _confessHUMG.default.getStatus(i);

              if (news.length !== 0) {
                for (let i of news) {
                  await _facebookAPI.default.callSendAPIWithTag(uid, i.post + '...' + "\n\n\uD83D\uDCCE B\xE0i vi\u1EBFt g\u1ED1c: ".concat(i.url));

                  if (i.image) {
                    await _facebookAPI.default.sendImageAPI(uid, i.image);
                  }
                }
              } else {
                dem++;
              }
            }

            if (dem === page.length) {
              await _facebookAPI.default.callSendAPIWithTag(uid, "Ch\xE1n tr\u01B0\u1EDDng th\u1EADt s\u1EF1 \uD83D\uDE05. H\xF4m nay kh\xF4ng c\xF3 c\xE1i tin h\xF3t hay c\xE1i drama n\xE0o \u0111\u1EC3 m\xE0 h\xF3ng c\u1EA3 ".concat(name, " \u01A1i!"));
            }
          }
        }
      }
    }, null, true, null);
    job.start();
  }

}

module.exports = new Job();