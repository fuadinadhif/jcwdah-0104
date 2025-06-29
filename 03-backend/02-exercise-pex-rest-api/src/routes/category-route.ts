import { Router } from "express";
import { CategoryController } from "../controllers/category-controller.js";

const router = Router();

// GET /api/v1/categories - Ambil semua kategori
router.get("/", CategoryController.getAllCategories);

// POST /api/v1/categories - Tambah kategori baru
router.post("/", CategoryController.createCategory);

// PUT /api/v1/categories/:id - Perbarui nama kategori
router.put("/:id", CategoryController.updateCategory);

// DELETE /api/v1/categories/:id - Hapus kategori berdasarkan ID
router.delete("/:id", CategoryController.deleteCategory);

export default router;
