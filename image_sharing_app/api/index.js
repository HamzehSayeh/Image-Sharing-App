const express = require("express");
const app = express();
const mongoose = require("mongoose");

const dotenv = require("dotenv");
const { connectDB } = require("./config/db");

dotenv.config();
connectDB();
app.use(express.json);

const port = 8080;
app.listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
});
module.exports = app;
