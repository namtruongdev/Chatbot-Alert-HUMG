import User from '../models/users';
import News from '../models/news';
import Loves from '../models/loves';

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

  async updateOff(off) {
    return await User.updateMany({}, { off: off }, (err) => {
      if (err) {
        console.log(`Lỗi cập nhật trạng thái hỗ trợ: ${err}`);
      } else {
        console.log(`Đã cập nhật trạng thái hỗ trợ thành công`);
      }
    });
  }

  async updateInfo(uid, name, profile_pic, gender) {
    return await User.updateOne(
      { uid: uid },
      { name: name, profile_pic: profile_pic, gender: gender },
      (err) => {
        if (err) {
          console.log(`Lỗi cập nhật thông tin: ${err}`);
        } else {
          console.log(`${uid} đã cập nhật thông tin thành công`);
        }
      }
    );
  }
  async getSub() {
    return await User.find({ sub: 1 }).lean();
  }
  async getNews() {
    return await News.findOne({}).lean();
  }

  async getLove() {
    return await Loves.findOne({}).lean();
  }
}

module.exports = new DB();
