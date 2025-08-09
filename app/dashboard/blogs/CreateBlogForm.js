"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RichTextEditor from "./RichTextEditor";

const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

function slugify(s) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export default function CreateBlogForm({ redirectTo = "/dashboard/blogs" }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [coverImage, setCoverImage] = useState(""); // URL after upload
  const [imagePreview, setImagePreview] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState(""); // HTML from TipTap
  const [published, setPublished] = useState(false);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const autoSlug = () => setSlug((prev) => prev || slugify(title));

  const handleImage = async (file) => {
    if (!file || !CLOUD || !PRESET) {
      alert("Cloudinary not configured.");
      return;
    }
    setUploading(true);
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("upload_preset", PRESET);

      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD}/image/upload`, {
        method: "POST",
        body: form,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || "Upload failed");
      setCoverImage(data.secure_url);
      setImagePreview(data.secure_url);
    } catch (e) {
      alert(e.message);
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug: slug || undefined, // server will auto-unique it
          excerpt: excerpt || undefined,
          coverImage: coverImage || undefined,
          tags, // comma-separated, server normalizes
          content,
          published,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create post");
      router.replace(redirectTo);
      router.refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 max-w-2xl">
      <div className="grid gap-2">
        <label className="text-sm font-medium">Title</label>
        <input
          className="w-full rounded-xl border px-3 py-2 text-sm"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={autoSlug}
          placeholder="Amazing post title"
          required
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">Slug (optional)</label>
        <input
          className="w-full rounded-xl border px-3 py-2 text-sm"
          value={slug}
          onChange={(e) => setSlug(slugify(e.target.value))}
          placeholder="auto-generated if empty"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">Excerpt (optional)</label>
        <input
          className="w-full rounded-xl border px-3 py-2 text-sm"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="Short summary for cards and SEO"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">Cover Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImage(e.target.files?.[0])}
        />
        {uploading && <p className="text-sm text-slate-500">Uploading...</p>}
        {imagePreview && (
          <img src={imagePreview} alt="preview" className="mt-2 h-32 w-auto rounded-xl object-cover border" />
        )}
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">Tags (comma-separated)</label>
        <input
          className="w-full rounded-xl border px-3 py-2 text-sm"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="nextjs, prisma, tailwind"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">Content</label>
        <RichTextEditor value={content} onChange={setContent} />
      </div>

      <label className="inline-flex items-center gap-2 text-sm">
        <input type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} />
        Publish now
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={saving}
          className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
        >
          {saving ? "Saving..." : "Create Post"}
        </button>
        <button
          type="button"
          onClick={() => {
            setTitle(""); setSlug(""); setExcerpt(""); setCoverImage(""); setImagePreview("");
            setTags(""); setContent(""); setPublished(false);
          }}
          className="rounded-xl border px-4 py-2 text-sm"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
