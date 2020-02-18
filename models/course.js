const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  teacher: String,
  name: String,
  description: String,
  startDay: Date,
  endDay: Date,
  imageUrl: String
});

module.exports = mongoose.model("course", courseSchema);
