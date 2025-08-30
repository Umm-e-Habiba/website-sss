import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export async function GET(req) {
  try {
    // Handle both runtime and static generation
    let searchParams;
    try {
      const url = new URL(req.url);
      searchParams = url.searchParams;
    } catch (error) {
      // During static generation, req.url might not be available
      searchParams = new URLSearchParams();
    }

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
