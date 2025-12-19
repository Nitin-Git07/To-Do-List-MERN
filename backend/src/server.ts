import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import connectDB from "./config/db";
import todoRoutes from './routes/todoRoutes';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Debug print
console.log("MONGODB_URI:", process.env.MONGODB_URI);

connectDB()
  .then(() => {
    app.use("/api/todos", todoRoutes);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });