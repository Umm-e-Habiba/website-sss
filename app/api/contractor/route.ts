// app/api/contractor/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
const resend = new Resend(process.env.RESEND_API_KEY);

// escape for HTML email content
const esc = (s = "") =>
  s.replace(/&/g, "&amp;")
   .replace(/</g, "&lt;")
   .replace(/>/g, "&gt;")
   .replace(/"/g, "&quot;")
   .replace(/'/g, "&#39;");

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    // Company / declarant / signature
    const companyName     = String(form.get("companyName") || "").trim();
    const abnAcn          = String(form.get("abnAcn") || "").trim();
    const declarantName   = String(form.get("declarantName") || "").trim();
    const position        = String(form.get("position") || "").trim(); // Director | Company Secretary
    const declarationDate = String(form.get("declarationDate") || "").trim();

    const signature       = String(form.get("signature") || "").trim();
    const signatureDate   = String(form.get("signatureDate") || "").trim();

    // Collect 24 yes/no answers
    const questions: Record<string, "yes" | "no"> = {};
    for (let i = 1; i <= 24; i++) {
      const val = String(form.get(`question${i}`) || "").toLowerCase() as "yes" | "no";
      if (val !== "yes" && val !== "no") {
        return NextResponse.json(
          { success: false, error: `Question ${i} must be answered (yes/no)` },
          { status: 400 }
        );
      }
      questions[`question${i}`] = val;
    }

    // Basic validation
    if (!companyName || !abnAcn || !declarantName || !position || !declarationDate || !signature || !signatureDate) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const to = process.env.CONTRACTOR_TO_EMAIL || process.env.CONTACT_TO_EMAIL;
    if (!to) {
      return NextResponse.json(
        { success: false, error: "CONTRACTOR_TO_EMAIL/CONTACT_TO_EMAIL not configured" },
        { status: 500 }
      );
    }

    // Build email content
    const subject = `Contractor Compliance Declaration — ${companyName}`;

    const questionsHtml = Array.from({ length: 24 }, (_, idx) => {
      const i = idx + 1;
      const ans = questions[`question${i}`];
      return `<tr><td style="padding:4px 8px;border:1px solid #ddd;">Q${i}</td><td style="padding:4px 8px;border:1px solid #ddd;text-transform:capitalize;">${esc(ans)}</td></tr>`;
    }).join("");

    const html = `
      <h2>Contractor Compliance Declaration</h2>

      <h3>Company Information</h3>
      <p><strong>Company Name:</strong> ${esc(companyName)}</p>
      <p><strong>ABN / ACN Number:</strong> ${esc(abnAcn)}</p>

      <h3>Declarant</h3>
      <p><strong>Name:</strong> ${esc(declarantName)}</p>
      <p><strong>Position:</strong> ${esc(position)}</p>
      <p><strong>Declaration Date:</strong> ${esc(declarationDate)}</p>

      <h3>Compliance Answers (Last 30 Days)</h3>
      <table cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:1px solid #ddd;">
        <thead>
          <tr>
            <th style="padding:6px 8px;border:1px solid #ddd;text-align:left;">Question</th>
            <th style="padding:6px 8px;border:1px solid #ddd;text-align:left;">Answer</th>
          </tr>
        </thead>
        <tbody>
          ${questionsHtml}
        </tbody>
      </table>

      <h3>Declaration</h3>
      <p><strong>Signature:</strong> ${esc(signature)}</p>
      <p><strong>Date:</strong> ${esc(signatureDate)}</p>
    `;

    const textLines = [
      "Contractor Compliance Declaration",
      "",
      "Company Information",
      `Company Name: ${companyName}`,
      `ABN/ACN: ${abnAcn}`,
      "",
      "Declarant",
      `Name: ${declarantName}`,
      `Position: ${position}`,
      `Declaration Date: ${declarationDate}`,
      "",
      "Compliance Answers (Last 30 Days)"
    ];
    for (let i = 1; i <= 24; i++) {
      textLines.push(`Q${i}: ${questions[`question${i}`]}`);
    }
    textLines.push("", "Declaration", `Signature: ${signature}`, `Date: ${signatureDate}`);

    // Send via Resend
    await resend.emails.send({
      from: "Metro Guards <onboarding@resend.dev>",
      to,
      subject,
      html,
      text: textLines.join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("contractor route error:", err);
    return NextResponse.json({ success: false, error: "Submission failed" }, { status: 500 });
  }
}
