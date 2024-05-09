/** @format */

const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema(
  {
    chatId: String,
    senderId: String,
    text: String,
  },
  {
    timestamps: true,
  }
);
messageSchema.index({ senderId: 1, chatId: 1 }, { unique: true });
const message = mongoose.model("Message", messageSchema);
module.exports = message;
