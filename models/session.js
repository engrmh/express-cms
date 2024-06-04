const { default: mongoose } = require("mongoose");

const sessionSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: String,
    },
    time: {
      type: String,
      required: true,
    },
    free: {
      type: Number, //0-> false 1-> true
      required: true,
    },
    video: {
      type: String,
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

const sessionModel = mongoose.model("Session", sessionSchema);

module.exports = sessionModel;
