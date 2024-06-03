const { default: mongoose } = require("mongoose");
const banModel = require("../../models/banPhone");
const userModel = require("../../models/user");

exports.banUser = async (req, res) => {
  const mainUser = await userModel.findOne({ _id: req.params.id }).lean();

  const banResult = await banModel.create({
    username: mainUser.username,
    phone: mainUser.phone,
  });

  // console.log(mainUser);

  if (banResult) {
    return res.status(200).json({ message: "User Ban Successfully" });
  }
  return res.status(500).json({ message: "Server Error" });
};

exports.getAll = async (req, res) => {
  try {
    const allUsers = await userModel.find({}).lean();

    const fixedUsers = allUsers.map((user) => {
      const { password, ...data } = user;
      return data;
    });

    return res.status(200).json({ data: fixedUsers });
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
};

exports.removeUser = async (req, res) => {
  const isValidUserId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!isValidUserId) {
    return res.status(409).json({ message: "User ID Not Valid!!" });
  }

  const removedUser = await userModel.findByIdAndRemove({ _id: req.params.id });

  if (!removedUser) {
    return res.status(404).json({ message: "User Not Found!!" });
  }

  return res.status(200).json({ message: "User Removed Successfully" });
};
