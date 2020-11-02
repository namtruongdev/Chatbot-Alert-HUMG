"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _express = _interopRequireDefault(require("express"));

var _web = _interopRequireDefault(require("./routes/web"));

var _cronController = _interopRequireDefault(require("./controllers/cronController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

// import fbAPI from './api/facebookAPI';
// import DB from './controllers/dbController';
// import NtvForex from './api/ntvforex';
// import HUMGAPI from './api/humgAPI';
// import confess from './api/confessHUMG';
// import Wiki from './api/wikiAPI';
const app = (0, _express.default)();
const port = process.env.PORT_LOCAL || process.env.PORT;

_mongoose.default.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, err => {
  if (!err) {
    console.log('Mongodb connected successfully.');
  } else {
    console.log('Error connect');
  }
});

app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
(0, _web.default)(app);

(async () => {
  // await cron.test();
  // const test = await confess.getStatus(
  //   'https://www.facebook.com/pg/humg.confession/posts/?ref=page_internal'
  // );
  // console.log(test);
  // const data = await DB.getLove();
  // console.log(data);
  _cronController.default.radioTinhYeu();

  _cronController.default.cronNews();

  _cronController.default.guiLichHoc(); // cron.test();
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

app.listen(port, () => console.log("Chatbot listening at http://localhost:".concat(port)));