import { NextFunction, Request, Response } from "express";
import { createBlogService } from "../services/blog/create-blog.service";
import { getBlogbySlugService } from "../services/blog/get-blog-by-slug.service";
import { getBlogsService } from "../services/blog/get-blogs.service";

export const createBlogController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await createBlogService(req.body);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const getBlogsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const query = {
      page: parseInt(req.query.page as string) || 1,
      take: parseInt(req.query.take as string) || 5,
      sortOrder: (req.query.sortOrder as string) || "desc",
      sortBy: (req.query.sortBy as string) || "createdAt",
      search: (req.query.search as string) || "",
    };

    const result = await getBlogsService(query);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const getBlogBySlugController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const slug = req.params.slug;
    const result = await getBlogbySlugService(slug);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
