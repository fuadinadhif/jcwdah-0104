import express from "express";
import { registerController } from "../controllers/auth.controller";

const router = express.Router();

router.post("/", registerController);

export default router;
