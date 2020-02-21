const util = require("../utils/utils");
const Course = require("../models/course");
const Lesson = require("../models/lesson");
const fs = require('fs')

module.exports = {
  async getCourse(req, res) {
    const config = req.query.config;
    let courses = await Course.find()
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

  async updateSubsCourse(req, res) {
    const courseid = req.body.id;
    const userid = req.jwt.payload.id;
    let lesson = await Lesson.findOne({ studentId: userid });
    if (lesson) {
      lesson.courseIds = [...lesson.courseIds, courseid];
    } else {
      lesson = new Lesson({
        studentId: userid,
        courseIds: [courseid]
      });
    }
    await lesson.save();

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
  }
};
