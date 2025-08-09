"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SidebarItem({ href, label }) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(href + "/");
  return (
    <Link
      href={href}
      className={cx(
        "block rounded-xl px-4 py-2 text-sm transition",
        active ? "bg-white/10 text-white" : "text-white/80 hover:text-white hover:bg-white/10"
      )}
    >
      {label}
    </Link>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={cx(
        "fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 text-white shadow-xl transition-transform lg:translate-x-0",
        open ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex h-16 items-center gap-2 px-4 border-b border-white/10">
        <button
          onClick={() => setOpen(false)}
          className="lg:hidden rounded-lg p-2 hover:bg-white/10"
          aria-label="Close sidebar"
        >
          ✕
        </button>
        <Link href="/" className="text-lg font-semibold">Metroguards</Link>
      </div>

      <nav className="p-4 space-y-1">
        <SidebarItem href="/dashboard" label="Overview" />
        <SidebarItem href="/dashboard/blogs/new" label="Create Blog" />
        <SidebarItem href="/dashboard/blogs" label="View Blogs" />
      </nav>

      <div className="mt-auto p-4 border-t border-white/10">
        <form action="/api/signout" method="POST">
          <button type="submit">Sign Out</button>
        </form>
      </div>
    </aside>
  );
}
