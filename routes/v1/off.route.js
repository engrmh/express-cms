const offRouter = require("express").Router();
const offController = require("../../controllers/v1/off.controller");
const { authMiddleware } = require("../../middlewares/auth.middeleware");
const { isAdminMiddleware } = require("../../middlewares/isAdmin.middeleware");

offRouter
  .route("/")
  .get(authMiddleware, isAdminMiddleware, offController.getAll)
  .post(authMiddleware, isAdminMiddleware, offController.create);

offRouter
  .route("/all")
  .post(authMiddleware, isAdminMiddleware, offController.setOnAll);

offRouter.route("/:code").post(authMiddleware, offController.getOne);

offRouter
  .route("/:id")
  .delete(authMiddleware, isAdminMiddleware, offController.remove);

module.exports = offRouter;
