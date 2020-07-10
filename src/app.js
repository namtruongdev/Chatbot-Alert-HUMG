require('dotenv').config();
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import express from 'express';
import initWebRoute from './routes/web';
import cron from './controllers/cronController';
import fbAPI from './api/facebookAPI';

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
  // await fbAPI.getStarted();
  // await fbAPI.persistentMenu();

  await fbAPI.callSendAPIWithTag(
    4032267046815490,
    'Thông báo. Do chính sách của Facebook nhằm ngăn chặn tin nhắn rác nên Hấu 🍉 chỉ có thể nhắc lịch học hàng ngày cho những ai có tương tác với em trong vòng 2 ngày. Để tránh bỏ lỡ lịch học, mỗi sáng nhận được tin từ Hấu, bạn nên trả lời 1 câu gì đó.'
  );
  await fbAPI.callSendAPIWithTag(4032267046815490, 'Thân gửi ❤');
})();

app.listen(port, () =>
  console.log(`Chatbot listening at http://localhost:${port}`)
);
