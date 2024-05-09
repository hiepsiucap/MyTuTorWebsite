/** @format */

const CustomError = require("../errors/index").default;
const StatusCodes = require("http-status-codes");
const { attachCookiesToResponse } = require("../utils/jwt");
const createUser = require("../utils/CreateUserJWt");
const Token = require("../Models/Token");
const User = require("../Models/User");
const Tutor = require("../Models/Tutor");
const CreateTutor = async (req, res) => {
  const id = req.user.UserId;
  console.log(id);
  const user = await User.findById(
    { _id: id },
    "-password -VerificationToken -IsVerification"
  );
  if (!user) throw new CustomError.BadRequestError("Authorize Error");
  const data = req.body;
  const response = Tutor.create({
    ...data,
    user: id,
    name: user.name,
    ava: user.ava,
  });
  if (!response) {
    throw new CustomError.BadRequestError(
      "Đăng kí Gia sư không thành công vui lòng thử lại"
    );
  }

  res.status(StatusCodes.OK).json({ msg: "Đăng kí thành công" });
};
const GetAllTutor = async (req, res) => {
  const ListofTutor = await Tutor.find({}, " -hasChecked  ");
  res.status(StatusCodes.OK).json({ ListofTutor });
};
const GetSingleTutor = async (req, res) => {
  const { id } = req.params;
  const singletutor = await Tutor.findOne({ _id: id });
  if (!singletutor) {
    throw new CustomError.BadRequestError("Gia sư không tồn tại ");
  }
  res.status(StatusCodes.OK).json({ tutor: singletutor });
};
module.exports = {
  CreateTutor,
  GetAllTutor,
  GetSingleTutor,
};
