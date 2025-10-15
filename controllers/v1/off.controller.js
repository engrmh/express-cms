const { isValidObjectId } = require("mongoose");
const courseModel = require("../../models/course");
const offModel = require("../../models/off");

exports.getAll = async (req, res) => {
  try {
    const allDiscount = await offModel.find({}).populate("course").lean();

    return res.status(200).json({ code: 200, data: allDiscount });
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
    const isValidCourseId = isValidObjectId(course);

    if (!isValidCourseId) {
      return res
        .status(400)
        .json({ code: 400, message: "Course Id is not valid!" });
    }

    const foundCourse = await courseModel.findOne({ _id: course });

    if (!foundCourse) {
      return res.status(404).json({ code: 404, message: "Course Not Found" });
    }

    const foundCode = await offModel.findOne({
      code,
    });

    if (foundCode) {
      return res
        .status(409)
        .json({ code: 409, message: "This code is duplicated" });
    }
    await offModel.create({
      code,
      course,
      percent,
      max,
      uses: 0,
      creator: req.user._id,
    });

    return res
      .status(201)
      .json({ code: 201, message: "Discount Created Successfully" });
  } catch (error) {
    console.log(error);

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

    return res
      .status(200)
      .json({ code: 200, message: "Discount Seted Successfully" });
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
    const { id } = req.query;

    const isValidOffId = isValidObjectId(id);

    if (!isValidOffId) {
      return res
        .status(400)
        .json({ code: 400, message: "Off Id is not valid!" });
    }

    const result = await offModel.findOneAndDelete({ _id: id });

    if (result) {
      return res
        .status(200)
        .json({ code: 200, message: "Off Deleted Successfully" });
    } else {
      return res.status(404).json({ code: 404, message: "Off Not Found" });
    }
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
