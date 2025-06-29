import { User } from "../../generated/prisma";
import { ApiError } from "../../utils/api-error";
import prisma from "../../config/prisma";
import bcrypt from "bcryptjs";

export const registerService = async (body: User) => {
  const { name, email, password } = body;

  if (!name || !email || !password) {
    throw new ApiError("Required fields is missing", 400);
  }

  const existingUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (existingUser) {
    throw new ApiError("User already exist", 400);
  }

  const hashingPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: { name, email, password: hashingPassword },
  });

  return { message: "Create user success" };
};
