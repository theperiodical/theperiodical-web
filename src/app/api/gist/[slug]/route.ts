import { prisma } from "@/lib";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const response = await prisma.gists.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      topics: true,
      users: true,
    },
  });

  return Response.json({
    message: "Gist fetched successfully!",
    gists: [response],
  });
}
