const express = require("express");
const router = express.Router();
const course = require("../controllers/course");

router.post("/addcourse", course.addCourse);

router.get("/teachercourse", course.getTeacherCourses);

router.get("/course", course.getCourseById);

router.get("/courses", course.getCourse);

router.get("/courseids", course.getSubsCourseIds);

router.post("/subs", course.SubsCourse);

router.get("/subscourse", course.getSubsCourse);

router.post("/unsubs", course.UnSubsCourse);

router.post("/remove", course.deleteCourse);

router.post("/edit", course.editCourse);


router.get("/students", course.getCourseStudents);

router.post("/finalgrade", course.updateFinalGrade);

module.exports = router;
