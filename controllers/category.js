const categoryModel = require("../models/category");

exports.create = async (req, res) => {
  try {
    const { title, href } = req.body;
    const category = await categoryModel.create({ title, href });

    if (category) {
      return res
        .status(201)
        .json({ message: "Category Created Successfully", data: category });
    }
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
exports.getAll = async (req, res) => {
  try {
    const allCategories = await categoryModel.find({}).lean();
    return res.status(200).json({ data: allCategories });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
exports.delete = async (req, res) => {};
exports.update = async (req, res) => {};
