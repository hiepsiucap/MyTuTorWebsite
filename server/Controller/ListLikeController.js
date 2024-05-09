/** @format */
const CustomAPIError = require("../errors/index");
const ListLike = require("../Models/ListLike");
const { StatusCodes } = require("http-status-codes");
const CreateALike = async (req, res) => {
  const userId = req.user.UserId;
  const tutorid = req.body.tutorid;
  if (!userId || !tutorid) {
    throw new CustomAPIError.BadRequestError(
      "Xuất hiện lỗi vui lòng kiểm tra lại"
    );
  }
  const findlike = await ListLike.findOne({ user: userId, tutor: tutorid });
  if (findlike) {
    throw new CustomAPIError.BadRequestError("Đã thuộc danh sách yêu thích");
  }
  const like = await ListLike.create({ user: userId, tutor: tutorid });
  if (!like) {
    throw new CustomAPIError.BadRequestError(
      "Xuất hiện lỗi vui lòng kiểm tra lại"
    );
  }
  res.status(StatusCodes.OK).json(like);
};
const GetListLike = async (req, res) => {
  const userId = req.user.UserId;
  const list = await ListLike.find({ user: userId }).populate("tutor");
  if (!list) {
    throw new CustomAPIError.BadRequestError(
      "Xuất hiện lỗi vui lòng kiểm tra lại"
    );
  }
  console.log(list);
  return res.status(StatusCodes.OK).json(list);
};
const DeleteListLike = async (req, res) => {
  const id = req.params.id;
  const userId = req.user.UserId;
  const list = await ListLike.deleteOne({ user: userId, tutor: id });

  if (!list) {
    throw new CustomAPIError.BadRequestError(
      "Xuất hiện lỗi vui lòng kiểm tra lại"
    );
  }
  console.log(list);
  return res.status(StatusCodes.OK).json(list);
};
module.exports = {
  CreateALike,
  GetListLike,
  DeleteListLike,
};
