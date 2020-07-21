require('dotenv').config();
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import express from 'express';
import initWebRoute from './routes/web';
import cron from './controllers/cronController';
// import fbAPI from './api/facebookAPI';
// import DB from './controllers/dbController';
// import NtvForex from './api/ntvforex';
// import HUMGAPI from './api/humgAPI';
// import confess from './api/confessHUMG';
// import Wiki from './api/wikiAPI';

const app = express();
const port = process.env.PORT_LOCAL || process.env.PORT;

mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log('Mongodb connected successfully.');
    } else {
      console.log('Error connect');
    }
  }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

initWebRoute(app);
(async () => {
  cron.guiLichHoc();
  cron.cronNews();

  // const test = await confess.getStatus(
  //   'https://www.facebook.com/pg/DTNHSV/posts/?ref=page_internal'
  // );
  // await fbAPI.sendTemplateGeneric(
  //   4605487302798502,
  //   `Thấy em liền thả tym
  // Penhouse ở phố Viên...`,
  //   'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/109261485_1659705807513253_3777689744595877630_n.jpg?_nc_cat=111&_nc_sid=8024bb&_nc_ohc=9VPWeQbAP5gAX90HWFy&_nc_ht=scontent.fhan2-2.fna&oh=061844597631b6c3748faf147ad260ce&oe=5F3C1B86',
  //   'https://www.facebook.com/humg.confession/photos/a.163861677097681/1659705804179920'
  // );
  // console.log(test);
  // await NtvForex.getForexNews();
  // await HUMGAPI.getPoint(1721050381);
  // await fbAPI.getStarted();
  // await fbAPI.persistentMenu();
  // const allMemberSub = await DB.getSub();
  // for (let i of allMemberSub) {
  //   let uid = i.uid;
  //   await fbAPI.callSendAPIWithTag(
  //     uid,
  //     'Thông báo quan trọng về tính năng nhận tin lịch học hàng ngày. Hấu 🍉 xin mời mọi người đọc để không bị bỏ lỡ thông báo: https://www.facebook.com/alertHUMG/photos/a.129148562170965/129142742171547/?type=3&theater'
  //   );
  // }
})();

app.listen(port, () =>
  console.log(`Chatbot listening at http://localhost:${port}`)
);
