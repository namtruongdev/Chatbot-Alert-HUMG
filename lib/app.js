"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _express = _interopRequireDefault(require("express"));

var _web = _interopRequireDefault(require("./routes/web"));

var _cronController = _interopRequireDefault(require("./controllers/cronController"));

var _facebookAPI = _interopRequireDefault(require("./api/facebookAPI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

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
  await _cronController.default.guiLichHoc(); // await fbAPI.getStarted();
  // await fbAPI.persistentMenu();

  await _facebookAPI.default.callSendAPIWithTag(4032267046815490, 'Thông báo. Do chính sách của Facebook nhằm ngăn chặn tin nhắn rác nên Hấu 🍉 chỉ có thể nhắc lịch học hàng ngày cho những ai có tương tác với em trong vòng 2 ngày. Để tránh bỏ lỡ lịch học, mỗi sáng nhận được tin từ Hấu, bạn nên trả lời 1 câu gì đó.');
  await _facebookAPI.default.callSendAPIWithTag(4032267046815490, 'Thân gửi ❤');
})();

app.listen(port, () => console.log("Chatbot listening at http://localhost:".concat(port)));