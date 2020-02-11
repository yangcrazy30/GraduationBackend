const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homeworkSchema = new Schema({
  courseId: String,
  time: Array,
  description: String
});

module.exports = mongoose.model("homework", homeworkSchema);
