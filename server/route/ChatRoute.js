/** @format */

const express = require("express");
const router = express.Router();
const {
  createChat,
  findChat,
  findUserChats,
} = require("../Controller/ChatController");
const fileUploader = require("../utils/cloudinaryconfig");
const {
  authentication,
  AuthorizePermission,
} = require("../Middleware/authentication");

router.route("/").post(authentication, createChat);
router.route("/find/:firstId/:secondId").get(authentication, findChat);
router.route("/").get(authentication, findUserChats);
// router.route("/update").patch(authentication, UpdateUser);
// router
//   .route("/getallusers")
//   .get(authentication, AuthorizePermission("admin"), GetAllUser);
module.exports = router;
