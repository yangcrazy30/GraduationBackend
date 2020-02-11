var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

const config = require("./config");

mongoose.connect(config.mongodb.url, config.mongodb.options);

var db = mongoose.connection;

db.on("open", function() {
  console.log("db success");
});

db.on("error", function() {
  console.log("db error");
});

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
