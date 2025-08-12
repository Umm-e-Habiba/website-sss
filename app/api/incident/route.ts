// app/api/incident/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
const resend = new Resend(process.env.RESEND_API_KEY);

const esc = (s = "") =>
  s.replace(/&/g, "&amp;")
   .replace(/</g, "&lt;")
   .replace(/>/g, "&gt;")
   .replace(/"/g, "&quot;")
   .replace(/'/g, "&#39;");

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    // Event types (multi-checkbox)
    const eventTypes = form.getAll("eventTypes").map(String);

    // Roaster
    const roasterScanned = String(form.get("roasterScanned") || "");

    // Officer details
    const firstName       = String(form.get("firstName") || "").trim();
    const lastName        = String(form.get("lastName") || "").trim();
    const phone           = String(form.get("phone") || "").trim();
    const gender          = String(form.get("gender") || "");
    const officerPosition = String(form.get("officerPosition") || "");
    const email           = String(form.get("email") || "").trim();
    const licenseNo       = String(form.get("licenseNo") || "").trim();
    const licenseState    = String(form.get("licenseState") || "");
    const callsign        = String(form.get("callsign") || "");
    const notifiedBy      = String(form.get("notifiedBy") || "");
    const billing         = String(form.get("billing") || "");

    // Incident date / location
    const incidentDate          = String(form.get("incidentDate") || "");
    const incidentTime          = String(form.get("incidentTime") || "");
    const toDate                = String(form.get("toDate") || "");
    const toTime                = String(form.get("toTime") || "");
    const jobNo                 = String(form.get("jobNo") || "");
    const jobTime               = String(form.get("jobTime") || "");
    const patrol                = String(form.get("patrol") || ""); // external | internal | ""
    const incidentLicenseState  = String(form.get("incidentLicenseState") || "N/A");
    const clientType            = String(form.get("clientType") || "");
    const clientSite            = String(form.get("clientSite") || "");
    const supervisor            = String(form.get("supervisor") || "");
    const incidentReport        = String(form.get("incidentReport") || "").trim();

    // Attachments (multiple)
    const attachmentsFiles = form
      .getAll("attachments")
      .filter((x): x is File => x instanceof File && x.size > 0);

    // Required validations (match your UI)
    if (!firstName || !lastName || !phone || !email || !licenseNo || !licenseState || !incidentDate || !incidentTime || !incidentReport) {
      return NextResponse.json({ success:false, error:"Missing required fields" }, { status:400 });
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ success:false, error:"Invalid email address" }, { status:400 });
    }

    // Attachment checks
    const MAX_FILE_SIZE = 10 * 1024 * 1024;  // 10MB each
    const MAX_FILES = 10;
    const ALLOWED = new Set([
      "image/jpeg","image/png","image/webp","image/gif",
      "application/pdf","text/plain","text/csv",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/zip"
    ]);

    if (attachmentsFiles.length > MAX_FILES) {
      return NextResponse.json({ success:false, error:`Too many files (max ${MAX_FILES})` }, { status:400 });
    }
    for (const f of attachmentsFiles) {
      if (f.size > MAX_FILE_SIZE) {
        return NextResponse.json({ success:false, error:`${f.name} exceeds 10MB` }, { status:400 });
      }
      // If type is empty (some browsers), allow based on extension fallback
      if (f.type && !ALLOWED.has(f.type)) {
        return NextResponse.json({ success:false, error:`${f.name}: unsupported file type` }, { status:400 });
      }
    }

    const to = process.env.INCIDENT_TO_EMAIL || process.env.CONTACT_TO_EMAIL;
    if (!to) {
      return NextResponse.json({ success:false, error:"INCIDENT_TO_EMAIL/CONTACT_TO_EMAIL not configured" }, { status:500 });
    }

    const subject = `Incident Report — ${firstName} ${lastName} — ${incidentDate} ${incidentTime}`;

    // Build email body
    const events = eventTypes.length ? eventTypes.join(", ") : "—";
    const windowStr = (toDate || toTime)
      ? `${incidentDate || "—"} ${incidentTime || ""} → ${toDate || "—"} ${toTime || ""}`.trim()
      : `${incidentDate || "—"} ${incidentTime || ""}`.trim();

    const attachmentsList = attachmentsFiles.map(f => esc(f.name)).join(", ") || "None";

    const html = `
      <h2>Incident Report</h2>

      <h3>Event Types</h3>
      <p>${esc(events)}</p>
      <p><strong>Smart ROASTER scanned:</strong> ${esc(roasterScanned || "—")}</p>

      <h3>Officer Details</h3>
      <p><strong>Name:</strong> ${esc(firstName)} ${esc(lastName)}</p>
      <p><strong>Phone:</strong> ${esc(phone)} &nbsp; <strong>Email:</strong> ${esc(email)}</p>
      <p><strong>Gender:</strong> ${esc(gender || "—")} &nbsp; <strong>Position:</strong> ${esc(officerPosition || "—")}</p>
      <p><strong>Security License:</strong> ${esc(licenseNo)} &nbsp; <strong>State:</strong> ${esc(licenseState)}</p>
      <p><strong>Callsign:</strong> ${esc(callsign || "—")} &nbsp; <strong>Notified By:</strong> ${esc(notifiedBy || "—")} &nbsp; <strong>Billing:</strong> ${esc(billing || "—")}</p>

      <h3>Incident Date / Location</h3>
      <p><strong>When:</strong> ${esc(windowStr)}</p>
      <p><strong>JOB No.:</strong> ${esc(jobNo || "—")} &nbsp; <strong>JOB Time:</strong> ${esc(jobTime || "—")}</p>
      <p><strong>Patrol:</strong> ${esc(patrol || "—")} &nbsp; <strong>License State:</strong> ${esc(incidentLicenseState || "—")}</p>
      <p><strong>Client Type:</strong> ${esc(clientType || "—")} &nbsp; <strong>Client Site:</strong> ${esc(clientSite || "—")}</p>
      <p><strong>Supervisor / Reported To:</strong> ${esc(supervisor || "—")}</p>

      <h3>Incident Report</h3>
      <p>${esc(incidentReport).replace(/\n/g, "<br/>")}</p>

      <h3>Attachments</h3>
      <p>${attachmentsList}</p>
    `;

    const text = `Incident Report

Event Types:
${events}

Smart ROASTER scanned: ${roasterScanned || "—"}

Officer Details
---------------
Name: ${firstName} ${lastName}
Phone: ${phone}
Email: ${email}
Gender: ${gender || "—"}
Position: ${officerPosition || "—"}
Security License: ${licenseNo} (${licenseState})
Callsign: ${callsign || "—"}
Notified By: ${notifiedBy || "—"}
Billing: ${billing || "—"}

Incident Date / Location
------------------------
When: ${windowStr}
JOB No.: ${jobNo || "—"}   JOB Time: ${jobTime || "—"}
Patrol: ${patrol || "—"}   License State: ${incidentLicenseState || "—"}
Client Type: ${clientType || "—"}   Client Site: ${clientSite || "—"}
Supervisor / Reported To: ${supervisor || "—"}

Incident Report
---------------
${incidentReport}

Attachments
-----------
${attachmentsList}
`;

    // Build attachments for Resend
    const emailAttachments =
      await Promise.all(attachmentsFiles.map(async (f) => ({
        filename: f.name || "attachment",
        content: Buffer.from(await f.arrayBuffer()),
      })));

    await resend.emails.send({
      from: "Metro Guards <onboarding@resend.dev>",
      to,
      subject,
      html,
      text,
      replyTo: email || undefined,
      attachments: emailAttachments,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("incident route error:", err);
    return NextResponse.json({ success:false, error:"Submission failed" }, { status:500 });
  }
}
