const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      typp: String,
      required: true,
    },
    name: {
      typp: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["ADMIN", "USER", "TEACHER"],
      default: "USER",
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = userModel;
