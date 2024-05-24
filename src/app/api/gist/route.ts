import { prisma } from "@/lib";

export async function GET() {
  const response = await prisma.gists.findMany({
    include: {
      topics: true,
      users: true,
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
