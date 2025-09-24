const express = require("express");
const notificationController = require("../../controllers/v1/notification.controller");
const { authMiddleware } = require("../../middlewares/auth.middeleware");
const { isAdminMiddleware } = require("../../middlewares/isAdmin.middeleware");
const notificationRouter = express.Router();

notificationRouter
  .route("/")
  .post(authMiddleware, isAdminMiddleware, notificationController.create)
  .get(authMiddleware, isAdminMiddleware, notificationController.getAll);

notificationRouter
  .route("/admins")
  .get(authMiddleware, isAdminMiddleware, notificationController.get);

notificationRouter
  .route("/:id/seen")
  .put(authMiddleware, isAdminMiddleware, notificationController.seen);

notificationRouter
  .route("/:id/remove")
  .delete(authMiddleware, isAdminMiddleware, notificationController.remove);

module.exports = notificationRouter;
