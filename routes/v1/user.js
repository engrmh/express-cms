const express = require("express");
const userController = require("./../../controllers/v1/user");
const { authMiddleware } = require("../../middlewares/auth");
const { isAdminMiddleware } = require("../../middlewares/isAdmin ");

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
