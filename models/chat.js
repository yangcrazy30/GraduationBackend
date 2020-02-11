const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  fromId: String,
  toId: String,
  content: String,
  time: Date
});

module.exports = mongoose.model("chat", chatSchema);
