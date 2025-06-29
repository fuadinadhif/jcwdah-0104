import express from "express";
import {
  getSampleController,
  getSamplesController,
} from "../controllers/sample.controller";

const router = express.Router();

router.get("/", getSamplesController);
router.get("/:id", getSampleController);

export default router;
