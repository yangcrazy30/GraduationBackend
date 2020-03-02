const util = require("../utils/utils");
const Post = require("../models/post");
const User = require("../models/user");
const PostReply = require("../models/postReply");
module.exports = {
    async newPost(req, res) {
        const date = util.formatDate(new Date(), "yyyy-MM-dd hh:mm:ss");
        const title = req.body.title;
        const content = req.body.content;
        let post = new Post({
            userId: req.jwt.payload.id,
            title: title,
            content: content,
            time: date,
            like: 0
        });
        await post.save();
        util.handleResponse(res, null, {});
    },
    async getPostCount(req, res) {
        const count = await Post.countDocuments();
        util.handleResponse(res, null, count);
    },
    async getPostById(req, res) {
        const postId = req.query.id;
        let post = await Post.findById(postId);
        let user = await User.findById(post.userId);
        console.log(user.username);
        if (post) {
            util.handleResponse(res, null, { ...post.toObject({ getters: true }), username: user.username })
        } else {
            util.handleResponse(res, null, {})
        }
    },
    async getPostReplyCount(req, res) {
        const id = req.query.postid;
        const count = await PostReply.countDocuments({ postId: id });
        util.handleResponse(res, null, count);
    },
    async getPostByName(req, res) {
        const config = req.query.config;
        const title = req.query.title;
        let posts = await Post.find({ title: new RegExp(title) })
            .skip(parseInt((config.page - 1) * config.size))
            .limit(+config.size);
        posts = posts.map(item => item.toObject({ getters: true }))
        for (let p of posts) {
            p.time = util.formatDate(new Date(p.time), "yyyy-MM-dd hh:mm:ss");
            p.username = (await User.findById(p.userId)).username;
        }
        util.handleResponse(res, null, posts);
    },
    async getPostReply(req, res) {
        const config = req.query.config;
        const postid = req.query.postid;
        let replys = await PostReply.find({ postId: postid })
            .skip(parseInt((config.page - 1) * config.size))
            .limit(+config.size);
        replys = replys.map(item => item.toObject({ getters: true }));
        for (let reply of replys) {
            reply.fromUsername = (await User.findById(reply.fromId)).username;
            reply.toUsername = (await User.findById(reply.toId)).username;
            reply.time = util.formatDate(new Date(reply.time), "yyyy-MM-dd hh:mm:ss");
        }
        util.handleResponse(res, null, replys.reverse());
    },
    async replyPost(req, res) {
        const replyinfo = req.body.replyinfo;
        let reply = new PostReply({
            postId: replyinfo.postId,
            fromId: req.jwt.payload.id,
            content: replyinfo.content,
            toId: replyinfo.toId,
            time: new Date(),
            like: 0
        })
        await reply.save();
        util.handleResponse(res, null, {})
    }
}
