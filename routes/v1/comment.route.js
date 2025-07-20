const express = require("express");
const { authMiddleware } = require("../../middlewares/auth.middeleware");
const commentController = require("../../controllers/v1/comment.controller");
const { isAdminMiddleware } = require("../../middlewares/isAdmin.middeleware");

const commentRouter = express.Router();

commentRouter.route("/").post(authMiddleware, commentController.create);
commentRouter
  .route("/:id")
  .delete(authMiddleware, isAdminMiddleware, commentController.remove);
commentRouter
  .route("/:id/accept")
  .put(authMiddleware, isAdminMiddleware, commentController.accept);
commentRouter
  .route("/:id/reject")
  .put(authMiddleware, isAdminMiddleware, commentController.reject);
commentRouter
  .route("/:id/answer")
  .post(authMiddleware, isAdminMiddleware, commentController.reject);

module.exports = commentRouter;
