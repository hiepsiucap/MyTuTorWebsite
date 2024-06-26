/** @format */

const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const ClassSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      require: [true, "Please provide class subject"],
      maxlength: 30,
      minlenth: 3,
    },
    student: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    description: {
      type: String,
      maxlength: 40,
    },
    Tutor: {
      type: Schema.Types.ObjectId,
      ref: "Tutor",
    },
    firstDay: {
      type: Date,
      require: [true, "Please provide The Day"],
    },
  },
  { timestamps: true }
);
ClassSchema.statics.calculateAverageRating = async function (tutorid) {
  const result = await this.aggregate([
    { $match: { tutor: tutorid } },
    {
      $group: {
        _id: null,
        numOfClass: { $sum: 1 },
      },
    },
  ]);

  try {
    await this.model("Tutor").findOneAndUpdate(
      { _id: tutorid },
      {
        numOfClass: result[0]?.numOfClass || 0,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

ClassSchema.post("save", async function () {
  await this.constructor.calculateAverageRating(this.tutor);
});
ClassSchema.post("remove", async function () {
  await this.constructor.calculateAverageRating(this.tutor);
});
module.exports = mongoose.model("Class", ClassSchema);
