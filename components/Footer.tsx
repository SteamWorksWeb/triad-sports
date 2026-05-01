"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Mission", href: "#about" },
  { label: "Programs", href: "/programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Twitter / X",
    href: "https://twitter.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth="0" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #061230 0%, #030810 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Main footer grid */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "4rem 1.5rem 3rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
          gap: "3rem",
        }}
      >
        {/* ── Brand column ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.6rem" }}>
            <svg width="36" height="40" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M16 0L0 6v10c0 10.5 6.8 20.3 16 24C25.2 36.3 32 26.5 32 16V6L16 0z" fill="#06B085" />
              <path d="M16 4L3 9v8c0 8.6 5.6 16.7 13 19.8C23.4 33.7 29 25.6 29 17V9L16 4z" fill="#007DC3" />
              <text x="16" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="0.5">TSF</text>
            </svg>
            <div>
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#f8fafc", margin: 0, lineHeight: 1.2 }}>
                Triad Sports
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "0.75rem", color: "#64748b", margin: 0 }}>
                Foundation
              </p>
            </div>
          </Link>

          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", lineHeight: 1.7, color: "#64748b", margin: 0, maxWidth: "260px" }}>
            Building the facilities and providing the resources so communities can focus on what matters — the game.
          </p>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.25rem" }}>
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "38px",
                  height: "38px",
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#64748b",
                  textDecoration: "none",
                  transition: "background 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,0.1)";
                  el.style.color = "#f8fafc";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,0.05)";
                  el.style.color = "#64748b";
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* ── Quick Links column ── */}
        <div>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#f8fafc",
              margin: "0 0 1.25rem",
            }}
          >
            Quick Links
          </p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                    color: "#64748b",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#f8fafc")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#64748b")}
                >
                  <span
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "#06B085",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact / Legal column ── */}
        <div>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#f8fafc",
              margin: "0 0 1.25rem",
            }}
          >
            Get in Touch
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {["info@triadsportsfoundation.org", "828-518-5787", "1906 West Front Street"].map((item) => (
              <p
                key={item}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.875rem",
                  color: "#64748b",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {item}
              </p>
            ))}
          </div>

          {/* 501(c)(3) badge */}
          <div
            style={{
              marginTop: "1.5rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.35rem 0.75rem",
              background: "rgba(6,176,133,0.1)",
              border: "1px solid rgba(6,176,133,0.25)",
              borderRadius: "999px",
            }}
          >
            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "#06B085",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "0.7rem",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: "#6ee7cb",
              }}
            >
              501(c)(3) Nonprofit
            </span>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "1.5rem 1.5rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem",
        }}
      >
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "#334155", margin: 0 }}>
          © {currentYear} Triad Sports Foundation. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["Privacy Policy", "Terms of Use"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.8rem",
                color: "#334155",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#94a3b8")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#334155")}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
