const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homeworkSchema = new Schema({
  courseId: String,
  name: String,
  startTime: Date,
  endTime: Date,
  questions: Array
});

module.exports = mongoose.model("homework", homeworkSchema);
