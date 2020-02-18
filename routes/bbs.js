const express = require("express");
const router = express.Router();
const bbs = require("../controllers/bbs")

router.get("/posts", bbs.getPost);

router.post("/post", bbs.newPost);

router.get("/count", bbs.getPostCount);

router.get("/post", bbs.getPostById);

router.get("/reply", bbs.getPostReply);

router.get("/rcount", bbs.getPostReplyCount);

router.post("/reply", bbs.replyPost);

module.exports = router;
