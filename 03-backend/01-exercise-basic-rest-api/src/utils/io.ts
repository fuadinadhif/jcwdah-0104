import fs from "fs/promises";

export async function readFile(path: string) {
  try {
    const resultJSON = await fs.readFile(path, "utf-8"); // Result in JSON format
    const resultJS = JSON.parse(resultJSON); // JSON result converted to JS format
    return resultJS;
  } catch (error) {
    console.error(error);
  }
}

export async function writeFile(
  path: string,
  data: { id: number; name: string }[]
) {
  try {
    await fs.writeFile(path, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(error);
  }
}
