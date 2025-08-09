"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteButton({ id }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to delete post");

      router.refresh(); // refresh the list after deletion
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-sm text-red-600 underline disabled:opacity-60"
    >
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
}
