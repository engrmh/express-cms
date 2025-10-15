const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

module.exports.authMiddleware = async (req, res, next) => {
  const {
    headers: { cookie },
  } = req;

  if (!cookie) {
    return res.status(403).json({ message: "Protected Route" });
  }

  const cookies = cookie.split(";");
  let token = null;

  for (let c of cookies) {
    const [key, value] = c.trim().split("=");
    if (key === "token") {
      token = value;
      break;
    }
  }

  if (!token) {
    return res.status(403).json({ message: "Token not found in cookies" });
  }

  try {
    const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findOne({ _id: jwtPayload.id }).lean();
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    Reflect.deleteProperty(user, "password");
    req.user = user;
    next();
  } catch (err) {
    // console.log(err);
    return res.status(401).json({ message: "Token is expired or invalid" });
  }
};

// const {
//     headers: { cookie },
//   } = req;
