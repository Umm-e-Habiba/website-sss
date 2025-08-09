// /app/dashboard/page.jsx
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

async function getUser() {
  const cookie = cookies().get("auth")?.value;
  if (!cookie) return null;
  try {
    const { payload } = await jwtVerify(cookie, new TextEncoder().encode(process.env.JWT_SECRET));
    return payload; // { sub, email }
  } catch {
    return null;
  }
}

export default async function DashboardPage() {
  const user = await getUser();
  if (!user) {
    // You can redirect with next/navigation in a Server Component:
    // redirect("/signin");
    return <div>Please sign in</div>;
  }
  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <form action="/api/signout" method="POST">
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
}
