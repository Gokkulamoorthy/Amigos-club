import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    // Get the most recent projects that are either completed or in progress
    const featuredProjects = await prisma.project.findMany({
      where: {
        status: {
          in: ["COMPLETED", "IN_PROGRESS"],
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
      select: {
        id: true,
        title: true,
        description: true,
        image: true,
        status: true,
      },
    });

    return NextResponse.json(featuredProjects);
  } catch (error) {
    console.error("Error fetching featured projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch featured projects" },
      { status: 500 }
    );
  }
} 