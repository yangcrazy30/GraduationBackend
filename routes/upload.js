const multer = require("multer");
const express = require("express");
const router = express.Router();
const md5 = require("md5");
const upload = require("../controllers/upload");

const storage = multer.diskStorage({
  //存储的位置
  destination(req, file, cb) {
    cb(null, "uploads/avatar");
  },
  filename(req, file, cb) {
    const type = "." + file.originalname.replace(/.+\./, "");
    cb(null, md5(req.jwt.payload.email) + type);
  }
});
const myMulter = multer({ storage: storage });

router.post("/avatar", myMulter.single("avatar"), upload.uploadAvatar);

module.exports = router;
