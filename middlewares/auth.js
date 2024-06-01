const jwt = require("jsonwebtoken");
const userModel = require("../models/user");
module.exports.authMiddleware = async (req, res, next) => {
  const authHeader = req.header("Authorization").split(" ");
  if (authHeader.length !== 2) {
    return res.status(403).json({ message: "Protected Route" });
  }

  const token = authHeader[1];
  try {
    const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne({ _id: jwtPayload.id }).lean();
    Reflect.deleteProperty(user, "password");
    req.user == user;
    next();
  } catch (err) {
    return res.json(err);
  }
};
