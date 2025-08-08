const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    admin: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    seen: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const notificationModel = mongoose.model("Notification", schema);

module.exports = notificationModel;
