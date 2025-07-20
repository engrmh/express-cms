const { isValidObjectId } = require("mongoose");
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
    });

    return res.status(201).json({ message: "Comment Added Successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error been occurred", error: error });
  }
};

exports.remove = async (req, res) => {
  try {
    const isValidId = isValidObjectId(req.params.id);

    if (!isValidId) {
      return res.status(400).json({
        message: "Comment Id Not Valid!!",
      });
    }

    await commentModel.deleteOne({
      _id: req.params.id,
    });

    return res.status(200).json({
      message: "Comment Deleted Successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error been eccurred", error: error });
  }
};

exports.accept = async (req, res) => {
  try {
    const isValidId = isValidObjectId(req.params.id);

    if (!isValidId) {
      return res.status(400).json({
        message: "Comment Id Not Valid!!",
      });
    }

    await commentModel.updateOne(
      {
        _id: req.params.id,
      },
      {
        isAccept: 1,
      }
    );

    return res.status(200).json({
      message: "Comment Accepted Successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error been occurred", error: error });
  }
};

exports.reject = async (req, res) => {
  try {
    const isValidId = isValidObjectId(req.params.id);

    if (!isValidId) {
      return res.status(400).json({
        message: "Comment Id Not Valid!!",
      });
    }

    const rejectedComment = await commentModel.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        isAccept: 1,
      }
    );

    if (!rejectedComment) {
      return res.status(404).json({
        message: "Comment Not Found!",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error been occurred", error: error });
  }
};

exports.answer = async (req, res) => {
  try {
    const isValidId = isValidObjectId(req.params.id);

    if (!isValidId) {
      return res.status(400).json({
        message: "Comment Id Not Valid!!",
      });
    }

    const { body } = req.body;

    const acceptedComment = await commentModel.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        isAccept: 0,
      }
    );

    if (!acceptedComment) {
      return res.status(404).json({
        message: "Comment Not Found!",
      });
    }

    const answerComment = await commentModel.create({
      body,
      course: acceptedComment.course._id,
      score,
      creator: req.user._id,
      isAccept: 1,
      isAccept: 1,
      mainCommentID: acceptedComment._id,
    });

    return res.status(201).json({ message: "Comment Answered Successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error been occurred", error: error });
  }
};
