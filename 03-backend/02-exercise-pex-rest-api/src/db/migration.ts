import pool from "./db.js";

const createTables = async () => {
  try {
    // Create Categories table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create Products table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL UNIQUE,
        price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
        category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create Cart table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS cart (
        id SERIAL PRIMARY KEY,
        product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
        quantity INTEGER NOT NULL CHECK (quantity > 0),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(product_id)
      )
    `);

    // Create trigger function for updating updated_at timestamp
    await pool.query(`
      CREATE OR REPLACE FUNCTION update_updated_at_column()
      RETURNS TRIGGER AS $$
      BEGIN
        NEW.updated_at = CURRENT_TIMESTAMP;
        RETURN NEW;
      END;
      $$ language 'plpgsql';
    `);

    // Create triggers for all tables
    await pool.query(`
      DROP TRIGGER IF EXISTS update_categories_updated_at ON categories;
      CREATE TRIGGER update_categories_updated_at
        BEFORE UPDATE ON categories
        FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    `);

    await pool.query(`
      DROP TRIGGER IF EXISTS update_products_updated_at ON products;
      CREATE TRIGGER update_products_updated_at
        BEFORE UPDATE ON products
        FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    `);

    await pool.query(`
      DROP TRIGGER IF EXISTS update_cart_updated_at ON cart;
      CREATE TRIGGER update_cart_updated_at
        BEFORE UPDATE ON cart
        FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    `);

    console.log("Database tables created successfully!");

    // Insert sample data
    await insertSampleData();
  } catch (error) {
    console.error("Error creating tables:", error);
  }
};

const insertSampleData = async () => {
  try {
    // Insert sample categories
    await pool.query(`
      INSERT INTO categories (name) VALUES 
      ('Buah'),
      ('Sayur'),
      ('Minuman'),
      ('Snack')
      ON CONFLICT (name) DO NOTHING
    `);

    // Insert sample products
    await pool.query(`
      INSERT INTO products (name, price, category_id) VALUES 
      ('Apel Fuji', 25000.00, 1),
      ('Jeruk Pontianak', 18000.00, 1),
      ('Wortel', 12000.00, 2),
      ('Bayam', 8000.00, 2),
      ('Air Mineral', 5000.00, 3),
      ('Teh Botol', 7500.00, 3),
      ('Keripik Singkong', 15000.00, 4)
      ON CONFLICT (name) DO NOTHING
    `);

    console.log("Sample data inserted successfully!");
  } catch (error) {
    console.error("Error inserting sample data:", error);
  }
};

// Run migration

createTables().then(() => {
  process.exit(0);
});

export { createTables };
