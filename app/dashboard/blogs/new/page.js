import CreateBlogForm from "../CreateBlogForm";
import Link from "next/link";

export default function NewBlogPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Create Blog</h1>
        <Link href="/dashboard/blogs" className="text-sm underline">
          ← Back to Blogs
        </Link>
      </div>

      <div className="rounded-2xl border bg-white p-6">
        <CreateBlogForm redirectTo="/dashboard/blogs" />
      </div>
    </div>
  );
}
