const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const replytSchema = new Schema({
  postId: String,
  fromId: String,
  toId: String,
  content: String,
  time: Date,
  like: Number
});

module.exports = mongoose.model("reply", replytSchema);
