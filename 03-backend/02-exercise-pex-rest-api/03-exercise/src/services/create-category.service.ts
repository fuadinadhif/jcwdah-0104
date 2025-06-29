import pool from "../db/db";

export async function createCategoryService(name: string) {
  const result = await pool.query(
    `INSERT INTO categories (name) VALUES ($1) RETURNING id, name, created_at`,
    [name]
  );

  return result.rows;
}
