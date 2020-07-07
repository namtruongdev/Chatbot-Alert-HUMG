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
            const id = i.id;
            const tkb = await humgAPI.getSchedule(msv, name, id);
            if (tkb.length > 72) {
              await fbAPI.callSendAPI(
                id,
                `Hôm nay ${humgAPI.getFullDate()}, ${name} phải học:`
              );
              await fbAPI.callSendAPI(id, tkb);
              await fbAPI.callSendAPI(
                id,
                `Nhớ đi học đầy đủ và đúng giờ nha... Yêu ${name} 3000 ❤`
              );
            } else {
              await fbAPI.callSendAPI(id, tkb);
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
