/** @format */

const jwt = require("jsonwebtoken");
const { isTokenValid, attachCookiesToResponse } = require("../utils/jwt");
const CustomError = require("../errors/index");
const Token = require("../Models/Token");
const authentication = async (req, res, next) => {
  const { refreshToken, accessToken } = req.signedCookies;

  try {
    if (accessToken) {
      const { payload } = isTokenValid(accessToken);
      if (!payload) {
        throw new CustomError.BadRequestError(
          "Quá trình xác thực bị lỗi vui lòng thử lại"
        );
      }
      req.user = payload.user;
      return next();
    } else if (refreshToken) {
      const { payload } = isTokenValid(refreshToken);
      console.log(payload);
      if (!user) {
        throw new CustomError.BadRequestError(
          "Quá trình xác thực bị lỗi vui lòng thử lại"
        );
      }
      const token = await Token.findOne({ user: user.UserId, refreshToken });
      if (token) {
        attachCookiesToResponse({ res, user: user, refreshToken });
      } else {
        throw new CustomError.BadRequestError(
          "Quá trình xác thực bị lỗi vui lòng thử lại"
        );
      }
      req.user = payload.user;
      return next();
    } else {
      throw new CustomError.BadRequestError(
        "Quá trình xác thực bị lỗi vui lòng thử lại"
      );
    }
  } catch (error) {}
};
const AuthorizePermission = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.AuthenticatedError(
        "You don t have permission to do"
      );
    }
    next();
  };
};
module.exports = {
  authentication,
  AuthorizePermission,
};
