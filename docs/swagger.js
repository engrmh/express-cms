const pathes = require("./pathes/path");

const swaggerOptions = {
  openapi: "3.0.0",
  info: {
    title: "CMS Backend",
    version: "1.0.0",
    description: "API documentation for ELearning WebSite",
  },
  servers: [
    {
      url: "http://localhost:4000/v1/",
      description: "Server",
    },
  ],
  paths: pathes,
  // apis: ['./routes/v1/*.js'],
};

module.exports = swaggerOptions;
