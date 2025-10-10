const courseModel = require("../../models/course");

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
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Error been Occurred",
    });
  }
};
exports.setOnAll = async (_req, res) => {
  try {
    const { discount } = res.body;

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
