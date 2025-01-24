const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri =
      "mongodb+srv://hamzehsayeh:hamzeh.s2001@cluster0.hzvwt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
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
