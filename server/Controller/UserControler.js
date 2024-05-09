/** @format */

const CustomError = require("../errors/index").default;
const StatusCodes = require("http-status-codes");
const { attachCookiesToResponse } = require("../utils/jwt");
const createUser = require("../utils/CreateUserJWt");
const Token = require("../Models/Token");
const User = require("../Models/User");
const Currentuser = async (req, res) => {
  const id = req.user.UserId;
  console.log(id);
  const user = await User.findById(
    { _id: id },
    "-password -VerificationToken -IsVerification"
  );
  console.log(user);
  if (!user) throw new CustomError.BadRequestError("Authorize Error");

  // res.status(StatusCodes.OK).json({usename:user.name,age:user.age||null, role: user.role, email:user.email})
  res.status(StatusCodes.OK).json({ user });
};
const UpdateUser = async (req, res) => {
  const id = req.user.UserId;
  let user = await User.findById({ _id: id });
  const existingToken = await Token.findOne({ user: user._id });
  if (!existingToken || !user)
    throw new CustomError.AuthenticatedError("Xác thực không thành công");
  const { name, phonenumber, address, birth } = req.body;
  user.name = name;
  user.phonenumber = phonenumber;
  user.address = address;
  user.birth = birth;
  console.log(user);
  await user.save();
  const tokenUser = createUser(user);
  user = await User.findById(
    { _id: id },
    "-password -VerificationToken -IsVerification"
  );
  if (existingToken) {
    const { isValid } = existingToken;
    if (!isValid) {
      throw new CustomAPIError.AuthenticatedError(
        "Bạn đã bị ban vĩnh viễn khiếu nại liên hệ: bestutorvn@gmail.com"
      );
    }
    refreshToken = existingToken.refreshToken;
    attachCookiesToResponse({ res, user: tokenUser, refreshToken });
    res.status(StatusCodes.OK).json({ user });
  }
};
const UploadImage = async (req, res) => {
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  const user = await User.findById({ _id: req.user.UserId });
  if (!user) {
    throw new CustomError.BadRequestError("Xác thực thất bại đã xảy ra lỗi");
  }
  user.ava = req.file.path;
  await user.save();

  res.status(StatusCodes.OK).json({ ava: req.file.path });
};

module.exports = {
  UpdateUser,
  Currentuser,

  UploadImage,
};
