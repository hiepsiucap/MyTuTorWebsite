/** @format */

const express = require("express");
const router = express.Router();
const {
  getMessages,
  createMessage,
} = require("../Controller/messageController");
const fileUploader = require("../utils/cloudinaryconfig");
const { authentication } = require("../Middleware/authentication");

router.route("/").post(authentication, createMessage);
router.get("/:chatId", getMessages);
// router.route("/update").patch(authentication, UpdateUser);
// router
//   .route("/getallusers")
//   .get(authentication, AuthorizePermission("admin"), GetAllUser);
module.exports = router;
