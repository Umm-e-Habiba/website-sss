// app/dashboard/blogs/EditBlogForm.jsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RichTextEditor from "./RichTextEditor";

const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

export default function EditBlogForm({ post, redirectTo = "/dashboard/blogs" }) {
  const router = useRouter();

  const [title, setTitle] = useState(post.title || "");
  const [content, setContent] = useState(post.content || "");
  const [published, setPublished] = useState(!!post.published);
  const [updatedAt, setUpdatedAt] = useState(
  post?.updatedAt ? new Date(post.updatedAt).toISOString().split("T")[0] : ""
);

  // cover image state (preview + value)
  const [coverImage, setCoverImage] = useState(post.coverImage || "");
  const [imagePreview, setImagePreview] = useState(post.coverImage || "");
  const [uploading, setUploading] = useState(false);

  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleImage(file) {
    if (!file) return;
    if (!CLOUD || !PRESET) {
      alert("Cloudinary env not set. Add NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET.");
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

      // Replace previous image by updating the URL in state
      setCoverImage(data.secure_url);
      setImagePreview(data.secure_url);
    } catch (e) {
      alert(e.message);
    } finally {
      setUploading(false);
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      const res = await fetch(`/api/blogs/${post.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          content,
          published,
          coverImage: coverImage || null, // send new (or null to clear)
          updatedAt,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update post");
      router.replace(redirectTo);
      router.refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 max-w-2xl">
      <div className="grid gap-2">
        <label className="text-sm font-medium">Title</label>
        <input
          className="w-full rounded-xl border px-3 py-2 text-sm"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      {/* NEW DATE FIELD */}
      <div className="grid gap-2">
        <label className="text-sm font-medium">Publish Date</label>
        <input
          type="date"
          className="w-full rounded-xl border px-3 py-2 text-sm"
          value={updatedAt}
          onChange={(e) => setUpdatedAt(e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-medium">Cover Image</label>
        <input type="file" accept="image/*" onChange={(e) => handleImage(e.target.files?.[0])} />
        {uploading && <p className="text-sm text-slate-500">Uploading...</p>}
        {imagePreview && (
          <img
            src={imagePreview}
            alt="cover preview"
            className="mt-2 h-32 w-auto rounded-xl object-cover border"
          />
        )}
        {imagePreview && (
          <button
            type="button"
            className="mt-2 text-sm underline text-red-600"
            onClick={() => { setCoverImage(""); setImagePreview(""); }}
          >
            Remove image
          </button>
        )}
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">Content</label>
        <RichTextEditor value={content} onChange={setContent} />
      </div>

      <label className="inline-flex items-center gap-2 text-sm">
        <input type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} />
        Published
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={saving}
          className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
}
