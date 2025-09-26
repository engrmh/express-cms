const express = require("express");
const cors = require("cors");
const path = require("node:path");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerOption = require("./docs/swagger");
const authRouter = require("./routes/v1/auth.route");
const userRouter = require("./routes/v1/user.route");
const categoryRouter = require("./routes/v1/category.route");
const courseRouter = require("./routes/v1/course.route");
const commentRouter = require("./routes/v1/comment.route");
const winston = require("winston"),
  expressWinston = require("express-winston");
const contactRouter = require("./routes/v1/contact.route");
const newsletterRouter = require("./routes/v1/newsletter.route");
const searchRouter = require("./routes/v1/search.route");
const notificationRouter = require("./routes/v1/notification.route");

const app = express();

app.use(cors());
app.use(
  "/courses/covers",
  express.static(path.join(__dirname, "public", "courses", "covers"))
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerOption));

app.use("/v1/auth", authRouter);
app.use("/v1/users", userRouter);
app.use("/v1/category", categoryRouter);
app.use("/v1/course", courseRouter);
app.use("/v1/comment", commentRouter);
app.use("/v1/contact", contactRouter);
app.use("/v1/newsletter", newsletterRouter);
app.use("/v1/search", searchRouter);
app.use("/v1/notification", notificationRouter);

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

module.exports = app;
