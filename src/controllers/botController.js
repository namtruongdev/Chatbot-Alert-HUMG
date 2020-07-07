require('dotenv').config();
import fbAPI from '../api/facebookAPI';
import humgAPI from '../api/humgAPI';
import DB from '../controllers/dbController';

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
    const senderName = await fbAPI.getSenderName(sender_psid);
    const entities = this.firstEntity(message.nlp);
    const intent = this.getIntent(message.nlp);
    const chaoHoi = [
      `Hê hê, baaaaaby 😘`,
      `Chào ${senderName}, em tên là Hấu 🍉`,
      `Xin chào, ${senderName} cần Hấu 🍉 giúp gì nào?`,
      `Hế nhô ${senderName} kute phô mai que 🧀`,
      `Ơn giời ${senderName} đây rồi 😂`,
      `Ngoài kia gió thổi rì rào...Đầu tiên xin gửi lời chào thân thương 👋`,
      `Bữa nay Hấu 🍉 gửi lời chào. Cùng nhau tương tác ta càng thêm thân ❤`,
      `Konnichiwa ${senderName} 😊`,
    ];
    const notrain = [
      `Xin lỗi ${senderName} nhiều lắm. Hấu Hấu 🍉 còn nhỏ, chưa được Boss Trường dạy nhiều nên không biết trả lời câu này như nào 😥`,
      'Câu này hình như em chưa được dạy. Ahihi 😁',
      `Ui chu choa ${senderName} ơi, tự nhiên mắt Hấu 🍉 mờ quá không đọc được chữ 🙄`,
    ];

    const danglaytkb = [
      `Chờ Hấu 🍉 xíu nha... Hấu 🍉 đang lấy dữ liệu về cho ${senderName} 😋`,
      `Hấu 🍉 đang lấy dữ liệu vừa nóng vừa thổi về cho ${senderName} nè. Chờ xíu nhen...`,
    ];

    const thaydoimsv = [
      `❗ Chú ý: ${senderName} vừa thay đổi mã sinh viên của mình.`,
    ];

    const xemtkb = [`Đưa mã sinh viên của ${senderName} cho Hấu 🍉 nào?`];
    const daluumsv = [
      `🍉 đã nhớ Mã sinh viên của ${senderName} rồi nha. Ahihi, yên tâm 🍉 sẽ không bao giờ quên được đâu. Lúc nào ${senderName} cần xem lịch học thì cứ nhắn cho 🍉 biết nhé`,
    ];

    const sub = [
      `Cảm ơn ${senderName} đã tin tưởng 🍉. Từ giờ trở đi, mỗi sáng thức dậy 🍉 sẽ là người đầu tiên nhắn tin cho ${senderName}`,
    ];
    const huyDangKyRoiMa = [
      `${senderName} đã hủy đăng ký rồi mà, hủy gì mà hủy lắm vậy. ${senderName} hết thương 🍉 rồi à?`,
    ];
    const removeSub = [
      `Hủy thành công! Khi nào nhớ 🍉 thì hãy đăng ký nhận tin lại nha 😭`,
    ];
    const notInfo = [
      `${senderName} vui lòng cung cấp Mã sinh viên cho 🍉 trước khi muốn đăng ký nhận tin hàng ngày nhé`,
    ];
    const daHuyDangKyRoi = [
      `Xì... ${senderName} đã bao giờ đăng ký nhận tin đâu mà cứ đòi hủy vậy? Ghét 🍉 đến thế à 🙄`,
    ];
    const dadangkyroi = [
      `${senderName} đã đăng ký nhận tin trước đó rồi mà. Nếu ý của ${senderName} là muốn hủy đăng ký nhận tin thì ${senderName} có thể chat hoặc chọn "Hủy đăng ký" từ menu rồi gửi lại cho 🍉 nhé... Nhưng mà 🍉 sẽ buồn lắm khi ${senderName} làm vậy 😥`,
    ];
    const hauAnDuocKhong = [
      `Huhu... 🍉 là để yêu thương nhé ${senderName}, không có ăn được đâu 💔`,
    ];
    const hauCoTheLamGi = [
      `🍉 là một robot xinh gái siêu cấp vô địch được Boss Dương Nam Trường tạo ra vào ngày 08/07/2020 với nhiệm vụ nhắc nhở lịch học cho các anh em HUMGer và cũng có thể tâm sự với anh em nếu cần 😘`,
    ];

    const dataOfCheckId = await DB.checkData(sender_psid);

    if (intent && intent.confidence > 0.8) {
      await fbAPI.sendMarkSeen(sender_psid);
      await fbAPI.sendTyping(sender_psid);
      switch (intent.name) {
        case 'chaohoi':
          await fbAPI.callSendAPI(sender_psid, this.randomStr(chaoHoi));
          break;
        case 'msv':
          const msv = entities['msv:msv'][0].value;
          if (dataOfCheckId) {
            const idStudent = dataOfCheckId.msv;
            if (idStudent !== msv) {
              await DB.updateMsv(sender_psid, msv);
              await fbAPI.callSendAPI(sender_psid, this.randomStr(thaydoimsv));
            } else {
              await fbAPI.callSendAPI(
                sender_psid,
                `Lần trước ${senderName} có nói cho 🍉 mã sinh viên của ${senderName} là ${idStudent} rồi mà 🤣`
              );
            }
          } else {
            await fbAPI.callSendAPI(sender_psid, this.randomStr(daluumsv));
            await DB.write({
              id: sender_psid,
              firstName: senderName,
              msv: msv,
            });
          }
          break;
        case 'xemtkb':
          if (dataOfCheckId) {
            const msv = await DB.getMsv(sender_psid);
            const tkb = await humgAPI.getSchedule(msv, senderName, sender_psid);
            await fbAPI.callSendAPI(sender_psid, this.randomStr(danglaytkb));
            if (tkb.length > 72) {
              await fbAPI.callSendAPI(
                sender_psid,
                `Hôm nay ${humgAPI.getFullDate()}, ${senderName} phải học:`
              );
              await fbAPI.callSendAPI(sender_psid, tkb);
              await fbAPI.callSendAPI(
                sender_psid,
                `Nhớ đi học đầy đủ và đúng giờ nha... Yêu ${senderName} 3000 ❤`
              );
            } else {
              await fbAPI.callSendAPI(sender_psid, tkb);
            }
          } else {
            await fbAPI.callSendAPI(sender_psid, this.randomStr(xemtkb));
          }
          break;
        case 'sub':
          if (dataOfCheckId) {
            const subValue = dataOfCheckId.sub;
            switch (subValue) {
              case '0':
              case undefined:
                await DB.addSub(sender_psid);
                await fbAPI.callSendAPI(sender_psid, this.randomStr(sub));
                break;
              default:
                await fbAPI.callSendAPI(
                  sender_psid,
                  this.randomStr(dadangkyroi)
                );
            }
          } else {
            await fbAPI.callSendAPI(sender_psid, this.randomStr(notInfo));
          }
          break;
        case 'huyNhanTin':
          if (dataOfCheckId) {
            const subValue = dataOfCheckId.sub;
            switch (subValue) {
              case 1:
                await DB.removeSub(sender_psid);
                await fbAPI.callSendAPI(sender_psid, this.randomStr(removeSub));
                break;
              case 0:
                await fbAPI.callSendAPI(
                  sender_psid,
                  this.randomStr(huyDangKyRoiMa)
                );
                break;
              default:
                await fbAPI.callSendAPI(
                  sender_psid,
                  this.randomStr(daHuyDangKyRoi)
                );
            }
          } else {
            await fbAPI.callSendAPI(sender_psid, this.randomStr(notInfo));
          }
          break;
        case 'hauAnDuocKhong':
          await fbAPI.callSendAPI(sender_psid, this.randomStr(hauAnDuocKhong));
          break;
        case 'hauCoTheLamGi':
          await fbAPI.callSendAPI(sender_psid, this.randomStr(hauCoTheLamGi));
          break;
      }
    } else {
      await fbAPI.callSendAPI(sender_psid, this.randomStr(notrain));
    }
  }
  async handlePostback(sender_psid, message) {
    const senderName = await fbAPI.getSenderName(sender_psid);
    const xemtkb = [`Đưa mã sinh viên của ${senderName} cho Hấu 🍉 nào?`];
    const danglaytkb = [
      `Chờ Hấu 🍉 xíu nha... Hấu 🍉 đang lấy dữ liệu về cho ${senderName} 😋`,
      `Hấu 🍉 đang lấy dữ liệu vừa nóng vừa thổi về cho ${senderName} nè. Chờ xíu nhen...`,
    ];
    const sub = [
      `Cảm ơn ${senderName} đã tin tưởng 🍉. Từ giờ trở đi, mỗi sáng thức dậy 🍉 sẽ là người đầu tiên nhắn tin cho ${senderName}`,
    ];
    const removeSub = [
      `Hủy thành công! Khi nào nhớ 🍉 thì hãy đăng ký nhận tin lại nha 😭`,
    ];
    const notInfo = [
      `${senderName} vui lòng cung cấp Mã sinh viên cho 🍉 trước khi muốn đăng ký nhận tin hàng ngày nhé`,
    ];
    const dadangkyroi = [
      `${senderName} đã đăng ký nhận tin trước đó rồi mà. Nếu ý của ${senderName} là muốn hủy đăng ký nhận tin thì ${senderName} có thể chat hoặc chọn "Hủy đăng ký" từ menu rồi gửi lại cho 🍉 nhé... Nhưng mà 🍉 sẽ buồn lắm khi ${senderName} làm vậy 😥`,
    ];

    const daHuyDangKyRoi = [
      `Xì... ${senderName} đã bao giờ đăng ký nhận tin đâu mà cứ đòi hủy vậy? Ghét 🍉 đến thế à 🙄`,
    ];

    const huyDangKyRoiMa = [
      `${senderName} đã hủy đăng ký rồi mà, hủy gì mà hủy lắm vậy. ${senderName} hết thương 🍉 rồi à?`,
    ];

    const hauAnDuocKhong = [
      `Huhu... 🍉 là để yêu thương nhé ${senderName}, không có ăn được đâu 💔`,
    ];

    const hauCoTheLamGi = [
      `🍉 là một robot xinh gái siêu cấp vô địch được Boss Dương Nam Trường tạo ra vào ngày 08/07/2020 với nhiệm vụ nhắc nhở lịch học cho các anh em HUMGer và cũng có thể tâm sự với anh em nếu cần 😘`,
    ];

    const dataOfCheckId = await DB.checkData(sender_psid);
    await fbAPI.sendMarkSeen(sender_psid);
    await fbAPI.sendTyping(sender_psid);
    switch (message.payload) {
      case 'Xem lịch học 📅':
        if (dataOfCheckId) {
          const msv = await DB.getMsv(sender_psid);
          const tkb = await humgAPI.getSchedule(msv, senderName, sender_psid);
          await fbAPI.callSendAPI(sender_psid, this.randomStr(danglaytkb));
          if (tkb.length > 72) {
            await fbAPI.callSendAPI(
              sender_psid,
              `Hôm nay ${humgAPI.getFullDate()}, ${senderName} phải học:`
            );
            await fbAPI.callSendAPI(sender_psid, tkb);
            await fbAPI.callSendAPI(
              sender_psid,
              `Nhớ đi học đầy đủ và đúng giờ nha... Yêu ${senderName} 3000 ❤`
            );
          } else {
            await fbAPI.callSendAPI(sender_psid, tkb);
          }
        } else {
          await fbAPI.callSendAPI(sender_psid, this.randomStr(xemtkb));
        }
        break;
      case 'Đăng ký nhận tin ⏰':
        if (dataOfCheckId) {
          const subValue = dataOfCheckId.sub;
          switch (subValue) {
            case 0:
            case undefined:
              await DB.addSub(sender_psid);
              await fbAPI.callSendAPI(sender_psid, this.randomStr(sub));
              break;
            default:
              await fbAPI.callSendAPI(sender_psid, this.randomStr(dadangkyroi));
          }
        } else {
          await fbAPI.callSendAPI(sender_psid, this.randomStr(notInfo));
        }
        break;
      case 'Hủy nhận tin 😭':
        if (dataOfCheckId) {
          const subValue = dataOfCheckId.sub;
          switch (subValue) {
            case 1:
              await DB.removeSub(sender_psid);
              await fbAPI.callSendAPI(sender_psid, this.randomStr(removeSub));
              break;
            case 0:
              await fbAPI.callSendAPI(
                sender_psid,
                this.randomStr(huyDangKyRoiMa)
              );
              break;
            default:
              await fbAPI.callSendAPI(
                sender_psid,
                this.randomStr(daHuyDangKyRoi)
              );
          }
        } else {
          await fbAPI.callSendAPI(sender_psid, this.randomStr(notInfo));
        }
        break;
      case '🍉 có ăn được không?':
        await fbAPI.callSendAPI(sender_psid, this.randomStr(hauAnDuocKhong));
        break;
      case '🍉 có thể làm được gì?':
        await fbAPI.callSendAPI(sender_psid, this.randomStr(hauCoTheLamGi));
        break;
    }
  }
}

module.exports = new Bot();
