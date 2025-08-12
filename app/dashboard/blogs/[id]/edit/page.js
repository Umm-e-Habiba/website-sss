// app/dashboard/blogs/[id]/edit/page.jsx
import prisma from "@/lib/prisma";
import Link from "next/link";
import EditBlogForm from "../../EditBlogForm";

export default async function EditBlogPage({ params }) {
  const id = Number(params.id);
  const post = await prisma.post.findUnique({
    where: { id },
    select: { id: true, title: true, content: true, published: true, coverImage: true, updatedAt:true },
  });
  if (!post) return <div>Not found</div>;

const safePost = {
    ...post,
    updatedAt: post.updatedAt.toISOString(), // "2025-08-12T18:23:11.000Z"
  };
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Edit Blog</h1>
        <Link href="/dashboard/blogs" className="text-sm underline">← Back</Link>
      </div>
      <div className="rounded-2xl border bg-white p-6">
        <EditBlogForm post={safePost} redirectTo="/dashboard/blogs" />
      </div>
    </div>
  );
}
