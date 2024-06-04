const { default: mongoose } = require("mongoose");
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
exports.delete = async (req, res) => {
  try {
    const isValidID = mongoose.Types.ObjectId.isValid(req.params.id);
    if (!isValidID) {
      return res.status(409).json({ message: "User ID Not Valid!!" });
    }

    const deletedCategory = await categoryModel.findByIdAndRemove({
      _id: req.params.id,
    });

    if (!deletedCategory) {
      return res.status(404).json({ message: "Category Not Found!!" });
    }

    return res.status(200).json({ message: "Category Deleted Successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};
exports.update = async (req, res) => {
  try {
    const isValidID = mongoose.Types.ObjectId.isValid(req.params.id);
    if (!isValidID) {
      return res.status(409).json({ message: "User ID Not Valid!!" });
    }

    const { title, href } = req.body;

    const updatedCategory = await categoryModel.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $set: {
          title,
          href,
        },
      }
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "Category Not Found!!" });
    }

    return res.status(200).json({ message: "Category Updated Successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};
