import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

/* NOTE: This is a static shell template. When a CMS is integrated,
   replace the hardcoded content below with a data-fetch by slug. */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    title: `${title} | Triad Sports Foundation News`,
    description:
      "Read the full story from the Triad Sports Foundation — updates on municipal partnerships, facility groundbreakings, and community impact.",
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <Navbar />

      {/* Minimal top spacer so fixed navbar clears */}
      <div style={{ height: "72px" }} aria-hidden="true" />

      <main style={{ background: "#ffffff", minHeight: "100vh", paddingBottom: "6rem" }}>
        <div style={{ maxWidth: "768px", margin: "0 auto", padding: "3rem 1.5rem 0" }}>

          {/* Breadcrumb */}
          <Link
            href="/news"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "0.85rem",
              color: "#06B085",
              textDecoration: "none",
              marginBottom: "2.5rem",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to News
          </Link>

          {/* Date */}
          <time
            dateTime="2024-10-12"
            style={{
              display: "block",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#06B085",
              marginBottom: "0.75rem",
            }}
          >
            October 12, 2024
          </time>

          {/* Article title */}
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 4vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.035em",
              color: "#007DC3",
              margin: "0 0 2rem",
            }}
          >
            Groundbreaking at Westside Park Signals a New Era for Greensboro
            Youth Athletics
          </h1>

          {/* Author / meta row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              paddingBottom: "1.5rem",
              marginBottom: "2rem",
              borderBottom: "1px solid #f1f5f9",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #007DC3, #06B085)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span style={{ color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "0.75rem" }}>
                TSF
              </span>
            </div>
            <div>
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#0f172a", margin: 0 }}>
                Triad Sports Foundation
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", color: "#64748b", margin: 0 }}>
                Development Office · Statesville, NC
              </p>
            </div>
          </div>

          {/* Hero image */}
          <div
            style={{
              aspectRatio: "21 / 9",
              borderRadius: "16px",
              overflow: "hidden",
              marginBottom: "3rem",
              boxShadow: "0 8px 32px rgba(0,125,195,0.12)",
            }}
          >
            <Image
              src="/images/gallery3.jpg"
              alt="Foundation leadership and City of Greensboro officials at the Westside Park groundbreaking ceremony"
              width={1200}
              height={514}
              loading="eager"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Article body */}
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#334155",
            }}
          >
            <p style={{ margin: "0 0 1.5rem" }}>
              <strong>GREENSBORO, NC</strong> — The Triad Sports Foundation, in partnership with
              the City of Greensboro Parks &amp; Recreation Department, today broke ground on the
              Westside Park Multi-Sport Renovation — a $680,000 infrastructure investment that
              marks the largest single facility commitment in the Foundation&apos;s three-year history.
              The ceremony was attended by over 200 community members, municipal officials, and
              youth athletes from the 19 programs that will benefit from the upgraded facility.
            </p>

            <p style={{ margin: "0 0 1.5rem" }}>
              The renovation scope includes a full-dimension synthetic turf field engineered for
              football, soccer, and lacrosse; a new 8-court tennis complex with cushioned hard
              surfaces; fully ADA-compliant restroom and spectator infrastructure; and a
              state-of-the-art LED lighting system rated for regulation-level night play.
              Substantial completion is scheduled for Q2 2025, ahead of the summer travel
              sports season.
            </p>

            {/* Pull quote */}
            <blockquote
              style={{
                margin: "2.5rem 0",
                padding: "1.5rem 2rem",
                background: "linear-gradient(135deg, #f0faf7 0%, #f8fafc 100%)",
                borderLeft: "4px solid #06B085",
                borderRadius: "0 12px 12px 0",
              }}
            >
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                  fontWeight: 600,
                  color: "#0f172a",
                  fontStyle: "italic",
                  margin: "0 0 1rem",
                }}
              >
                &ldquo;This is exactly what the Foundation was built to do. We identified a
                community asset that was being left behind, structured the right partnership,
                and now we&apos;re standing here watching the first shovel break ground. This
                is the model — and we are ready to replicate it in every city in this state.&rdquo;
              </p>
              <footer
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "#06B085",
                }}
              >
                — Pat, Foundation Director · Triad Sports Foundation
              </footer>
            </blockquote>

            <p style={{ margin: "0 0 1.5rem" }}>
              The project was funded through a co-investment structure: 60% from the
              Foundation&apos;s Facility Grant program, 30% from the City of Greensboro&apos;s
              capital improvement budget, and 10% from regional corporate sponsors. The
              Foundation&apos;s development team structured the partnership over an 18-month
              period, working directly with the Parks &amp; Recreation Department and City
              Council to navigate the capital allocation cycle.
            </p>

            <p style={{ margin: 0 }}>
              The Westside Park renovation joins Pomona Field and the CityBuild Multi-Sport
              Complex as the third major facility project completed or underway by the
              Foundation since its 2021 incorporation. For partnership or donation inquiries
              related to future projects, contact the Foundation&apos;s development office at{" "}
              <a
                href="mailto:info@triadsportsfoundation.org"
                style={{ color: "#007DC3", fontWeight: 600, textDecoration: "none" }}
              >
                info@triadsportsfoundation.org
              </a>{" "}
              or call{" "}
              <a href="tel:8285185787" style={{ color: "#007DC3", fontWeight: 600, textDecoration: "none" }}>
                828-518-5787
              </a>
              .
            </p>
          </div>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid #f1f5f9",
            }}
          >
            {["Facility Grants", "Greensboro", "Groundbreaking", "Municipal Partnership"].map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.72rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#007DC3",
                  background: "rgba(0,125,195,0.07)",
                  border: "1px solid rgba(0,125,195,0.15)",
                  borderRadius: "999px",
                  padding: "0.25rem 0.75rem",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom nav */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid #f1f5f9",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <Link
              href="/news"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "0.85rem",
                color: "#64748b",
                textDecoration: "none",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              All Articles
            </Link>
            <Link
              href="/donate"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.65rem 1.5rem",
                background: "linear-gradient(135deg, #07c99a 0%, #06B085 60%, #038a68 100%)",
                color: "#ffffff",
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.025em",
                textDecoration: "none",
                borderRadius: "8px",
                textTransform: "uppercase",
                boxShadow: "0 4px 16px rgba(6,176,133,0.30)",
              }}
            >
              Fund a Project
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Hidden slug reference for future CMS integration */}
          <p style={{ display: "none" }} aria-hidden="true">slug: {slug}</p>
        </div>
      </main>
    </>
  );
}
