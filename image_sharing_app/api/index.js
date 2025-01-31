const express = require("express");
const app = express();
const mongoose = require("mongoose");

const dotenv = require("dotenv");
const { connectDB } = require("./config/db");

dotenv.config();
connectDB();
app.use(express.json);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
});

module.exports = app;
