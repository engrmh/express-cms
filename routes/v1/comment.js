const express = require("express");
const { authMiddleware } = require("../../middlewares/auth");
const commentController = require("../../controllers/v1/comment");

const commentRouter = express.Router();

commentRouter.route("/").post(authMiddleware, commentController.create);

module.exports = commentRouter;