import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

// Routes
import categoryRouter from "./routes/category.route";

dotenv.config();

const app: Application = express();

// Middlewares
app.use(express.json());

// Health endpoint
app.get("/api/v1/health", (request: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: `Server is running successfully`,
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/v1/categories", categoryRouter);

const PORT: number = 8000;
app.listen(PORT, () =>
  console.info(`Server is running on http://localhost:${PORT}`)
);
