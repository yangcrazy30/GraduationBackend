const express = require("express");
const router = express.Router();
const course = require("../controllers/course");

router.post("/addcourse", course.addCourse);

router.get("/teachercourse", course.getTeacherCourses);

router.get("/course", course.getCourseById);

router.get("/courses", course.getCourse);

router.get("/courseids", course.getSubsCourseIds);

router.post("/studentcourse", course.updateSubsCourse);

router.get("/subscourse", course.getSubsCourse);

module.exports = router;
