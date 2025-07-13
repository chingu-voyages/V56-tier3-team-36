const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));














// ================== Start the server ================== //

app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log("Server running");
});
