const express = require("express");

const authController = require("../../controllers/v1/auth");

const authRouter = express.Router();

router.post("/reqister", authController.register);
router.post("/login", authController.login);
router.get("/me", authController.getMe);

module.exports = authRouter;
