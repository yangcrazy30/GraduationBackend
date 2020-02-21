const express = require("express");
const router = express.Router();
const multer = require("multer");
const resource = require("../controllers/resource");
const fs = require('fs');
const storage = multer.diskStorage({
    //存储的位置
    destination(req, file, cb) {
        let path = "uploads/resource/" + req.body.courseId + '/' + req.body.path;
        console.log(file);
        cb(null, path);
    },
    filename(req, file, cb) {
        cb(null, file.originalname);
    }
});
const myMulter = multer({ storage: storage });

router.post("/upload", myMulter.single("resource"), function (req, res, next) {
    res.send('ok');
});

router.get("/resource", resource.getResourceTree);

router.post("/folder", resource.addNewFolder);

router.post("/preUpload", resource.preAddNewFile);

router.post("/preRemove", resource.preRemoveFile);


module.exports = router;