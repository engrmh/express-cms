const { offPath } = require("../pathes/off");
const { authPath } = require("../pathes/auth");
const { categoryPath } = require("../pathes/category");
const { userPath } = require("../pathes/user");
const { commentPath } = require("../pathes/comment");
const { contactPath } = require("../pathes/contact");
const { newsletterPath } = require("../pathes/newsletter");
const { notificationPath } = require("../pathes/notification");
const { searchPath } = require("../pathes/search");

const pathes = {
  ...authPath,
  ...userPath,
  ...categoryPath,
  ...commentPath,
  ...contactPath,
  ...newsletterPath,
  ...searchPath,
  ...notificationPath,
  ...offPath,
};

module.exports = pathes;
