import mongoose from 'mongoose';

const newSchema = new mongoose.Schema({
  data: Array,
});

module.exports = mongoose.model('news', newSchema);
