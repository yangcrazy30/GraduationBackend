const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gradeSchema = new Schema({
  homeworkId: String,
  studentId: String,
  grade: Number
});

module.exports = mongoose.model("grade", gradeSchema);
