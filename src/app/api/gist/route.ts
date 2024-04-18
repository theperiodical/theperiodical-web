import { prisma } from "@/lib";

export async function GET() {
  const response = await prisma.gist.findMany({
    include: {
      topics: true,
      author: true,
    },
    orderBy: {
      from: "desc",
    },
  });

  return Response.json({
    message: "Gists fetched successfully!",
    gists: response,
  });
}
