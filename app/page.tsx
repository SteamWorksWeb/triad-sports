"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

/* ─── Animation variants ─────────────────────────────── */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.25,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
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
          /* Deep tsf-blue → black radial gradient */
          background:
            "radial-gradient(ellipse 120% 90% at 50% -10%, #003d6b 0%, #00284a 35%, #030810 70%, #05090f 100%)",
        }}
      >
        {/* ── Hero background image layer ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/hero2.jpg"
            alt="Athletes in action"
            fill
            priority
            className="object-cover opacity-30 mix-blend-overlay"
          />
        </div>

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
              "radial-gradient(circle, rgba(6,176,133,0.18) 0%, transparent 70%)",
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
              "radial-gradient(circle, rgba(0,125,195,0.22) 0%, transparent 70%)",
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
                  background: "rgba(6,176,133,0.12)",
                  border: "1px solid rgba(6,176,133,0.35)",
                  borderRadius: "999px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#6ee7cb",
                }}
              >
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
              Building the Future of{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #07c99a 0%, #06B085 50%, #038a68 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Community Sports.
              </span>
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
              Facilitating elite public-private partnerships. We fund, design, and
              build the facilities that municipal parks and high-caliber programs
              need to thrive.
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
              {/* Primary — Fund a Project */}
              <motion.a
                href="/contact"
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
                    "linear-gradient(135deg, #07c99a 0%, #06B085 60%, #038a68 100%)",
                  color: "#ffffff",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  letterSpacing: "0.025em",
                  textDecoration: "none",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 24px rgba(6,176,133,0.40), 0 1px 3px rgba(0,0,0,0.5)",
                  textTransform: "uppercase",
                }}
              >
                {/* Dollar icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
                Fund a Project
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
                Partner With Us
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

      {/* ══════════════ ABOUT SECTION ══════════════ */}
      <section
        id="about"
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
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* ── Left: Copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {/* Eyebrow */}
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
                width: "fit-content",
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
              Our Foundation
            </span>

            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.035em",
                color: "#007DC3",
                margin: 0,
              }}
            >
              Who We Are
            </h2>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "1.1rem",
                lineHeight: 1.65,
                color: "#334155",
                margin: 0,
              }}
            >
              Triad Sports Foundation is a 501(c)(3) nonprofit dedicated to
              breaking down barriers so every athlete — regardless of zip code
              — has access to world-class facilities and programs.
            </p>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "#64748b",
                margin: 0,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "#64748b",
                margin: 0,
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum et dolorum fuga.
            </p>

            <div style={{ marginTop: "0.5rem" }}>
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                style={{ display: "inline-block" }}
              >
                <Link
                  href="/programs"
                  id="about-learn-more-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.875rem 2rem",
                    background: "#007DC3",
                    color: "#ffffff",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    letterSpacing: "0.025em",
                    textDecoration: "none",
                    borderRadius: "8px",
                    textTransform: "uppercase",
                    boxShadow: "0 4px 20px rgba(0,125,195,0.25)",
                  }}
                >
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right: Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <Image
              src="/images/gallery1.jpg"
              alt="About us — athletes training"
              width={600}
              height={600}
              className="object-cover rounded-2xl"
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "1 / 1",
                borderRadius: "16px",
                boxShadow: "0 25px 60px rgba(0,125,195,0.18), 0 8px 24px rgba(0,0,0,0.12)",
                display: "block",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ══════════════ CTA SECTION ══════════════ */}
      <section
        style={{
          background: "linear-gradient(135deg, #003d6b 0%, #00284a 60%, #003d6b 100%)",
          padding: "6rem 1.5rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle glow accents */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,176,133,0.14) 0%, transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "760px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.35rem 0.9rem",
              background: "rgba(6,176,133,0.12)",
              border: "1px solid rgba(6,176,133,0.3)",
              borderRadius: "999px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#6ee7cb",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#06B085", display: "inline-block", boxShadow: "0 0 6px #06B085" }} />
            Join the Movement
          </span>

          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              color: "#f8fafc",
              margin: 0,
            }}
          >
            Ready to Change the Game?
          </h2>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              lineHeight: 1.75,
              color: "#94a3b8",
              margin: 0,
              maxWidth: "560px",
            }}
          >
            Join us in building the facilities that shape the next generation
            of athletes.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
              marginTop: "0.5rem",
            }}
          >
            {/* Primary — Get Involved */}
            <motion.div
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              <Link
                href="/get-involved"
                id="cta-get-involved-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.9rem 2.25rem",
                  background: "#f8fafc",
                  color: "#007DC3",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  letterSpacing: "0.025em",
                  textDecoration: "none",
                  borderRadius: "8px",
                  textTransform: "uppercase",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                }}
              >
                Get Involved
              </Link>
            </motion.div>

            {/* Secondary — Donate */}
            <motion.div
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              <Link
                href="/donate"
                id="cta-donate-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.9rem 2.25rem",
                  background: "transparent",
                  color: "#f8fafc",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  letterSpacing: "0.025em",
                  textDecoration: "none",
                  borderRadius: "8px",
                  border: "1.5px solid rgba(248,250,252,0.6)",
                  textTransform: "uppercase",
                }}
              >
                Donate
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ══════════════ PROGRAMS SECTION ══════════════ */}
      <section
        id="programs"
        style={{
          background: "#ffffff",
          padding: "6rem 1.5rem",
        }}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.35rem 0.9rem",
              background: "rgba(6,176,133,0.08)",
              border: "1px solid rgba(6,176,133,0.2)",
              borderRadius: "999px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#06B085",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#06B085", display: "inline-block" }} />
            What We Fund
          </span>

          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              letterSpacing: "-0.035em",
              lineHeight: 1.1,
              color: "#007DC3",
              margin: 0,
            }}
          >
            Our Programs
          </h2>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "#64748b",
              margin: 0,
              maxWidth: "520px",
            }}
          >
            From capital grants to equipment funding, we provide the resources that
            high-caliber programs and municipal parks need most.
          </p>
        </motion.div>

        {/* Programs grid */}
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "2rem",
          }}
        >
          {[
            {
              src: "/images/gallery2.jpg",
              alt: "Facility grants program — new sports complex under construction",
              title: "Facility Grants",
              desc: "Capital funding for the design and construction of new courts, fields, tracks, and multi-sport complexes in underserved communities.",
            },
            {
              src: "/images/gallery3.jpg",
              alt: "Equipment funding program — athletes receiving new gear",
              title: "Equipment Funding",
              desc: "Direct grants for uniforms, training equipment, and technology upgrades so athletes can compete at their full potential.",
            },
            {
              src: "/images/gallery5.jpg",
              alt: "Partnership development program — community leaders meeting",
              title: "Public-Private Partnerships",
              desc: "We broker and co-fund strategic partnerships between municipal parks departments, school districts, and private sponsors.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0,0,0,0.04), 0 10px 40px rgba(0,125,195,0.08)",
                border: "1px solid rgba(226,232,240,0.8)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Card image */}
              <div style={{ overflow: "hidden", flexShrink: 0 }}>
                <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.4, ease: "easeOut" as const }}>
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={400}
                    height={250}
                    className="object-cover"
                    style={{ width: "100%", height: "192px", display: "block" }}
                  />
                </motion.div>
              </div>

              {/* Card body */}
              <div
                style={{
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  flex: 1,
                }}
              >
                <h3
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    letterSpacing: "-0.02em",
                    color: "#007DC3",
                    margin: 0,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    color: "#64748b",
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {card.desc}
                </p>
                <Link
                  href="/programs"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "#06B085",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    letterSpacing: "0.01em",
                    marginTop: "0.25rem",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#049e77")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#06B085")}
                >
                  Learn More
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════ GALLERY SECTION ══════════════ */}
      <section
        id="gallery"
        style={{
          background: "#f8fafc",
          padding: "6rem 1.5rem",
        }}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.75rem",
          }}
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
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#007DC3", display: "inline-block" }} />
            Our Work
          </span>

          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              letterSpacing: "-0.035em",
              lineHeight: 1.1,
              color: "#007DC3",
              margin: 0,
            }}
          >
            Project Gallery
          </h2>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "#64748b",
              margin: 0,
              maxWidth: "520px",
            }}
          >
            A glimpse into the facilities we&apos;ve built and the communities we&apos;ve
            transformed across the country.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            { src: "/images/gallery1.jpg", alt: "Community basketball court build" },
            { src: "/images/gallery2.jpg", alt: "Youth soccer field installation" },
            { src: "/images/gallery3.jpg", alt: "Training facility grand opening" },
            { src: "/images/gallery4.jpg", alt: "Athletes at Triad-funded facility" },
            { src: "/images/gallery5.jpg", alt: "Outdoor track renovation" },
            { src: "/images/gallery6.jpg", alt: "Community sports day event" },
          ].map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              whileHover={{ scale: 1.02 }}
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                cursor: "pointer",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={450}
                className="object-cover"
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "4 / 3",
                  display: "block",
                  transition: "transform 0.4s ease",
                }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════ PARTNERS CAROUSEL ══════════════ */}
      <section
        style={{
          background: "#ffffff",
          padding: "4rem 0",
          borderTop: "1px solid #f1f5f9",
          overflow: "hidden",
        }}
      >
        {/* Section header */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#94a3b8",
            textAlign: "center",
            marginBottom: "2.5rem",
          }}
        >
          Trusted by Industry Leaders
        </p>

        {/* Fade-mask + scrolling track */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Left fade */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "120px",
              background: "linear-gradient(to right, #ffffff, transparent)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          {/* Right fade */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "120px",
              background: "linear-gradient(to left, #ffffff, transparent)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* Scrolling logo track — duplicated for seamless loop */}
          <div
            className="marquee-track"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "3.5rem",
              width: "max-content",
              paddingLeft: "1.5rem",
            }}
          >
            {[
              /* Set A */
              { label: "CityBuild Co.", icon: "🏗️" },
              { label: "Apex Sports", icon: "⚡" },
              { label: "FieldTech", icon: "🌿" },
              { label: "UrbanPlay", icon: "🏙️" },
              { label: "NexGen Parks", icon: "🌳" },
              { label: "AthleteFirst", icon: "🏆" },
              { label: "GridIron Group", icon: "🏈" },
              { label: "CourtCraft", icon: "🎾" },
              /* Set B — duplicate for seamless loop */
              { label: "CityBuild Co.", icon: "🏗️" },
              { label: "Apex Sports", icon: "⚡" },
              { label: "FieldTech", icon: "🌿" },
              { label: "UrbanPlay", icon: "🏙️" },
              { label: "NexGen Parks", icon: "🌳" },
              { label: "AthleteFirst", icon: "🏆" },
              { label: "GridIron Group", icon: "🏈" },
              { label: "CourtCraft", icon: "🎾" },
            ].map((logo, i) => (
              <div
                key={`${logo.label}-${i}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "10px",
                  border: "1px solid #e2e8f0",
                  background: "#f8fafc",
                  flexShrink: 0,
                  userSelect: "none",
                }}
              >
                <span style={{ fontSize: "1.25rem" }}>{logo.icon}</span>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    letterSpacing: "-0.01em",
                    color: "#475569",
                    whiteSpace: "nowrap",
                  }}
                >
                  {logo.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
