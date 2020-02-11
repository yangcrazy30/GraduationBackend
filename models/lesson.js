const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  studentId: String,
  courseIds: Array
});

module.exports = mongoose.model("lesson", lessonSchema);
