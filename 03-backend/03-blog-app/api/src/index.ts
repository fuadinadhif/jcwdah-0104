import cors from "cors";
import express from "express";
import { PORT } from "./config/env";
import { errorMiddleware } from "./middlewares/error.middleware";
import blogRouter from "./routes/blog.router";
import sampleRouter from "./routes/sample.router";
import authRouter from "./routes/auth.router";

const app = express();

// config
app.use(cors());
app.use(express.json());

// routes
app.use("/samples", sampleRouter);
app.use("/blogs", blogRouter);
app.use("/auth", authRouter);

// error
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
