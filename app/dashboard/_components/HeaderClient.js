"use client";

export default function HeaderClient({ email }) {
  const toggleSidebar = () => {
    const aside = document.querySelector('aside[data-sidebar]');
    if (aside) aside.classList.toggle('-translate-x-full');
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 border-b border-slate-200/50 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-sm text-slate-500">Manage your content and settings</p>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-4">
          {/* Notifications (no handler yet) */}
          <button className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200" aria-label="Notifications">
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10 3v1a6 6 0 100 12v1" />
            </svg>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-white">
                {(email?.charAt(0) || "U").toUpperCase()}
              </span>
            </div>
            <div className="hidden lg:block">
              <p className="text-sm font-medium text-slate-800">{email || "User"}</p>
              <p className="text-xs text-slate-500">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
