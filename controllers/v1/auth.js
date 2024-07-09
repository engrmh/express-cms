const banModel = require("../../models/banPhone");
const userModel = require("../../models/user");
const registerValidator = require("../../validators/register");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res) => {
  try {
    const validationResult = registerValidator(req.body);
    if (validationResult !== true) {
      return res.status(422).json(registerValidator);
    }

    const { username, name, email, password, phone } = req.body;

    const isUserExsit = await userModel.findOne({
      $or: [{ username }, { email }],
    });
    if (isUserExsit) {
      return res
        .status(409)
        .json({ message: "Username or email is duplicated" });
    }

    const isUserBan = await banModel.findOne({ phone });

    if (isUserBan) {
      return res.status(409).json({ message: "This Phone Baned" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userCounts = await userModel.count();
    const user = await userModel.create({
      username,
      name,
      email,
      password: hashedPassword,
      phone,
      role: userCounts > 0 ? "USER" : "ADMIN",
    });

    const newUser = user.toObject();
    Reflect.deleteProperty(newUser, "password");
    const accessToken = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: "30 day",
    });
    return res.status(201).json({ newUser, accessToken });
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
};
exports.login = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    const mainUser = await userModel.findOne({
      $or: [
        { username: identifier },
        { email: identifier },
        { phone: identifier },
      ],
    });

    if (!mainUser) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const isPasswordValid = await bcrypt.compare(password, mainUser.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Data Not valid" });
    }

    const accessToken = jwt.sign({ id: mainUser._id }, process.env.JWT_SECRET, {
      expiresIn: "30 Day",
    });

    return res.status(200).json(accessToken);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
exports.getMe = async (req, res) => {};
