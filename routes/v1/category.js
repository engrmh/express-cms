const express = require("express");
const categoryController = require("./../../controllers/v1/category");
const { authMiddleware } = require("../../middlewares/auth");
const { isAdminMiddleware } = require("../../middlewares/isAdmin ");

const categoryRouter = express.Router();

categoryRouter
  .route("/")
  .post(authMiddleware, isAdminMiddleware, categoryController.create)
  .get(categoryController.getAll);

categoryRouter
  .route("/:id")
  .delete(authMiddleware, isAdminMiddleware, categoryController.delete)
  .put(authMiddleware, isAdminMiddleware, categoryController.update);

module.exports = categoryRouter;
