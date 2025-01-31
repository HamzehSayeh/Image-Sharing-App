const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URL;

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version

    mongoose.set("strictQuery", true);

    await mongoose.connect(
      uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("Connected to MongoDB");
      }
    );
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};
module.exports = { connectDB };
