const User = require("../models/user");
const util = require("../utils/utils");

module.exports = {
  async login(req, res, next) {
    // const role = req.body.role || "student";
    const email = req.body.email || "";
    const password = req.body.password || "";

    const user = await User.findOne({
      email: email
    });

    if (!user) {
      util.handleResponse(res, "No such user", null);
      return;
    }

    const jwt = res.jwt({
      username: user.username,
      email: user.email,
      password: user.password,
      role: user.role
    });

    if (!user || !user.validPassword(password)) {
      util.handleResponse(res, "Password Eroor", null);
      return;
    } else {
      util.handleResponse(res, null, {
        token: jwt.token,
        id: user._id,
        email: user.email,
        role: user.email,
        avatar: user.avatar
      });
    }
  },

  async signup(req, res, next) {
    const username = req.body.username || "";
    const password = req.body.password || "";
    const email = req.body.email || "";
    const role = req.body.role || "student";
    const phone = req.body.phone || "";

    let newuser = new User({
      username: username,
      password: password,
      email: email,
      avatar: "",
      role: role,
      phone: phone
    });

    await newuser.save();
    util.handleResponse(res, null, {});
  },

  async getInfo(req, res) {
    const user = await User.findOne({ email: req.jwt.payload.email });
    const data = {
      role: user.role,
      username: user.username,
      email: user.email,
      avatar: user.avatar
    };
    util.handleResponse(res, null, data);
  }
};
