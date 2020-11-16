import cron, { CronJob } from 'cron';
import DB from './dbController';
import fbAPI from '../api/facebookAPI';
import humgAPI from '../api/humgAPI';
import confess from '../api/confessHUMG';
import News from '../models/news';
// import Loves from '../models/loves';

const cronJob = cron.CronJob;

class Job {
  constructor() {}
  static async getNews() {
    const page = [
      'https://www.facebook.com/pg/TuvancongtacsinhvienHUMG/posts/?ref=page_internal',
      'https://www.facebook.com/pg/DTNHSV/posts/?ref=page_internal',
      'https://www.facebook.com/pg/humg.edu/posts/?ref=page_internal',
      'https://www.facebook.com/pg/humg.confession/posts/?ref=page_internal',
      'https://www.facebook.com/pg/hvtcconfessions/posts/?ref=page_internal',
      'https://www.facebook.com/pg/humgzoo/posts/?ref=page_internal',
      'https://www.facebook.com/pg/AOFTroll/posts/?ref=page_internal',
    ];
    const elements = [];
    for (let i of page) {
      const news = await confess.getStatus(i);
      if (news.length !== 0) {
        for (let i of news) {
          let imgUrl = i.image
            ? i.image
            : 'https://res.cloudinary.com/alerthumg/image/upload/v1595312973/45783517_2009013512520434_753951418271924224_n_bin8dy.png';

          elements.push({
            title: i.post,
            image_url: imgUrl,
            subtitle: 'Phóng viên Hấu 🍉',
            default_action: {
              type: 'web_url',
              url: i.url,
            },
            buttons: [
              {
                type: 'web_url',
                url: i.url,
                title: 'Xem Thêm',
              },
            ],
          });
        }
      }
    }
    return elements;
  }
  async guiLichHoc() {
    const job = new cronJob(
      '0 0 5 * * *',
      // '1 * * * * *',
      async function () {
        const allMemberSub = await DB.getSub();
        if (allMemberSub.length !== 0) {
          for (let i of allMemberSub) {
            const msv = i.msv;
            const name = i.firstName;
            const uid = i.uid;
            const tkb = await humgAPI.getSchedule(msv, name, uid);
            if (tkb.length > 72) {
              await fbAPI.callSendAPIWithTag(
                uid,
                `Hôm nay ${humgAPI.getFullDate()}, ${name} phải học:`
              );
              await fbAPI.callSendAPIWithTag(uid, tkb);
              await fbAPI.callSendAPIWithTag(
                uid,
                `Nhớ đi học đầy đủ và đúng giờ nha... Yêu ${name} 3000 ❤`
              );
            } else {
              await fbAPI.callSendAPIWithTag(uid, tkb);
              await fbAPI.callSendAPIWithTag(
                uid,
                `Tuy được nghỉ học nhưng vẫn phải cập nhật tin tức nha ${name}... Hãy cùng 🍉 lượn 1 vòng quanh Mỏ xem có những tin gì HOT nhé 😝`
              );
              let elements = await DB.getNews();
              if (elements.data.length !== 0) {
                if (elements.data.length <= 10) {
                  await fbAPI.sendTemplateGeneric(uid, elements.data);
                } else {
                  let tepm1 = elements.data.splice(10);
                  await fbAPI.sendTemplateGeneric(uid, tepm1);
                  let temp2 = elements.data.splice(0, 10);
                  if (temp2.length <= 10) {
                    await fbAPI.sendTemplateGeneric(uid, temp2);
                  } else {
                    temp2 = temp2.splice(10);
                    await fbAPI.sendTemplateGeneric(uid, temp2);
                  }
                }
              } else {
                await fbAPI.callSendAPIWithTag(
                  uid,
                  `Chán trường thật sự 😅. Hôm nay không có bất cứ tin nào để hóng cả ${name} ơi!`
                );
              }
            }
          }
        }
      },
      null,
      true,
      null
    );
    job.start();
  }
  async cronNews() {
    const job = new cronJob(
      '0 */15 * * * *',
      async function () {
        let data = await Job.getNews();
        await News.updateOne({}, { data: data }, (err) => {
          if (err) {
            console.log(`Update lỗi: ${err}`);
          } else {
            console.log(`đã update tin tức thành công`);
          }
        });
      },
      null,
      true,
      null
    );
    job.start();
  }

  async radioTinhYeu() {
    const job = new CronJob(
      '0 45 15 * * *',
      async () => {
        const uid = '3158604217508280';
        const data = await DB.getLove();
        const type = data.data[0].type;
        const sender = data.data[0].sender;
        const reciver = data.data[0].reciver;
        const title = data.data[0].title;
        const content = data.data[0].content;
        const message = data.data[0].message;
        await fbAPI.callSendAPIWithTag(
          uid,
          '[RADIO TÌNH YÊU]: Đã đến 15h45 rồi Linh ơi, cùng Hấu xem chương trình Radio Tình Yêu hôm nay có gì nhé!'
        );
        await fbAPI.callSendAPIWithTag(
          uid,
          `Whoa! Hôm nay là 1 ${type} với tựa đề "${title}" được gửi từ ${sender} đến ${reciver} với lời nhắn: "${message}".`
        );
        await fbAPI.callSendAPIWithTag(uid, content);
      },
      null,
      true,
      null
    );
    job.start();
  }
  async test() {
    let data = await Job.getNews();
    await News.updateMany({}, { data: data }, (err) => {
      if (err) {
        console.log(`Update lỗi: ${err}`);
      } else {
        console.log(`đã update tin tức thành công`);
      }
    });
  }
}

module.exports = new Job();
