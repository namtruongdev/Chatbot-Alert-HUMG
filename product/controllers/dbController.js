"use strict";

var _users = _interopRequireDefault(require("../models/users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DB {
  constructor() {}

  async checkExistUser(uid) {
    return await _users.default.findOne({
      uid: uid
    }).lean();
  }

  async updateMsv(uid, msv) {
    return await _users.default.updateOne({
      uid: uid
    }, {
      msv: msv
    }, err => {
      if (err) {
        console.log("Update l\u1ED7i: ".concat(err));
      } else {
        console.log("".concat(uid, " \u0111\xE3 update th\xE0nh c\xF4ng m\xE3 sinh vi\xEAn c\u1EE7a m\xECnh"));
      }
    });
  }

  async updateSub(uid, sub) {
    return await _users.default.updateOne({
      uid: uid
    }, {
      sub: sub
    }, err => {
      if (err) {
        console.log("L\u1ED7i c\u1EADp nh\u1EADt tr\u1EA1ng th\xE1i nh\u1EADn tin: ".concat(err));
      } else {
        console.log("".concat(uid, " \u0111\xE3 c\u1EADp nh\u1EADt tr\u1EA1ng th\xE1i nh\u1EADn tin th\xE0nh c\xF4ng"));
      }
    });
  }

  async getSub() {
    return await _users.default.find({
      sub: 1
    }).lean();
  }

}

module.exports = new DB();