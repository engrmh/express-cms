const express = require("express");
const { authMiddleware } = require("../../middlewares/auth.middeleware");
const { isAdminMiddleware } = require("../../middlewares/isAdmin.middeleware");
const contactController = require("../../controllers/v1/contact.controller");

const contactRouter = express.Router();

contactRouter
  .route("/")
  .get(authMiddleware, isAdminMiddleware, contactController.getAll)
  .post(contactController.create);

contactRouter
  .route("/:id")
  .delete(authMiddleware, isAdminMiddleware, contactController.remove);

contactRouter
  .route("/answer/:id")
  .post(authMiddleware, isAdminMiddleware, contactController.answer);

module.exports = contactRouter;
