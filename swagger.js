const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Learning Backend",
      version: "1.0.0",
      description: "API documentation for Learning WebSite",
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
  },
  apis: ['./routes/v1/*.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports = (app) => {
  app.use("/v1/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
