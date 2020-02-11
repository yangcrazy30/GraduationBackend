const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  email: String,
  avatar: String,
  phone: String
});

module.exports = mongoose.model("student", studentSchema);
