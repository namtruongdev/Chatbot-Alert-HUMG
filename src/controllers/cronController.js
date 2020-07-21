import cron from 'cron';
import DB from './dbController';
import fbAPI from '../api/facebookAPI';
import humgAPI from '../api/humgAPI';
import confess from '../api/confessHUMG';

const cronJob = cron.CronJob;

class Job {
  constructor() {}
  async guiLichHoc() {
    const job = new cronJob(
      '0 0 5 * * *',
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
                    if (elements.length < 10) {
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
                    } else {
                      break;
                    }
                  }
                }
              }
              if (elements.length !== 0) {
                await fbAPI.sendTemplateGeneric(uid, elements);
              } else {
                await fbAPI.callSendAPIWithTag(
                  uid,
                  `Chán trường thật sự 😅. Hôm nay không có cái tin hót hay cái drama nào để mà hóng cả ${name} ơi!`
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
}

module.exports = new Job();
