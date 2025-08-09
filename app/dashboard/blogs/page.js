import prisma from "@/lib/prisma";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

export default async function BlogsPage() {
  // user auth is handled in dashboard/layout via redirect
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    select: { id: true, title: true, published: true, createdAt: true, slug: true },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">My Blogs</h1>
        <Link
          href="/dashboard/blogs/new"
          className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white"
        >
          + Create Blog
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="text-slate-600">No posts yet.</p>
      ) : (
        <ul className="divide-y rounded-2xl border bg-white">
          {posts.map(p => (
            <li key={p.id} className="flex items-center gap-3 p-4">
              <span className="flex-1">{p.title}</span>
              <span className="text-sm">{p.published ? "Published" : "Draft"}</span>
              {/* optional: add view/edit links */}
              <Link
              href={`/dashboard/blogs/${p.id}/edit`}
              className="text-sm underline">
              Edit
              </Link>
              <DeleteButton id={p.id} />
              {/* <Link href={`/blog/${p.slug}`} className="text-sm underline">View</Link> */}
            </li>
            
          ))}
        </ul>
      )}
    </div>
  );
}
