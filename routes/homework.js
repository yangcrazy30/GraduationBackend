const express = require("express");
const router = express.Router();
const homework = require("../controllers/homework");

router.post("/newhomework", homework.addHomeWork);

router.get("/homework", homework.getHomework);

router.get("/status", homework.getStudentHomeWorkStatus);

router.get("/getbyid", homework.getHomeWorkById);

router.post('/submit', homework.submitHomework);

module.exports = router;
