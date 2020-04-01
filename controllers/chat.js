const util = require("../utils/utils");
const Chat = require("../models/chat");
const User = require("../models/user");
module.exports = {
    async getChatMessage(req, res) {
        const fromId = req.query.fromId;
        const toId = req.query.toId;

        let Smessages = await Chat.find({ fromId: fromId, toId: toId });
        let Rmessages = await Chat.find({ fromId: toId, toId: fromId });
        Smessages = Smessages.map(value => value.toObject({ getters: true }));
        Rmessages = Rmessages.map(value => value.toObject({ getters: true }));
        let message = Smessages.concat(Rmessages);
        message.sort((a, b) => {
            return a.time.getTime() - b.time.getTime();
        })
        message = message.map(value => {
            return {
                fromId: value.fromId,
                toId: value.toId,
                time: util.formatDate(new Date(value.time), "yyyy-MM-dd hh:mm:ss"),
                message: value.message,
                id: value.id
            };
        })
        util.handleResponse(res, null, message);
    },
    async sendMessage(req, res) {
        const fromId = req.body.fromId;
        const toId = req.body.toId;
        const message = req.body.message;

        let newChat = new Chat({
            fromId: fromId,
            toId: toId,
            time: new Date(),
            message: message
        });
        await newChat.save();
        util.handleResponse(res, null, {});
    },
    async getSenderInfo(req, res) {
        const toId = req.query.toId;
        let chat = await Chat.distinct('fromId', { toId: toId });
        let result = [];
        for (let fromid of chat) {
            let user = await User.findById(fromid);
            result.push(user.toObject({ getters: true }));
        }
        util.handleResponse(res, null, result);
    }
};
