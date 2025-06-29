import express, { Request, Response, Application } from "express";
import { readFile, writeFile } from "./utils/io.js";

const app: Application = express();

app.use(express.json()); // To read request body

app.get("/api/v1/status", (request: Request, response: Response) => {
  response.status(200).json({ message: "API is running smoothly" });
});

/* -------------------------------------------------------------------------- */
/*                             CATEGORIES ENDPOINT                            */
/* -------------------------------------------------------------------------- */
/* --------------------------- GET ALL CATEGORIES --------------------------- */
app.get("/api/v1/categories", async (request: Request, response: Response) => {
  try {
    const categories = await readFile("src/data/categories.json");
    response.status(200).json({ categories });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "General error. Good luck!" });
  }
});

/* ------------------------ ADD / CREATE NEW CATEGORY ----------------------- */
app.post("/api/v1/categories", async (request: Request, response: Response) => {
  try {
    const name = request.body.name;
    const categories = await readFile("src/data/categories.json");
    const newId =
      categories.length > 1 ? categories[categories.length - 1].id + 1 : 1;

    await writeFile("src/data/categories.json", [
      ...categories,
      { id: newId, name: name },
    ]);

    response.status(201).json({ message: "Successfully create new category" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "General error. Good luck!" });
  }
});

const PORT: number = 8000;
app.listen(PORT, () => {
  console.info(`Server is running on http://localhost:${PORT}`);
});
