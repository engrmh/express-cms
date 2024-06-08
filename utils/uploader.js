const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

module.exports = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "public", "courses", "covers"));
  },
  filename: (req, file, cd) => {
    const ext = path.extname(file.originalname);

    // way 1
    const fileName = Date.now() + String(Math.random() * 9999);
    cb(null, fileName + ext);

    // way 2
    // const hashedFileName = crypto
    //   .createHash("SHA256")
    //   .update(file.originalname)
    //   .digest("hex");

    // cb(null, hashedFileName + ext);
  },
});
