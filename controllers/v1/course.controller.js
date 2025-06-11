const { isValidObjectId } = require("mongoose");
const courseModel = require("../../models/course");
const sessionModel = require("../../models/session");
const categoryModel = require("../../models/category");
const commentModel = require("../../models/comment");
const courseUser = require("../../models/courseUser");

exports.getAll = async (req, res) => {
  try {
    const allCourses = await courseModel.find({}).lean();
    return res.status(200).json({ data: allCourses });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
exports.create = async (req, res) => {
  try {
    const {
      title,
      description,
      support,
      href,
      price,
      status,
      discount,
      category,
    } = req.body;

    const result = await courseModel.create({
      title,
      description,
      cover: req.file.filename,
      support,
      href,
      price,
      status,
      discount,
      category,
      creator: req.user._id,
    });

    if (result) {
      const mainCourse = await courseModel
        .findById(result._id)
        .populate("creator", "-password");
      return res
        .status(201)
        .json({ message: "Course Created Successfully", data: mainCourse });
    }
  } catch (error) {
    // console.log(error.message);
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};
exports.delete = async (req, res) => {
  //code
};
exports.update = async (req, res) => {
  //code
};

exports.createSession = async (req, res) => {
  try {
    const { title, time, free } = req.body;
    const { id } = req.params;

    const session = await sessionModel.create({
      title,
      time,
      free,
      // video: req.file.filename,
      video: "video.mp4",
      course: id,
    });

    return res.status(201).json(session);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};

exports.getAllSessions = async (req, res) => {
  try {
    const allSessions = await sessionModel
      .find({})
      .populate("course", "title")
      .lean();
    return res.status(200).json(allSessions);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};

exports.getSessionInfo = async (req, res) => {
  try {
    const course = await courseModel.findOne({ href: req.params.href }).lean();
    const session = await sessionModel
      .findOne({ _id: req.params.sessionId })
      .select("-__v");
    const allSessions = await sessionModel
      .find({ course: course._id })
      .select("-__v");
    res.status(200).json({ session, allSessions });
  } catch (error) {
    res.status(500).json("Sever Error");
  }
};

exports.removeSession = async (req, res) => {
  try {
    const isValidId = isValidObjectId(req.params.id);
    if (!isValidId) {
      return res.status(400).json({ message: "In Valid Session ID" });
    }
    await sessionModel.deleteOne({ _id: req.params.id });
    return res.status(200).json({ message: "Session deleted successfully" });
  } catch (error) {
    // console.log(error);
    return res
      .status(500)
      .json({ message: "Error been eccurred", error: error });
  }
};

exports.getCoursesByCategory = async (req, res) => {
  try {
    const category = await categoryModel.findOne({ href: req.params.href });

    if (category) {
      const courses = await courseModel.find({ categoryID: category._id });
      return res.status(200).json({ data: courses });
    } else {
      return res.status(404).json({ message: "Not Found!" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error been eccurred", error: error });
  }
};

exports.getOne = async (req, res) => {
  try {
    const { href } = req.params;
    const currentCourse = await courseModel
      .findOne({
        href,
      })
      .populate("creator", "name -_id")
      .populate("category", "title href -_id")
      // .populate({ path: "creator", select: "name -_id" })
      .select("-__v");
    if (currentCourse) {
      const courseSessions = await sessionModel
        .find({
          course: currentCourse._id,
        })
        .select("-_id -createdAt -updatedAt -__v")
        .lean();
      const courseAllComments = await commentModel
        .find({
          course: currentCourse._id,
          isAccept: 1,
        })
        .populate("creator", "name -_id")
        .select("body score -_id createdAt")
        .lean();
      const courseStudentCount = await courseUser
        .find({ course: currentCourse._id })
        .count();
      return res.status(200).json({
        data: {
          currentCourse,
          courseSessions,
          courseAllComments,
          courseStudentCount,
        },
      });
    } else {
      return res.status(404).json({
        message: "Course Not Found",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error been eccurred", error: error });
  }
};

exports.register = async (req, res) => {
  try {
    const isUserAlreadyRegistered = await courseModel
      .findOne({
        user: req.user._id,
        course: req.params.id,
      })
      .lean();

    if (isUserAlreadyRegistered) {
      return res.status(409).json({
        message: "User Allready Registered This Course",
      });
    }

    await courseModel.create({
      user: req.user._id,
      course: req.params.id,
      price: req.body.price,
    });

    res.status(201).json({
      message: "User Registered This Course Successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error been eccurred", error: error });
  }
};
