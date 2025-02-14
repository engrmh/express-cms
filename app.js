const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
// const swaggerUi = require("swagger-ui-express");
// const swaggerDoc = require("./swagger.json");
const authRouter = require("./routes/v1/auth");
const userRouter = require("./routes/v1/user");
const categoryRouter = require("./routes/v1/category");
const courseRouter = require("./routes/v1/course");
const commentRouter = require("./routes/v1/comment");

const app = express();

app.use(cors());
app.use(
  "/courses/covers",
  express.static(path.join(__dirname, "public", "courses", "covers"))
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/v1/auth", authRouter);
app.use("/v1/users", userRouter);
app.use("/v1/category", categoryRouter);
app.use("/v1/course", courseRouter);
app.use("/v1/comment", commentRouter);

// app.use("/v1/api", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

module.exports = app;
