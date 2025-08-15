// app/dashboard/layout.jsx
import './globals.css';
import { cookies } from "next/headers";
import Sidebar from "./_components/Sidebar";
import { redirect } from "next/navigation";
import { jwtVerify } from "jose";

async function getUser() {
  const token = cookies().get("auth")?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );
    return payload; // { sub, email }
  } catch {
    return null;
  }
}

export default async function DashboardLayout({ children }) {
  const user = await getUser();
  if (!user) {
    redirect("/signin");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 md:grid md:grid-cols-[18rem_1fr]">
      {/* Sidebar takes the first grid column on md+ */}
      <Sidebar />

      {/* Content column */}
      <div className="min-w-0 w-full">
        {/* Enhanced Header */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 border-b border-slate-200/50 shadow-sm">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                onClick={() => {
                  // This would need to be handled by the sidebar component
                  document.querySelector('aside').classList.toggle('-translate-x-full');
                }}
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
              {/* Notifications */}
              <button className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200">
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10 3v1a6 6 0 100 12v1" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* User Profile */}
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-white">
                    {user?.email?.charAt(0).toUpperCase() || 'U'}
                  </span>
                </div>
                <div className="hidden lg:block">
                  <p className="text-sm font-medium text-slate-800">{user?.email || 'User'}</p>
                  <p className="text-xs text-slate-500">Administrator</p>
                </div>
              </div>

              {/* Sign Out Button */}
              <div className="hidden lg:block">
                <form action="/api/signout" method="POST">
                  <button 
                    type="submit"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 border border-slate-200 hover:border-red-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Sign Out
                  </button>
                </form>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
          <div className="min-h-[calc(100vh-12rem)]">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-slate-600">
                © 2025 Metroguards. All rights reserved.
              </div>
              <div className="flex items-center gap-6 text-sm text-slate-500">
                <a href="#" className="hover:text-slate-800 transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="hover:text-slate-800 transition-colors duration-200">Terms of Service</a>
                <a href="#" className="hover:text-slate-800 transition-colors duration-200">Support</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}