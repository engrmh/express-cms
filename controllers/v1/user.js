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
