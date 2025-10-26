const { isValidObjectId } = require("mongoose");
const articleModel = require("../../models/article");

exports.getAll = async (req, res) => {
  try {
    const articles = await articleModel
      .find({
        publish: true,
      })
      .lean();

    return res.status(200).json({ code: 200, data: articles });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Error been Occurred",
    });
  }
};
exports.getAllByAdmin = async (req, res) => {};
exports.create = async (req, res) => {
  try {
    const { title, description, body, href, categoryId } = req.body;

    await articleModel.create({
      title,
      description,
      body,
      cover: req.file.fileName,
      href,
      categoryId,
      creator: req.user._id,
      publish: true,
    });

    return res
      .status(201)
      .json({ code: 201, message: "Article added and published successfully" });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Error been Occurred",
    });
  }
};
exports.draft = async (req, res) => {
  try {
    const { title, description, body, href, categoryId } = req.body;

    await articleModel.create({
      title,
      description,
      body,
      cover: req.file.fileName,
      href,
      categoryId,
      creator: req.user._id,
      publish: false,
    });

    return res
      .status(201)
      .json({ code: 201, message: "Article added and drafted successfully" });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Error been Occurred",
    });
  }
};
exports.getOne = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(403).json({ code: 403, message: "ID is not valid!!" });
    }

    const article = await articleModel.findOne({ _id: id });

    if (!article) {
      return res
        .status(404)
        .json({ code: 404, message: "Article not found!!" });
    }

    return res.status(200).json({ code: 200, data: article });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Error been Occurred",
    });
  }
};
exports.update = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(403).json({ code: 403, message: "ID is not valid!!" });
    }

    const article = await articleModel.deleteOne({ _id: id });

    if (!article) {
      return res
        .status(404)
        .json({ code: 404, message: "Article not found!!" });
    }

    const { title, description, body, href, categoryId } = req.body;

    await articleModel.findOneAndUpdate(
      { _id: id },
      {
        title,
        description,
        body,
        cover: req.file.fileName,
        href,
        categoryId,
        creator: req.user._id,
        publish: false,
      }
    );

    return res
      .status(201)
      .json({ code: 201, message: "Article updated successfully" });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Error been Occurred",
    });
  }
};
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(403).json({ code: 403, message: "ID is not valid!!" });
    }

    const article = await articleModel.deleteOne({ _id: id });

    if (!article) {
      return res
        .status(404)
        .json({ code: 404, message: "Article not found!!" });
    }

    return res
      .status(200)
      .json({ code: 200, message: "Article deleted successfully" });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Error been Occurred",
    });
  }
};
