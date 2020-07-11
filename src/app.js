require('dotenv').config();
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import express from 'express';
import initWebRoute from './routes/web';
import cron from './controllers/cronController';
// import fbAPI from './api/facebookAPI';
// import DB from './controllers/dbController';
// import NtvForex from './api/ntvforex';

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
  await cron.guiLichHoc();
  // await NtvForex.getForexNews();
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
