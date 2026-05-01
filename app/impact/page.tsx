import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Our Impact | Triad Sports Foundation",
  description:
    "Track the Triad Sports Foundation's trajectory — from a single field renovation to a statewide network of elite community sports infrastructure, and a 50-facility vision for 2030.",
};

/* ─── Timeline data ─────────────────────────────────────── */
const timeline = [
  {
    year: "2021",
    status: "past",
    title: "Foundation Established",
    body: "The Triad Sports Foundation was incorporated as a 501(c)(3) nonprofit with a singular, audacious mission: prove that a focused public-private partnership could transform a single deteriorating municipal field into a facility worthy of elite youth competition. With seed funding from a small group of regional business leaders, we broke ground on our first project in Greensboro before the year was out.",
  },
  {
    year: "2023",
    status: "past",
    title: "Pomona Field Renovation",
    body: "Our first landmark success. The Pomona Field Revitalization project in Greensboro, NC became the proof-of-concept the Foundation needed to scale. A $420K co-investment with the City's Parks & Recreation Department delivered full synthetic turf, an LED lighting array, ADA-compliant dugouts, and permanent spectator infrastructure — reopening to serve 17 youth leagues and adaptive sports programs within a single season.",
  },
  {
    year: "2025",
    status: "past",
    title: "Statewide Equipment Endowments",
    body: "Recognizing that world-class facilities without proper equipment still leave athletes underserved, we launched the Equipment Endowment Program — a multi-year commitment model that outfits entire leagues with NOCSAE-certified gear, precision training tools, and recovery technology. In 2025, we executed endowment agreements with programs in 11 North Carolina counties, directly equipping over 4,200 athletes.",
  },
  {
    year: "2030 Vision",
    status: "future",
    title: "50 Facilities Nationwide",
    body: "The Foundation's north star: 50 fully renovated or newly constructed community sports facilities across 10 states by 2030, with a $25M co-investment target structured through public-private partnerships. Each facility will carry a permanent endowment ensuring ongoing equipment refresh cycles. This is the trajectory we are on — and it is the reason we are building a donor base capable of funding infrastructure at institutional scale.",
  },
];

/* ─── Stat cards ─────────────────────────────────────────── */
const stats = [
  { value: "$2.4M+", label: "Capital Deployed", sub: "across facility and equipment programs" },
  { value: "14", label: "Facilities Upgraded", sub: "from concept through ribbon-cutting" },
  { value: "25,000+", label: "Athletes Empowered", sub: "through grants, endowments & partnerships" },
];

