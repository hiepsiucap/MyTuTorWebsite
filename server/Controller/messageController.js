/** @format */

const { StatusCodes } = require("http-status-codes");
const message = require("../Models/message");
const CustomAPIError = require("../errors/index").default;

const createMessage = async (req, res) => {
  const { chatId, text, senderId } = req.body;
  console.log(senderId);
  const response = await message.create({
    chatId,
    senderId,
    text,
  });
  res.status(StatusCodes.OK).json(response);
};
const getMessages = async (req, res) => {
  const { chatId } = req.params;
  const messages = await message.find({ chatId });
  if (!messages)
    throw new CustomAPIError.BadRequestError("Không có tin nhắn nào");
  res.status(StatusCodes.OK).json(messages);
};

module.exports = { createMessage, getMessages };
