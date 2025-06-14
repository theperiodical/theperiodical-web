import { prisma } from "@/lib/prisma-client";
import { Role } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const organizationId = searchParams.get('organizationId');
        const role = searchParams.get('role');

        const response = await prisma.user.findMany({
            where: {
                organization_id: organizationId ? organizationId : undefined,
                role: role ? (role as Role) : undefined,
            }
        });

        return NextResponse.json({
            message: "Users fetched successfully!",
            success: true,
            data: response,
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({
            message: "Failed to fetch users",
            success: false,
            error: error instanceof Error ? error.message : "Unknown error"
        }, { status: 500 });
    }
}