/** @format */

const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const ListLike = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tutor: {
      type: Schema.Types.ObjectId,
      ref: "Tutor",
      required: true,
    },
  },
  { timestamps: true }
);
ListLike.index({ user: 1, tutor: 1 }, { unique: true });
module.exports = mongoose.model("listlike", ListLike);
