const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gradeSchema = new Schema({
  homeworkId: String,
  studentId: String,
  grade: Number,
  status: String
});

module.exports = mongoose.model("grade", gradeSchema);
