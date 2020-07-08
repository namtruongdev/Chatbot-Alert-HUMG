import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  uid: String,
  firstName: String,
  msv: String,
  sub: Number,
});

module.exports = mongoose.model('users', userSchema);
