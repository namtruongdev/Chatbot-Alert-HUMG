require('dotenv').config();
import fbAPI from '../api/facebookAPI';
import humgAPI from '../api/humgAPI';
import NtvForex from '../api/ntvforex';
import DB from '../controllers/dbController';
import User from '../models/users';
import text from '../constants';
import Wiki from '../api/wikiAPI';
// import confess from '../api/confessHUMG';

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
        case 'aiChoYeu':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.aiChoYeu));
          break;
        case 'anUi':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.anUi));
          break;
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
        case 'chuiHau':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.chuiHau));
          break;
        case 'chuiHauNgu':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.chuiHauNgu));
          break;
        case 'coNhoLai':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.coNhoLai));
          break;
        case 'coThichKhong':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.coThichKhong));
          break;
        case 'coThongTinNguoiDungKhong':
          await fbAPI.callSendAPI(
            uid,
            this.randomStr(mess.coThongTinNguoiDungKhong)
          );
          break;
        case 'code':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.code));
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
        case 'gaHauDanhNhau':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.gaHauDanhNhau));
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
        case 'hauBietGi':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.hauBietGi));
          break;
        case 'hauBietHatKhong':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.hauBietHatKhong));
          await fbAPI.sendVideoAPI(
            uid,
            'https://res.cloudinary.com/alerthumg/video/upload/v1595000294/Watermelon_papaya..._eiriym.mp4'
          );
          break;
        case 'hauBietNoiTiengAnhKhong':
          await fbAPI.callSendAPI(
            uid,
            this.randomStr(mess.hauBietNoiTiengAnhKhong)
          );
          break;
        case 'hauCoPhaiRobotKhong':
          await fbAPI.callSendAPI(
            uid,
            this.randomStr(mess.hauCoPhaiRobotKhong)
          );
          break;
        case 'hauGay':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.hauGay));
          break;
        case 'hauHocTruongNao':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.hauHocTruongNao));
          break;
        case 'hauKhoeKhong':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.hauKhoeKhong));
          break;
        case 'hauLuoi':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.hauLuoi));
          break;
        case 'hauODau':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.hauODau));
          break;
        case 'hauSayRuou':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.hauSayRuou));
          break;
        case 'maiHocGi':
          if (existUser) {
            await fbAPI.callSendAPI(uid, this.randomStr(mess.danglaytkb));
            const msv = existUser.msv;
            const tkb = await humgAPI.getScheduleNextDay(msv, name);
            if (tkb.length > 72) {
              await fbAPI.callSendAPI(
                uid,
                `Ngày mai ${humgAPI.getFullNextDate()}, ${name} phải học:`
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
            await fbAPI.callSendAPI(uid, this.randomStr(mess.danglaytkb));
            const msv = existUser.msv;
            const tkb = await humgAPI.getSchedule(msv, name, uid);
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
            await fbAPI.callSendAPI(uid, this.randomStr(mess.daHuyDangKyRoi));
          }
          break;
        case 'hauAnDuocKhong':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.hauAnDuocKhong));
          break;
        case 'hauCoTheLamGi':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.hauCoTheLamGi));
          break;
        case 'tamSu':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.tamSu));
          break;
        case 'thatKhong':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.thatKhong));
          break;
        case 'test':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.test));
          break;
        case 'xemHocPhi':
          await fbAPI.callSendAPI(uid, mess.khongKhaDung);
          break;
        case 'usdjpy':
          await fbAPI.callSendAPI(uid, `Chời Hấu 🍉 xíu nha...`);
          let data = await NtvForex.getForexNews();
          const result = [];
          const currency = entities['usdjpy:usdjpy'][0].value;
          const rg = new RegExp(`${currency}`);
          for (let i of data) {
            if (result.length < 3 && rg.test(i.title)) {
              result.push(i);
            }
          }
          await fbAPI.sendListAPI(uid, result);
          break;
        case 'thayLeXuanThanh':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.thayLeXuanThanh));
          await fbAPI.sendImageAPI(
            uid,
            `https://res.cloudinary.com/alerthumg/image/upload/v1594403884/16300274_10212320324353971_28259801392996641_o_vvkxue.jpg`
          );
          break;
        case 'xemLichThi':
          if (existUser) {
            await fbAPI.callSendAPI(uid, this.randomStr(mess.dangLayLichThi));
            const msv = existUser.msv;
            const lichThi = await humgAPI.getTestSchedule(msv);
            if (lichThi) {
              const d = new Date();
              let result = ``;

              for (let i of lichThi) {
                const date = i.date.split('/');
                if (parseInt(date[0]) === d.getDate()) {
                  result += `\n\n📌 Môn ${i.subject}:\n📎 Sĩ số: ${
                    i.quantum
                  }\n📎 Tiết ${i.start} - Tiết ${i.end}\n📎 ${
                    humgAPI.getTime(i.start).batDau
                  } - ${humgAPI.getTime(i.end).ketThuc}\n📎 Phòng ${
                    i.room
                  }\n📎 Hình thức thi ${i.note}`;
                }
              }
              if (result.length === 0) {
                return await fbAPI.callSendAPI(
                  uid,
                  this.randomStr(mess.khongPhaiThi)
                );
              } else {
                await fbAPI.callSendAPI(
                  uid,
                  `Hôm nay ${humgAPI.getFullDate()}, ${name} phải thi:`
                );
                return await fbAPI.callSendAPI(uid, result);
              }
            } else {
              return await fbAPI.callSendAPI(
                uid,
                this.randomStr(mess.chuaCoLichThi)
              );
            }
          } else {
            return await fbAPI.callSendAPI(uid, this.randomStr(mess.xemtkb));
          }
        case 'xemDiemThi':
          if (existUser) {
            await fbAPI.callSendAPI(uid, this.randomStr(mess.dangLayDiem));
            const msv = existUser.msv;
            const diemThi = await humgAPI.getPoint(msv);
            if (diemThi) {
              await fbAPI.sendImageAPI(
                uid,
                `${process.env.WEB_URL}screenshot.png`
              );
            } else {
              return await fbAPI.callSendAPI(uid, this.randomStr(mess.err));
            }
          } else {
            return await fbAPI.callSendAPI(uid, this.randomStr(mess.xemtkb));
          }
          break;
        case 'xemTinTuc':
          await fbAPI.callSendAPI(uid, this.randomStr(mess.dangLayTinTuc));
          let elements = await DB.getNews();
          if (elements.data.length !== 0) {
            await fbAPI.sendTemplateGeneric(uid, elements.data);
          } else {
            await fbAPI.callSendAPIWithTag(
              uid,
              `Chán trường thật sự 😅. Hôm nay không có bất cứ tin nào để hóng cả ${name} ơi!`
            );
          }
          break;
        case 'wiki':
          let res = await Wiki.query(encodeURI(`${message.text}`));
          await fbAPI.callSendAPI(uid, res + ` 😎`);
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
          await fbAPI.callSendAPI(uid, this.randomStr(mess.danglaytkb));
          const msv = existUser.msv;
          const tkb = await humgAPI.getSchedule(msv, name, uid);
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
          await fbAPI.callSendAPI(uid, this.randomStr(mess.notSub));
        }
        break;
      case '🍉 có ăn được không?':
        await fbAPI.callSendAPI(uid, this.randomStr(mess.hauAnDuocKhong));
        break;
      case '🍉 có thể làm được gì?':
        await fbAPI.callSendAPI(uid, this.randomStr(mess.hauCoTheLamGi));
        break;
      case 'danh sách tính năng':
        const replies = [
          {
            content_type: 'text',
            title: 'Mai học gì?',
            payload: 'maiHocGi',
            image_url:
              'https://res.cloudinary.com/alerthumg/image/upload/v1595276010/icons8-school-backpack-48_aotytn.png',
          },
          {
            content_type: 'text',
            title: 'Tin tức?',
            payload: 'tinTuc',
            image_url:
              'https://res.cloudinary.com/alerthumg/image/upload/v1595276474/icons8-news-50_la5oo7.png',
          },
          {
            content_type: 'text',
            title: 'Tâm sự?',
            payload: 'tamSu',
            image_url:
              'https://res.cloudinary.com/alerthumg/image/upload/v1595276575/icons8-very-popular-topic-64_zjkfym.png',
          },
          {
            content_type: 'text',
            title: 'Xem điểm thi?',
            payload: 'xemDiemThi',
            image_url:
              'https://res.cloudinary.com/alerthumg/image/upload/v1595276214/icons8-square-number-48_hrlxeb.png',
          },
          {
            content_type: 'text',
            title: 'Hủy nhận tin',
            payload: 'huyNhanTin',
            image_url:
              'https://res.cloudinary.com/alerthumg/image/upload/v1595276650/icons8-calendar-delete-64_n2jwtv.png',
          },
          {
            content_type: 'text',
            title: 'Xem lịch thi?',
            payload: 'xemLichThi',
            image_url:
              'https://res.cloudinary.com/alerthumg/image/upload/v1595276360/icons8-test-passed-64_hrolpn.png',
          },
        ];
        await fbAPI.quickReplies(
          uid,
          this.randomStr(mess.luaChonTinhNang),
          replies
        );
        break;
    }
  }
}

module.exports = new Bot();
