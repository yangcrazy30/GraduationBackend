const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userId: String,
  title: String,
  content: String,
  time: Date,
  like: Number,
});

module.exports = mongoose.model("post", postSchema);
