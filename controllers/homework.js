const util = require("../utils/utils");
const HomeWork = require("../models/homework");
const Grade = require("../models/grade");
module.exports = {
    async addHomeWork(req, res) {
        const { name, courseId, questions, startTime, endTime } = req.body;
        let newHomework = new HomeWork({
            name: name,
            courseId: courseId,
            questions: questions,
            startTime: startTime,
            endTime: endTime
        })
        await newHomework.save();
        util.handleResponse(res, null, {});
    },
    async getHomework(req, res) {
        const courseId = req.query.courseId;
        let homeworks = await HomeWork.find({ courseId: courseId });
        homeworks = homeworks.map(value => value.toObject({ getters: true }));
        for (let hw of homeworks) {
            hw.startTime = util.formatDate(new Date(hw.startTime), 'yyyy-MM-dd');
            hw.endTime = util.formatDate(new Date(hw.endTime), 'yyyy-MM-dd');
        }
        util.handleResponse(res, null, homeworks);
    },
    async getHomeWorkById(req, res) {
        const homeworkId = req.query.homeworkId;
        const homework = await HomeWork.findById(homeworkId);
        homework.startTime = util.formatDate(new Date(homework.startTime), 'yyyy-MM-dd');
        homework.endTime = util.formatDate(new Date(homework.endTime), 'yyyy-MM-dd');
        let result = {
            id: homework._id,
            name: homework.name,
            startTime: util.formatDate(new Date(homework.startTime), 'yyyy-MM-dd'),
            endTime: util.formatDate(new Date(homework.endTime), 'yyyy-MM-dd'),
            questions: homework.questions
        }
        util.handleResponse(res, null, result);
    },
    async getStudentHomeWorkStatus(req, res) {
        const homeworkId = req.query.homeworkId;
        const studentId = req.jwt.payload.id;
        let grade = await Grade.findOne({ homeworkId: homeworkId, studentId: studentId });
        let homework = await HomeWork.findById(homeworkId);
        let now = new Date();
        now = now.getTime();
        let deadline = homework.endTime.getTime();
        console.log(now);
        console.log(deadline);
        if (!grade) {
            let newGrade = new Grade({
                studentId: studentId,
                homeworkId: homeworkId,
                grade: 0,
                status: now > deadline ? '已过期' : '未完成'
            });
            await newGrade.save();
            util.handleResponse(res, null, newGrade.toObject({ getters: true }));
        } else {
            if (now > deadline) {
                console.log('123');
                let newgrade = await Grade.findOneAndUpdate({ homeworkId: homeworkId, studentId: studentId }, { grade: 0, status: '已过期' });
                util.handleResponse(res, null, newgrade.toObject({ getters: true }))
            }
            else {
                util.handleResponse(res, null, grade.toObject({ getters: true }));
            }
        }
    },
    async submitHomework(req, res) {
        const homeworkId = req.body.homeworkId;
        const userId = req.jwt.payload.id;
        const grade = req.body.grade;

        await Grade.findOneAndUpdate({ homeworkId: homeworkId, studentId: userId }, { grade: grade, status: '已完成' });
        util.handleResponse(res, null, {});
    }
}; 