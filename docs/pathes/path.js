const { offPath } = require("../pathes/off");
const { authPath } = require("../pathes/auth");
const { categoryPath } = require("../pathes/category");
const { userPath } = require("../pathes/user");

const pathes = {
  ...authPath,
  ...userPath,
  ...categoryPath,
  ...offPath,
};

module.exports = pathes;
