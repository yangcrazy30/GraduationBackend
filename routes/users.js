const express = require("express");
const router = express.Router();
const account = require("../controllers/account");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/login", account.login);

router.post("/signup", account.signup);

router.get("/userinfo", account.getInfo);

router.post("/userinfo", account.updateInfo);

router.get("/uibyemail", account.getUserInfoByEmail);

router.get("/uibyid", account.getInfoById);

module.exports = router;
