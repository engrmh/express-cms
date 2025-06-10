const express = require("express");
const { authMiddleware } = require("../../middlewares/auth.middeleware");
const commentController = require("../../controllers/v1/comment.controller");

const commentRouter = express.Router();

commentRouter.route("/").post(authMiddleware, commentController.create);

module.exports = commentRouter;