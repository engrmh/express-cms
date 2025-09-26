const { offPath } = require("../pathes/off");
const { authPath } = require("../pathes/auth");
const { categoryPath } = require("../pathes/category");

const pathes = {
  ...authPath,
  ...categoryPath,
  ...offPath,
};

module.exports = pathes;
