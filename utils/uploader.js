const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

module.exports = multer.diskStorage({
  destination: (req, file, cb) => {
    // Define the directory to store uploaded files
    cb(null, path.join(__dirname, "..", "public", "courses", "covers"));
  },
  filename: (req, file, cb) => {
    // Extract the file extension from the original file name
    const ext = path.extname(file.originalname);

    // Generate a unique file name
    // Method 1: Using current timestamp and a random number
    const fileName = Date.now() + String(Math.random() * 9999);
    cb(null, fileName + ext);

    // Optional Method 2: Using crypto to generate a unique identifier
    // const hashedFileName = crypto
    //   .createHash("SHA256")
    //   .update(file.originalname)
    //   .digest("hex");
    // cb(null, hashedFileName + ext);
  },
});
