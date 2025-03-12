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

    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.error("[PROJECTS_FETCH_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { title, description, image, github, demo, status } = await req.json();

    const project = await prisma.project.create({
      data: {
        title,
        description,
        image,
        github,
        demo,
        status,
        members: {
          create: {
            userId: session.user.id,
            role: "LEADER",
          },
        },
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    console.error("[PROJECT_CREATE_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
} 