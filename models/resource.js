const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  courseId: String,
  resourceTree: Array,
});

module.exports = mongoose.model("resource", resourceSchema);
