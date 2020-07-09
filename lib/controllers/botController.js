"use strict";

var _facebookAPI = _interopRequireDefault(require("../api/facebookAPI"));

var _humgAPI = _interopRequireDefault(require("../api/humgAPI"));

var _dbController = _interopRequireDefault(require("../controllers/dbController"));

var _users = _interopRequireDefault(require("../models/users"));

var _constants = _interopRequireDefault(require("../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

class Bot {
  constructor() {}

  firstEntity(nlp) {
    return nlp && nlp.entities;
  }

  getIntent(nlp) {
    return nlp && nlp.intents && nlp.intents[0];
  }

  randomStr(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }

  async handleMessage(uid, message) {
    const name = await _facebookAPI.default.getSenderName(uid);
    const gender = await _facebookAPI.default.getGender(uid);
    const mess = new _constants.default(name, gender);
    const entities = this.firstEntity(message.nlp);
    const intent = this.getIntent(message.nlp);
    const existUser = await _dbController.default.checkExistUser(uid);

    if (intent && intent.confidence > 0.8) {
      await _facebookAPI.default.sendMarkSeen(uid);
      await _facebookAPI.default.sendTyping(uid);

      switch (intent.name) {
        case 'aoTuong':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.aoTuong));
          break;

        case 'baoCaoMsv':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.baoCaoMsv));
          break;

        case 'baoHauKhongBietGi':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.baoHauKhongBietGi));
          break;

        case 'blabla':
          await _facebookAPI.default.callSendAPI(uid, mess.baoHauKhongBietGi);
          break;

        case 'bye':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.bye));
          break;

        case 'chaohoi':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.chaoHoi));
          break;

        case 'camOn':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.camOn));
          break;

        case 'canGiup':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.canGiup));
          break;

        case 'chanNan':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.chanNan));
          break;

        case 'chuiBay':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.chuiBay));
          break;

        case 'chuiHauNgu':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.chuiHauNgu));
          break;

        case 'coNhoLai':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.coNhoLai));
          break;

        case 'coThongTinNguoiDungKhong':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.coThongTinNguoiDungKhong));
          break;

        case 'cuoi':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.cuoi));
          break;

        case 'danDo':
          await _facebookAPI.default.callSendAPI(uid, mess.danDo);
          break;

        case 'dauXanh':
          await _facebookAPI.default.callSendAPI(uid, mess.dauXanh);
          break;

        case 'doaGietHau':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.doaGietHau));
          break;

        case 'dongVien':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.dongVien));
          break;

        case 'dongY':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.dongY));
          break;

        case 'dontknow':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.dontknow));
          break;

        case 'gaTinh':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.gaTinh));
          break;

        case 'hauAnComChua':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hauAnComChua));
          break;

        case 'hauAnGi':
          await _facebookAPI.default.callSendAPI(uid, mess.hauAnGi);
          break;

        case 'msv':
          const msv = entities['msv:msv'][0].value;

          if (existUser) {
            const idStudent = existUser.msv;

            if (idStudent !== msv) {
              await _dbController.default.updateMsv(uid, msv);
              await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.thaydoimsv));
            } else {
              await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.daTungNoiMsv));
            }
          } else {
            const data = await new _users.default({
              uid: uid,
              firstName: name,
              msv: msv,
              sub: 0
            });
            data.save(err => {
              if (err) {
                console.log("L\u1ED7i: ".concat(err));
              } else {
                console.log("OK. Th\xEAm d\u1EEF li\u1EC7u th\xE0nh c\xF4ng cho sinh vi\xEAn t\xEAn l\xE0 ".concat(name));
              }
            });
            await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.daluumsv));
          }

          break;

        case 'xemtkb':
          if (existUser) {
            const msv = existUser.msv;
            const tkb = await _humgAPI.default.getSchedule(msv, name, uid);
            await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.danglaytkb));

            if (tkb.length > 72) {
              await _facebookAPI.default.callSendAPI(uid, "H\xF4m nay ".concat(_humgAPI.default.getFullDate(), ", ").concat(name, " ph\u1EA3i h\u1ECDc:"));
              await _facebookAPI.default.callSendAPI(uid, tkb);
              await _facebookAPI.default.callSendAPI(uid, "Nh\u1EDB \u0111i h\u1ECDc \u0111\u1EA7y \u0111\u1EE7 v\xE0 \u0111\xFAng gi\u1EDD nha... Y\xEAu ".concat(name, " 3000 \u2764"));
            } else {
              await _facebookAPI.default.callSendAPI(uid, tkb);
            }
          } else {
            await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.xemtkb));
          }

          break;

        case 'sub':
          if (existUser) {
            const subValue = existUser.sub;

            switch (subValue) {
              case 0:
              case undefined:
                await _dbController.default.updateSub(uid, 1);
                await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.sub));
                break;

              default:
                await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.dadangkyroi));
            }
          } else {
            await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.notInfo));
          }

          break;

        case 'huyNhanTin':
          if (existUser) {
            const subValue = existUser.sub;

            switch (subValue) {
              case 1:
                await _dbController.default.updateSub(uid, 0);
                await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.removeSub));
                break;

              case 0:
                await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.huyDangKyRoiMa));
                break;

              default:
                await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.daHuyDangKyRoi));
            }
          } else {
            await _facebookAPI.default.callSendAPI(uid, this.randomStr(this.notInfo));
          }

          break;

        case 'hauAnDuocKhong':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hauAnDuocKhong));
          break;

        case 'hauCoTheLamGi':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hauCoTheLamGi));
          break;

        case 'thatKhong':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.thatKhong));
          break;

        case 'test':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.test));
          break;

        case 'xemDiemTichLuy':
          await _facebookAPI.default.callSendAPI(uid, mess.khongKhaDung);
          break;

        case 'xemHocPhi':
          await _facebookAPI.default.callSendAPI(uid, mess.khongKhaDung);
          break;
      }
    } else {
      await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.notrain));
    }
  }

  async handlePostback(uid, message) {
    const name = await _facebookAPI.default.getSenderName(uid);
    const gender = await _facebookAPI.default.getGender(uid);
    const mess = new _constants.default(name, gender);
    const existUser = await _dbController.default.checkExistUser(uid);
    await _facebookAPI.default.sendMarkSeen(uid);
    await _facebookAPI.default.sendTyping(uid);

    switch (message.payload) {
      case 'chào':
        await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.chaoHoi));
        break;

      case 'Xem lịch học 📅':
        if (existUser) {
          const msv = existUser.msv;
          const tkb = await _humgAPI.default.getSchedule(msv, name, uid);
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.danglaytkb));

          if (tkb.length > 72) {
            await _facebookAPI.default.callSendAPI(uid, "H\xF4m nay ".concat(_humgAPI.default.getFullDate(), ", ").concat(name, " ph\u1EA3i h\u1ECDc:"));
            await _facebookAPI.default.callSendAPI(uid, tkb);
            await _facebookAPI.default.callSendAPI(uid, "Nh\u1EDB \u0111i h\u1ECDc \u0111\u1EA7y \u0111\u1EE7 v\xE0 \u0111\xFAng gi\u1EDD nha... Y\xEAu ".concat(name, " 3000 \u2764"));
          } else {
            await _facebookAPI.default.callSendAPI(uid, tkb);
          }
        } else {
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.xemtkb));
        }

        break;

      case 'Đăng ký nhận tin ⏰':
        if (existUser) {
          const subValue = existUser.sub;

          switch (subValue) {
            case 0:
            case undefined:
              await _dbController.default.updateSub(uid, 1);
              await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.sub));
              break;

            default:
              await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.dadangkyroi));
          }
        } else {
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.notInfo));
        }

        break;

      case 'Hủy nhận tin 😭':
        if (existUser) {
          const subValue = existUser.sub;

          switch (subValue) {
            case 1:
              await _dbController.default.updateSub(uid, 0);
              await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.removeSub));
              break;

            case 0:
              await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.huyDangKyRoiMa));
              break;

            default:
              await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.daHuyDangKyRoi));
          }
        } else {
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.notInfo));
        }

        break;

      case '🍉 có ăn được không?':
        await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hauAnDuocKhong));
        break;

      case '🍉 có thể làm được gì?':
        await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hauCoTheLamGi));
        break;
    }
  }

}

module.exports = new Bot();