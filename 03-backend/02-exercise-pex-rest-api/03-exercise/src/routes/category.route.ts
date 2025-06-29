import express from "express";

// Controllers
import {
  createCategory,
  getAllCategories,
  getCategoryById,
} from "../controllers/category.controller";

const router = express.Router();

// router.route("/").get(getAllCategories);
// router.route("/:id").get(getCategoryById);

router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.post("/", createCategory);

export default router;
