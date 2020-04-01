const util = require("../utils/utils");
const Course = require("../models/course");
const Lesson = require("../models/lesson");
const User = require("../models/user");
const FGrade = require("../models/fgrade");
const fs = require('fs')

module.exports = {
  async getCourse(req, res) {
    const courseName = req.query.courseName;
    const config = req.query.config;
    let courses = await Course.find({ name: new RegExp(courseName) })
      .skip(parseInt((config.page - 1) * config.size))
      .limit(+config.size);
    courses = courses.map(item => item.toObject({ getters: true }))
    util.handleResponse(res, null, courses);
  },

  async getTeacherCourses(req, res) {
    const course = await Course.find({ teacher: req.jwt.payload.email });

    util.handleResponse(res, null, {
      courses: course.map(v => v.toObject({ getters: true }))
    });
  },

  async getCourseById(req, res) {
    const id = req.query.id;
    const course = await Course.findById(id);
    !course && util.handleResponse(res, null, {});
    course &&
      util.handleResponse(res, null, course.toObject({ getters: true }));
  },

  async addCourse(req, res, next) {
    const courseinfo = req.body;
    let course = new Course(courseinfo);
    await course.save();

    let path = 'uploads/resource/' + course._id + '/root';

    if (!fs.existsSync(path)) {
      fs.mkdir(path, { recursive: true }, (err) => {
        if (err) throw err
      })
    }

    util.handleResponse(res, null, {});
  },

  async deleteCourse() { },

  async SubsCourse(req, res) {
    const courseid = req.body.id;
    const userid = req.jwt.payload.id;
    let lesson = await Lesson.findOne({ studentId: userid });
    if (lesson) {
      if (!lesson.courseIds.includes(courseid)) {
        lesson.courseIds = [...lesson.courseIds, courseid];
      }
    } else {
      lesson = new Lesson({
        studentId: userid,
        courseIds: [courseid]
      });
    }
    await lesson.save();

    let fgrade = new FGrade({
      courseId: courseid,
      studentId: userid,
      grade: 0,
      status: false
    });
    await fgrade.save();

    util.handleResponse(res, null, {});
  },

  async UnSubsCourse(req, res) {
    const courseid = req.body.courseid;
    const studentid = req.body.studentid;
    let lesson = await Lesson.findOne({ studentId: studentid });
    if (lesson) {
      let len = lesson.courseIds.length;
      for (let i = 0; i < len; i++) {
        let cur = lesson.courseIds.shift();
        if (cur !== courseid) {
          lesson.courseIds.push(cur);
        }
      }
    }
    await lesson.save();

    await FGrade.deleteOne({ courseId: courseid, studentId: userid });
    util.handleResponse(res, null, {});

  },

  async getSubsCourseIds(req, res) {
    const userid = req.jwt.payload.id;
    const lesson = await Lesson.findOne({ studentId: userid });
    if (!lesson) {
      util.handleResponse(res, null, { courseIds: [] });
    } else {
      util.handleResponse(res, null, { courseIds: lesson.courseIds });
    }
  },

  async getSubsCourse(req, res) {
    const userid = req.jwt.payload.id;
    const lesson = await Lesson.findOne({ studentId: userid });
    const courseIds = lesson ? lesson.courseIds : [];
    const course = await Course.find({ _id: { $in: courseIds } });
    util.handleResponse(res, null, {
      courses: course.map(v => v.toObject({ getters: true }))
    });
  },

  async getCourseStudents(req, res) {
    const courseId = req.query.courseId;
    const config = req.query.config;
    const lesson = await Lesson.find({ courseIds: { $elemMatch: { $eq: courseId } } }, { studentId: 1, _id: 0 }).skip(parseInt((config.page - 1) * config.size))
      .limit(+config.size);
    const studentIds = lesson.map(value => value.studentId);
    let students = await User.find({ _id: { $in: studentIds } }, { password: 0, avatar: 0 });
    students = students.map(v => v.toObject({ getters: true }));
    let result = [];
    for (let student of students) {
      let grade = await FGrade.findOne({ courseId: courseId, studentId: student.id }, { grade: 1, status: 1, _id: 0 });
      result.push({ ...student, grade: grade.grade, status: grade.status });
    }
    util.handleResponse(res, null, result);
  },

  async updateFinalGrade(req, res) {
    const courseid = req.body.courseid;
    const studentid = req.body.studentid;
    const grade = req.body.grade;
    await FGrade.findOneAndUpdate({ courseId: courseid, studentId: studentid }, { status: true, grade: grade });
    util.handleResponse(res, null, {});
  }
};
