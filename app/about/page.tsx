import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "About Us | Triad Sports Foundation",
  description:
    "Learn how the Triad Sports Foundation bridges the gap between municipal constraints and community needs — funding, designing, and building the elite facilities our cities deserve.",
};

export default function AboutPage() {
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
          <span
            style={{
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
              textTransform: "uppercase",
              color: "#06B085",
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
            Who We Are
          </span>

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
            <span style={{ color: "#ffffff" }}>Architecting </span>
            <span style={{ color: "#06B085" }}>Change.</span>
          </h1>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              lineHeight: 1.75,
              color: "#cbd5e1",
              margin: 0,
              maxWidth: "580px",
            }}
          >
            We bridge the gap between municipal constraints and community needs,
            building the facilities where the next generation of leaders will train.
          </p>
        </div>
      </section>

      {/* ══════════════ MISSION & VISION — TWO COLUMN ══════════════ */}
      <section style={{ background: "#ffffff", padding: "6rem 1.5rem" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
            gap: "4rem",
          }}
        >
          {/* Left — The Problem */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Eyebrow */}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#94a3b8",
                width: "fit-content",
              }}
            >
              <span
                style={{
                  width: "20px",
                  height: "1px",
                  background: "#94a3b8",
                  display: "inline-block",
                }}
              />
              The Challenge
            </span>

            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.035em",
                color: "#007DC3",
                margin: 0,
              }}
            >
              The Municipal Gap
            </h2>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                lineHeight: 1.85,
                color: "#475569",
                margin: 0,
              }}
            >
              Across the United States, municipal parks and recreation budgets
              have contracted by an average of 22% over the last decade. Capital
              improvement cycles that once refreshed fields, courts, and
              recreation centers every 10 years have stretched to 25 or more —
              leaving youth sports facilities in a state of accelerating decline.
              Crumbling infields, failed lighting systems, inaccessible
              infrastructure, and condemned dugouts are not edge cases; they are
              the norm in hundreds of cities that simply lack the budget authority
              to act.
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
              The consequences are measurable. Athletes — particularly in
              lower-income communities — are losing access to safe, well-maintained
              spaces to train, compete, and develop. Youth sports participation
              rates in underserved areas lag national averages by 30–40%, driven
              in large part by the quality of available facilities. The
              infrastructure deficit is a talent pipeline deficit, and no
              municipal budget cycle is moving fast enough to close it.
            </p>

            {/* Stat callout */}
            <div
              style={{
                display: "flex",
                gap: "2rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid #f1f5f9",
                flexWrap: "wrap",
              }}
            >
              {[
                { figure: "22%", label: "avg. parks budget reduction since 2014" },
                { figure: "25+ yrs", label: "avg. capital improvement cycle" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 900,
                      fontSize: "1.75rem",
                      letterSpacing: "-0.04em",
                      color: "#007DC3",
                      lineHeight: 1,
                      marginBottom: "0.3rem",
                    }}
                  >
                    {s.figure}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.78rem",
                      color: "#64748b",
                      lineHeight: 1.4,
                      maxWidth: "140px",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Our Solution */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              padding: "2.5rem",
              background: "linear-gradient(135deg, #f0faf7 0%, #f8fafc 100%)",
              borderRadius: "20px",
              border: "1px solid rgba(6,176,133,0.12)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Ambient top-right glow */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "200px",
                height: "200px",
                background:
                  "radial-gradient(circle at top right, rgba(6,176,133,0.10), transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#06B085",
                width: "fit-content",
                position: "relative",
                zIndex: 1,
              }}
            >
              <span
                style={{
                  width: "20px",
                  height: "1px",
                  background: "#06B085",
                  display: "inline-block",
                }}
              />
              Our Approach
            </span>

            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.035em",
                color: "#06B085",
                margin: 0,
                position: "relative",
                zIndex: 1,
              }}
            >
              The Triad Approach
            </h2>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                lineHeight: 1.85,
                color: "#334155",
                margin: 0,
                position: "relative",
                zIndex: 1,
              }}
            >
              The Triad Sports Foundation operates at the intersection of
              philanthropic capital, municipal government, and construction
              expertise. We source funding from high-net-worth individual donors,
              Donor-Advised Funds, and corporate co-investors — then deploy that
              capital directly into facility design, engineering, and construction
              in partnership with local Parks &amp; Recreation departments. Because
              we bring the private funding to the table, we can move from
              project identification to groundbreaking in a fraction of the time
              a standard municipal budget cycle would require.
            </p>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                lineHeight: 1.85,
                color: "#334155",
                margin: 0,
                position: "relative",
                zIndex: 1,
              }}
            >
              The result is a model that wins for every stakeholder: cities
              receive elite infrastructure without waiting for budget authorization;
              donors receive named, permanent impact and full 501(c)(3) tax
              deduction; athletes receive the fields, courts, and facilities
              their development demands. We manage the entire process — from
              community needs assessment and architectural scope through
              contractor selection, construction oversight, and ribbon-cutting.
            </p>

            {/* 3 pillars */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                paddingTop: "1rem",
                position: "relative",
                zIndex: 1,
              }}
            >
              {[
                { icon: "🏗️", text: "We fund and build — no municipal budget required" },
                { icon: "⚡", text: "Groundbreaking in months, not years" },
                { icon: "🏆", text: "100% of capital goes directly to facilities" },
              ].map((item) => (
                <div
                  key={item.text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#1e293b",
                  }}
                >
                  <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ LEADERSHIP PROFILE ══════════════ */}
      <section style={{ background: "#f8fafc", padding: "6rem 1.5rem" }}>
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Portrait */}
          <div
            style={{
              aspectRatio: "3 / 4",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow:
                "0 24px 64px rgba(0,0,0,0.12), 0 4px 24px rgba(0,125,195,0.10)",
              position: "relative",
            }}
          >
            <Image
              src="/images/gallery2.jpg"
              alt="Pat, Founder and Executive Director of the Triad Sports Foundation"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
            {/* Bottom gradient overlay for depth */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "40%",
                background:
                  "linear-gradient(to top, rgba(0,28,54,0.60), transparent)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Bio */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#06B085",
              }}
            >
              Founder &amp; Executive Director
            </span>

            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.04em",
                color: "#007DC3",
                margin: 0,
              }}
            >
              Pat Stoudenmire
            </h2>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                lineHeight: 1.85,
                color: "#475569",
                margin: 0,
              }}
            >
              Pat Stoudenmire spent two decades working at the intersection of
              youth athletics and community development across the Piedmont Triad
              region of North Carolina. After serving as a recreation coordinator
              for the City of Statesville and later as a regional program director
              for a statewide youth sports nonprofit, Pat identified the same
              systemic failure repeating itself in city after city: the capital
              to transform a deteriorating field existed in the private sector,
              but no mechanism existed to route it efficiently to where it was
              needed most.
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
              In 2021, Pat incorporated the Triad Sports Foundation to be that
              mechanism. Under his leadership, the Foundation has structured
              over $2.4M in public-private co-investments, executed three major
              facility projects, and established equipment endowment agreements
              in 11 counties. Pat brings to every project not only a practitioner&apos;s
              understanding of municipal parks bureaucracy, but a genuine belief
              that the quality of a community&apos;s facilities is a direct expression
              of its commitment to the generations that will inherit it.
            </p>

            {/* Signature quote */}
            <blockquote
              style={{
                margin: "0.5rem 0 0",
                padding: "1.25rem 1.5rem",
                background: "#ffffff",
                borderLeft: "3px solid #06B085",
                borderRadius: "0 12px 12px 0",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: "#1e293b",
                  margin: "0 0 0.6rem",
                }}
              >
                &ldquo;A community&apos;s commitment to its future is measured by the
                quality of the fields it builds for its children.&rdquo;
              </p>
              <footer
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#06B085",
                }}
              >
                — Pat Stoudenmire, Founder
              </footer>
            </blockquote>

            {/* Contact line */}
            <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", paddingTop: "0.5rem" }}>
              <a
                href="mailto:info@triadsportsfoundation.org"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: "#007DC3",
                  textDecoration: "none",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                Email Pat
              </a>
              <a
                href="tel:8285185787"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: "#007DC3",
                  textDecoration: "none",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.1 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16l.92.92z"/>
                </svg>
                828-518-5787
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ TERMINAL CTA ══════════════ */}
      <section
        style={{
          background: "linear-gradient(160deg, #003d6b 0%, #00284a 60%, #001a33 100%)",
          padding: "5rem 1.5rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "280px",
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
            maxWidth: "600px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.035em",
              color: "#f8fafc",
              margin: 0,
            }}
          >
            Partner with our leadership team.
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "#94a3b8",
              margin: 0,
              maxWidth: "440px",
            }}
          >
            Whether you represent a municipal parks department, a corporate
            sponsor, or a private donor — Pat&apos;s team is ready to build with you.
          </p>
          <Link
            href="/get-involved"
            id="about-cta-get-involved-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.95rem 2.5rem",
              background: "linear-gradient(135deg, #07c99a 0%, #06B085 60%, #038a68 100%)",
              color: "#ffffff",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: "0.025em",
              textDecoration: "none",
              borderRadius: "10px",
              textTransform: "uppercase",
              boxShadow: "0 4px 28px rgba(6,176,133,0.40)",
            }}
          >
            Get Involved
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
