var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/test", function(req, res, next) {
  res.send({ test: 123 });
});

module.exports = router;
