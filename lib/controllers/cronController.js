"use strict";

var _cron = _interopRequireDefault(require("cron"));

var _dbController = _interopRequireDefault(require("./dbController"));

var _facebookAPI = _interopRequireDefault(require("../api/facebookAPI"));

var _humgAPI = _interopRequireDefault(require("../api/humgAPI"));

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
            await _facebookAPI.default.callSendAPI(uid, "H\xF4m nay ".concat(_humgAPI.default.getFullDate(), ", ").concat(name, " ph\u1EA3i h\u1ECDc:"));
            await _facebookAPI.default.callSendAPI(uid, tkb);
            await _facebookAPI.default.callSendAPI(uid, "Nh\u1EDB \u0111i h\u1ECDc \u0111\u1EA7y \u0111\u1EE7 v\xE0 \u0111\xFAng gi\u1EDD nha... Y\xEAu ".concat(name, " 3000 \u2764"));
          } else {
            await _facebookAPI.default.callSendAPI(uid, tkb);
          }
        }
      }
    }, null, true, null);
    job.start();
  }

}

module.exports = new Job();