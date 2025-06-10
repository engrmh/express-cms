const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const authRouter = require("./routes/v1/auth.route");
const userRouter = require("./routes/v1/user.route");
const categoryRouter = require("./routes/v1/category.route");
const courseRouter = require("./routes/v1/course.route");
const commentRouter = require("./routes/v1/comment.route");
const swagger = require("./swagger");
const winston = require("winston"),
  expressWinston = require("express-winston");

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

app.use(
  expressWinston.errorLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    ),
    // meta: true,
    // msg: "HTTP {{req.method}} {{req.url}}",
    // expressFormat: true,
    // colorize: false,
    // ignoreRoute: function (req, res) {
    //   return false;
    // },
  })
);

swagger(app);

module.exports = app;
