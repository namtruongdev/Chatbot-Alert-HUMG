import DB from '../controllers/dbController';
import User from '../models/users';
import fbAPI from '../api/facebookAPI';

const off = (req, res, next) => {
  const body = req.body;
  if (body.object === 'page') {
    body.entry.forEach(async function (entry) {
      let webhook_event = entry.messaging[0];
      const uid = webhook_event.sender.id;
      const infoUsers = await fbAPI.getInfoUsers(uid);
      const fullName = infoUsers.name;
      const name = infoUsers.first_name;
      const profile_pic = infoUsers.profile_pic;
      const gender = infoUsers.gender;
      const existUser = await DB.checkExistUser(uid);
      if (existUser && existUser.off === 1) {
        if (
          uid === '4605487302798502' ||
          uid === '3059506464164072' ||
          uid === '3158604217508280'
        ) {
          next();
          return;
        }

        // cmt
        console.log(`Tất cả người dùng đang bị chặn tạm thời trong 15 phút.`);
        res.send(`Tất cả người dùng đang bị chặn tạm thời trong 15 phút.`);
      } else if (existUser && !existUser.name) {
        await DB.updateInfo(uid, fullName, profile_pic, gender);
        next();
      } else if (!existUser) {
        const data = await new User({
          uid: uid,
          name: fullName,
          firstName: name,
          profile_pic: profile_pic,
          gender: gender,
          msv: 'Trống',
          sub: 0,
          off: 0,
        });
        data.save((err) => {
          if (err) {
            console.log(`Lỗi: ${err}`);
          } else {
            console.log(
              `OK. Thêm dữ liệu thành công cho sinh viên tên là ${name}`
            );
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

module.exports = { off: off };
