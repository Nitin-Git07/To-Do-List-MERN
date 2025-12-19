import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("❌ MONGODB_URI not set in environment variables");
    }

    await mongoose.connect(uri);
    console.log("✅ MongoDB Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1); // server crash kar do if DB fails
  }
};

export default connectDB;
