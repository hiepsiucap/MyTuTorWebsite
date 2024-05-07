/** @format */

const express = require("express");
const router = express.Router();
const {
  Currentuser,
  UpdateUser,
  GetAllUser,
  UploadImage,
} = require("../Controller/UserControler");
const fileUploader = require("../utils/cloudinaryconfig");
const {
  authentication,
  AuthorizePermission,
} = require("../Middleware/authentication");

router.route("/profile").get(authentication, Currentuser);
router.route("/update").patch(authentication, UpdateUser);
router
  .route("/uploadfile")
  .post(authentication, fileUploader.single("file"), UploadImage);
// router
//   .route("/getallusers")
//   .get(authentication, AuthorizePermission("admin"), GetAllUser);
module.exports = router;
