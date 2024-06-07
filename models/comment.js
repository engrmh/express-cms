const { default: mongoose } = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },
    course: {
      type: mongoose.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    creator: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isAccept: {
      type: Number,
      default: 0,
    },
    score: {
      type: Number,
      default: 5,
    },
    isAnswer: {
      type: Number,
      required: true,
    },
    mainCommentID: {
      type: mongoose.Types.ObjectId,
      ref: "Comment",
    },
  },
  {
    timestamps: true,
  }
);

const commentModel = mongoose.model("Comment", commentSchema);

module.exports = commentModel;
