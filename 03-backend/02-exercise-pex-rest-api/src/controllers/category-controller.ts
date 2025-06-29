import { Request, Response } from "express";
import pool from "../db/db.js";

export class CategoryController {
  // GET /categories - Ambil semua kategori
  static async getAllCategories(req: Request, res: Response) {
    try {
      const result = await pool.query(
        "SELECT id, name, created_at, updated_at FROM categories ORDER BY id ASC"
      );

      res.status(200).json({
        success: true,
        message: "Categories retrieved successfully",
        data: result.rows,
      });
    } catch (error) {
      console.error("Error getting categories:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  // POST /categories - Tambah kategori baru
  static async createCategory(req: Request, res: Response) {
    try {
      const { name } = req.body;

      // Validasi input
      if (!name || typeof name !== "string" || name.trim().length === 0) {
        res.status(400).json({
          success: false,
          message: "Category name is required and must be a non-empty string",
        });
        return;
      }

      if (name.length > 100) {
        res.status(400).json({
          success: false,
          message: "Category name must not exceed 100 characters",
        });
        return;
      }

      const trimmedName = name.trim();

      // Cek apakah kategori sudah ada
      const existingCategory = await pool.query(
        "SELECT id FROM categories WHERE LOWER(name) = LOWER($1)",
        [trimmedName]
      );

      if (existingCategory.rows.length > 0) {
        res.status(409).json({
          success: false,
          message: "Category with this name already exists",
        });
        return;
      }

      // Insert kategori baru
      const result = await pool.query(
        "INSERT INTO categories (name) VALUES ($1) RETURNING id, name, created_at, updated_at",
        [trimmedName]
      );

      res.status(201).json({
        success: true,
        message: "Category created successfully",
        data: result.rows[0],
      });
    } catch (error) {
      console.error("Error creating category:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  // PUT /categories/:id - Perbarui nama kategori
  static async updateCategory(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      // Validasi ID
      const categoryId = parseInt(id);
      if (isNaN(categoryId)) {
        res.status(400).json({
          success: false,
          message: "Invalid category ID",
        });
        return;
      }

      // Validasi input
      if (!name || typeof name !== "string" || name.trim().length === 0) {
        res.status(400).json({
          success: false,
          message: "Category name is required and must be a non-empty string",
        });
        return;
      }

      if (name.length > 100) {
        res.status(400).json({
          success: false,
          message: "Category name must not exceed 100 characters",
        });
        return;
      }

      const trimmedName = name.trim();

      // Cek apakah kategori ada
      const existingCategory = await pool.query(
        "SELECT id FROM categories WHERE id = $1",
        [categoryId]
      );

      if (existingCategory.rows.length === 0) {
        res.status(404).json({
          success: false,
          message: "Category not found",
        });
        return;
      }

      // Cek apakah nama kategori sudah digunakan oleh kategori lain
      const duplicateCategory = await pool.query(
        "SELECT id FROM categories WHERE LOWER(name) = LOWER($1) AND id != $2",
        [trimmedName, categoryId]
      );

      if (duplicateCategory.rows.length > 0) {
        res.status(409).json({
          success: false,
          message: "Category with this name already exists",
        });
        return;
      }

      // Update kategori
      const result = await pool.query(
        "UPDATE categories SET name = $1 WHERE id = $2 RETURNING id, name, created_at, updated_at",
        [trimmedName, categoryId]
      );

      res.status(200).json({
        success: true,
        message: "Category updated successfully",
        data: result.rows[0],
      });
    } catch (error) {
      console.error("Error updating category:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  // DELETE /categories/:id - Hapus kategori berdasarkan ID
  static async deleteCategory(req: Request, res: Response) {
    try {
      const { id } = req.params;

      // Validasi ID
      const categoryId = parseInt(id);
      if (isNaN(categoryId)) {
        res.status(400).json({
          success: false,
          message: "Invalid category ID",
        });
        return;
      }

      // Cek apakah kategori ada
      const existingCategory = await pool.query(
        "SELECT id, name FROM categories WHERE id = $1",
        [categoryId]
      );

      if (existingCategory.rows.length === 0) {
        res.status(404).json({
          success: false,
          message: "Category not found",
        });
        return;
      }

      // Hapus kategori
      await pool.query("DELETE FROM categories WHERE id = $1", [categoryId]);

      res.status(200).json({
        success: true,
        message: "Category deleted successfully",
        data: existingCategory.rows[0],
      });
    } catch (error) {
      console.error("Error deleting category:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
}
