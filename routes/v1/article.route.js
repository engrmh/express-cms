const articleRouter = require("express").Router();
const articleController = require("../../controllers/v1/article.controller");
const { authMiddleware } = require("../../middlewares/auth.middeleware");
const { isAdminMiddleware } = require("../../middlewares/isAdmin.middeleware");
const multer = require("multer");
const multerStorage = require("../../utils/uploader");

articleRouter
  .route("/")
  .get(articleController.getAll)
  .post(
    authMiddleware,
    isAdminMiddleware,
    multer({
      storage: multerStorage,
      limits: { fileSize: 100_000_000 },
    }).single("cover"),

    articleController.create
  );

// articleRouter('/adminGetAll' ,  )
articleRouter
  .route("/:id")
  .put(
    authMiddleware,
    isAdminMiddleware,
    multer({
      storage: multerStorage,
      limits: { fileSize: 100_000_000 },
    }).single("cover"),
    articleController.update
  )
  .delete(authMiddleware, isAdminMiddleware, articleController.delete);

articleRouter.route("/:href").get(articleController.getOne);

articleRouter.route("/draft").post(
  authMiddleware,
  isAdminMiddleware,
  multer({
    storage: multerStorage,
    limits: { fileSize: 100_000_000 },
  }).single("cover"),
  articleController.draft
);

module.exports = articleRouter;
