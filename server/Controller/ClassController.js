/** @format */

const CustomError = require("../errors/index").default;
const StatusCodes = require("http-status-codes");
const Class = require("../Models/Class");
const GetAllClass = async (req, res) => {
  const TheClass = await Class.find({});
  res.status(StatusCodes.OK).json({ TheClass });
};
const CreatAClass = async (req, res) => {
  console.log(req.user);
  const { subject, maxStudent, location, firstDay } = req.body;
  if (!subject || !maxStudent || !location || !firstDay) {
    throw new CustomError.BadRequestError("Please Provide Full Information");
  }
  const TheClass = await Class.create({
    subject,
    maxStudent,
    location,
    firstDay,
  });
  res.status(StatusCodes.OK).json(TheClass);
};
const DeleteAClass = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const TheClass = await Class.findById({ _id: id });
  if (!TheClass) {
    throw new CustomError.BadRequestError("Please Try Another Id");
  }
  await Class.deleteOne({ _id: id });
  res.status(StatusCodes.OK).json({ TheClass });
};
const ADetailClass = async (req, res) => {
  const id = req.params.id;
  const TheClass = await Class.findById({ _id: id });
  if (!TheClass) {
  }
};
module.exports = {
  GetAllClass,
  CreatAClass,
  DeleteAClass,
};
