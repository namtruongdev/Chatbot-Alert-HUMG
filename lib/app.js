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
  await _cronController.default.guiLichHoc();
  await _facebookAPI.default.getStarted();
  await _facebookAPI.default.persistentMenu();
})();

app.listen(port, () => console.log("Chatbot listening at http://localhost:".concat(port)));