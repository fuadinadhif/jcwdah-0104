import pool from "../db/db";

export async function getAllCategoriesService() {
  const result = await pool.query(`SELECT * FROM categories ORDER BY name ASC`);

  return result.rows;
}

export async function getCategoryByIdService(categoryId: number) {
  const result = await pool.query(`SELECT * FROM categories WHERE id=$1`, [
    categoryId,
  ]);

  return result;
}
