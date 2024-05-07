/** @format */

const express = require("express");
const router = express.Router();
const {
  CreateTutor,
  GetAllTutor,
  GetSingleTutor,
} = require("../Controller/TutorController");
const fileUploader = require("../utils/cloudinaryconfig");
const {
  authentication,
  AuthorizePermission,
} = require("../Middleware/authentication");

router.route("/create").post(authentication, CreateTutor);
router.route("/").get(authentication, GetAllTutor);
router.route("/:id").get(authentication, GetSingleTutor);
// router.route("/update").patch(authentication, UpdateUser);
// router
//   .route("/getallusers")
//   .get(authentication, AuthorizePermission("admin"), GetAllUser);
module.exports = router;
