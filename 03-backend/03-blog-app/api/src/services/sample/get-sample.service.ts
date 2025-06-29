import prisma from "../../config/prisma";
import { ApiError } from "../../utils/api-error";

export const getSampleService = async (id: number) => {
  const sample = await prisma.sample.findFirst({
    where: { id },
  });

  if (!sample) {
    throw new ApiError("sample not found", 404);
  }

  return sample;
};
