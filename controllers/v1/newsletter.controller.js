const newsletterModel = require("../../models/newsletter");

exports.getAll = async function (req, res) {
  try {
    const allData = await newsletterModel.find({});
    return res.status(200).json(allData);
  } catch (e) {
    return res.status(500).json({ message: "Error been occurred", error: e });
  }
};

exports.create = async function (req, res) {
  try {
    const { email } = req.body;

    await newsletterModel.create({
      email,
    });

    return res.status(201).json({ message: "Added in newsletter" });
  } catch (e) {
    return res.status(500).json({ message: "Error been occurred", error: e });
  }
};
