const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  courseId: String,
  content: String,
  path: String
});

module.exports = mongoose.model("resource", resourceSchema);
