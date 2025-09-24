const express = require("express");
const searchController = require("../../controllers/v1/search.controller");

const searchRouter = express.Router();

searchRouter.route("/:keyword").get(searchController.get);

module.exports = searchRouter;
