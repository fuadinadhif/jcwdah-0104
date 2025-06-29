import { PrismaClient } from "../src/generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  await prisma.sample.deleteMany();
  await prisma.blog.deleteMany();
  await prisma.user.deleteMany();

  console.log("🌱 Seeding database...");

  // Seed Sample table
  const samples = await prisma.sample.createMany({
    data: [
      { name: "Sample Alpha" },
      { name: "Sample Beta" },
      { name: "Sample Gamma" },
      { name: "Sample Delta" },
      { name: "Sample Epsilon" },
    ],
  });

  // Create Users with hashed passwords
  const passwordHash = await bcrypt.hash("password123", 10);

  const users = await Promise.all(
    [
      { name: "Alice Johnson", email: "alice@example.com" },
      { name: "Bob Smith", email: "bob@example.com" },
      { name: "Charlie Davis", email: "charlie@example.com" },
      { name: "Diana Prince", email: "diana@example.com" },
      { name: "Evan Lee", email: "evan@example.com" },
    ].map((user) =>
      prisma.user.create({
        data: {
          ...user,
          password: passwordHash,
        },
      })
    )
  );

  // Create Blogs assigned to users
  const blogs = await Promise.all(
    [
      {
        slug: "how-to-start-a-startup",
        title: "How to Start a Startup",
        description:
          "A comprehensive guide to launching your own tech startup.",
        thumbnail: "https://source.unsplash.com/600x400/?startup",
        category: "Business",
        content:
          "Starting a startup requires planning, validation, and resilience...",
        userId: users[0].id,
      },
      {
        slug: "mastering-typescript",
        title: "Mastering TypeScript",
        description: "Everything you need to know to become a TypeScript pro.",
        thumbnail: "https://source.unsplash.com/600x400/?typescript",
        category: "Programming",
        content: "TypeScript extends JavaScript by adding types...",
        userId: users[1].id,
      },
      {
        slug: "traveling-in-japan",
        title: "Traveling in Japan",
        description: "Tips and guides for an unforgettable trip to Japan.",
        thumbnail: "https://source.unsplash.com/600x400/?japan",
        category: "Travel",
        content: "Japan is a mix of traditional and modern experiences...",
        userId: users[2].id,
      },
      {
        slug: "healthy-eating-guide",
        title: "Healthy Eating Guide",
        description: "Maintain a balanced diet with these simple tips.",
        thumbnail: "https://source.unsplash.com/600x400/?healthy-food",
        category: "Health",
        content: "Eating healthy doesn't have to be complicated...",
        userId: users[3].id,
      },
      {
        slug: "photography-for-beginners",
        title: "Photography for Beginners",
        description: "Learn the basics of capturing stunning photos.",
        thumbnail: "https://source.unsplash.com/600x400/?photography",
        category: "Art",
        content: "Photography is about light, composition, and storytelling...",
        userId: users[4].id,
      },
    ].map((blog) => prisma.blog.create({ data: blog }))
  );

  console.log("✅ Seed completed!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
