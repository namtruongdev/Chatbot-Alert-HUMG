"use strict";

var _facebookAPI = _interopRequireDefault(require("../api/facebookAPI"));

var _humgAPI = _interopRequireDefault(require("../api/humgAPI"));

var _ntvforex = _interopRequireDefault(require("../api/ntvforex"));

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
    const infoUsers = await _facebookAPI.default.getInfoUsers(uid);
    const fullName = infoUsers.name;
    const name = infoUsers.first_name;
    const profile_pic = infoUsers.profile_pic;
    const gender = infoUsers.gender;
    const mess = new _constants.default(name, gender);
    const entities = this.firstEntity(message.nlp);
    const intent = this.getIntent(message.nlp);
    const existUser = await _dbController.default.checkExistUser(uid);

    if (intent && intent.confidence > 0.8) {
      await _facebookAPI.default.sendMarkSeen(uid);
      await _facebookAPI.default.sendTyping(uid);

      switch (intent.name) {
        case 'aiChoYeu':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.aiChoYeu));
          break;

        case 'anUi':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.anUi));
          break;

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

        case 'chuiHau':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.chuiHau));
          break;

        case 'chuiHauNgu':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.chuiHauNgu));
          break;

        case 'coNhoLai':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.coNhoLai));
          break;

        case 'coThichKhong':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.coThichKhong));
          break;

        case 'coThongTinNguoiDungKhong':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.coThongTinNguoiDungKhong));
          break;

        case 'code':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.code));
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

        case 'gaHauDanhNhau':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.gaHauDanhNhau));
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

        case 'hauBietGi':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hauBietGi));
          break;

        case 'hauBietHatKhong':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hauBietHatKhong));
          await _facebookAPI.default.sendVideoAPI(uid, 'https://res.cloudinary.com/alerthumg/video/upload/v1595000294/Watermelon_papaya..._eiriym.mp4');
          break;

        case 'hauBietNoiTiengAnhKhong':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hauBietNoiTiengAnhKhong));
          break;

        case 'hauCoPhaiRobotKhong':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hauCoPhaiRobotKhong));
          break;

        case 'hauGay':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hauGay));
          break;

        case 'hauHocTruongNao':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hauHocTruongNao));
          break;

        case 'hauKhoeKhong':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hauKhoeKhong));
          break;

        case 'hauLuoi':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hauLuoi));
          break;

        case 'hauODau':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hauODau));
          break;

        case 'hauSayRuou':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hauSayRuou));
          break;

        case 'maiHocGi':
          if (existUser) {
            const msv = existUser.msv;
            const tkb = await _humgAPI.default.getScheduleNextDay(msv, name);
            await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.danglaytkb));

            if (tkb.length > 72) {
              await _facebookAPI.default.callSendAPI(uid, "Ng\xE0y mai ".concat(_humgAPI.default.getFullNextDate(), ", ").concat(name, " ph\u1EA3i h\u1ECDc:"));
              await _facebookAPI.default.callSendAPI(uid, tkb);
              await _facebookAPI.default.callSendAPI(uid, "Nh\u1EDB \u0111i h\u1ECDc \u0111\u1EA7y \u0111\u1EE7 v\xE0 \u0111\xFAng gi\u1EDD nha... Y\xEAu ".concat(name, " 3000 \u2764"));
            } else {
              await _facebookAPI.default.callSendAPI(uid, tkb);
            }
          } else {
            await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.xemtkb));
          }

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
              name: fullName,
              firstName: name,
              profile_pic: profile_pic,
              gender: gender,
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

        case 'usdjpy':
          await _facebookAPI.default.callSendAPI(uid, "Ch\u1EDDi H\u1EA5u \uD83C\uDF49 x\xEDu nha...");
          let data = await _ntvforex.default.getForexNews();
          const result = [];
          const currency = entities['usdjpy:usdjpy'][0].value;
          const rg = new RegExp("".concat(currency));

          for (let i of data) {
            if (result.length < 3 && rg.test(i.title)) {
              result.push(i);
            }
          }

          await _facebookAPI.default.sendListAPI(uid, result);
          break;

        case 'thayLeXuanThanh':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.thayLeXuanThanh));
          await _facebookAPI.default.sendImageAPI(uid, "https://res.cloudinary.com/alerthumg/image/upload/v1594403884/16300274_10212320324353971_28259801392996641_o_vvkxue.jpg");
          break;

        case 'xemLichThi':
          if (existUser) {
            await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.dangLayLichThi));
            const msv = existUser.msv;
            const lichThi = await _humgAPI.default.getTestSchedule(msv);

            if (lichThi) {
              const d = new Date();
              let result = "";

              for (let i of lichThi) {
                const date = i.date.split('/');

                if (parseInt(date[0]) === d.getDate()) {
                  result += "\n\n\uD83D\uDCCC M\xF4n ".concat(i.subject, ":\n\uD83D\uDCCE S\u0129 s\u1ED1: ").concat(i.quantum, "\n\uD83D\uDCCE Ti\u1EBFt ").concat(i.start, " - Ti\u1EBFt ").concat(i.end, "\n\uD83D\uDCCE ").concat(_humgAPI.default.getTime(i.start).batDau, " - ").concat(_humgAPI.default.getTime(i.end).ketThuc, "\n\uD83D\uDCCE Ph\xF2ng ").concat(i.room, "\n\uD83D\uDCCE H\xECnh th\u1EE9c thi ").concat(i.note);
                }
              }

              if (result.length === 0) {
                return await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.khongPhaiThi));
              } else {
                await _facebookAPI.default.callSendAPI(uid, "H\xF4m nay ".concat(_humgAPI.default.getFullDate(), ", ").concat(name, " ph\u1EA3i thi:"));
                return await _facebookAPI.default.callSendAPI(uid, result);
              }
            } else {
              return await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.chuaCoLichThi));
            }
          } else {
            return await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.xemtkb));
          }

        case 'xemDiemThi':
          if (existUser) {
            await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.dangLayDiem));
            const msv = existUser.msv;
            const diemThi = await _humgAPI.default.getPoint(msv);

            if (diemThi) {
              await _facebookAPI.default.sendImageAPI(uid, "".concat(process.env.WEB_URL, "screenshot.png"));
            } else {
              return await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.err));
            }
          } else {
            return await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.xemtkb));
          }

          break;
      }
    } else {
      await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.notrain));
    }
  }

  async handlePostback(uid, message) {
    const infoUsers = await _facebookAPI.default.getInfoUsers(uid);
    const name = infoUsers.first_name;
    const gender = infoUsers.gender;
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
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.notSub));
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