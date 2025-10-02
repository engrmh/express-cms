const courseModel = require("../../models/course");

exports.get = async (req, res) => {
  try {
    const { keyword } = req.params;
    // console.log(keyword);
    const allCourse = await courseModel.find({
      title: {
        $regex: ".*" + keyword + ".*",
      },
    });

    return res.status(200).json(allCourse);
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Error been Occurred",
    });
  }
};
