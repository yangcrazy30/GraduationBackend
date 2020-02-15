const util = require("../utils/utils");
const md5 = require("md5");
const User = require("../models/user");
module.exports = {
  async uploadAvatar(req, res) {
    const ip = "http://127.0.0.1:3000/avatar/";
    const userinfo = req.jwt.payload;
    const imgUrl =
      ip + md5(userinfo.email) + util.getFileType(req.file.originalname);
    await User.findOneAndUpdate({ email: userinfo.email }, { avatar: imgUrl });
    util.handleResponse(res, null, imgUrl);
  }
};
