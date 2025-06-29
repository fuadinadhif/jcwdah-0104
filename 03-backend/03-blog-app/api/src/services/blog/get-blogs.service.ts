import prisma from "../../config/prisma";
import { Prisma } from "../../generated/prisma";
import { PaginationQueryParams } from "../../types/pagination";

export const getBlogsService = async (query: PaginationQueryParams) => {
  const { page, take, sortBy, sortOrder, search } = query;

  const whereClause: Prisma.BlogWhereInput = {};

  if (search) {
    whereClause.OR = [
      { title: { contains: search, mode: "insensitive" } },
      { description: { contains: search, mode: "insensitive" } },
      { category: { contains: search, mode: "insensitive" } },
    ];
  }

  const blogs = await prisma.blog.findMany({
    where: whereClause,
    take: take, // raw sql = limit
    skip: (page - 1) * take, // raw sql = offset
    orderBy: { [sortBy]: sortOrder },
  });

  const count = await prisma.blog.count({ where: whereClause });

  return {
    data: blogs,
    meta: { page, take, total: count },
  };
};
