import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { firstName, lastName, email, phone, fundingVehicle, pledgeAmount } =
      (await req.json()) as {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        fundingVehicle: string;
        pledgeAmount: string;
      };

    const { error } = await resend.emails.send({
      from: "Triad Sports Foundation <onboarding@resend.dev>",
      to: ["info@triadsportsfoundation.org"],
      replyTo: email,
      subject: `🔒 URGENT: Major Gift Pledge — ${firstName} ${lastName}`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:linear-gradient(160deg,#003d6b,#001a33);padding:2rem 2.5rem;text-align:center;">
            <p style="color:#06B085;font-size:0.7rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;margin:0 0 .5rem">🔒 Secure Pledge Initiation</p>
            <h1 style="color:#fff;font-size:1.5rem;font-weight:900;margin:0">Major Gift Pledge Received</h1>
            <p style="color:#94a3b8;font-size:.85rem;margin:.5rem 0 0">Triad Sports Foundation — Development Office</p>
          </div>
          <div style="padding:2.5rem;background:#fff;">
            <p style="color:#334155;font-size:.95rem;line-height:1.7;margin:0 0 1.5rem">
              A new major gift pledge has been submitted. Please contact the donor within <strong>24 hours</strong>.
            </p>
            <table style="width:100%;border-collapse:collapse;margin-bottom:1.5rem;">
              ${[
                ["Donor Name", `${firstName} ${lastName}`],
                ["Email", email],
                ["Phone", phone || "Not provided"],
                ["Funding Vehicle", fundingVehicle],
                ["Pledge Amount", pledgeAmount],
              ]
                .map(
                  ([label, value]) => `
                <tr>
                  <td style="padding:.75rem 1rem;background:#f8fafc;border:1px solid #e2e8f0;font-weight:700;font-size:.78rem;color:#64748b;text-transform:uppercase;width:40%">${label}</td>
                  <td style="padding:.75rem 1rem;background:#fff;border:1px solid #e2e8f0;font-size:.9rem;color:#0f172a;font-weight:600">${value}</td>
                </tr>`
                )
                .join("")}
            </table>
            <div style="background:rgba(6,176,133,.06);border:1px solid rgba(6,176,133,.2);border-radius:10px;padding:1.25rem 1.5rem">
              <p style="color:#065f46;font-weight:700;font-size:.82rem;margin:0 0 .4rem;text-transform:uppercase;letter-spacing:.06em">Action Required</p>
              <p style="color:#334155;font-size:.88rem;line-height:1.6;margin:0">
                Reply directly to this email (reply-to: <strong>${email}</strong>) to provide secure wire/ACH routing instructions and issue a gift acknowledgment letter.
              </p>
            </div>
          </div>
          <div style="padding:1.25rem 2.5rem;background:#f8fafc;border-top:1px solid #e2e8f0;text-align:center">
            <p style="color:#94a3b8;font-size:.75rem;margin:0">Triad Sports Foundation · 1906 West Front Street, Statesville, NC · 828-518-5787</p>
          </div>
        </div>`,
    });

    if (error) {
      console.error("[donate/route] Resend error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to send pledge notification." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[donate/route] Unexpected error:", err);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
