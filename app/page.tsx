"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

/* ─── Animation variants ─────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ─── Stat data ──────────────────────────────────────── */
const stats = [
  { value: "120+", label: "Facilities Built" },
  { value: "$48M", label: "Community Investment" },
  { value: "34", label: "States Reached" },
  { value: "250K+", label: "Athletes Served" },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ══════════════ HERO SECTION ══════════════ */}
      <section
        id="hero"
        style={{
          position: "relative",
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          /* Deep patriot-blue → black radial gradient */
          background:
            "radial-gradient(ellipse 120% 90% at 50% -10%, #0a1f44 0%, #061230 35%, #030810 70%, #05090f 100%)",
        }}
      >
        {/* Dot-grid texture overlay */}
        <div className="grid-overlay" />

        {/* Noise texture overlay */}
        <div className="noise-overlay" />

        {/* Soft red accent glow — bottom left */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-60px",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(191,10,48,0.18) 0%, transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Cool blue accent glow — top right */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-100px",
            right: "-80px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(10,55,120,0.22) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* ── Content container ── */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "900px",
            width: "100%",
            margin: "0 auto",
            padding: "7rem 1.5rem 5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "2rem",
          }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
              width: "100%",
            }}
          >
            {/* Badge / eyebrow */}
            <motion.div variants={badgeVariants}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.375rem 1rem",
                  background: "rgba(191,10,48,0.12)",
                  border: "1px solid rgba(191,10,48,0.35)",
                  borderRadius: "999px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#f87171",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#bf0a30",
                    display: "inline-block",
                    boxShadow: "0 0 6px #bf0a30",
                  }}
                />
                Nonprofit · 501(c)(3) Certified
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
                color: "#f8fafc",
                margin: 0,
                maxWidth: "820px",
              }}
            >
              Empowering Communities{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #ef4444 0%, #bf0a30 50%, #991b1b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Through the Power
              </span>{" "}
              of Sports.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
                lineHeight: 1.75,
                color: "#94a3b8",
                maxWidth: "640px",
                margin: 0,
                letterSpacing: "0.005em",
              }}
            >
              We build the facilities and provide the resources so your community
              can focus on what matters:{" "}
              <em style={{ color: "#cbd5e1", fontStyle: "normal", fontWeight: 500 }}>
                the game.
              </em>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                justifyContent: "center",
                marginTop: "0.5rem",
              }}
            >
              {/* Primary — Fund the Future */}
              <motion.a
                href="#donate"
                id="hero-fund-btn"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 2rem",
                  background:
                    "linear-gradient(135deg, #d4113a 0%, #bf0a30 60%, #9b0823 100%)",
                  color: "#ffffff",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  letterSpacing: "0.025em",
                  textDecoration: "none",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 24px rgba(191,10,48,0.40), 0 1px 3px rgba(0,0,0,0.5)",
                  textTransform: "uppercase",
                }}
              >
                {/* Dollar icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
                Fund the Future
              </motion.a>

              {/* Secondary — Start A Project */}
              <motion.a
                href="#projects"
                id="hero-project-btn"
                whileHover={{
                  backgroundColor: "rgba(255,255,255,1)",
                  color: "#05090f",
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 2rem",
                  background: "transparent",
                  color: "#f8fafc",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  letterSpacing: "0.025em",
                  textDecoration: "none",
                  borderRadius: "8px",
                  border: "1.5px solid rgba(248,250,252,0.7)",
                  cursor: "pointer",
                  backdropFilter: "blur(4px)",
                  textTransform: "uppercase",
                }}
              >
                {/* Arrow icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
                Start A Project
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.p
              variants={itemVariants}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.78rem",
                color: "#475569",
                letterSpacing: "0.03em",
                marginTop: "-0.5rem",
              }}
            >
              Trusted by city councils, school districts, and private donors nationwide
            </motion.p>
          </motion.div>
        </div>

        {/* ── Stats row — pinned near bottom of hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            background:
              "linear-gradient(0deg, rgba(5,9,15,1) 0%, rgba(5,9,15,0.85) 60%, transparent 100%)",
            padding: "2.5rem 1.5rem 2rem",
          }}
        >
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "0.5rem",
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.15 + i * 0.08, duration: 0.5 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.2rem",
                  padding: "1rem 0.5rem",
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                    letterSpacing: "-0.03em",
                    color: "#f8fafc",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "0.75rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#64748b",
                  }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          style={{
            position: "absolute",
            bottom: "130px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(148,163,184,0.5)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════ PLACEHOLDER SECTIONS ══════════════ */}
      {/* These sections exist so the anchor links work during development */}
      <section
        id="about"
        style={{
          minHeight: "100dvh",
          background: "#05090f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#1e293b",
            fontSize: "2rem",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          About Section — Coming Soon
        </p>
      </section>
    </>
  );
}
