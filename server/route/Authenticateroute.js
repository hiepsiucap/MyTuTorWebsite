/** @format */

const express = require("express");
const {
  Login,
  Register,
  VerifyEmail,
  LogOut,
  CheckLogin,
} = require("../Controller/Authenticatecontrol");
const {
  authentication,
  AuthorizePermission,
} = require("../Middleware/authentication");

const router = express.Router();
router.route("/login").post(Login);
router.route("/register").post(Register);
router.route("/logout").post(authentication, LogOut);
router.route("/checklogin").get(authentication, CheckLogin);
router.route("/verifyemail").post(VerifyEmail);
module.exports = router;
