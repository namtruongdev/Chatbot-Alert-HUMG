require('dotenv').config();
import fbAPI from '../api/facebookAPI';
import humgAPI from '../api/humgAPI';
import DB from '../controllers/dbController';
import User from '../models/users';
import text from '../constants';

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
    const name = await fbAPI.getSenderName(uid);
    const gender = await fbAPI.getGender(uid);
    const mess = new text(name, gender);
    const entities = this.firstEntity(message.nlp);
    const intent = this.getIntent(message.nlp);

    const existUser = await DB.checkExistUser(uid);

    if (intent && intent.confidence > 0.8) {
      await fbAPI.sendMarkSeen(uid);
      await fbAPI.sendTyping(uid);
      switch (intent.name) {
        case 'chaohoi':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.chaoHoi));
          break;
        case 'msv':
          const msv = entities['msv:msv'][0].value;
          if (existUser) {
            const idStudent = existUser.msv;
            if (idStudent !== msv) {
              await DB.updateMsv(uid, msv);
              await fbAPI.callSendAPI(uid, this.randomStr(mess.thaydoimsv));
            } else {
              await fbAPI.callSendAPI(uid, this.randomStr(mess.daTungNoiMsv));
            }
          } else {
            const data = await new User({
              uid: uid,
              firstName: name,
              msv: msv,
              sub: 0,
            });
            data.save((err) => {
              if (err) {
                console.log(`Lỗi: ${err}`);
              } else {
                console.log(
                  `OK. Thêm dữ liệu thành công cho sinh viên tên là ${name}`
                );
              }
            });
            await fbAPI.callSendAPI(uid, this.randomStr(mess.daluumsv));
          }
          break;
        case 'xemtkb':
          if (existUser) {
            const msv = existUser.msv;
            const tkb = await humgAPI.getSchedule(msv, name, uid);
            await fbAPI.callSendAPI(uid, this.randomStr(mess.danglaytkb));
            if (tkb.length > 72) {
              await fbAPI.callSendAPI(
                uid,
                `Hôm nay ${humgAPI.getFullDate()}, ${name} phải học:`
              );
              await fbAPI.callSendAPI(uid, tkb);
              await fbAPI.callSendAPI(
                uid,
                `Nhớ đi học đầy đủ và đúng giờ nha... Yêu ${name} 3000 ❤`
              );
            } else {
              await fbAPI.callSendAPI(uid, tkb);
            }
          } else {
            await fbAPI.callSendAPI(uid, this.randomStr(mess.xemtkb));
          }
          break;
        case 'sub':
          if (existUser) {
            const subValue = existUser.sub;
            switch (subValue) {
              case 0:
              case undefined:
                await DB.updateSub(uid, 1);
                await fbAPI.callSendAPI(uid, this.randomStr(mess.sub));
                break;
              default:
                await fbAPI.callSendAPI(uid, this.randomStr(mess.dadangkyroi));
            }
          } else {
            await fbAPI.callSendAPI(uid, this.randomStr(mess.notInfo));
          }
          break;
        case 'huyNhanTin':
          if (existUser) {
            const subValue = existUser.sub;
            switch (subValue) {
              case 1:
                await DB.updateSub(uid, 0);
                await fbAPI.callSendAPI(uid, this.randomStr(mess.removeSub));
                break;
              case 0:
                await fbAPI.callSendAPI(
                  uid,
                  this.randomStr(mess.huyDangKyRoiMa)
                );
                break;
              default:
                await fbAPI.callSendAPI(
                  uid,
                  this.randomStr(mess.daHuyDangKyRoi)
                );
            }
          } else {
            await fbAPI.callSendAPI(uid, this.randomStr(this.notInfo));
          }
          break;
        case 'hauAnDuocKhong':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.hauAnDuocKhong));
          break;
        case 'hauCoTheLamGi':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.hauCoTheLamGi));
          break;
      }
    } else {
      await fbAPI.callSendAPI(uid, this.randomStr(mess.notrain));
    }
  }
  async handlePostback(uid, message) {
    const name = await fbAPI.getSenderName(uid);
    const mess = new text(name);
    const existUser = await DB.checkExistUser(uid);
    await fbAPI.sendMarkSeen(uid);
    await fbAPI.sendTyping(uid);

    switch (message.payload) {
      case 'Xem lịch học 📅':
        if (existUser) {
          const msv = existUser.msv;

          const tkb = await humgAPI.getSchedule(msv, name, uid);
          await fbAPI.callSendAPI(uid, this.randomStr(mess.danglaytkb));
          if (tkb.length > 72) {
            await fbAPI.callSendAPI(
              uid,
              `Hôm nay ${humgAPI.getFullDate()}, ${name} phải học:`
            );
            await fbAPI.callSendAPI(uid, tkb);
            await fbAPI.callSendAPI(
              uid,
              `Nhớ đi học đầy đủ và đúng giờ nha... Yêu ${name} 3000 ❤`
            );
          } else {
            await fbAPI.callSendAPI(uid, tkb);
          }
        } else {
          await fbAPI.callSendAPI(uid, this.randomStr(mess.xemtkb));
        }
        break;
      case 'Đăng ký nhận tin ⏰':
        if (existUser) {
          const subValue = existUser.sub;
          switch (subValue) {
            case 0:
            case undefined:
              await DB.updateSub(uid, 1);
              await fbAPI.callSendAPI(uid, this.randomStr(mess.sub));
              break;
            default:
              await fbAPI.callSendAPI(uid, this.randomStr(mess.dadangkyroi));
          }
        } else {
          await fbAPI.callSendAPI(uid, this.randomStr(mess.notInfo));
        }
        break;
      case 'Hủy nhận tin 😭':
        if (existUser) {
          const subValue = existUser.sub;
          switch (subValue) {
            case 1:
              await DB.updateSub(uid, 0);
              await fbAPI.callSendAPI(uid, this.randomStr(mess.removeSub));
              break;
            case 0:
              await fbAPI.callSendAPI(uid, this.randomStr(mess.huyDangKyRoiMa));
              break;
            default:
              await fbAPI.callSendAPI(uid, this.randomStr(mess.daHuyDangKyRoi));
          }
        } else {
          await fbAPI.callSendAPI(uid, this.randomStr(mess.notInfo));
        }
        break;
      case '🍉 có ăn được không?':
        await fbAPI.callSendAPI(uid, this.randomStr(mess.hauAnDuocKhong));
        break;
      case '🍉 có thể làm được gì?':
        await fbAPI.callSendAPI(uid, this.randomStr(mess.hauCoTheLamGi));
        break;
    }
  }
}

module.exports = new Bot();
