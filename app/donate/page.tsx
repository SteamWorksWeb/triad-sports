"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

/* ─── Shared header tokens (mirrors /programs + /projects) ── */
const pillStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.35rem 0.9rem",
  background: "rgba(255,255,255,0.12)",
  border: "1px solid rgba(255,255,255,0.20)",
  borderRadius: "999px",
  fontFamily: "Inter, sans-serif",
  fontWeight: 700,
  fontSize: "0.72rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "#06B085",
};

const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  fontFamily: "Inter, sans-serif",
  fontSize: "0.9rem",
  color: "#0f172a",
  background: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  outline: "none",
  boxSizing: "border-box" as const,
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  fontSize: "0.8rem",
  color: "#374151",
  marginBottom: "0.4rem",
  letterSpacing: "0.01em",
};

const FUNDING_VEHICLES = [
  "Wire Transfer",
  "ACH / Bank Transfer",
  "Check",
  "Donor-Advised Fund (DAF)",
  "Stock / Securities",
  "Other",
];

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  fundingVehicle: string;
  pledgeAmount: string;
};

export default function DonatePage() {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    fundingVehicle: "",
    pledgeAmount: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const set = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "#007DC3";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,125,195,0.12)";
    e.currentTarget.style.background = "#ffffff";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "#e2e8f0";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.background = "#f8fafc";
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { success: boolean; message?: string };

      if (!res.ok || !data.success) {
        setErrorMessage(data.message ?? "Something went wrong. Please try again.");
        return;
      }
      setIsSuccess(true);
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Navbar />

      {/* ══════════════ PAGE HEADER ══════════════ */}
      <section
        style={{
          background: "linear-gradient(160deg, #003d6b 0%, #00284a 60%, #001a33 100%)",
          paddingTop: "10rem",
          paddingBottom: "6rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient green glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,176,133,0.10) 0%, transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "720px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.25rem",
          }}
        >
          {/* Pill eyebrow */}
          <span style={pillStyle}>
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#06B085",
                display: "inline-block",
                boxShadow: "0 0 6px #06B085",
              }}
            />
            Secure Portal
          </span>

          {/* Two-tone headline */}
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 5.5vw, 4rem)",
              lineHeight: 1.06,
              letterSpacing: "-0.04em",
              color: "#f8fafc",
              margin: 0,
            }}
          >
            <span style={{ color: "#ffffff" }}>Initiate Your </span>
            <span style={{ color: "#06B085" }}>Legacy.</span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.1rem)",
              lineHeight: 1.75,
              color: "#cbd5e1",
              margin: 0,
              maxWidth: "580px",
            }}
          >
            To maximize your impact, we process major gifts via wire transfer, ACH,
            or Donor-Advised Funds. Please complete this secure form and our team
            will contact you with routing instructions.
          </p>
        </div>
      </section>

      {/* ══════════════ FORM SECTION ══════════════ */}
      <section
        style={{
          background: "#ffffff",
          padding: "6rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* ── Left: Context copy ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              paddingTop: "0.5rem",
            }}
          >
            {/* Trust badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 1rem",
                background: "rgba(6,176,133,0.07)",
                border: "1px solid rgba(6,176,133,0.18)",
                borderRadius: "999px",
                width: "fit-content",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#06B085",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#06B085",
                }}
              >
                IRS 501(c)(3) Certified · EIN 20-5063538
              </span>
            </div>

            <div>
              <h2
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "#007DC3",
                  margin: "0 0 1rem",
                }}
              >
                Your gift builds infrastructure that lasts generations.
              </h2>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "#475569",
                  margin: "0 0 1rem",
                }}
              >
                The Triad Sports Foundation is a federally recognized 501(c)(3)
                nonprofit. <strong>100% of major gift capital</strong> is deployed
                directly to facility construction, field renovation, and equipment
                endowments — no administrative overhead is charged against donor
                principal. All gifts are fully tax-deductible to the extent provided
                by law, and formal gift acknowledgment letters are issued within
                5 business days of transfer confirmation.
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "#475569",
                  margin: 0,
                }}
              >
                We accept wire transfers, ACH bank transfers, paper checks, gifts
                of appreciated securities, and distributions from Donor-Advised
                Funds. Our team will provide all routing and coordination details
                within 24 hours of your pledge submission.
              </p>
            </div>

            {/* Director contact card */}
            <div
              style={{
                background: "linear-gradient(135deg, #003d6b 0%, #00284a 100%)",
                borderRadius: "16px",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#06B085",
                  margin: 0,
                }}
              >
                Direct Contact — Development Office
              </p>
              <div>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 800,
                    fontSize: "1rem",
                    color: "#f8fafc",
                    margin: "0 0 0.15rem",
                  }}
                >
                  Pat — Foundation Director
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.85rem",
                    color: "#94a3b8",
                    margin: 0,
                  }}
                >
                  For immediate assistance or to discuss your pledge by phone,
                  reach Pat&apos;s team directly:
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <a
                  href="mailto:info@triadsportsfoundation.org"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.88rem",
                    color: "#e2e8f0",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#06B085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  info@triadsportsfoundation.org
                </a>
                <a
                  href="tel:8285185787"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.88rem",
                    color: "#e2e8f0",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#06B085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.1 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16l.92.92z"/>
                  </svg>
                  828-518-5787
                </a>
              </div>
            </div>
          </div>

          {/* ── Right: Form card ── */}
          <div
            style={{
              background: "#ffffff",
              boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 4px 20px rgba(0,125,195,0.06)",
              borderRadius: "20px",
              padding: "2.5rem",
              border: "1px solid #f1f5f9",
            }}
          >
            {isSuccess ? (
              /* ── Success state ── */
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "1.5rem",
                  padding: "1rem 0",
                }}
              >
                {/* Green check circle */}
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background: "rgba(6,176,133,0.10)",
                    border: "2px solid rgba(6,176,133,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#06B085" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                <div>
                  <h2
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 900,
                      fontSize: "1.5rem",
                      color: "#0f172a",
                      letterSpacing: "-0.025em",
                      margin: "0 0 0.75rem",
                    }}
                  >
                    Pledge Received — Thank You.
                  </h2>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.95rem",
                      lineHeight: 1.75,
                      color: "#475569",
                      margin: "0 0 0.75rem",
                    }}
                  >
                    Your pledge initiation has been securely received by the Triad
                    Sports Foundation development office. Pat&apos;s team will contact
                    you <strong>within 24 hours</strong> with secure wire transfer or
                    ACH routing instructions and a formal pledge confirmation.
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.88rem",
                      lineHeight: 1.7,
                      color: "#64748b",
                      margin: 0,
                    }}
                  >
                    Please check your email for an acknowledgment. For immediate
                    assistance, call{" "}
                    <a href="tel:8285185787" style={{ color: "#007DC3", fontWeight: 600 }}>
                      828-518-5787
                    </a>
                    .
                  </p>
                </div>

                <Link
                  href="/"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.75rem 2rem",
                    background: "#007DC3",
                    color: "#ffffff",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    borderRadius: "8px",
                    letterSpacing: "0.02em",
                  }}
                >
                  Return Home
                </Link>
              </div>
            ) : (
              /* ── Form state ── */
              <form onSubmit={handleSubmit} noValidate>
                <h2
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 800,
                    fontSize: "1.25rem",
                    color: "#0f172a",
                    letterSpacing: "-0.02em",
                    margin: "0 0 0.4rem",
                  }}
                >
                  Pledge Initiation Form
                </h2>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.85rem",
                    color: "#64748b",
                    margin: "0 0 2rem",
                    lineHeight: 1.6,
                  }}
                >
                  All information is transmitted securely. Fields marked are required.
                </p>

                {/* First / Last name row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div>
                    <label htmlFor="donate-firstName" style={labelStyle}>
                      First Name <span style={{ color: "#06B085" }}>*</span>
                    </label>
                    <input
                      id="donate-firstName"
                      type="text"
                      required
                      placeholder="Jane"
                      value={form.firstName}
                      onChange={set("firstName")}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      style={inputBase}
                    />
                  </div>
                  <div>
                    <label htmlFor="donate-lastName" style={labelStyle}>
                      Last Name <span style={{ color: "#06B085" }}>*</span>
                    </label>
                    <input
                      id="donate-lastName"
                      type="text"
                      required
                      placeholder="Smith"
                      value={form.lastName}
                      onChange={set("lastName")}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      style={inputBase}
                    />
                  </div>
                </div>

                {/* Email */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <label htmlFor="donate-email" style={labelStyle}>
                    Email Address <span style={{ color: "#06B085" }}>*</span>
                  </label>
                  <input
                    id="donate-email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={set("email")}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={inputBase}
                  />
                </div>

                {/* Phone */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <label htmlFor="donate-phone" style={labelStyle}>
                    Phone Number
                  </label>
                  <input
                    id="donate-phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={form.phone}
                    onChange={set("phone")}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={inputBase}
                  />
                </div>

                {/* Funding vehicle */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <label htmlFor="donate-vehicle" style={labelStyle}>
                    Intended Funding Vehicle <span style={{ color: "#06B085" }}>*</span>
                  </label>
                  <select
                    id="donate-vehicle"
                    required
                    value={form.fundingVehicle}
                    onChange={set("fundingVehicle")}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={{ ...inputBase, appearance: "none", cursor: "pointer" }}
                  >
                    <option value="" disabled>
                      Select a funding vehicle…
                    </option>
                    {FUNDING_VEHICLES.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Pledge amount */}
                <div style={{ marginBottom: "2rem" }}>
                  <label htmlFor="donate-amount" style={labelStyle}>
                    Anticipated Pledge Amount <span style={{ color: "#06B085" }}>*</span>
                  </label>
                  <input
                    id="donate-amount"
                    type="text"
                    required
                    placeholder="e.g. $50,000"
                    value={form.pledgeAmount}
                    onChange={set("pledgeAmount")}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={inputBase}
                  />
                </div>

                {/* Error message */}
                {errorMessage && (
                  <div
                    style={{
                      marginBottom: "1.25rem",
                      padding: "0.75rem 1rem",
                      background: "rgba(239,68,68,0.06)",
                      border: "1px solid rgba(239,68,68,0.20)",
                      borderRadius: "8px",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.85rem",
                      color: "#dc2626",
                    }}
                  >
                    {errorMessage}
                  </div>
                )}

                {/* Submit */}
                <button
                  id="donate-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    padding: "1rem",
                    background: isSubmitting
                      ? "#049e77"
                      : "linear-gradient(135deg, #07c99a 0%, #06B085 60%, #038a68 100%)",
                    color: "#ffffff",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    border: "none",
                    borderRadius: "10px",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    boxShadow: isSubmitting
                      ? "none"
                      : "0 4px 20px rgba(6,176,133,0.35)",
                    transition: "opacity 0.2s, box-shadow 0.2s",
                    opacity: isSubmitting ? 0.8 : 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        aria-hidden="true"
                        style={{ animation: "spin 1s linear infinite" }}
                      >
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                      Processing…
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                      Initiate Pledge
                    </>
                  )}
                </button>

                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.75rem",
                    color: "#94a3b8",
                    textAlign: "center",
                    marginTop: "1rem",
                    lineHeight: 1.6,
                  }}
                >
                  🔒 256-bit encrypted connection · No funds are transferred at this step ·
                  Our team will follow up with secure routing instructions.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Spin keyframe */}
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </>
  );
}
