const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT;

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Data Base Connected Successfully");
})();

app.listen(port , () => {
    console.log(`Server Running in port ${port}`);
});
