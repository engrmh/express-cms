const mongoose = require("mongoose");

const banSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const banModel = mongoose.model("BanUser", banSchema);

module.exports = banModel;
