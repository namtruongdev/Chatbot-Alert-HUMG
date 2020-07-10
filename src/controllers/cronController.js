import cron from 'cron';
import DB from './dbController';
import fbAPI from '../api/facebookAPI';
import humgAPI from '../api/humgAPI';

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
