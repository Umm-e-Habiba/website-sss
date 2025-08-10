// app/dashboard/layout.jsx  (no "use client" here)
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
export default  async function DashboardLayout({ children }) {
  const user = await getUser();
    if (!user) {
      // You can redirect with next/navigation in a Server Component:
      redirect("/signin");
      //return <div>Please sign in</div>;
    }

  return (
    <div className="min-h-screen bg-slate-50 md:grid md:grid-cols-[16rem_1fr]">
    {/* Sidebar takes the first grid column on md+ */}
    <Sidebar />

    {/* Content column */}
    <div className="min-w-0 w-full">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="flex-1 text-center md:text-left text-xl font-semibold text-slate-800">Welcome To Dashboard</h1>
          <div className="hidden lg:block">
            <form action="/api/signout" method="POST">
              <button type="submit">Sign Out</button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  </div>
);
}
