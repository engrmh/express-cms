const { offPath } = require("../pathes/off");
const { authPath } = require("../pathes/auth");
const { categoryPath } = require("../pathes/category");
const { userPath } = require("../pathes/user");
const { commentPath } = require("../pathes/comment");

const pathes = {
  ...authPath,
  ...userPath,
  ...categoryPath,
  ...commentPath,
  ...offPath,
};

module.exports = pathes;
