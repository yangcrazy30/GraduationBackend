const util = require("../utils/utils");
const Resource = require("../models/resource");
const uuidv1 = require('uuid/v1');
const fs = require('fs');

const preOrder = function (root, checkPath) {
    let result = null;
    if (root.path === checkPath) {
        return root;
    };
    for (let i = 0; !result && root.children && i < root.children.length; i++) {
        result = preOrder(root.children[i], checkPath);
    }
    return result;
}

module.exports = {
    async getResourceTree(req, res) {
        const courseId = req.query.courseId;
        const resource = await Resource.findOne({ courseId: courseId });
        if (!resource) {
            let newresource = new Resource({
                courseId: courseId,
                resourceTree: [
                    {
                        id: uuidv1(),
                        path: 'root',
                        name: 'root',
                        type: 'folder',
                        children: []
                    }
                ]
            });
            await newresource.save();
            util.handleResponse(res, null, newresource.toObject({ getters: true }));
        } else {
            util.handleResponse(res, null, resource.toObject({ getters: true }));
        }
    },

    async addNewFolder(req, res) {
        const path = req.body.path;
        const courseId = req.body.courseId;
        const folderName = req.body.folderName;
        let resource = await Resource.findOne({ courseId: courseId });
        const tree = resource.resourceTree[0];


        const checkNode = preOrder(tree, path);

        let createPath = 'uploads/resource/' + courseId + '/' + path + '/' + folderName;


        if (!fs.existsSync(createPath)) {
            fs.mkdir(createPath, { recursive: true }, (err) => {
                if (err) { throw err }
            })
        }

        checkNode.children.push({
            id: uuidv1(),
            path: path + '/' + folderName,
            name: folderName,
            type: 'folder',
            children: []
        });
        await Resource.findOneAndUpdate({ courseId: courseId }, { resourceTree: tree });
        util.handleResponse(res, null, {});
    },

    async preAddNewFile(req, res) {
        const path = req.body.path;
        const courseId = req.body.courseId;
        const fileName = req.body.fileName;
        const type = req.body.fileType;
        let resource = await Resource.findOne({ courseId: courseId });
        const tree = resource.resourceTree[0];

        let fileNode = preOrder(tree, path);

        fileNode.children.push({
            id: uuidv1(),
            path: path + '/' + fileName,
            name: fileName,
            type: type,
        });
        await Resource.findOneAndUpdate({ courseId: courseId }, { resourceTree: tree });
        util.handleResponse(res, null, {});
    },

    async preRemoveFile(req, res) {
        const path = req.body.path;
        const fileName = req.body.fileName;
        const courseId = req.body.courseId;

        let resource = await Resource.findOne({ courseId: courseId });
        const tree = resource.resourceTree[0];

        let fileNode = preOrder(tree, path);

        let index = 0;

        for (let i = 0; i < fileNode.children.length; i++) {
            if (fileNode.children[i].name === fileName) {
                break;
            }
            index++;
        }
        fileNode.children.splice(index, 1);
        await Resource.findOneAndUpdate({ courseId: courseId }, { resourceTree: tree });
        util.handleResponse(res, null, {});
    },
}