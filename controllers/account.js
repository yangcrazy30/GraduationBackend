const User = require("../models/user");
const util = require("../utils/utils");

module.exports = {
  async login(req, res, next) {
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
      role: user.role,
      id: user._id
    });

    if (!user || !user.validPassword(password)) {
      util.handleResponse(res, "Login Error", null);
      return;
    } else {
      util.handleResponse(res, null, {
        token: jwt.token,
        id: user._id,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        username: user.username
      });
    }
  },

  async signup(req, res, next) {
    const username = req.body.username || "";
    const password = req.body.password || "";
    const email = req.body.email || "";
    const role = req.body.role || "student";

    let newuser = new User({
      username: username,
      password: password,
      email: email,
      avatar: "",
      role: role
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
      avatar: user.avatar,
      id: user._id
    };
    const jwt = res.jwt({
      username: user.username,
      email: user.email,
      password: user.password,
      role: user.role,
      id: user._id
    });
    util.handleResponse(res, null, { ...data, token: jwt.token });
  },

  async updateInfo(req, res) {
    console.log(req.body);
    const newuser = await User.findOneAndUpdate(
      { email: req.jwt.payload.email },
      { ...req.body }
    );
    util.handleResponse(res, null, {});
  },

  async getUserInfoByEmail(req, res) {
    const email = req.query.email;
    const user = await User.findOne({ email: email });

    util.handleResponse(res, null, user.toObject({ getters: true }));
  },

  async getInfoById(req, res) {
    const id = req.query.id;
    const user = await User.findById(id);

    util.handleResponse(res, null, user.toObject({ getters: true }));
  }
};
