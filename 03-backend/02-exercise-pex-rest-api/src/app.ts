import express from "express";
import dotenv from "dotenv";

// Import routes
import categoryRoutes from "./routes/category-route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running successfully",
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use("/api/v1/categories", categoryRoutes);

// Start server
app.listen(PORT, () => {
  console.info(`🚀 Server is running on http://localhost:${PORT}`);
});
