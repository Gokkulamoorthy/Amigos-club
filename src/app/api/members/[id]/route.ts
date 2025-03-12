import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const member = await prisma.user.findUnique({
      where: { id: params.id },
      include: {
        profile: true,
      },
    });

    if (!member) {
      return new NextResponse("Member not found", { status: 404 });
    }

    return NextResponse.json(member);
  } catch (error) {
    console.error("[MEMBER_FETCH_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
} 