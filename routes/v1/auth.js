const express = require("express");

const authController = require("../../controllers/v1/auth");

const authRouter = express.Router();

authRouter.post("/reqister", authController.register);
authRouter.post("/login", authController.login);
authRouter.get("/me", authController.getMe);

module.exports = authRouter;
