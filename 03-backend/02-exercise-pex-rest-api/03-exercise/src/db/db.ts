import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  host: process.env.SUPABASE_HOST,
  port: parseInt(process.env.SUPABASE_PORT || "5432"),
  database: process.env.SUPABASE_NAME,
  user: process.env.SUPABASE_USER,
  password: process.env.SUPABASE_PASSWORD,
});

async function testDBConnection() {
  try {
    const result = await pool.query("SELECT NOW()");
    console.info(`Connected database: ${result.rows[0].now}`);
  } catch (error) {
    console.error(`Failed to connect to the database: ${error}`);
  }
}

testDBConnection();

pool.on("connect", () => console.info(`Database connected`));
pool.on("error", (error) =>
  console.error(`Database connection error: ${error}`)
);

export default pool;
