const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

module.exports.authMiddleware = async (req, res, next) => {
  const {
    headers: { cookie },
  } = req;

  if (!cookie) {
    return res.status(403).json({ message: "Protected Route" });
  }
  const token = cookie.split("=")[1];
  try {
    const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne({ _id: jwtPayload.id }).lean();
    Reflect.deleteProperty(user, "password");
    req.user = user;
    next();
  } catch (err) {
    return res.json({ message: "Token is expired or not login" });
  }
};

// const {
//     headers: { cookie },
//   } = req;
