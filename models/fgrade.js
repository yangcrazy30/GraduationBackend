const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fgradeSchema = new Schema({
    courseId: String,
    studentId: String,
    grade: Number,
    status: { type: Boolean, default: false }
});

module.exports = mongoose.model("fgrade", fgradeSchema);
