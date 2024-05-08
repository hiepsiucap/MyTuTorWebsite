/** @format */

const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("../errors/index");
const User = require("../Models/User");
const CreateJwtUser = require("../utils/CreateUserJWt");
const bcrypt = require("bcrypt");
const createUser = require("../utils/CreateUserJWt");
const Token = require("../Models/Token");
const crypto = require("crypto");
const { attachCookiesToResponse } = require("../utils/jwt");
const VerificationEmail = require("../utils/SendVerification");
const CreateCookie = require("../utils/jwt");
const Login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new CustomAPIError.BadRequestError(
      "Vui lòng nhập Email hoặc mật khẩu !"
    );
  }
  console.log(email);
  const user = await User.findOne({ email });

  if (!user) {
    throw new CustomAPIError.BadRequestError(
      "Email không tồn tại! Vui lòng nhập lại"
    );
  }
  if (!user.IsVerification) {
    throw new CustomAPIError.AuthenticatedError(
      "Tài khoản của bạn chưa xác thực, vui lòng xác thức tài khoản!"
    );
  }
  if (!(await user.compare(password)))
    throw new CustomAPIError.AuthenticatedError(
      "Mật khẩu sai! Vui lòng kiểm tra lại"
    );
  const tokenUser = CreateJwtUser(user);

  // create refresh token
  let refreshToken = "";
  // check for existing token
  const existingToken = await Token.findOne({ user: user._id });

  if (existingToken) {
    const { isValid } = existingToken;
    if (!isValid) {
      throw new CustomAPIError.AuthenticatedError(
        "Bạn đã bị ban vĩnh viễn khiếu nại liên hệ: bestutorvn@gmail.com"
      );
    }
    refreshToken = existingToken.refreshToken;
    attachCookiesToResponse({ res, user: tokenUser, refreshToken });
    res.status(StatusCodes.OK).json({ user: tokenUser });
    return;
  }

  refreshToken = crypto.randomBytes(40).toString("hex");
  const userAgent = req.headers["user-agent"];
  const ip = req.ip;
  const userToken = { refreshToken, ip, userAgent, user: user._id };
  await Token.create(userToken);

  attachCookiesToResponse({ res, user: tokenUser, refreshToken });
  res.status(StatusCodes.OK).json({
    msg: `success, Hi ${user.name}`,
    user,
  });
};
const VerifyEmail = async (req, res) => {
  const { email, verifyToken } = req.body;
  const user = await User.findOne({ email, VerificationToken: verifyToken });
  if (!user) {
    throw new CustomAPIError.AuthenticatedError(
      "Xác minh tài khoản thất bại! Vui lòng thử lại"
    );
  }
  if (user) {
    user.IsVerification = true;
    await user.save();
    res.status(StatusCodes.OK).json({
      msg: "Xác minh thành công",
      success: true,
    });
  }
};
const Register = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name) {
    throw new CustomAPIError.BadRequestError("Vui lòng nhập tên !");
  }
  if (!email) {
    throw new CustomAPIError.BadRequestError("Vui lòng nhập email !");
  }
  if (!password) {
    throw new CustomAPIError.BadRequestError("Vui lòng nhập mật khẩu !");
  }
  if (!role) {
    throw new CustomAPIError.BadRequestError("Vui lòng nhập vị trí !");
  }
  const FindUser = await User.findOne({ email: email });
  if (FindUser) {
    throw new CustomAPIError.BadRequestError(
      "Email đã tồn tại ! Vui lòng thử với email khác"
    );
  }
  const VerificationToken = await crypto.randomBytes(50).toString("hex");
  const user = await User.create({
    name,
    email,
    password,
    role,
    VerificationToken,
  });
  const jwtuser = createUser(user);
  const origin = "http://localhost:3000/verify";
  VerificationEmail({
    name: user.name,
    email: user.email,
    userId: user._id,
    VerificationToken: VerificationToken,
    origin: origin,
  });
  res.status(StatusCodes.OK).json({ jwtuser });
};
const LogOut = async (req, res) => {
  await Token.findOneAndDelete({ user: req.user.UserId });

  res.cookie("accessToken", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.cookie("refreshToken", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out!" });
};
const CheckLogin = async (req, res) => {
  const user = await User.findOne({ _id: req.user.UserId });
  console.log(user);
  if (!user) {
    throw new CustomAPIError.AuthorizeError("Xác thực không thành công côn");
  }
  const tokenUser = CreateJwtUser(user);
  console.log(tokenUser);
  res.status(StatusCodes.OK).json({ user: tokenUser });
};
module.exports = { Login, Register, VerifyEmail, LogOut, CheckLogin };
