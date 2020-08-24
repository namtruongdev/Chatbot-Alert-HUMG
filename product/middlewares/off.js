"use strict";

var _dbController = _interopRequireDefault(require("../controllers/dbController"));

var _users = _interopRequireDefault(require("../models/users"));

var _facebookAPI = _interopRequireDefault(require("../api/facebookAPI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const off = (req, res, next) => {
  const body = req.body;

  if (body.object === 'page') {
    body.entry.forEach(async function (entry) {
      let webhook_event = entry.messaging[0];
      const uid = webhook_event.sender.id;
      const infoUsers = await _facebookAPI.default.getInfoUsers(uid);
      const fullName = infoUsers.name;
      const name = infoUsers.first_name;
      const profile_pic = infoUsers.profile_pic;
      const gender = infoUsers.gender;
      const existUser = await _dbController.default.checkExistUser(uid);

      if (existUser && existUser.off === 1) {
        if (uid === '4605487302798502' || uid === '3059506464164072' || uid === '3158604217508280') {
          next();
          return;
        } // cmt


        console.log("T\u1EA5t c\u1EA3 ng\u01B0\u1EDDi d\xF9ng \u0111ang b\u1ECB ch\u1EB7n t\u1EA1m th\u1EDDi trong 15 ph\xFAt.");
        res.send("T\u1EA5t c\u1EA3 ng\u01B0\u1EDDi d\xF9ng \u0111ang b\u1ECB ch\u1EB7n t\u1EA1m th\u1EDDi trong 15 ph\xFAt.");
      } else if (existUser && !existUser.name) {
        await _dbController.default.updateInfo(uid, fullName, profile_pic, gender);
        next();
      } else if (!existUser) {
        const data = await new _users.default({
          uid: uid,
          name: fullName,
          firstName: name,
          profile_pic: profile_pic,
          gender: gender,
          msv: 'Trống',
          sub: 0,
          off: 0
        });
        data.save(err => {
          if (err) {
            console.log("L\u1ED7i: ".concat(err));
          } else {
            console.log("OK. Th\xEAm d\u1EEF li\u1EC7u th\xE0nh c\xF4ng cho sinh vi\xEAn t\xEAn l\xE0 ".concat(name));
          }
        });
        next();
      } else {
        next();
      }
    });
  } else {
    console.log('Lỗi 404');
    res.send('404');
  }
};

module.exports = {
  off: off
};