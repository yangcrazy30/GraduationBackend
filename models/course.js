const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  teacherId: String,
  name: String,
  description: String,
  time: Array
});

module.exports = mongoose.model("course", courseSchema);
