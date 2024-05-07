/** @format */

const { StatusCodes } = require("http-status-codes");
const chatModel = require("../Models/Chat");
const CustomAPIError = require("../errors/index");
const User = require("../Models/User");

const createChat = async (req, res) => {
  const { secondid } = req.body;
  const firstid = req.user.UserId;
  console.log(firstid, secondid);
  const chat = await chatModel.findOne({
    members: { $all: [firstid, secondid] },
  });
  if (chat) return res.status(StatusCodes.OK).json(chat);
  const newChat = chatModel.create({ members: [firstid, secondid] });
  res.status(StatusCodes.OK).json(newChat);
};
const findUserChats = async (req, res) => {
  const userId = req.user.UserId;
  const chats = await chatModel
    .find({
      members: { $in: [userId] },
    })
    .sort("timestamps");
  const users = await User.find({});
  const returnchat = chats.map((chat) => {
    if (chat.members[0] !== userId) {
      const tempuser = users.find((user) => user._id == chat.members[0]);
      return {
        chatid: chat._id,
        name: tempuser?.name,
        ava: tempuser?.ava,
      };
    }
    const tempuser = users.find((user) => user._id == chat.members[1]);
    return {
      chatid: chat._id,
      name: tempuser?.name,
      ava: tempuser?.ava,
    };
  });
  if (!chats) {
    throw new CustomAPIError.BadRequestError("Không tồn tại đoạn chat nào");
  }

  res.status(StatusCodes.OK).json(returnchat);
};
const findChat = async (req, res) => {
  const { firstId, secondId } = req.params;
  const chat = await chatModel.find({
    members: { $all: [firstId, secondId] },
  });
  res.status(StatusCodes.OK).json(chat);
};
module.exports = { createChat, findUserChats, findChat };
