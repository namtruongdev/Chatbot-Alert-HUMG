"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const newSchema = new _mongoose.default.Schema({
  data: Array
});
module.exports = _mongoose.default.model('loves', newSchema);