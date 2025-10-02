const { offPath } = require("../pathes/off");
const { authPath } = require("../pathes/auth");
const { categoryPath } = require("../pathes/category");
const { userPath } = require("../pathes/user");
const { commentPath } = require("../pathes/comment");
const { contactPath } = require("../pathes/contact");

const pathes = {
  ...authPath,
  ...userPath,
  ...categoryPath,
  ...commentPath,
  ...contactPath,
  ...offPath,
};

module.exports = pathes;
