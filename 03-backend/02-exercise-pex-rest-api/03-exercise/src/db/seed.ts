import pool from "./db";

async function createSeed() {
  try {
    /* ------------------------- Create Categories Table ------------------------ */
    await pool.query(`
      CREATE TABLE IF NOT EXISTS categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    /* ------------------------- Insert Categories Data ------------------------- */
    await pool.query(`
      INSERT INTO categories (name) VALUES
      ('Buah'),
      ('Sayur'),
      ('Snack');
    `);

    console.info(`Seed success`);
  } catch (error) {
    console.error(`Seed failed: ${error}`);
  }
}

createSeed();
