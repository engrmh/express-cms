const { isValidObjectId } = require("mongoose");
const contactModel = require("../../models/contact");
const nodemailer = require("nodemailer");
require("dotenv").config();

exports.getAll = async (req, res) => {
  try {
    const allContactMessages = await contactModel
      .find({})
      .select("-__v")
      .lean();

    return res.status(200).json(allContactMessages);
  } catch (error) {
    return res.status(500).json({
      message: "Error been occurred!",
      error,
    });
  }
};
exports.create = async (req, res) => {
  try {
    const { name, email, phone, body } = req.body;

    await contactModel.create({
      name,
      email,
      phone,
      body,
    });

    return res.status(201).json({ message: "Message added successfully" });
  } catch (error) {
    return res.status(500).json({
      message: "Error been occurred!",
      error,
    });
  }
};
exports.remove = async (req, res) => {
  try {
    const isValid = isValidObjectId(req.params.id);

    if (!isValid) {
      return res.status(400).json({ message: "Message ID is invalid" });
    }

    const message = await contactModel.findOneAndDelete({
      _id: req.params.id,
    });

    if (!message) {
      return res.status(404).json({
        message: "Message not found!!",
      });
    }

    return res.status(200).json({ message: "Removed Sucessfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error been occurred!",
      error,
    });
  }
};
exports.answer = async (req, res) => {
  try {
    const isValid = isValidObjectId(req.params.id);
    if (!isValid) {
      return res.status(400).json({ message: "Message ID not valid!!" });
    }
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOption = {
      from: process.env.NODEMAILER_USER,
      to: req.body.email,
      subject: "Response For Your Message",
      text: req.body.answer,
    };

    transporter.sendMail(mailOption, async (err, info) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error been occurred to send mail" });
      } else {
        const conatct = await contactModel.findOneAndUpdate(
          {
            _id: req.params.id,
          },
          {
            answer: 1,
          }
        );
        return res.status(201).json({ message: "Email sent successfully" });
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error been occurred!",
      error,
    });
  }
};
