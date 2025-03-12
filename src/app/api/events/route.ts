import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const events = await prisma.event.findMany({
      orderBy: {
        date: "asc",
      },
    });

    return NextResponse.json(events);
  } catch (error) {
    console.error("[EVENTS_FETCH_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { title, description, date, location, type } = await req.json();

    const event = await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date),
        location,
        type,
      },
    });

    return NextResponse.json(event);
  } catch (error) {
    console.error("[EVENT_CREATE_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
} 