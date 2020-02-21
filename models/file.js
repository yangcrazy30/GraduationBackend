const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    path: String,
});

module.exports = mongoose.model("file", fileSchema);
