 const express = require("express");
const { authMiddleware } = require("../../middlewares/auth.middeleware");
const { isAdminMiddleware } = require("../../middlewares/isAdmin.middeleware");
const newsletterController = require("../../controllers/v1/newsletter.controller");

const newsletterRouter = express.Router();

newsletterRouter
  .route("/")
  .get(authMiddleware, isAdminMiddleware, newsletterController.getAll)
  .post(newsletterController.create);

module.exports = newsletterRouter;
