// app/api/booking/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
const resend = new Resend(process.env.RESEND_API_KEY);

const esc = (s = "") =>
  s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");

function maskCard(num: string) {
  const digits = (num || "").replace(/\D/g, "");
  if (!digits) return "—";
  return digits.replace(/.(?=.{4})/g, "•");
}
function last4(num: string) {
  const d = (num || "").replace(/\D/g, "");
  return d.slice(-4) || "";
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    // Client details
    const quoteNo = String(form.get("quoteNo") || "");
    const commencementDate = String(form.get("commencementDate") || "");
    const clientName = String(form.get("clientName") || "").trim();
    const abn = String(form.get("abn") || "");
    const siteName = String(form.get("siteName") || "");
    const onsiteContact = String(form.get("onsiteContact") || "");
    const address = String(form.get("address") || "").trim();
    const suburb = String(form.get("suburb") || "").trim();
    const state = String(form.get("state") || "").trim();
    const postCode = String(form.get("postCode") || "").trim();
    const premisePhone = String(form.get("premisePhone") || "");
    const fax = String(form.get("fax") || "");
    const clientEmail = String(form.get("clientEmail") || "").trim();

    // Invoicing
    const invoiceClientName = String(form.get("invoiceClientName") || "");
    const keys = String(form.get("keys") || "");
    const accountsContact = String(form.get("accountsContact") || "");
    const invoiceABN = String(form.get("invoiceABN") || "");
    const invoicePhone = String(form.get("invoicePhone") || "");
    const invoiceAddress = String(form.get("invoiceAddress") || "");
    const invoiceSuburb = String(form.get("invoiceSuburb") || "");
    const invoiceState = String(form.get("invoiceState") || "");
    const invoicePostCode = String(form.get("invoicePostCode") || "");
    const invoiceEmail = String(form.get("invoiceEmail") || "");

    // Services required
    const serviceType = form.getAll("serviceType").map(String); // multiple checkboxes
    const fromDate = String(form.get("fromDate") || "");
    const fromTime = String(form.get("fromTime") || "");
    const toDate = String(form.get("toDate") || "");
    const toTime = String(form.get("toTime") || "");
    const guardRequired = String(form.get("guardRequired") || "");

    // Site brief + additional info
    const siteBrief = String(form.get("siteBrief") || "");
    const additionalInfo = String(form.get("additionalInfo") || "");

    // Payment
    const paymentMethod = String(form.get("paymentMethod") || ""); // creditCard | eft | ""
    const customerName = String(form.get("customerName") || "");
    const tradingName = String(form.get("tradingName") || "");
    const cardholderName = String(form.get("cardholderName") || "");
    const cardType = String(form.get("cardType") || ""); // MasterCard/Visa/Amex
    const cardNumber = String(form.get("cardNumber") || "");
    const cvv = String(form.get("cvv") || "");
    const expiry = String(form.get("expiry") || "");
    const signature = String(form.get("signature") || "");
    const authorization = !!form.get("authorization");

    // Terms/sign
    const signature1 = String(form.get("signature1") || "");
    const date1 = String(form.get("date1") || "");

    // Basic required checks
    if (!clientName || !address || !suburb || !state || !postCode || !clientEmail) {
      return NextResponse.json({ success:false, error:"Missing required client fields" }, { status:400 });
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(clientEmail)) {
      return NextResponse.json({ success:false, error:"Invalid client email" }, { status:400 });
    }

    // If credit card selected, require authorization + minimal details
    if (paymentMethod === "creditCard") {
      if (!authorization) {
        return NextResponse.json({ success:false, error:"Authorization is required for credit card payments" }, { status:400 });
      }
      if (!cardholderName || !cardNumber || !expiry) {
        return NextResponse.json({ success:false, error:"Cardholder name, card number and expiry are required" }, { status:400 });
      }
      // DO NOT email/store full CVV/PAN. We will redact in the email.
    }

    const to = process.env.CONTACT_TO_EMAIL;
    if (!to) {
      return NextResponse.json({ success:false, error:"BOOKING_TO_EMAIL/CONTACT_TO_EMAIL not configured" }, { status:500 });
    }

    const subject = `New Booking — ${clientName}${siteName ? ` @ ${siteName}` : ""}`;
    const services = serviceType.length ? serviceType.join(", ") : "—";
    const schedule =
      (fromDate || fromTime || toDate || toTime)
        ? `${fromDate || "—"} ${fromTime || ""} → ${toDate || "—"} ${toTime || ""}`.trim()
        : "—";

    // Build safe payment summary (redacted)
    const ccLast4 = last4(cardNumber);
    const ccMasked = maskCard(cardNumber);
    const cvvMasked = cvv ? "•••" : "—";

    const paymentSummary = paymentMethod === "creditCard"
      ? `
        <p><strong>Payment Method:</strong> Credit Card</p>
        <p><strong>Cardholder:</strong> ${esc(cardholderName || "—")}</p>
        <p><strong>Card Type:</strong> ${esc(cardType || "—")}</p>
        <p><strong>Card Number:</strong> ${esc(ccMasked)} (Last 4: ${esc(ccLast4)})</p>
        <p><strong>Expiry:</strong> ${esc(expiry || "—")}</p>
        <p><strong>CVV:</strong> ${cvvMasked}</p>
        <p><strong>Authorization:</strong> ${authorization ? "Yes" : "No"}</p>
      `
      : `
        <p><strong>Payment Method:</strong> ${paymentMethod === "eft" ? "EFT" : "—"}</p>
      `;

    const html = `
      <h2>New Booking</h2>

      <h3>Client Details</h3>
      <p><strong>Quote No.:</strong> ${esc(quoteNo || "—")}</p>
      <p><strong>Commencement Date:</strong> ${esc(commencementDate || "—")}</p>
      <p><strong>Client Name:</strong> ${esc(clientName)}</p>
      <p><strong>ABN:</strong> ${esc(abn || "—")}</p>
      <p><strong>Site Name:</strong> ${esc(siteName || "—")}</p>
      <p><strong>Onsite Contact:</strong> ${esc(onsiteContact || "—")}</p>
      <p><strong>Address:</strong> ${esc(address)}, ${esc(suburb)}, ${esc(state)} ${esc(postCode)}</p>
      <p><strong>Premise Phone:</strong> ${esc(premisePhone || "—")} &nbsp; <strong>Fax:</strong> ${esc(fax || "—")}</p>
      <p><strong>Email:</strong> ${esc(clientEmail)}</p>

      <h3>Invoicing Details</h3>
      <p><strong>Client Name:</strong> ${esc(invoiceClientName || "—")}</p>
      <p><strong>Keys:</strong> ${esc(keys || "—")} &nbsp; <strong>Accounts Contact:</strong> ${esc(accountsContact || "—")}</p>
      <p><strong>ABN:</strong> ${esc(invoiceABN || "—")} &nbsp; <strong>Phone:</strong> ${esc(invoicePhone || "—")}</p>
      <p><strong>Address:</strong> ${esc(invoiceAddress || "—")}, ${esc(invoiceSuburb || "—")}, ${esc(invoiceState || "—")} ${esc(invoicePostCode || "—")}</p>
      <p><strong>Email:</strong> ${esc(invoiceEmail || "—")}</p>

      <h3>Services Required</h3>
      <p><strong>Types:</strong> ${esc(services)}</p>
      <p><strong>Schedule:</strong> ${esc(schedule)}</p>
      <p><strong>Guards Required:</strong> ${esc(guardRequired || "—")}</p>

      <h3>Site Brief / Instructions</h3>
      <p>${esc(siteBrief || "—").replace(/\n/g,"<br/>")}</p>

      <h3>Payment</h3>
      ${paymentSummary}

      <h3>Additional Information</h3>
      <p>${esc(additionalInfo || "—").replace(/\n/g,"<br/>")}</p>

      <h3>Agreement</h3>
      <p><strong>Signature:</strong> ${esc(signature1 || "—")} &nbsp; <strong>Date:</strong> ${esc(date1 || "—")}</p>
    `;

    const text = `New Booking

Client Details
--------------
Quote No.: ${quoteNo || "—"}
Commencement Date: ${commencementDate || "—"}
Client Name: ${clientName}
ABN: ${abn || "—"}
Site Name: ${siteName || "—"}
Onsite Contact: ${onsiteContact || "—"}
Address: ${address}, ${suburb}, ${state} ${postCode}
Premise Phone: ${premisePhone || "—"}  Fax: ${fax || "—"}
Email: ${clientEmail}

Invoicing Details
-----------------
Client Name: ${invoiceClientName || "—"}
Keys: ${keys || "—"}  Accounts Contact: ${accountsContact || "—"}
ABN: ${invoiceABN || "—"}  Phone: ${invoicePhone || "—"}
Address: ${invoiceAddress || "—"}, ${invoiceSuburb || "—"}, ${invoiceState || "—"} ${invoicePostCode || "—"}
Email: ${invoiceEmail || "—"}

Services Required
-----------------
Types: ${services}
Schedule: ${schedule}
Guards Required: ${guardRequired || "—"}

Site Brief / Instructions
-------------------------
${siteBrief || "—"}

Payment
-------
Method: ${paymentMethod || "—"}
Cardholder: ${cardholderName || "—"}
Card Type: ${cardType || "—"}
Card Number: ${maskCard(cardNumber)} (Last 4: ${last4(cardNumber)})
Expiry: ${expiry || "—"}
CVV: ${cvv ? "***" : "—"}
Authorization: ${authorization ? "Yes" : "No"}

Additional Information
----------------------
${additionalInfo || "—"}

Agreement
---------
Signature: ${signature1 || "—"}   Date: ${date1 || "—"}
`;

    await resend.emails.send({
      from: "Metro Guards <onboarding@resend.dev>",
      to,
      subject,
      html,
      text,
      replyTo: clientEmail || undefined,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("booking route error:", err);
    return NextResponse.json({ success:false, error:"Submission failed" }, { status:500 });
  }
}
