const express = require("express");
const userController = require("../../controllers/v1/user.controller");
const { authMiddleware } = require("../../middlewares/auth.middeleware");
const { isAdminMiddleware } = require("../../middlewares/isAdmin.middeleware");

const userRouter = express.Router();

userRouter
  .route("/")
  .get(authMiddleware, isAdminMiddleware, userController.getAll)
  .put(authMiddleware, userController.updateUser);

userRouter
  .route("/:id")
  .post(authMiddleware, isAdminMiddleware, userController.removeUser);

userRouter
  .route("/role")
  .put(authMiddleware, isAdminMiddleware, userController.changeRole);

userRouter
  .route("/ban/:id")
  .post(authMiddleware, isAdminMiddleware, userController.banUser);

module.exports = userRouter;