export default function ImpactPage() {
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
            Our Trajectory
          </span>

          {/* Two-tone h1 */}
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
            <span style={{ color: "#ffffff" }}>Measurable </span>
            <span style={{ color: "#06B085" }}>Impact.</span>
          </h1>

          {/* Subheadline */}
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
            We measure our success by the communities we transform and the athletes
            we empower. See where we started, and where we are going.
          </p>
        </div>
      </section>

      {/* ══════════════ OVERVIEW STATS GRID ══════════════ */}
      <section style={{ background: "#ffffff", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Section headline */}
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
              letterSpacing: "-0.03em",
              color: "#007DC3",
              textAlign: "center",
              margin: "0 0 0.75rem",
            }}
          >
            The Impact at a Glance
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              color: "#64748b",
              textAlign: "center",
              margin: "0 0 3.5rem",
              lineHeight: 1.7,
            }}
          >
            Numbers that reflect real communities, real facilities, and real athletes.
          </p>

          {/* 3-col stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "2rem",
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  textAlign: "center",
                  padding: "2.5rem 2rem",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #f8fafc 0%, #f0faf7 100%)",
                  border: "1px solid rgba(6,176,133,0.12)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Subtle corner glow */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "120px",
                    height: "120px",
                    background: "radial-gradient(circle at top right, rgba(6,176,133,0.08), transparent 70%)",
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(2.75rem, 5vw, 3.75rem)",
                    letterSpacing: "-0.04em",
                    color: "#06B085",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 800,
                    fontSize: "1rem",
                    color: "#0f172a",
                    marginBottom: "0.35rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.82rem",
                    color: "#64748b",
                    lineHeight: 1.5,
                  }}
                >
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ VERTICAL TIMELINE ══════════════ */}
      <section style={{ background: "#f8fafc", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Section headline */}
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
              letterSpacing: "-0.03em",
              color: "#007DC3",
              textAlign: "center",
              margin: "0 0 4rem",
            }}
          >
            Our Blueprint for the Future
          </h2>

          {/* Timeline track */}
          <div
            style={{
              position: "relative",
              paddingLeft: "2.5rem",
              borderLeft: "2px solid rgba(6,176,133,0.25)",
            }}
          >
            {timeline.map((item, idx) => {
              const isFuture = item.status === "future";
              return (
                <div
                  key={item.year}
                  style={{
                    position: "relative",
                    marginBottom: idx < timeline.length - 1 ? "3.5rem" : 0,
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-2.875rem",           /* aligns with border-left */
                      top: "0.2rem",
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: isFuture ? "transparent" : "#06B085",
                      border: isFuture
                        ? "2px dashed #06B085"
                        : "3px solid #f8fafc",
                      boxShadow: isFuture ? "none" : "0 0 0 3px rgba(6,176,133,0.25)",
                      zIndex: 1,
                    }}
                  />

                  {/* Year label */}
                  <span
                    style={{
                      display: "inline-block",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 800,
                      fontSize: "0.72rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: isFuture ? "#06B085" : "#06B085",
                      background: isFuture
                        ? "rgba(6,176,133,0.08)"
                        : "rgba(6,176,133,0.10)",
                      border: isFuture
                        ? "1px dashed rgba(6,176,133,0.35)"
                        : "1px solid rgba(6,176,133,0.20)",
                      borderRadius: "999px",
                      padding: "0.2rem 0.75rem",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {item.year}
                  </span>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 900,
                      fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
                      letterSpacing: "-0.025em",
                      color: isFuture ? "#475569" : "#0f172a",
                      margin: "0 0 0.75rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {item.title}
                    {isFuture && (
                      <span
                        style={{
                          marginLeft: "0.6rem",
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#007DC3",
                          background: "rgba(0,125,195,0.08)",
                          border: "1px solid rgba(0,125,195,0.15)",
                          borderRadius: "999px",
                          padding: "0.15rem 0.6rem",
                          verticalAlign: "middle",
                        }}
                      >
                        Target
                      </span>
                    )}
                  </h3>

                  {/* Body */}
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.95rem",
                      lineHeight: 1.85,
                      color: isFuture ? "#64748b" : "#475569",
                      margin: 0,
                      fontStyle: isFuture ? "italic" : "normal",
                    }}
                  >
                    {item.body}
                  </p>

                  {/* Connector line extension for future items */}
                  {isFuture && (
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        left: "-2.9rem",
                        bottom: "-3.5rem",
                        width: "2px",
                        height: "3.5rem",
                        background:
                          "linear-gradient(to bottom, rgba(6,176,133,0.25), transparent)",
                        pointerEvents: "none",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════ TERMINAL CTA — DARK BLUE ══════════════ */}
      <section
        style={{
          background: "linear-gradient(160deg, #003d6b 0%, #00284a 60%, #001a33 100%)",
          padding: "5rem 1.5rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Green glow */}
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
            Ready to accelerate our mission?
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
            Every pledge moves us closer to the 2030 goal. Join the donors and
            institutional partners who are funding the next chapter.
          </p>

          <Link
            href="/donate"
            id="impact-cta-pledge-btn"
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
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            Initiate a Pledge
          </Link>
        </div>
      </section>
    </>
  );
}
