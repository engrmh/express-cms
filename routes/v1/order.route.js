const orderRouter = require("express").Router();
const { authMiddleware } = require("../../middlewares/auth.middeleware");
const { isAdminMiddleware } = require("../../middlewares/isAdmin.middeleware");
const orderController = require("../../controllers/v1/order.controller");

orderRouter.route("/").get(authMiddleware,orderController.getall);
orderRouter.route("/:id").get(authMiddleware,orderController.getOne);

module.exports = orderRouter;
