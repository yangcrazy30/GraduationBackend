var express = require("express");
var router = express.Router();
const fs = require('fs');
const path = require("path");


/* GET home page. */
router.get("/", function (req, res, next) {
  console.log('123');
  const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
  res.send(html)
});

module.exports = router;
