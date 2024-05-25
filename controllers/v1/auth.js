const userModel = require("../../models/user");
const registerValidator = require("../../validators/register");
const bcrypt = require("bcrypt");
const jwt = require("jwt");
require("dotenv").config();

exports.register = async (req, res) => {
  try {
    const validationResult = registerValidator(req.body);
    if (validationResult !== true) {
      return res.status(422).json(registerValidator);
    }

    const { username, name, email, password, phone } = req.body;

    const isUserExsit = userModel.findOne({
      $or: [{ username }, { email }],
    });
    if (isUserExsit) {
      return res.status(409).json("Username or email is duplicated");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userCounts = await userModel.count();
    const newUser = await userModel.create({
      username,
      name,
      email,
      password: hashedPassword,
      phone,
      role: userCounts > 0 ? "USER" : "ADMIN",
    });

    const accessToken = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: "30 day",
    });
    res.status(500), json({ newUser, accessToken });
  } catch (err) {
    res.status(500), json({ message: "Server Error" });
  }
};
exports.login = async (req, res) => {};
exports.getMe = async (req, res) => {};
