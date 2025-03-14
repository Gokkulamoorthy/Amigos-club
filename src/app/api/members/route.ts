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

    const members = await prisma.user.findMany({
      include: {
        profile: true,
      },
      orderBy: {
        joinDate: "desc",
      },
    });

    return NextResponse.json(members);
  } catch (error) {
    console.error("[MEMBERS_FETCH_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
} 