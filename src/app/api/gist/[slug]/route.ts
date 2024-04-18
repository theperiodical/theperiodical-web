import { prisma } from "@/lib";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const response = await prisma.gist.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      topics: true,
      author: true,
    },
  });

  return Response.json({
    message: "Gist fetched successfully!",
    gists: [response],
  });
}
