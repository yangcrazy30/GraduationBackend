const express = require("express");
const router = express.Router();
const chat = require("../controllers/chat")

router.get("/receive", chat.getChatMessage);

router.post("/send", chat.sendMessage);

router.get("/sender", chat.getSenderInfo);

module.exports = router;
