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
  await fbAPI.getStarted();
  await fbAPI.persistentMenu();
})();

app.listen(port, () =>
  console.log(`Chatbot listening at http://localhost:${port}`)
);
