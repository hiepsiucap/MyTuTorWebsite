/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const TuTorSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: "User",
    require: true,
  },
  level: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  ava: {
    type: String,
    require: true,
  },
  university: {
    type: String,
    require: true,
  },
  aboutmedescription: {
    type: String,
    require: true,
  },
  qualifications: [
    {
      subject: String,
      qualification: String,
      grade: String,
    },
  ],
  hasChecked: {
    type: Boolean,
    default: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  subjects: {
    type: [
      {
        name: {
          type: String,
          enum: [
            "Toán Học",
            "Ngữ Văn",
            "Tiếng Anh",
            "Tiếng Pháp",
            "Địa Lý",
            "Tin Học",
            "Vật Lý",
            "Sinh Học",
          ],
        },
        qualification: String,
        salary: Number,
      },
    ],
  },
  averageRating: {
    type: Number,
    default: 0,
  },
  numOfClass: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  maxmoney: {
    type: Number,
    default: 0,
  },
  minmoney: {
    type: Number,
    default: 0,
  },
  general: {
    type: [
      { day: String, morning: Boolean, afternoon: Boolean, night: Boolean },
    ],
  },
});
TuTorSchema.pre("save", async function () {
  const maxmoney = Math.max(...this.subjects.map((o) => o.salary));
  const minmoney = Math.min(...this.subjects.map((o) => o.salary));
  this.minmoney = minmoney;
  this.maxmoney = maxmoney;
});
module.exports = mongoose.model("Tutor", TuTorSchema);
