const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    answer: {
      type: Boolean,
      required: true,
      default: false,
    },
    periority: {
      type: Number,
      required: true,
      enum: [1, 2, 3],
    },
    departmentId: {
      type: mongoose.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    subDepartmentId: {
      type: mongoose.Types.ObjectId,
      ref: "SubDepartment",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    course: {
      type: mongoose.Types.ObjectId,
      ref: "Course",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ticketModel = mongoose.model("Ticket", schema);

module.exports = ticketModel;
