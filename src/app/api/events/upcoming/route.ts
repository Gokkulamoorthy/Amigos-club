import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    // Get upcoming events that are scheduled for the future
    const upcomingEvents = await prisma.event.findMany({
      where: {
        date: {
          gt: new Date(), // Only get events in the future
        },
      },
      orderBy: {
        date: "asc", // Order by date ascending (closest first)
      },
      take: 3,
      select: {
        id: true,
        title: true,
        description: true,
        date: true,
        location: true,
        type: true,
      },
    });

    return NextResponse.json(upcomingEvents);
  } catch (error) {
    console.error("Error fetching upcoming events:", error);
    return NextResponse.json(
      { error: "Failed to fetch upcoming events" },
      { status: 500 }
    );
  }
} 