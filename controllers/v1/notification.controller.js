const notificationModel = require("../../models/notification");
const userModel = require("../../models/user");
const mongoose = require("mongoose");

exports.create = async (req, res) => {
  try {
    const { message, admin } = req.body;

    const isUser = await userModel.findById(admin);
    if (!isUser) {
      return res.status(404).json({
        code: 404,
        message: "User not found",
      });
    }

    await notificationModel.create({
      message,
      admin,
    });
    return res.status(201).json({
      code: 201,
      message: "Notification created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Error been occurred",
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    const notifications = await notificationModel
      .find({})
      .populate("admin", "name email");

    return res.status(200).json({
      code: 200,
      data: notifications,
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Error been occurred",
    });
  }
};

exports.get = async (req, res) => {
  try {
    const { _id } = req.user;

    const notifications = await notificationModel
      .find({ admin: _id })
      .populate("admin", "name email");

    return res.status(200).json({
      code: 200,
      data: notifications,
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Error been occurred",
    });
  }
};

exports.seen = async (req, res) => {
  try {
    const { id } = req.params;

    const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidObjectId) {
      return res.status(400).json({
        code: 400,
        message: "Invalid notification ID",
      });
    }

    const notification = await notificationModel.findById(id);
    if (!notification) {
      return res.status(404).json({
        code: 404,
        message: "Notification not found",
      });
    }

    await notificationModel.findByIdAndUpdate(id, { seen: 1 });

    return res.status(200).json({
      code: 200,
      message: "Notification marked as seen successfully",
    });
    y;
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      code: 500,
      message: "Error been occurred",
    });
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;

    const notification = await notificationModel.findById(id);
    if (!notification) {
      return res.status(404).json({
        code: 404,
        message: "Notification not found",
      });
    }
    await notificationModel.findByIdAndDelete(id);
    return res.status(200).json({
      code: 200,
      message: "Notification deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Error been occurred",
    });
  }
};
