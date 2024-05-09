/** @format */

const express = require("express");
const router = express.Router();
const {
  CreateALike,
  GetListLike,
  DeleteListLike,
} = require("../Controller/ListLikeController");
const {
  authentication,
  AuthorizePermission,
} = require("../Middleware/authentication");

router.route("/").post(authentication, CreateALike);
router.route("/").get(authentication, GetListLike);
router.route("/:id").delete(authentication, DeleteListLike);
module.exports = router;
