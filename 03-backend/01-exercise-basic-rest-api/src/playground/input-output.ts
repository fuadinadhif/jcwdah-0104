import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url); // To get our file path
const __dirname = dirname(__filename); // To get ONLY the directory path
const categoriesPath = join(__dirname, "..", "data", "categories.json"); // To get categories path

// Output -> Read File
const categoriesJSON = await fs.readFile(categoriesPath, "utf-8"); // Categories in JSON format
const categories = JSON.parse(categoriesJSON); // Categories in JS format

// Input -> Write File
await fs.writeFile(
  categoriesPath,
  JSON.stringify([...categories, { id: 5, name: "Bumbu" }], null, 2)
);
