const express = require("express");
const router = express.Router();
const bbs = require("../controllers/bbs")


router.post("/post", bbs.newPost);

router.get("/count", bbs.getPostCount);

router.get("/post", bbs.getPostById);

router.get("/reply", bbs.getPostReply);

router.get("/rcount", bbs.getPostReplyCount);

router.post("/reply", bbs.replyPost);

router.get("/search", bbs.getPostByName);

module.exports = router;
