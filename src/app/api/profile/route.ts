import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { name, bio, skills, github, linkedin, portfolio } = await req.json();

    // Update user name
    await prisma.user.update({
      where: { id: session.user.id },
      data: { name },
    });

    // Update or create profile
    await prisma.profile.upsert({
      where: { userId: session.user.id },
      update: {
        bio,
        skills,
        github,
        linkedin,
        portfolio,
      },
      create: {
        userId: session.user.id,
        bio,
        skills,
        github,
        linkedin,
        portfolio,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[PROFILE_UPDATE_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
} 