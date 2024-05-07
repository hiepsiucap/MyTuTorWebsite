/** @format */

require("dotenv").config();
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const createJWT = (user, res) => {
  const token = jwt.sign(user, process.env.JWT_SECRET);
  return token;
};
const isTokenValid = (token) => jwt.verify(token, process.env.JWT_SECRET);
const attachCookiesToResponse = ({ res, user, refreshToken }) => {
  const accessTokenJWT = createJWT({ payload: { user } });
  const refreshTokenJWT = createJWT({ payload: { user, refreshToken } });
  console.log(accessTokenJWT);
  const oneDay = 1000 * 60 * 60 * 24;
  const longerExp = 1000 * 60 * 60 * 24 * 30;

  res.cookie("accessToken", accessTokenJWT, {
    httpOnly: true,
    // secure: process.env.NODE_ENV === "production",
    signed: true,
    expires: new Date(Date.now() + oneDay),
  });

  res.cookie("refreshToken", refreshTokenJWT, {
    httpOnly: true,
    // secure: process.env.NODE_ENV === "production",
    signed: true,
    expires: new Date(Date.now() + longerExp),
  });
};

module.exports = {
  attachCookiesToResponse,
  createJWT,
  isTokenValid,
};
