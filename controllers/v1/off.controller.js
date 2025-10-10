const { isValidObjectId } = require("mongoose");
const courseModel = require("../../models/course");
const offModel = require("../../models/off");

exports.getAll = async (_, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Error been Occurred",
    });
  }
};
exports.create = async (req, res) => {
  try {
    const { code, percent, course, max } = req.body;
    const isValidCourseId = isValidObjectId(course)

    if(!isValidCourseId)

    await offModel.create({
      code,
      course,
      percent,
      max,
      uses: 0,
      creator: req.user._id,
    });

    res
      .status(201)
      .json({ code: 201, message: "Discount Created Successfully" });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Error been Occurred",
    });
  }
};
exports.setOnAll = async (req, res) => {
  try {
    const { discount } = req.body;

    await courseModel.updateMany({
      discount,
    });

    res.status(200).json({ code: 200, message: "Discount Seted Successfully" });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Error been Occurred",
    });
  }
};
exports.getOne = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Error been Occurred",
    });
  }
};
exports.remove = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Error been Occurred",
    });
  }
};
// exports.getAll = async (req, res) => {
//   try {
//   } catch (error) {}
// };
