const commentModel = require("../../models/comment");
const courseModel = require("../../models/course");

exports.create = async (req, res) => {
  try {
    const { body, courseHref, score } = req.body;

    const course = await courseModel.findOne({ href: courseHref }).lean();

    await commentModel.create({
      body,
      course: course._id,
      score,
      creator: req.user._id,
      isAnswer: 0,
      isAccept: 0,
    });

    res.status(201).json({ message: "Comment Added Successfully" });
  } catch (error) {
    res.status(500).json("Server Error");
  }
};
