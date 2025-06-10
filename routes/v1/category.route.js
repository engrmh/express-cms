const express = require("express");
const categoryController = require("./../../controllers/v1/category.controller");
const { authMiddleware } = require("../../middlewares/auth.middeleware");
const { isAdminMiddleware } = require("../../middlewares/isAdmin.middeleware");

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
