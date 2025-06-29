import express from "express";
import {
  createBlogController,
  getBlogBySlugController,
  getBlogsController,
} from "../controllers/blog.controller";

const router = express.Router();

router.get("/", getBlogsController);
router.get("/:slug", getBlogBySlugController);
router.post("/", createBlogController);

export default router;
