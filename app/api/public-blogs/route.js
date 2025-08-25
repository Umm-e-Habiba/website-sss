import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const limit = Math.max(1, Math.min(50, Number(searchParams.get("limit") || 12)));
    const page = Math.max(1, Number(searchParams.get("page") || 1));
    const skip = (page - 1) * limit;

    const where = { published: true };

    // Run queries sequentially (avoid prepared statement collisions)
    const items = await prisma.post.findMany({
      where,
      orderBy: { createdAt: "asc" },
      skip,
      take: limit,
      select: {
        id: true,
        title: true,
        slug: true,
        createdAt: true,
        excerpt: true,
        coverImage: true,
      },
    });

    const total = await prisma.post.count({ where });

    const hasMore = skip + items.length < total;

    return NextResponse.json({ items, page, limit, total, hasMore });
  } catch (err) {
    console.error("❌ API /public-blogs error:", err);

    // Always return valid JSON, even on errors
    return NextResponse.json(
      {
        items: [],
        page: 1,
        limit: 0,
        total: 0,
        hasMore: false,
        error: err.message,
      },
      { status: 500 }
    );
  }
}
