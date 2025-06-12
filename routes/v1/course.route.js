const express = require("express");
const courseController = require("../../controllers/v1/course.controller");
const multer = require("multer");
const multerStorage = require("../../utils/uploader");
const { authMiddleware } = require("../../middlewares/auth.middeleware");
const { isAdminMiddleware } = require("../../middlewares/isAdmin.middeleware");

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
  .route("/sessions")
  .get(authMiddleware, isAdminMiddleware, courseController.getAllSessions);

courseRouter
  .route("/category/:href")
  .get(courseController.getCoursesByCategory);

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

courseRouter.route("/:href/:sessionId").get(courseController.getSessionInfo);

courseRouter
  .route("/session/:id")
  .delete(authMiddleware, isAdminMiddleware, courseController.removeSession);

courseRouter
  .route("/:id/register")
  .post(authMiddleware, courseController.register);

courseRouter
  .route("/:id")
  .delete(authMiddleware, isAdminMiddleware, courseController.delete)
  .put(authMiddleware, isAdminMiddleware, courseController.update);

courseRouter.route("/:href").get(authMiddleware, courseController.getOne);

module.exports = courseRouter;
