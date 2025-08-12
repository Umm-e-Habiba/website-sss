// app/api/contact-us/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // Resend needs Node runtime

const resend = new Resend(process.env.RESEND_API_KEY);

// tiny HTML escape helper for email body
const esc = (s = "") =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    // 🔹 Read fields exactly as defined in your form
    const firstName  = String(form.get("firstName") || "").trim();
    const lastName   = String(form.get("lastName") || "").trim();
    const address    = String(form.get("address") || "").trim();
    const suburb     = String(form.get("suburb") || "").trim();
    const state      = String(form.get("state") || "").trim();
    const postCode   = String(form.get("postCode") || "").trim();
    const phone      = String(form.get("phone") || "").trim();
    const email      = String(form.get("email") || "").trim();
    const comments   = String(form.get("comments") || "").trim();
    const terms      = !!form.get("terms");
    const newsletter = !!form.get("newsletter");
    const roles      = form.getAll("roles").map(String); // multiple checkboxes
    const resume     = form.get("resume") as File | null;

    // 🔹 Validate required fields
    if (
      !firstName || !lastName || !address || !suburb || !state ||
      !postCode || !phone || !email || !terms || !resume
    ) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // basic email format check
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    // 🔹 Validate file (<= 5MB, PDF/DOC/DOCX)
    const MAX_SIZE = 5 * 1024 * 1024;
    const allowedTypes = new Set([
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]);
    if (resume.size > MAX_SIZE) {
      return NextResponse.json(
        { success: false, error: "Resume exceeds 5MB limit" },
        { status: 400 }
      );
    }
    if (!allowedTypes.has(resume.type)) {
      return NextResponse.json(
        { success: false, error: "Resume must be PDF, DOC, or DOCX" },
        { status: 400 }
      );
    }

    // 🔹 Email setup
    const to = process.env.CONTACT_TO_EMAIL;
    if (!to) {
      return NextResponse.json(
        { success: false, error: "CONTACT_TO_EMAIL not configured" },
        { status: 500 }
      );
    }

    const fullAddress = `${address}, ${suburb}, ${state} ${postCode}`;
    const rolesText = roles.length ? roles.join(", ") : "—";

    const subject = `New Job Application — ${firstName} ${lastName}`;
    const html = `
      <h2>New Job Application</h2>
      <p><strong>Name:</strong> ${esc(firstName)} ${esc(lastName)}</p>
      <p><strong>Email:</strong> ${esc(email)}</p>
      <p><strong>Phone:</strong> ${esc(phone)}</p>
      <p><strong>Address:</strong> ${esc(fullAddress)}</p>
      <p><strong>Applying For (roles):</strong> ${esc(rolesText)}</p>
      <p><strong>Newsletter Opt-in:</strong> ${newsletter ? "Yes" : "No"}</p>
      <p><strong>Comments:</strong><br>${esc(comments).replace(/\n/g, "<br/>") || "—"}</p>
    `;
    const text = `New Job Application

Name:    ${firstName} ${lastName}
Email:   ${email}
Phone:   ${phone}
Address: ${fullAddress}
Roles:   ${rolesText}
Newsletter: ${newsletter ? "Yes" : "No"}

Comments:
${comments || "—"}
`;

    // 🔹 Prepare attachment
    const buf = Buffer.from(await resume.arrayBuffer());

    // 🔹 Send email via Resend
    await resend.emails.send({
      from: "Metro Guards <onboarding@resend.dev>", // or your domain sender
      to,
      subject,
      html,
      text,
      replyTo: email, // so you can reply to applicant directly
      attachments: [
        {
          filename: resume.name || "resume",
          content: buf,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("contact-us route error:", err);
    return NextResponse.json(
      { success: false, error: "Submission failed" },
      { status: 500 }
    );
  }
}
