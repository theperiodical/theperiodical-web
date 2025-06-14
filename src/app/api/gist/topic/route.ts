import { prisma } from "@/lib";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await prisma.topic.findMany({
    include: {
      gist: {
        include: {
          author: true,
        },
      },
    },
    orderBy: {
      created_at: "desc",
    },
  });

  return NextResponse.json({
    message: "Topics fetched successfully!",
    topics: response,
  });
}
