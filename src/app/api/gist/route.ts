import { prisma } from "@/lib/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await prisma.gist.findMany({
      include: {
        organization: true,
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true
          }
        }
      },
      orderBy: {
        created_at: "desc",
      }
    });

    return NextResponse.json({
      message: "Gists fetched successfully!",
      gists: response,
    });
  } catch (error: any) {
    console.error("Error fetching gists:", error);
    return NextResponse.json(
      { message: "Failed to fetch gists", error: error.message },
      { status: 500 }
    );
  }
}
