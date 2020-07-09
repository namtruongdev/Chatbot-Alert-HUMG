import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  uid: String,
  name: String,
  firstName: String,
  profile_pic: String,
  gender: String,
  msv: String,
  sub: Number,
});

module.exports = mongoose.model('users', userSchema);
