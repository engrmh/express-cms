const ticketRouter = require("express").Router();
const ticketController = require("../../controllers/v1/ticket.controller");
const { authMiddleware } = require("../../middlewares/auth.middeleware");
const { isAdminMiddleware } = require("../../middlewares/isAdmin.middeleware");

ticketRouter
  .route("/")
  .get(authMiddleware, ticketController.getAll)
  .post(authMiddleware, isAdminMiddleware, ticketController.create);

ticketRouter.route("/user").get(authMiddleware, ticketController.userTickets);

ticketRouter
  .route("/departments")
  .get(authMiddleware, ticketController.departments);

ticketRouter
  .route("/subDepartments/:id")
  .get(authMiddleware, ticketController.subDepartments);

ticketRouter
  .route("/answer")
  .post(authMiddleware, isAdminMiddleware, ticketController.setAnswer);

ticketRouter.route("/:id/answer").get(authMiddleware, ticketController.getOne);

module.exports = ticketRouter;
