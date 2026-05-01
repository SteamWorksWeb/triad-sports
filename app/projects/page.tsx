import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Project Case Studies | Triad Sports Foundation",
  description:
    "See how the Triad Sports Foundation transforms underfunded municipal parks into elite, state-of-the-art community facilities through our Facility Grants and Equipment Endowment programs.",
};

/* ─── Shared style tokens ─────────────────────────────── */
const eyebrowPill: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.35rem 0.9rem",
  background: "rgba(6,176,133,0.08)",
  border: "1px solid rgba(6,176,133,0.20)",
  borderRadius: "999px",
  fontFamily: "Inter, sans-serif",
  fontWeight: 700,
  fontSize: "0.72rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "#06B085",
};

const sectionEyebrow: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 700,
  fontSize: "0.72rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color: "#06B085",
  marginBottom: "0.75rem",
  display: "block",
};

const h2Style: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 900,
  fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)",
  lineHeight: 1.08,
  letterSpacing: "-0.035em",
  color: "#007DC3",
  margin: "0 0 1.5rem",
};

const bodyP: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: "1rem",
  lineHeight: 1.85,
  color: "#475569",
  margin: "0 0 1rem",
};

const challengeLabel: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 700,
  fontSize: "0.78rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  color: "#007DC3",
  marginBottom: "0.4rem",
  marginTop: "1.25rem",
  display: "block",
};

const twoColGrid: React.CSSProperties = {
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "0 1.5rem",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
  gap: "4rem",
  alignItems: "center",
};

const collageImageStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  borderRadius: "12px",
};

