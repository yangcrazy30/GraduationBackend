const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  email: String,
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
