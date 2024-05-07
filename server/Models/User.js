/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
function validators(email) {
  var exp = /^([a-zA-Z0-9_\.\-]+)@([\da-zA-Z\.\-]+)\.([a-zA-Z\.]{2,6})$/;
  if (email.match(exp)) return true;
  return false;
}
const UserSchema = new Schema({
  name: {
    type: String,
    require: [true, "Please provide your name"],
    maxlength: 30,
    minlength: 3,
    trim: true,
  },
  ava: {
    type: String,
    default:
      "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1703303755/UserAvatar/avatar-default-icon_xigwu7.png",
  },
  age: {
    type: String,
    require: [true, "Please provide your age"],
    max: 60,
    min: 18,
  },
  role: {
    type: String,
    default: "student",
    enum: ["student", "tutor", "parent"],
    require: [true, "Please provide your role"],
  },
  birth: {
    type: Date,
    maxlength: 30,
    default: Date.now,
  },
  address: {
    type: String,
    maxlength: 30,
    minlength: 0,
    default: "",
  },
  email: {
    type: String,
    require: [true, "Please Provide Email"],
    maxlength: 30,
    validate: {
      validator: validators,
      message: "Check your format email",
    },
  },
  phonenumber: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    require: [true, "Please Provide Password"],
  },
  VerificationToken: {
    type: String,
  },
  IsVerification: {
    type: Boolean,
    default: false,
  },
});
UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  saltRounds = 10;
  salt = await bcrypt.genSalt(saltRounds);
  this.password = await bcrypt.hash(this.password, salt);
});
UserSchema.method("compare", async function (passwords) {
  const check = await bcrypt.compare(passwords, this.password);
  return check;
});
module.exports = mongoose.model("User", UserSchema);
