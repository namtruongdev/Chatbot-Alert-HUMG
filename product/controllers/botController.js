"use strict";

var _facebookAPI = _interopRequireDefault(require("../api/facebookAPI"));

var _humgAPI = _interopRequireDefault(require("../api/humgAPI"));

var _ntvforex = _interopRequireDefault(require("../api/ntvforex"));

var _dbController = _interopRequireDefault(require("../controllers/dbController"));

var _users = _interopRequireDefault(require("../models/users"));

var _constants = _interopRequireDefault(require("../constants"));

var _wikiAPI = _interopRequireDefault(require("../api/wikiAPI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

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
    const infoUsers = await _facebookAPI.default.getInfoUsers(uid);
    const fullName = infoUsers.name;
    const name = infoUsers.first_name;
    const profile_pic = infoUsers.profile_pic;
    const gender = infoUsers.gender;
    const mess = new _constants.default(name, gender);
    const entities = this.firstEntity(message.nlp);
    const intent = this.getIntent(message.nlp);
    const txt = message.text;
    let replies;
    const existUser = await _dbController.default.checkExistUser(uid);

    if ((uid === '4605487302798502' || uid === '3059506464164072' || uid === '3158604217508280') && message.text.toLowerCase() === 'off') {
      await _facebookAPI.default.sendMarkSeen(uid);
      await _facebookAPI.default.sendTyping(uid);
      await _dbController.default.updateOff(1);
      setTimeout(async () => {
        await _dbController.default.updateOff(0);
      }, 1000 * 60 * 15);
      return await _facebookAPI.default.callSendAPI(uid, 'Đã tắt BOT tạm thời 15 phút cho tất cả mọi người. Gõ "on" để bật lại, nếu quên không bật lại thì 15 phút sau BOT sẽ tự bật.');
    }

    if ((uid === '4605487302798502' || uid === '3059506464164072' || uid === '3158604217508280') && message.text.toLowerCase() === 'on') {
      await _facebookAPI.default.sendMarkSeen(uid);
      await _facebookAPI.default.sendTyping(uid);
      await _dbController.default.updateOff(0);
      return await _facebookAPI.default.callSendAPI(uid, 'Đã bật BOT thành công. Gõ "off" nếu muốn tắt.');
    }

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

        case 'gg':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.gg));
          break;

        case 'hauAnComChua':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hauAnComChua));
          break;

        case 'hauAnGi':
          await _facebookAPI.default.callSendAPI(uid, mess.hauAnGi);
          break;

        case 'hauBietGi':
          replies = [{
            content_type: 'text',
            title: 'Mai học gì?',
            payload: 'maiHocGi',
            image_url: 'https://res.cloudinary.com/alerthumg/image/upload/v1595276010/icons8-school-backpack-48_aotytn.png'
          }, {
            content_type: 'text',
            title: 'Tin tức?',
            payload: 'tinTuc',
            image_url: 'https://res.cloudinary.com/alerthumg/image/upload/v1595276474/icons8-news-50_la5oo7.png'
          }, {
            content_type: 'text',
            title: 'Tâm sự?',
            payload: 'tamSu',
            image_url: 'https://res.cloudinary.com/alerthumg/image/upload/v1595276575/icons8-very-popular-topic-64_zjkfym.png'
          }, {
            content_type: 'text',
            title: 'Xem điểm thi?',
            payload: 'xemDiemThi',
            image_url: 'https://res.cloudinary.com/alerthumg/image/upload/v1595276214/icons8-square-number-48_hrlxeb.png'
          }, {
            content_type: 'text',
            title: 'Hủy nhận tin',
            payload: 'huyNhanTin',
            image_url: 'https://res.cloudinary.com/alerthumg/image/upload/v1595276650/icons8-calendar-delete-64_n2jwtv.png'
          }, {
            content_type: 'text',
            title: 'Xem lịch thi?',
            payload: 'xemLichThi',
            image_url: 'https://res.cloudinary.com/alerthumg/image/upload/v1595276360/icons8-test-passed-64_hrolpn.png'
          }];
          await _facebookAPI.default.quickReplies(uid, this.randomStr(mess.luaChonTinhNang), replies);
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

        case 'hauSinhNgayBaoNhieu':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hauSinhNgayBaoNhieu));
          break;

        case 'hauUongNuocChua':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hauUongNuocChua));
          break;

        case 'hoiBossDepTraiKhong':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hoiBossDepTraiKhong));
          break;

        case 'hoiCham':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hoiCham));
          break;

        case 'hoiGiaTinChi':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hoiGiaTinChi));
          break;

        case 'hoiGioiTinhHau':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hoiGioiTinhHau));
          break;

        case 'hoiTen':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hoiTen));
          break;

        case 'hoiThayHieuTruong':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hoiThayHieuTruong));
          await _facebookAPI.default.sendImageAPI(uid, "https://res.cloudinary.com/alerthumg/image/upload/v1595699985/a_hai_46_uhiztr.jpg");
          break;

        case 'hoiThongTinBoss':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hoiThongTinBoss));
          break;

        case 'hoinguoiyeu':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hoinguoiyeu));
          break;

        case 'humg':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.humg));
          break;

        case 'khenHau':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.khenHau));
          break;

        case 'khiemTon':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.khiemTon));
          break;

        case 'khongLamMaVanCoAn':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.khongLamMaVanCoAn));
          break;

        case 'khongNoiGi':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.khongNoiGi));
          break;

        case 'maiHocGi':
          if (existUser && existUser.msv !== 'Trống') {
            await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.danglaytkb));
            const msv = existUser.msv;
            const tkb = await _humgAPI.default.getScheduleNextDay(msv, name);

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
          let msv = entities['msv:msv'][0].value;
          const text = message.text;
          const msvMatch = text.match(/\d+/);

          if (msv !== msvMatch[0]) {
            msv = msvMatch[0];
          }

          if (existUser) {
            const idStudent = existUser.msv;

            if (idStudent !== msv && idStudent !== 'Trống') {
              await _dbController.default.updateMsv(uid, msv);
              await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.thaydoimsv));
            } else if (idStudent === 'Trống') {
              await _dbController.default.updateMsv(uid, msv);
              await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.daluumsv));
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
              sub: 0,
              off: 0
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

        case 'muonCoTien':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.muonCoTien));
          break;

        case 'nghiHeRoi':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.nghiHeRoi));
          break;

        case 'nhaiLaiHau':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.nhaiLaiHau));
          break;

        case 'nhoTenNguoiDung':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.nhoTenNguoiDung));
          break;

        case 'noiXauBoss':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.noiXauBoss));
          break;

        case 'nopHocPhiMuonKhongLenDiem':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.nopHocPhiMuonKhongLenDiem));
          break;

        case 'saiConCai':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.saiConCai));
          break;

        case 'saoConODay':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.saoConODay));
          break;

        case 'saoLaiThe':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.saoLaiThe));
          break;

        case 'thanBuon':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.thanBuon));
          break;

        case 'timConDapKhong':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.timConDapKhong));
          break;

        case 'treuGheo':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.treuGheo));
          break;

        case 'tucGian':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.tucGian));
          break;

        case 'voDuyen':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.voDuyen));
          break;

        case 'xemAnhGai':
          await _facebookAPI.default.callSendAPI(uid, mess.khongKhaDung);
          break;

        case 'xemtkb':
          if (existUser && existUser.msv !== 'Trống') {
            await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.danglaytkb));
            const msv = existUser.msv;
            const tkb = await _humgAPI.default.getSchedule(msv, name, uid);

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
            await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.daHuyDangKyRoi));
          }

          break;

        case 'hauAnDuocKhong':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.hauAnDuocKhong));
          break;

        case 'hauCoTheLamGi':
          replies = [{
            content_type: 'text',
            title: 'Mai học gì?',
            payload: 'maiHocGi',
            image_url: 'https://res.cloudinary.com/alerthumg/image/upload/v1595276010/icons8-school-backpack-48_aotytn.png'
          }, {
            content_type: 'text',
            title: 'Tin tức?',
            payload: 'tinTuc',
            image_url: 'https://res.cloudinary.com/alerthumg/image/upload/v1595276474/icons8-news-50_la5oo7.png'
          }, {
            content_type: 'text',
            title: 'Tâm sự?',
            payload: 'tamSu',
            image_url: 'https://res.cloudinary.com/alerthumg/image/upload/v1595276575/icons8-very-popular-topic-64_zjkfym.png'
          }, {
            content_type: 'text',
            title: 'Xem điểm thi?',
            payload: 'xemDiemThi',
            image_url: 'https://res.cloudinary.com/alerthumg/image/upload/v1595276214/icons8-square-number-48_hrlxeb.png'
          }, {
            content_type: 'text',
            title: 'Hủy nhận tin',
            payload: 'huyNhanTin',
            image_url: 'https://res.cloudinary.com/alerthumg/image/upload/v1595276650/icons8-calendar-delete-64_n2jwtv.png'
          }, {
            content_type: 'text',
            title: 'Xem lịch thi?',
            payload: 'xemLichThi',
            image_url: 'https://res.cloudinary.com/alerthumg/image/upload/v1595276360/icons8-test-passed-64_hrolpn.png'
          }];
          await _facebookAPI.default.quickReplies(uid, this.randomStr(mess.luaChonTinhNang), replies);
          break;

        case 'tamSu':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.tamSu));
          break;

        case 'thatKhong':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.thatKhong));
          break;

        case 'test':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.test));
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
          if (existUser && existUser.msv !== 'Trống') {
            await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.dangLayLichThi));
            const msv = existUser.msv;
            const lichThi = await _humgAPI.default.getTestSchedule(msv);

            if (lichThi) {
              const d = new Date();
              let result = "";

              for (let i of lichThi) {
                const date = i.date.split('/');

                if (parseInt(date[0]) === d.getDate() && parseInt(date[1]) === d.getMonth() + 1 && parseInt(date[2]) === d.getFullYear()) {
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
          if (existUser && existUser.msv !== 'Trống') {
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

        case 'xemTinTuc':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.dangLayTinTuc));
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

          break;

        case 'xemThoiTiet':
          await _facebookAPI.default.callSendAPI(uid, mess.khongKhaDung);
          break;

        case 'yeuCauDeoKinhCan':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.yeuCauDeoKinhCan));
          break;

        case 'yeuHau':
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.yeuHau));
          break;

        case 'wiki':
          let res = await _wikiAPI.default.query(encodeURI("".concat(message.text)));
          await _facebookAPI.default.callSendAPI(uid, res + " \uD83D\uDE0E");
          break;
      }
    } else if (!intent) {
      switch (txt) {
        case 'Danh sách tính năng 📝':
          const replies = [{
            content_type: 'text',
            title: 'Mai học gì?',
            payload: 'maiHocGi',
            image_url: 'https://res.cloudinary.com/alerthumg/image/upload/v1595276010/icons8-school-backpack-48_aotytn.png'
          }, {
            content_type: 'text',
            title: 'Tin tức?',
            payload: 'tinTuc',
            image_url: 'https://res.cloudinary.com/alerthumg/image/upload/v1595276474/icons8-news-50_la5oo7.png'
          }, {
            content_type: 'text',
            title: 'Tâm sự?',
            payload: 'tamSu',
            image_url: 'https://res.cloudinary.com/alerthumg/image/upload/v1595276575/icons8-very-popular-topic-64_zjkfym.png'
          }, {
            content_type: 'text',
            title: 'Xem điểm thi?',
            payload: 'xemDiemThi',
            image_url: 'https://res.cloudinary.com/alerthumg/image/upload/v1595276214/icons8-square-number-48_hrlxeb.png'
          }, {
            content_type: 'text',
            title: 'Hủy nhận tin',
            payload: 'huyNhanTin',
            image_url: 'https://res.cloudinary.com/alerthumg/image/upload/v1595276650/icons8-calendar-delete-64_n2jwtv.png'
          }, {
            content_type: 'text',
            title: 'Xem lịch thi?',
            payload: 'xemLichThi',
            image_url: 'https://res.cloudinary.com/alerthumg/image/upload/v1595276360/icons8-test-passed-64_hrolpn.png'
          }];
          await _facebookAPI.default.quickReplies(uid, this.randomStr(mess.luaChonTinhNang), replies);
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
        if (existUser && existUser.msv !== 'Trống') {
          await _facebookAPI.default.callSendAPI(uid, this.randomStr(mess.danglaytkb));
          const msv = existUser.msv;
          const tkb = await _humgAPI.default.getSchedule(msv, name, uid);

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

      case 'danh sách tính năng':
        const replies = [{
          content_type: 'text',
          title: 'Mai học gì?',
          payload: 'maiHocGi',
          image_url: 'https://res.cloudinary.com/alerthumg/image/upload/v1595276010/icons8-school-backpack-48_aotytn.png'
        }, {
          content_type: 'text',
          title: 'Tin tức?',
          payload: 'tinTuc',
          image_url: 'https://res.cloudinary.com/alerthumg/image/upload/v1595276474/icons8-news-50_la5oo7.png'
        }, {
          content_type: 'text',
          title: 'Tâm sự?',
          payload: 'tamSu',
          image_url: 'https://res.cloudinary.com/alerthumg/image/upload/v1595276575/icons8-very-popular-topic-64_zjkfym.png'
        }, {
          content_type: 'text',
          title: 'Xem điểm thi?',
          payload: 'xemDiemThi',
          image_url: 'https://res.cloudinary.com/alerthumg/image/upload/v1595276214/icons8-square-number-48_hrlxeb.png'
        }, {
          content_type: 'text',
          title: 'Hủy nhận tin',
          payload: 'huyNhanTin',
          image_url: 'https://res.cloudinary.com/alerthumg/image/upload/v1595276650/icons8-calendar-delete-64_n2jwtv.png'
        }, {
          content_type: 'text',
          title: 'Xem lịch thi?',
          payload: 'xemLichThi',
          image_url: 'https://res.cloudinary.com/alerthumg/image/upload/v1595276360/icons8-test-passed-64_hrolpn.png'
        }];
        await _facebookAPI.default.quickReplies(uid, this.randomStr(mess.luaChonTinhNang), replies);
        break;
    }
  }

}

module.exports = new Bot();