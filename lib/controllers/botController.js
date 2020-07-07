"use strict";

var _facebookAPI = _interopRequireDefault(require("../api/facebookAPI"));

var _humgAPI = _interopRequireDefault(require("../api/humgAPI"));

var _dbController = _interopRequireDefault(require("../controllers/dbController"));

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

  async handleMessage(sender_psid, message) {
    const senderName = await _facebookAPI.default.getSenderName(sender_psid);
    const entities = this.firstEntity(message.nlp);
    const intent = this.getIntent(message.nlp);
    const chaoHoi = ["H\xEA h\xEA, baaaaaby \uD83D\uDE18", "Ch\xE0o ".concat(senderName, ", em t\xEAn l\xE0 H\u1EA5u \uD83C\uDF49"), "Xin ch\xE0o, ".concat(senderName, " c\u1EA7n H\u1EA5u \uD83C\uDF49 gi\xFAp g\xEC n\xE0o?"), "H\u1EBF nh\xF4 ".concat(senderName, " kute ph\xF4 mai que \uD83E\uDDC0"), "\u01A0n gi\u1EDDi ".concat(senderName, " \u0111\xE2y r\u1ED3i \uD83D\uDE02"), "Ngo\xE0i kia gi\xF3 th\u1ED5i r\xEC r\xE0o...\u0110\u1EA7u ti\xEAn xin g\u1EEDi l\u1EDDi ch\xE0o th\xE2n th\u01B0\u01A1ng \uD83D\uDC4B", "B\u1EEFa nay H\u1EA5u \uD83C\uDF49 g\u1EEDi l\u1EDDi ch\xE0o. C\xF9ng nhau t\u01B0\u01A1ng t\xE1c ta c\xE0ng th\xEAm th\xE2n \u2764", "Konnichiwa ".concat(senderName, " \uD83D\uDE0A")];
    const notrain = ["Xin l\u1ED7i ".concat(senderName, " nhi\u1EC1u l\u1EAFm. H\u1EA5u H\u1EA5u \uD83C\uDF49 c\xF2n nh\u1ECF, ch\u01B0a \u0111\u01B0\u1EE3c Boss Tr\u01B0\u1EDDng d\u1EA1y nhi\u1EC1u n\xEAn kh\xF4ng bi\u1EBFt tr\u1EA3 l\u1EDDi c\xE2u n\xE0y nh\u01B0 n\xE0o \uD83D\uDE25"), 'Câu này hình như em chưa được dạy. Ahihi 😁', "Ui chu choa ".concat(senderName, " \u01A1i, t\u1EF1 nhi\xEAn m\u1EAFt H\u1EA5u \uD83C\uDF49 m\u1EDD qu\xE1 kh\xF4ng \u0111\u1ECDc \u0111\u01B0\u1EE3c ch\u1EEF \uD83D\uDE44")];
    const danglaytkb = ["Ch\u1EDD H\u1EA5u \uD83C\uDF49 x\xEDu nha... H\u1EA5u \uD83C\uDF49 \u0111ang l\u1EA5y d\u1EEF li\u1EC7u v\u1EC1 cho ".concat(senderName, " \uD83D\uDE0B"), "H\u1EA5u \uD83C\uDF49 \u0111ang l\u1EA5y d\u1EEF li\u1EC7u v\u1EEBa n\xF3ng v\u1EEBa th\u1ED5i v\u1EC1 cho ".concat(senderName, " n\xE8. Ch\u1EDD x\xEDu nhen...")];
    const thaydoimsv = ["\u2757 Ch\xFA \xFD: ".concat(senderName, " v\u1EEBa thay \u0111\u1ED5i m\xE3 sinh vi\xEAn c\u1EE7a m\xECnh.")];
    const xemtkb = ["\u0110\u01B0a m\xE3 sinh vi\xEAn c\u1EE7a ".concat(senderName, " cho H\u1EA5u \uD83C\uDF49 n\xE0o?")];
    const daluumsv = ["\uD83C\uDF49 \u0111\xE3 nh\u1EDB M\xE3 sinh vi\xEAn c\u1EE7a ".concat(senderName, " r\u1ED3i nha. Ahihi, y\xEAn t\xE2m \uD83C\uDF49 s\u1EBD kh\xF4ng bao gi\u1EDD qu\xEAn \u0111\u01B0\u1EE3c \u0111\xE2u. L\xFAc n\xE0o ").concat(senderName, " c\u1EA7n xem l\u1ECBch h\u1ECDc th\xEC c\u1EE9 nh\u1EAFn cho \uD83C\uDF49 bi\u1EBFt nh\xE9")];
    const sub = ["C\u1EA3m \u01A1n ".concat(senderName, " \u0111\xE3 tin t\u01B0\u1EDFng \uD83C\uDF49. T\u1EEB gi\u1EDD tr\u1EDF \u0111i, m\u1ED7i s\xE1ng th\u1EE9c d\u1EADy \uD83C\uDF49 s\u1EBD l\xE0 ng\u01B0\u1EDDi \u0111\u1EA7u ti\xEAn nh\u1EAFn tin cho ").concat(senderName)];
    const huyDangKyRoiMa = ["".concat(senderName, " \u0111\xE3 h\u1EE7y \u0111\u0103ng k\xFD r\u1ED3i m\xE0, h\u1EE7y g\xEC m\xE0 h\u1EE7y l\u1EAFm v\u1EADy. ").concat(senderName, " h\u1EBFt th\u01B0\u01A1ng \uD83C\uDF49 r\u1ED3i \xE0?")];
    const removeSub = ["H\u1EE7y th\xE0nh c\xF4ng! Khi n\xE0o nh\u1EDB \uD83C\uDF49 th\xEC h\xE3y \u0111\u0103ng k\xFD nh\u1EADn tin l\u1EA1i nha \uD83D\uDE2D"];
    const notInfo = ["".concat(senderName, " vui l\xF2ng cung c\u1EA5p M\xE3 sinh vi\xEAn cho \uD83C\uDF49 tr\u01B0\u1EDBc khi mu\u1ED1n \u0111\u0103ng k\xFD nh\u1EADn tin h\xE0ng ng\xE0y nh\xE9")];
    const daHuyDangKyRoi = ["X\xEC... ".concat(senderName, " \u0111\xE3 bao gi\u1EDD \u0111\u0103ng k\xFD nh\u1EADn tin \u0111\xE2u m\xE0 c\u1EE9 \u0111\xF2i h\u1EE7y v\u1EADy? Gh\xE9t \uD83C\uDF49 \u0111\u1EBFn th\u1EBF \xE0 \uD83D\uDE44")];
    const dadangkyroi = ["".concat(senderName, " \u0111\xE3 \u0111\u0103ng k\xFD nh\u1EADn tin tr\u01B0\u1EDBc \u0111\xF3 r\u1ED3i m\xE0. N\u1EBFu \xFD c\u1EE7a ").concat(senderName, " l\xE0 mu\u1ED1n h\u1EE7y \u0111\u0103ng k\xFD nh\u1EADn tin th\xEC ").concat(senderName, " c\xF3 th\u1EC3 chat ho\u1EB7c ch\u1ECDn \"H\u1EE7y \u0111\u0103ng k\xFD\" t\u1EEB menu r\u1ED3i g\u1EEDi l\u1EA1i cho \uD83C\uDF49 nh\xE9... Nh\u01B0ng m\xE0 \uD83C\uDF49 s\u1EBD bu\u1ED3n l\u1EAFm khi ").concat(senderName, " l\xE0m v\u1EADy \uD83D\uDE25")];
    const hauAnDuocKhong = ["Huhu... \uD83C\uDF49 l\xE0 \u0111\u1EC3 y\xEAu th\u01B0\u01A1ng nh\xE9 ".concat(senderName, ", kh\xF4ng c\xF3 \u0103n \u0111\u01B0\u1EE3c \u0111\xE2u \uD83D\uDC94")];
    const hauCoTheLamGi = ["\uD83C\uDF49 l\xE0 m\u1ED9t robot xinh g\xE1i si\xEAu c\u1EA5p v\xF4 \u0111\u1ECBch \u0111\u01B0\u1EE3c Boss D\u01B0\u01A1ng Nam Tr\u01B0\u1EDDng t\u1EA1o ra v\xE0o ng\xE0y 08/07/2020 v\u1EDBi nhi\u1EC7m v\u1EE5 nh\u1EAFc nh\u1EDF l\u1ECBch h\u1ECDc cho c\xE1c anh em HUMGer v\xE0 c\u0169ng c\xF3 th\u1EC3 t\xE2m s\u1EF1 v\u1EDBi anh em n\u1EBFu c\u1EA7n \uD83D\uDE18"];
    const dataOfCheckId = await _dbController.default.checkData(sender_psid);

    if (intent && intent.confidence > 0.8) {
      await _facebookAPI.default.sendMarkSeen(sender_psid);
      await _facebookAPI.default.sendTyping(sender_psid);

      switch (intent.name) {
        case 'chaohoi':
          await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(chaoHoi));
          break;

        case 'msv':
          const msv = entities['msv:msv'][0].value;

          if (dataOfCheckId) {
            const idStudent = dataOfCheckId.msv;

            if (idStudent !== msv) {
              await _dbController.default.updateMsv(sender_psid, msv);
              await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(thaydoimsv));
            } else {
              await _facebookAPI.default.callSendAPI(sender_psid, "L\u1EA7n tr\u01B0\u1EDBc ".concat(senderName, " c\xF3 n\xF3i cho \uD83C\uDF49 m\xE3 sinh vi\xEAn c\u1EE7a ").concat(senderName, " l\xE0 ").concat(idStudent, " r\u1ED3i m\xE0 \uD83E\uDD23"));
            }
          } else {
            await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(daluumsv));
            await _dbController.default.write({
              id: sender_psid,
              firstName: senderName,
              msv: msv
            });
          }

          break;

        case 'xemtkb':
          if (dataOfCheckId) {
            const msv = await _dbController.default.getMsv(sender_psid);
            const tkb = await _humgAPI.default.getSchedule(msv, senderName, sender_psid);
            await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(danglaytkb));

            if (tkb.length > 72) {
              await _facebookAPI.default.callSendAPI(sender_psid, "H\xF4m nay ".concat(_humgAPI.default.getFullDate(), ", ").concat(senderName, " ph\u1EA3i h\u1ECDc:"));
              await _facebookAPI.default.callSendAPI(sender_psid, tkb);
              await _facebookAPI.default.callSendAPI(sender_psid, "Nh\u1EDB \u0111i h\u1ECDc \u0111\u1EA7y \u0111\u1EE7 v\xE0 \u0111\xFAng gi\u1EDD nha... Y\xEAu ".concat(senderName, " 3000 \u2764"));
            } else {
              await _facebookAPI.default.callSendAPI(sender_psid, tkb);
            }
          } else {
            await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(xemtkb));
          }

          break;

        case 'sub':
          if (dataOfCheckId) {
            const subValue = dataOfCheckId.sub;

            switch (subValue) {
              case '0':
              case undefined:
                await _dbController.default.addSub(sender_psid);
                await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(sub));
                break;

              default:
                await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(dadangkyroi));
            }
          } else {
            await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(notInfo));
          }

          break;

        case 'huyNhanTin':
          if (dataOfCheckId) {
            const subValue = dataOfCheckId.sub;

            switch (subValue) {
              case 1:
                await _dbController.default.removeSub(sender_psid);
                await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(removeSub));
                break;

              case 0:
                await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(huyDangKyRoiMa));
                break;

              default:
                await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(daHuyDangKyRoi));
            }
          } else {
            await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(notInfo));
          }

          break;

        case 'hauAnDuocKhong':
          await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(hauAnDuocKhong));
          break;

        case 'hauCoTheLamGi':
          await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(hauCoTheLamGi));
          break;
      }
    } else {
      await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(notrain));
    }
  }

  async handlePostback(sender_psid, message) {
    const senderName = await _facebookAPI.default.getSenderName(sender_psid);
    const xemtkb = ["\u0110\u01B0a m\xE3 sinh vi\xEAn c\u1EE7a ".concat(senderName, " cho H\u1EA5u \uD83C\uDF49 n\xE0o?")];
    const danglaytkb = ["Ch\u1EDD H\u1EA5u \uD83C\uDF49 x\xEDu nha... H\u1EA5u \uD83C\uDF49 \u0111ang l\u1EA5y d\u1EEF li\u1EC7u v\u1EC1 cho ".concat(senderName, " \uD83D\uDE0B"), "H\u1EA5u \uD83C\uDF49 \u0111ang l\u1EA5y d\u1EEF li\u1EC7u v\u1EEBa n\xF3ng v\u1EEBa th\u1ED5i v\u1EC1 cho ".concat(senderName, " n\xE8. Ch\u1EDD x\xEDu nhen...")];
    const sub = ["C\u1EA3m \u01A1n ".concat(senderName, " \u0111\xE3 tin t\u01B0\u1EDFng \uD83C\uDF49. T\u1EEB gi\u1EDD tr\u1EDF \u0111i, m\u1ED7i s\xE1ng th\u1EE9c d\u1EADy \uD83C\uDF49 s\u1EBD l\xE0 ng\u01B0\u1EDDi \u0111\u1EA7u ti\xEAn nh\u1EAFn tin cho ").concat(senderName)];
    const removeSub = ["H\u1EE7y th\xE0nh c\xF4ng! Khi n\xE0o nh\u1EDB \uD83C\uDF49 th\xEC h\xE3y \u0111\u0103ng k\xFD nh\u1EADn tin l\u1EA1i nha \uD83D\uDE2D"];
    const notInfo = ["".concat(senderName, " vui l\xF2ng cung c\u1EA5p M\xE3 sinh vi\xEAn cho \uD83C\uDF49 tr\u01B0\u1EDBc khi mu\u1ED1n \u0111\u0103ng k\xFD nh\u1EADn tin h\xE0ng ng\xE0y nh\xE9")];
    const dadangkyroi = ["".concat(senderName, " \u0111\xE3 \u0111\u0103ng k\xFD nh\u1EADn tin tr\u01B0\u1EDBc \u0111\xF3 r\u1ED3i m\xE0. N\u1EBFu \xFD c\u1EE7a ").concat(senderName, " l\xE0 mu\u1ED1n h\u1EE7y \u0111\u0103ng k\xFD nh\u1EADn tin th\xEC ").concat(senderName, " c\xF3 th\u1EC3 chat ho\u1EB7c ch\u1ECDn \"H\u1EE7y \u0111\u0103ng k\xFD\" t\u1EEB menu r\u1ED3i g\u1EEDi l\u1EA1i cho \uD83C\uDF49 nh\xE9... Nh\u01B0ng m\xE0 \uD83C\uDF49 s\u1EBD bu\u1ED3n l\u1EAFm khi ").concat(senderName, " l\xE0m v\u1EADy \uD83D\uDE25")];
    const daHuyDangKyRoi = ["X\xEC... ".concat(senderName, " \u0111\xE3 bao gi\u1EDD \u0111\u0103ng k\xFD nh\u1EADn tin \u0111\xE2u m\xE0 c\u1EE9 \u0111\xF2i h\u1EE7y v\u1EADy? Gh\xE9t \uD83C\uDF49 \u0111\u1EBFn th\u1EBF \xE0 \uD83D\uDE44")];
    const huyDangKyRoiMa = ["".concat(senderName, " \u0111\xE3 h\u1EE7y \u0111\u0103ng k\xFD r\u1ED3i m\xE0, h\u1EE7y g\xEC m\xE0 h\u1EE7y l\u1EAFm v\u1EADy. ").concat(senderName, " h\u1EBFt th\u01B0\u01A1ng \uD83C\uDF49 r\u1ED3i \xE0?")];
    const hauAnDuocKhong = ["Huhu... \uD83C\uDF49 l\xE0 \u0111\u1EC3 y\xEAu th\u01B0\u01A1ng nh\xE9 ".concat(senderName, ", kh\xF4ng c\xF3 \u0103n \u0111\u01B0\u1EE3c \u0111\xE2u \uD83D\uDC94")];
    const hauCoTheLamGi = ["\uD83C\uDF49 l\xE0 m\u1ED9t robot xinh g\xE1i si\xEAu c\u1EA5p v\xF4 \u0111\u1ECBch \u0111\u01B0\u1EE3c Boss D\u01B0\u01A1ng Nam Tr\u01B0\u1EDDng t\u1EA1o ra v\xE0o ng\xE0y 08/07/2020 v\u1EDBi nhi\u1EC7m v\u1EE5 nh\u1EAFc nh\u1EDF l\u1ECBch h\u1ECDc cho c\xE1c anh em HUMGer v\xE0 c\u0169ng c\xF3 th\u1EC3 t\xE2m s\u1EF1 v\u1EDBi anh em n\u1EBFu c\u1EA7n \uD83D\uDE18"];
    const dataOfCheckId = await _dbController.default.checkData(sender_psid);
    await _facebookAPI.default.sendMarkSeen(sender_psid);
    await _facebookAPI.default.sendTyping(sender_psid);

    switch (message.payload) {
      case 'Xem lịch học 📅':
        if (dataOfCheckId) {
          const msv = await _dbController.default.getMsv(sender_psid);
          const tkb = await _humgAPI.default.getSchedule(msv, senderName, sender_psid);
          await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(danglaytkb));

          if (tkb.length > 72) {
            await _facebookAPI.default.callSendAPI(sender_psid, "H\xF4m nay ".concat(_humgAPI.default.getFullDate(), ", ").concat(senderName, " ph\u1EA3i h\u1ECDc:"));
            await _facebookAPI.default.callSendAPI(sender_psid, tkb);
            await _facebookAPI.default.callSendAPI(sender_psid, "Nh\u1EDB \u0111i h\u1ECDc \u0111\u1EA7y \u0111\u1EE7 v\xE0 \u0111\xFAng gi\u1EDD nha... Y\xEAu ".concat(senderName, " 3000 \u2764"));
          } else {
            await _facebookAPI.default.callSendAPI(sender_psid, tkb);
          }
        } else {
          await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(xemtkb));
        }

        break;

      case 'Đăng ký nhận tin ⏰':
        if (dataOfCheckId) {
          const subValue = dataOfCheckId.sub;

          switch (subValue) {
            case 0:
            case undefined:
              await _dbController.default.addSub(sender_psid);
              await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(sub));
              break;

            default:
              await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(dadangkyroi));
          }
        } else {
          await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(notInfo));
        }

        break;

      case 'Hủy nhận tin 😭':
        if (dataOfCheckId) {
          const subValue = dataOfCheckId.sub;

          switch (subValue) {
            case 1:
              await _dbController.default.removeSub(sender_psid);
              await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(removeSub));
              break;

            case 0:
              await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(huyDangKyRoiMa));
              break;

            default:
              await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(daHuyDangKyRoi));
          }
        } else {
          await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(notInfo));
        }

        break;

      case '🍉 có ăn được không?':
        await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(hauAnDuocKhong));
        break;

      case '🍉 có thể làm được gì?':
        await _facebookAPI.default.callSendAPI(sender_psid, this.randomStr(hauCoTheLamGi));
        break;
    }
  }

}

module.exports = new Bot();