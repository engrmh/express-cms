const express = require("express");
const courseController = require("../../controllers/v1/course");
const multer = require("multer");
const multerStorage = require("./../../utils/uploader");
const { authMiddleware } = require("../../middlewares/auth");
const { isAdminMiddleware } = require("../../middlewares/isAdmin ");

const courseRouter = express.Router();

courseRouter
  .route("/")
  .get(authMiddleware, isAdminMiddleware, courseController.getAll)
  .post(
    authMiddleware,
    isAdminMiddleware,
    multer({
      storage: multerStorage,
      limits: {
        fileSize: 100000000,
      },
    }).single("cover"),
    courseController.create
  );

courseRouter
  .route("/:id")
  .delete(authMiddleware, isAdminMiddleware, courseController.delete)
  .put(authMiddleware, isAdminMiddleware, courseController.update);

courseRouter.route("/:id/sessions").post(
  // multer({
  //   storage: multerStorage,
  //   limits: {
  //     fileSize: 100000000,
  //   },
  // }).single("video"),
  authMiddleware,
  isAdminMiddleware,
  courseController.createSession
);

courseRouter
  .route("/sessions")
  .get(authMiddleware, isAdminMiddleware, courseController.getAllSessions);

courseRouter.route("/:href/:sessionId").get(courseController.getSessionInfo);

courseRouter
  .route("/session/:id")
  .delete(authMiddleware, isAdminMiddleware, courseController.removeSession);

module.exports = courseRouter;
