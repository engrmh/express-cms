const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: String,
    },
    href: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const categoryModel = mongoose.model("Category", categorySchema);

module.exports = categoryModel
