"use client";

import { motion, type Variants } from "framer-motion";
import Navbar from "@/components/Navbar";

/* ─── Framer Motion variants ────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

/* ─── Contact detail items ──────────────────────────────── */
const contactDetails = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "info@triadsportsfoundation.org",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.1 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16l.92.92z" />
      </svg>
    ),
    label: "Phone",
    value: "828-518-5787",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    value: "1906 West Front Street",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Office Hours",
    value: "Mon – Fri, 9 AM – 5 PM ET",
  },
];

/* ─── Input shared styles ───────────────────────────────── */
const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  border: "1.5px solid #d1d5db",
  borderRadius: "8px",
  fontFamily: "Inter, sans-serif",
  fontSize: "0.9rem",
  color: "#0f172a",
  background: "#f8fafc",
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  boxSizing: "border-box",
};

function Field({
  label,
  id,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
      <label
        htmlFor={id}
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "0.8rem",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          color: "#475569",
        }}
      >
        {label}
        {required && <span style={{ color: "#06B085", marginLeft: "3px" }}>*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        style={inputBase}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "#007DC3";
          e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,125,195,0.12)";
          e.currentTarget.style.background = "#ffffff";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "#d1d5db";
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.background = "#f8fafc";
        }}
      />
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          background: "linear-gradient(160deg, #f0f4ff 0%, #ffffff 40%, #fafafa 100%)",
          paddingTop: "8rem",
          paddingBottom: "6rem",
        }}
      >
        {/* ── Page wrapper ── */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >
          {/* ── Eyebrow ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            style={{ marginBottom: "3.5rem" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.9rem",
                background: "rgba(0,125,195,0.07)",
                border: "1px solid rgba(0,125,195,0.15)",
                borderRadius: "999px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#007DC3",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#007DC3",
                  display: "inline-block",
                }}
              />
              Contact Us
            </span>
          </motion.div>

          {/* ── Two-column grid ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            {/* ════ COLUMN 1 — Copy ════ */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {/* Headline */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.1}
              >
                <h1
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
                    lineHeight: 1.06,
                    letterSpacing: "-0.04em",
                    color: "#007DC3",
                    margin: 0,
                  }}
                >
                  Get in{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, #007DC3 0%, #005f96 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Touch.
                  </span>
                </h1>
              </motion.div>

              {/* Subheadline */}
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.2}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(1rem, 2vw, 1.15rem)",
                  lineHeight: 1.8,
                  color: "#475569",
                  margin: 0,
                  maxWidth: "440px",
                }}
              >
                Whether you have a question about our programs, want to partner,
                or need assistance — our team is ready and eager to help your
                community thrive.
              </motion.p>

              {/* Contact detail cards */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.3}
                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                {contactDetails.map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      padding: "1rem 1.25rem",
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: "rgba(0,125,195,0.06)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#007DC3",
                      }}
                    >
                      {item.icon}
                    </span>
                    <div>
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                          fontSize: "0.75rem",
                          letterSpacing: "0.07em",
                          textTransform: "uppercase",
                          color: "#94a3b8",
                          margin: "0 0 0.2rem",
                        }}
                      >
                        {item.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 500,
                          fontSize: "0.9rem",
                          color: "#0f172a",
                          margin: 0,
                        }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ════ COLUMN 2 — Form ════ */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.25}
            >
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "clamp(1.75rem, 4vw, 2.5rem)",
                  boxShadow:
                    "0 4px 6px rgba(0,0,0,0.04), 0 20px 60px rgba(0,125,195,0.08), 0 1px 0 rgba(255,255,255,0.9) inset",
                  border: "1px solid rgba(226,232,240,0.8)",
                }}
              >
                <h2
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 800,
                    fontSize: "1.35rem",
                    letterSpacing: "-0.02em",
                    color: "#0f172a",
                    margin: "0 0 0.5rem",
                  }}
                >
                  Send us a message
                </h2>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.85rem",
                    color: "#94a3b8",
                    margin: "0 0 2rem",
                  }}
                >
                  We typically respond within one business day.
                </p>

                <form
                  id="contact-form"
                  onSubmit={(e) => e.preventDefault()}
                  style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
                >
                  {/* Name row */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
                      gap: "1rem",
                    }}
                  >
                    <Field
                      label="First Name"
                      id="first-name"
                      placeholder="Jane"
                      required
                    />
                    <Field
                      label="Last Name"
                      id="last-name"
                      placeholder="Smith"
                      required
                    />
                  </div>

                  {/* Email */}
                  <Field
                    label="Email Address"
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    required
                  />

                  {/* Phone */}
                  <Field
                    label="Phone Number"
                    id="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                  />

                  {/* Subject */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label
                      htmlFor="subject"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        color: "#475569",
                      }}
                    >
                      Subject <span style={{ color: "#06B085" }}>*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      style={{
                        ...inputBase,
                        appearance: "none",
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 0.85rem center",
                        paddingRight: "2.5rem",
                        cursor: "pointer",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#007DC3";
                        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,125,195,0.12)";
                        e.currentTarget.style.background = "#ffffff";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "#d1d5db";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.background = "#f8fafc";
                      }}
                    >
                      <option value="">Select a topic…</option>
                      <option value="programs">Programs & Eligibility</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="donation">Donation / Funding</option>
                      <option value="project">Start a Project</option>
                      <option value="media">Media & Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label
                      htmlFor="message"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        color: "#475569",
                      }}
                    >
                      Message <span style={{ color: "#06B085" }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us how we can help…"
                      style={{
                        ...inputBase,
                        resize: "vertical",
                        minHeight: "120px",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#007DC3";
                        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,125,195,0.12)";
                        e.currentTarget.style.background = "#ffffff";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "#d1d5db";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.background = "#f8fafc";
                      }}
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    id="contact-submit-btn"
                    type="submit"
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    style={{
                      width: "100%",
                      padding: "0.9rem 1.5rem",
                      background:
                        "linear-gradient(135deg, #049e77 0%, #06B085 60%, #038a68 100%)",
                      color: "#ffffff",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      letterSpacing: "0.03em",
                      textTransform: "uppercase",
                      border: "none",
                      borderRadius: "10px",
                      cursor: "pointer",
                      marginTop: "0.5rem",
                      boxShadow:
                        "0 4px 20px rgba(6,176,133,0.35), 0 1px 3px rgba(0,0,0,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Send Message
                  </motion.button>

                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.75rem",
                      color: "#94a3b8",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    Your information is never shared with third parties.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
