import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Our Programs | Triad Sports Foundation",
  description:
    "Explore the core pillars of the Triad Sports Foundation's community infrastructure investments — Facility Grants, Equipment Endowments, and Public-Private Partnerships.",
};

/* ─── Shared typography tokens ────────────────────────── */
const eyebrowStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 700,
  fontSize: "0.72rem",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#06B085",
  marginBottom: "1rem",
  display: "block",
};

const h2Style: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 900,
  fontSize: "clamp(2rem, 4vw, 3rem)",
  lineHeight: 1.08,
  letterSpacing: "-0.035em",
  color: "#007DC3",
  margin: "0 0 1.5rem",
};

const bodyStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: "1rem",
  lineHeight: 1.85,
  color: "#475569",
  margin: "0 0 1rem",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "auto",
  aspectRatio: "1 / 1",
  objectFit: "cover",
  borderRadius: "16px",
  boxShadow: "0 20px 60px rgba(0,125,195,0.14), 0 4px 24px rgba(0,0,0,0.10)",
  display: "block",
};

const gridStyle: React.CSSProperties = {
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "0 1.5rem",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
  gap: "4rem",
  alignItems: "center",
};

export default function ProgramsPage() {
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
        {/* Subtle green glow accent */}
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
            Strategic Initiatives
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
            <span style={{ color: "#ffffff" }}>Strategic </span>
            <span style={{ color: "#06B085" }}>Initiatives.</span>
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
            We don&apos;t just write checks. We architect solutions. Explore the core pillars
            of our community infrastructure investments.
          </p>
        </div>
      </section>

      {/* ══════════════ INITIATIVE 1 — FACILITY GRANTS ══════════════ */}
      <section
        style={{
          background: "#ffffff",
          padding: "6rem 1.5rem",
        }}
      >
        <div style={gridStyle}>
          {/* Left: Image */}
          <div>
            <Image
              src="/images/gallery2.jpg"
              alt="New sports complex under construction — Triad Sports Foundation Facility Grants program"
              width={600}
              height={600}
              loading="eager"
              style={imageStyle}
            />
          </div>

          {/* Right: Copy */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={eyebrowStyle}>01 / Infrastructure</span>

            <h2 style={h2Style}>Facility &amp; Field Grants</h2>

            <p style={bodyStyle}>
              A world-class athlete cannot reach their potential on a crumbling court or a
              waterlogged field. Our Facility &amp; Field Grant program provides municipalities,
              school districts, and nonprofit park associations with the capital funding required
              to completely redesign and construct new multi-sport complexes — including synthetic
              turf, LED sports lighting, accessible bleacher systems, and digital scoreboards.
            </p>
            <p style={bodyStyle}>
              Each grant cycle is managed by our internal infrastructure team in partnership with
              vetted engineering and construction partners. We oversee the project from
              groundbreaking to ribbon-cutting, ensuring that every dollar of community investment
              translates directly into a safe, high-performance venue that lasts for decades.
            </p>

            <div style={{ marginTop: "0.5rem" }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 2rem",
                  background: "linear-gradient(135deg, #07c99a 0%, #06B085 60%, #038a68 100%)",
                  color: "#ffffff",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  letterSpacing: "0.025em",
                  textDecoration: "none",
                  borderRadius: "8px",
                  textTransform: "uppercase",
                  boxShadow: "0 4px 20px rgba(6,176,133,0.30)",
                }}
              >
                Apply for a Grant
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ INITIATIVE 2 — EQUIPMENT ENDOWMENTS ══════════════ */}
      <section
        style={{
          background: "#f8fafc",
          padding: "6rem 1.5rem",
        }}
      >
        {/*
          Desktop: text LEFT, image RIGHT via order property.
          Mobile (auto-fit single col): image renders first in DOM so it
          stacks on top — we use order to swap on desktop.
        */}
        <div style={gridStyle}>
          {/* Text column — order 1 on desktop (default), order 2 on mobile handled via auto-fit */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              order: 1,
            }}
          >
            <span style={eyebrowStyle}>02 / Resources</span>

            <h2 style={h2Style}>Elite Equipment Endowments</h2>

            <p style={bodyStyle}>
              Facilities alone do not make champions — the right equipment does. Our Equipment
              Endowment program provides programs across the country with access to the safest,
              highest-quality gear available: from NOCSAE-certified helmets and impact-absorbing
              padding to precision-engineered training tools and recovery technology used by
              professional franchises.
            </p>
            <p style={bodyStyle}>
              Endowments are structured as multi-year commitments so that programs can plan
              accordingly, with annual equipment reviews ensuring that gear is replaced before
              it degrades below safety standards. We partner directly with leading manufacturers
              to negotiate institutional pricing — maximizing the impact of every dollar donated.
            </p>

            <div style={{ marginTop: "0.5rem" }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 2rem",
                  background: "linear-gradient(135deg, #07c99a 0%, #06B085 60%, #038a68 100%)",
                  color: "#ffffff",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  letterSpacing: "0.025em",
                  textDecoration: "none",
                  borderRadius: "8px",
                  textTransform: "uppercase",
                  boxShadow: "0 4px 20px rgba(6,176,133,0.30)",
                }}
              >
                Request an Endowment
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image column — order 2 on desktop, renders second in DOM */}
          <div style={{ order: 2 }}>
            <Image
              src="/images/gallery3.jpg"
              alt="Athletes receiving elite equipment — Triad Sports Foundation Equipment Endowments program"
              width={600}
              height={600}
              style={imageStyle}
            />
          </div>
        </div>
      </section>

      {/* ══════════════ INITIATIVE 3 — PUBLIC-PRIVATE PARTNERSHIPS ══════════════ */}
      <section
        style={{
          background: "#ffffff",
          padding: "6rem 1.5rem",
        }}
      >
        <div style={gridStyle}>
          {/* Left: Image */}
          <div>
            <Image
              src="/images/gallery4.jpg"
              alt="Community leaders and private sponsors at a partnership signing — Triad Sports Foundation"
              width={600}
              height={600}
              style={imageStyle}
            />
          </div>

          {/* Right: Copy */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={eyebrowStyle}>03 / Strategy</span>

            <h2 style={h2Style}>Public-Private Partnerships</h2>

            <p style={bodyStyle}>
              The most transformative infrastructure projects in history were not funded by a
              single entity — they were the product of strategic alignment between public mission
              and private capital. Our Partnership Development team brokers, structures, and
              co-funds relationships between municipal parks departments, school districts,
              and qualified corporate sponsors.
            </p>
            <p style={bodyStyle}>
              We handle the legal framework, naming-rights agreements, and co-investment models
              so that both sides of the partnership can focus on what they do best. The result
              is a generation of facilities that are community-owned, sustainably funded, and
              built to the highest possible standard.
            </p>

            <div style={{ marginTop: "0.5rem" }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 2rem",
                  background: "linear-gradient(135deg, #07c99a 0%, #06B085 60%, #038a68 100%)",
                  color: "#ffffff",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  letterSpacing: "0.025em",
                  textDecoration: "none",
                  borderRadius: "8px",
                  textTransform: "uppercase",
                  boxShadow: "0 4px 20px rgba(6,176,133,0.30)",
                }}
              >
                Become a Partner
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ BOTTOM CTA BAND ══════════════ */}
      <section
        style={{
          background: "linear-gradient(135deg, #003d6b 0%, #00284a 60%, #003d6b 100%)",
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
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,176,133,0.12) 0%, transparent 70%)",
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
            Ready to partner with us?
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
            Your investment directly funds the next generation of elite sports infrastructure
            in communities that need it most.
          </p>

          <Link
            href="/donate"
            id="programs-cta-donate-btn"
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
              boxShadow: "0 4px 28px rgba(6,176,133,0.40), 0 1px 4px rgba(0,0,0,0.3)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            Fund a Program
          </Link>
        </div>
      </section>
    </>
  );
}
