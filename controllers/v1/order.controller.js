const { isValidObjectId } = require("mongoose");
const courseModel = require("../../models/course");

exports.getall = async (req, res) => {
  try {
    const orders = await courseModel
      .find({
        user: req.user._id,
      })
      .populate("course")
      .lean();

    return res.status(200).json({ code: 200, data: orders });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Error been Occurred",
    });
  }
};
exports.getOne = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(403).json({ code: 403, message: "ID is not valid!!" });
    }

    const course = await courseModel.findOne({ _id: id }).populate("course");

    return res.status(200).json({ code: 200, data: course });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Error been Occurred",
    });
  }
};
