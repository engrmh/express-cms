const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    support: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["presell", "complated", "inprogress"],
    },
    discount: {
      type: Number,
      required: true,
    },
    score: {
      type: Number,
      default: 5,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    creator: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

courseSchema.virtual("sessions", {
  ref: "Session",
  localField: "_id",
  foreignField: "course",
});

courseSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "course",
});

const courseModel = mongoose.model("Course", courseSchema);

module.exports = courseModel;