export default function ProjectsPage() {
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
        {/* Ambient green glow — matches /programs header exactly */}
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

        <div style={{ position: "relative", zIndex: 1, maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}>
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
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#06B085", display: "inline-block", boxShadow: "0 0 6px #06B085" }} />
            Our Work
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
            <span style={{ color: "#ffffff" }}>Project </span>
            <span style={{ color: "#06B085" }}>Case Studies.</span>
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
            See how we transform underfunded municipal parks into elite,
            state-of-the-art community facilities.
          </p>
        </div>
      </section>

      {/* ══════════════ CASE STUDY 1 — POMONA FIELD ══════════════ */}
      <section
        style={{
          background: "#ffffff",
          padding: "6rem 1.5rem",
        }}
      >
        <div style={twoColGrid}>
          {/* Left — Narrative */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={sectionEyebrow}>Greensboro, NC · Facility Renovation</span>

            <h2 style={h2Style}>Pomona Field Revitalization</h2>

            <span style={challengeLabel}>The Challenge</span>
            <p style={bodyP}>
              Pomona Field had served the Greensboro community for over four
              decades — but time had not been kind. The infield was riddled with
              uneven dirt patches and standing-water hazards after every rain
              event, the perimeter fencing was corroded and unsecured, and the
              aging lighting system left outfield zones in near-darkness during
              evening games. The Parks &amp; Recreation Department had identified
              the site for renovation for three consecutive budget cycles, only
              to have the allocation redirected each time. Youth leagues and
              adaptive sports programs were operating in conditions that did not
              meet basic safety standards.
            </p>

            <span style={challengeLabel}>The Work</span>
            <p style={bodyP}>
              The Triad Sports Foundation partnered with Greensboro Parks &amp;
              Recreation to design and fund a complete field renovation. The
              project delivered a full synthetic turf system engineered for
              multi-sport use, a new LED sports lighting array covering all
              playing zones to a minimum of 50 foot-candles, fully ADA-compliant
              dugouts and spectator seating, and a memorial bronze plaque
              honoring the community leaders who championed the project. The
              facility reopened to serve 14 active youth leagues and 3 adaptive
              sports programs.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                marginTop: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              {[
                { label: "Completed", value: "2009" },
                { label: "Programs Served", value: "17" },
                { label: "Investment", value: "$420K" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    padding: "0.75rem 1.25rem",
                    background: "rgba(0,125,195,0.05)",
                    border: "1px solid rgba(0,125,195,0.12)",
                    borderRadius: "10px",
                    textAlign: "center",
                    minWidth: "100px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 800,
                      fontSize: "1.25rem",
                      color: "#007DC3",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      color: "#94a3b8",
                      marginTop: "0.3rem",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Photo Collage */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "auto auto",
              gap: "0.875rem",
            }}
          >
            {/* Top — spans both columns, aspect-video */}
            <div
              style={{
                gridColumn: "1 / -1",
                aspectRatio: "16 / 9",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0,125,195,0.12)",
              }}
            >
              <Image
                src="/images/gallery4.jpg"
                alt="Pomona Field after renovation — new turf and LED lighting installed by Triad Sports Foundation"
                width={800}
                height={450}
                loading="eager"
                style={collageImageStyle}
              />
            </div>

            {/* Bottom-left — square */}
            <div
              style={{
                aspectRatio: "1 / 1",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
            >
              <Image
                src="/images/gallery1.jpg"
                alt="Community members at Pomona Field ribbon-cutting ceremony"
                width={400}
                height={400}
                style={collageImageStyle}
              />
            </div>

            {/* Bottom-right — square */}
            <div
              style={{
                aspectRatio: "1 / 1",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
            >
              <Image
                src="/images/gallery5.jpg"
                alt="Dedication plaque at Pomona Field honoring Greensboro community leaders"
                width={400}
                height={400}
                style={collageImageStyle}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ CASE STUDY 2 — CITYBUILD COMPLEX ══════════════ */}
      <section
        style={{
          background: "#f8fafc",
          padding: "6rem 1.5rem",
        }}
      >
        {/*
          Desktop: photo collage LEFT, narrative RIGHT.
          We flip using CSS order on the text column (order:2 pushes it right).
          auto-fit single-col mobile stacks: collage first (order:1), then text (order:2).
        */}
        <div style={twoColGrid}>
          {/* Photo Collage — order 1 (left on desktop, top on mobile) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "auto auto",
              gap: "0.875rem",
              order: 1,
            }}
          >
            {/* Top — spans both columns, aspect-video */}
            <div
              style={{
                gridColumn: "1 / -1",
                aspectRatio: "16 / 9",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0,125,195,0.12)",
              }}
            >
              <Image
                src="/images/gallery3.jpg"
                alt="CityBuild Multi-Sport Complex — basketball courts and turf field aerial view"
                width={800}
                height={450}
                style={collageImageStyle}
              />
            </div>

            {/* Bottom-left — square */}
            <div
              style={{
                aspectRatio: "1 / 1",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
            >
              <Image
                src="/images/gallery2.jpg"
                alt="Youth basketball program on new CityBuild courts"
                width={400}
                height={400}
                style={collageImageStyle}
              />
            </div>

            {/* Bottom-right — square */}
            <div
              style={{
                aspectRatio: "1 / 1",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
            >
              <Image
                src="/images/gallery6.jpg"
                alt="Ground-breaking ceremony for the CityBuild Multi-Sport Complex"
                width={400}
                height={400}
                style={collageImageStyle}
              />
            </div>
          </div>

          {/* Narrative — order 2 (right on desktop, bottom on mobile) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              order: 2,
            }}
          >
            <span style={sectionEyebrow}>Winston-Salem, NC · Ground-Up Build</span>

            <h2 style={h2Style}>CityBuild Multi-Sport Complex</h2>

            <span style={challengeLabel}>The Challenge</span>
            <p style={bodyP}>
              The northeast quadrant of Winston-Salem lacked a single
              dedicated recreational facility within a 3-mile radius of
              over 12,000 residents. Two vacant municipal lots had sat
              undeveloped for more than a decade — the city lacked the
              capital budget to transform them, and the surrounding community
              had no organized sports programs as a result. Youth engagement
              in structured athletics in the area was among the lowest in
              Forsyth County.
            </p>

            <span style={challengeLabel}>The Work</span>
            <p style={bodyP}>
              Working alongside CityBuild Co. and the Winston-Salem Parks
              Authority, the Triad Sports Foundation structured a public-private
              co-investment to design and construct a 2.4-acre multi-sport
              complex from the ground up. The completed facility includes three
              full-size community basketball courts with sport-grade hardwood
              surface, a 60-yard synthetic turf multi-use field, integrated
              LED arena lighting, covered spectator pavilions, and a permanent
              concession and restroom structure. Since opening, the complex has
              hosted over 3,200 organized sporting events annually.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                marginTop: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              {[
                { label: "Completed", value: "2022" },
                { label: "Events / Year", value: "3,200+" },
                { label: "Investment", value: "$1.8M" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    padding: "0.75rem 1.25rem",
                    background: "rgba(6,176,133,0.05)",
                    border: "1px solid rgba(6,176,133,0.15)",
                    borderRadius: "10px",
                    textAlign: "center",
                    minWidth: "100px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 800,
                      fontSize: "1.25rem",
                      color: "#06B085",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      color: "#94a3b8",
                      marginTop: "0.3rem",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
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
        {/* Green glow accent */}
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
            Ready to build your legacy?
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
            Every facility we build starts with a committed donor. Your
            investment creates the infrastructure that communities rely on
            for generations.
          </p>

          <Link
            href="/donate"
            id="projects-cta-donate-btn"
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
            Fund a Project
          </Link>
        </div>
      </section>
    </>
  );
}
