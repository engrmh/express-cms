const ticketRouter = require("express").Router();
const ticketController = require("../../controllers/v1/ticket.controller");
const { authMiddleware } = require("../../middlewares/auth.middeleware");
const { isAdminMiddleware } = require("../../middlewares/isAdmin.middeleware");

ticketRouter.route("/").get();
ticketRouter.route("/").get();

module.exports = ticketRouter;
