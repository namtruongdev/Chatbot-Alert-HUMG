import cron from 'cron';
import DB from './dbController';
import fbAPI from '../api/facebookAPI';
import humgAPI from '../api/humgAPI';
import confess from '../api/confessHUMG';

const cronJob = cron.CronJob;

class Job {
  constructor() {}
  async getAllMemberSub() {}
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
                'https://www.facebook.com/pg/humgzoo/posts/?ref=page_internal',
                'https://www.facebook.com/pg/humg.confession/posts/?ref=page_internal',
                'https://www.facebook.com/pg/humg.edu/posts/?ref=page_internal',
                'https://www.facebook.com/pg/DTNHSV/posts/?ref=page_internal',
                'https://www.facebook.com/pg/TuvancongtacsinhvienHUMG/posts/?ref=page_internal',
              ];
              let dem = 0;
              for (let i of page) {
                const news = await confess.getStatus(i);
                if (news.length !== 0) {
                  for (let i of news) {
                    await fbAPI.callSendAPIWithTag(
                      uid,
                      i.post + '...' + `\n\n📎 Bài viết gốc: ${i.url}`
                    );
                    if (i.image) {
                      await fbAPI.sendImageAPI(uid, i.image);
                    }
                  }
                } else {
                  dem++;
                }
              }
              if (dem === page.length) {
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
