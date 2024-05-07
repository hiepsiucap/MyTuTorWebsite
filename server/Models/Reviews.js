/** @format */

const mongoose = require("mongoose");
const ReviewSchema = mongoose.Schema(
  {
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    title: {
      type: String,
      trim: true,
      required: [true, "Please provide review title"],
      maxlength: 100,
    },
    ava: {
      type: String,
      default:
        "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1703303755/UserAvatar/avatar-default-icon_xigwu7.png",
    },
    comment: {
      type: String,
      required: [true, "Please provide review text"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    tutor: {
      type: mongoose.Schema.ObjectId,
      ref: "Tutor",
      required: true,
    },
  },
  { timestamps: true }
);
ReviewSchema.index({ product: 1, user: 1 }, { unique: true });

ReviewSchema.statics.calculateAverageRating = async function (tutorid) {
  const result = await this.aggregate([
    { $match: { tutor: tutorid } },
    {
      $group: {
        _id: null,
        averageRating: { $avg: "$rating" },
        numOfReviews: { $sum: 1 },
      },
    },
  ]);

  try {
    await this.model("Tutor").findOneAndUpdate(
      { _id: tutorid },
      {
        averageRating: Math.ceil(result[0]?.averageRating || 0),
        numOfReviews: result[0]?.numOfReviews || 0,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

ReviewSchema.post("save", async function () {
  await this.constructor.calculateAverageRating(this.tutor);
});

ReviewSchema.post("remove", async function () {
  await this.constructor.calculateAverageRating(this.tutor);
});

module.exports = mongoose.model("Review", ReviewSchema);
