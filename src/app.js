require('dotenv').config();
import bodyParser from 'body-parser';
import express from 'express';
import initWebRoute from './routes/web';
import cron from './controllers/cronController';

const app = express();
const port = process.env.PORT_LOCAL;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

initWebRoute(app);
(async () => {
  await cron.guiLichHoc();
})();

app.listen(port, () =>
  console.log(`Chatbot listening at http://localhost:${port}`)
);
