import { prisma } from "@/lib";

export async function GET() {
  const response = await prisma.topics.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      content: true,
      createdAt: true,
      gistId: true,
      updatedAt: true,
      gists: {
        select: {
          id: true,
          slug: true,
          users: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  return Response.json({
    message: "Topics fetched successfully!",
    topics: response,
  });
}
