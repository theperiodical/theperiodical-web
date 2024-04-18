import { prisma } from "@/lib";

export async function GET() {
  const response = await prisma.topic.findMany({
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
      gist: {
        select: {
          id: true,
          author: {
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
