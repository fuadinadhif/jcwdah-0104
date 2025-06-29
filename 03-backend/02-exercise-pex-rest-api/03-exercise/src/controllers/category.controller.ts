import { Request, Response } from "express";
import {
  getAllCategoriesService,
  getCategoryByIdService,
} from "../services/get-category.service";
import { createCategoryService } from "../services/create-category.service";

export async function getAllCategories(request: Request, response: Response) {
  try {
    const result = await getAllCategoriesService();
    response.status(200).json({ data: result });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "General error. Good luck!" });
  }
}
export async function getCategoryById(request: Request, response: Response) {
  try {
    const categoryId = Number(request.params.id);
    const result = await getCategoryByIdService(categoryId);

    response.status(200).json({ data: result });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "General error. Good luck!" });
  }
}

export async function createCategory(request: Request, response: Response) {
  try {
    const name = request.body.name;
    const result = await createCategoryService(name);

    response
      .status(201)
      .json({ message: "Successfully create new category", data: result });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "General error. Good luck!" });
  }
}
