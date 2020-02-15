const util = require("../utils/utils");
const md5 = require("md5");
const User = require("../models/user");
module.exports = {
  async uploadAvatar(req, res) {
    const ip = "http://127.0.0.1:3000/avatar/";
    const imgUrl =
      ip + md5(req.jwt.payload.email) + util.getFileType(req.file.originalname);
    util.handleResponse(res, null, imgUrl);
  }
};
