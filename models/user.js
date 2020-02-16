const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: { type: String, unique: true },
  avatar: String,
  phone: String,
  role: String
});

userSchema.methods.validPassword = function(password) {
  return this.password === password;
};

userSchema.methods.validRole = function() {
  return this.role;
};

module.exports = mongoose.model("user", userSchema);
