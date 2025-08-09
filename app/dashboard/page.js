// /app/dashboard/page.jsx
import { cookies } from "next/headers";
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


export default async function DashboardPage() {
  const user = await getUser();
  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <form action="/api/signout" method="POST">
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
}
