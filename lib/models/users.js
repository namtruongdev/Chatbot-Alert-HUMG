"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userSchema = new _mongoose.default.Schema({
  uid: String,
  firstName: String,
  msv: String,
  sub: Number
});
module.exports = _mongoose.default.model('users', userSchema);