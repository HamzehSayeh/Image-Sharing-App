const mongoose = require("mongoose");
const photo = require("./photo");

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      max: 500,
    },
    imageProprties: {
      type: String,
      required: true,
    },
  },
  { Timestamp: true }
);

module.exports = mongoose.model("Post", postSchema);
