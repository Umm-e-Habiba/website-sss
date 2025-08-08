import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "../../../components/emails/ContactEmail"; 

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const firstName = String(form.get("firstName") || "");
    const lastName  = String(form.get("lastName") || "");
    const email     = String(form.get("email") || "");
    const phone     = String(form.get("phone") || "");
    const service   = String(form.get("service") || "");
    const location  = String(form.get("location") || "");
    const message   = String(form.get("message") || "");

    // Basic guard
    if (!firstName || !lastName || !email) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      // test-safe sender; switch to your domain once verified
      from: "Metro Guards <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL!,            // e.g. ummehabiba989@gmail.com
      replyTo: email,                                // <- correct key
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "—"}</p>
        <p><strong>Service:</strong> ${service || "—"}</p>
        <p><strong>Location:</strong> ${location || "—"}</p>
        <p><strong>Message:</strong><br/>${message || "—"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Email failed" }, { status: 500 });
  }
}
