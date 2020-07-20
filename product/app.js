"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _express = _interopRequireDefault(require("express"));

var _web = _interopRequireDefault(require("./routes/web"));

var _cronController = _interopRequireDefault(require("./controllers/cronController"));

var _facebookAPI = _interopRequireDefault(require("./api/facebookAPI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

// import DB from './controllers/dbController';
// import NtvForex from './api/ntvforex';
// import HUMGAPI from './api/humgAPI';
// import confess from './api/confessHUMG';
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
  await _cronController.default.guiLichHoc(); // const test = await confess.getStatus(
  //   'https://www.facebook.com/pg/DTNHSV/posts/?ref=page_internal'
  // );
  // console.log(test);
  // await NtvForex.getForexNews();
  // await HUMGAPI.getPoint(1721050381);
  // await fbAPI.getStarted();

  await _facebookAPI.default.persistentMenu(); // const allMemberSub = await DB.getSub();
  // for (let i of allMemberSub) {
  //   let uid = i.uid;
  //   await fbAPI.callSendAPIWithTag(
  //     uid,
  //     'Thông báo quan trọng về tính năng nhận tin lịch học hàng ngày. Hấu 🍉 xin mời mọi người đọc để không bị bỏ lỡ thông báo: https://www.facebook.com/alertHUMG/photos/a.129148562170965/129142742171547/?type=3&theater'
  //   );
  // }
})();

app.listen(port, () => console.log("Chatbot listening at http://localhost:".concat(port)));