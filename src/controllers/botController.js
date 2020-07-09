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
    const infoUsers = await fbAPI.getInfoUsers(uid);
    const fullName = infoUsers.name;
    const name = infoUsers.first_name;
    const profile_pic = infoUsers.profile_pic;
    const gender = infoUsers.gender;
    const mess = new text(name, gender);
    const entities = this.firstEntity(message.nlp);
    const intent = this.getIntent(message.nlp);

    const existUser = await DB.checkExistUser(uid);

    if (intent && intent.confidence > 0.8) {
      await fbAPI.sendMarkSeen(uid);
      await fbAPI.sendTyping(uid);
      switch (intent.name) {
        case 'aoTuong':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.aoTuong));
          break;
        case 'baoCaoMsv':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.baoCaoMsv));
          break;
        case 'baoHauKhongBietGi':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.baoHauKhongBietGi));
          break;
        case 'blabla':
          await fbAPI.callSendAPI(uid, mess.baoHauKhongBietGi);
          break;
        case 'bye':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.bye));
          break;
        case 'chaohoi':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.chaoHoi));
          break;
        case 'camOn':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.camOn));
          break;
        case 'canGiup':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.canGiup));
          break;
        case 'chanNan':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.chanNan));
          break;
        case 'chuiBay':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.chuiBay));
          break;
        case 'chuiHauNgu':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.chuiHauNgu));
          break;
        case 'coNhoLai':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.coNhoLai));
          break;
        case 'coThongTinNguoiDungKhong':
          await fbAPI.callSendAPI(
            uid,
            this.randomStr(mess.coThongTinNguoiDungKhong)
          );
          break;
        case 'cuoi':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.cuoi));
          break;
        case 'danDo':
          await fbAPI.callSendAPI(uid, mess.danDo);
          break;
        case 'dauXanh':
          await fbAPI.callSendAPI(uid, mess.dauXanh);
          break;
        case 'doaGietHau':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.doaGietHau));
          break;
        case 'dongVien':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.dongVien));
          break;
        case 'dongY':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.dongY));
          break;
        case 'dontknow':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.dontknow));
          break;
        case 'gaTinh':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.gaTinh));
          break;
        case 'hauAnComChua':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.hauAnComChua));
          break;
        case 'hauAnGi':
          await fbAPI.callSendAPI(uid, mess.hauAnGi);
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
              name: fullName,
              firstName: name,
              profile_pic: profile_pic,
              gender: gender,
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
        case 'thatKhong':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.thatKhong));
          break;
        case 'test':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.test));
          break;
        case 'xemDiemTichLuy':
          await fbAPI.callSendAPI(uid, mess.khongKhaDung);
          break;
        case 'xemHocPhi':
          await fbAPI.callSendAPI(uid, mess.khongKhaDung);
          break;
      }
    } else {
      await fbAPI.callSendAPI(uid, this.randomStr(mess.notrain));
    }
  }
  async handlePostback(uid, message) {
    const infoUsers = await fbAPI.getInfoUsers(uid);
    const name = infoUsers.first_name;
    const gender = infoUsers.gender;
    const mess = new text(name, gender);
    const existUser = await DB.checkExistUser(uid);
    await fbAPI.sendMarkSeen(uid);
    await fbAPI.sendTyping(uid);

    switch (message.payload) {
      case 'chào':
        await fbAPI.callSendAPI(uid, this.randomStr(mess.chaoHoi));
        break;
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
