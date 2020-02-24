const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const jwt = require("jwt-express");
const cors = require("cors");
const config = require("./config");
const responsePlugin = require("./middleware/responsePlugin");
mongoose.connect(config.mongodb.url, config.mongodb.options);

var db = mongoose.connection;

db.on("open", function () {
  console.log("db success");
});

db.on("error", function () {
  console.log("db error");
});

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const uploadRouter = require("./routes/upload");
const courseRouter = require("./routes/course");
const bbsRouter = require("./routes/bbs");
const resourceRouter = require("./routes/resource");
const homeworkRouter = require("./routes/homework");
const chatRouter = require("./routes/chat");

app.use(logger("dev"));
app.use(responsePlugin);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors(config.cors.options));
app.use(jwt.init(config.jwt.secret, config.jwt.options));

app.use(express.static("public"));
app.use(express.static("uploads"));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/upload", uploadRouter);
app.use("/course", courseRouter);
app.use("/bbs", bbsRouter);
app.use("/resource", resourceRouter);
app.use("/homework", homeworkRouter);
app.use("/chat", chatRouter);


module.exports = app;
