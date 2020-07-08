import User from '../models/users';

class DB {
  constructor() {}

  async checkExistUser(uid) {
    return await User.findOne({ uid: uid }).lean();
  }

  async updateMsv(uid, msv) {
    return await User.updateOne({ uid: uid }, { msv: msv }, (err) => {
      if (err) {
        console.log(`Update lỗi: ${err}`);
      } else {
        console.log(`${uid} đã update thành công mã sinh viên của mình`);
      }
    });
  }
  async updateSub(uid, sub) {
    return await User.updateOne({ uid: uid }, { sub: sub }, (err) => {
      if (err) {
        console.log(`Lỗi cập nhật trạng thái nhận tin: ${err}`);
      } else {
        console.log(`${uid} đã cập nhật trạng thái nhận tin thành công`);
      }
    });
  }
  async getSub() {
    return await User.find({ sub: 1 }).lean();
  }
}

module.exports = new DB();
