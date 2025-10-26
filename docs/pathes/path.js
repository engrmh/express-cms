const { offPath } = require("../pathes/off");
const { authPath } = require("../pathes/auth");
const { categoryPath } = require("../pathes/category");
const { coursePath } = require("../pathes/course");
const { userPath } = require("../pathes/user");
const { commentPath } = require("../pathes/comment");
const { contactPath } = require("../pathes/contact");
const { newsletterPath } = require("../pathes/newsletter");
const { notificationPath } = require("../pathes/notification");
const { searchPath } = require("../pathes/search");
const { articlePath } = require("../pathes/article");

const pathes = {
  ...authPath,
  ...userPath,
  ...categoryPath,
  ...coursePath,
  ...commentPath,
  ...contactPath,
  ...newsletterPath,
  ...searchPath,
  ...notificationPath,
  ...offPath,
  ...articlePath,
};

module.exports = pathes;
