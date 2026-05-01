import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "News & Press | Triad Sports Foundation",
  description:
    "Read the latest updates on the Triad Sports Foundation's municipal partnerships, facility groundbreakings, and community impact.",
};

const articles = [
  {
    slug: "westside-park-groundbreaking",
    date: "October 12, 2024",
    title: "Groundbreaking at Westside Park Signals a New Era for Greensboro Youth Athletics",
    excerpt:
      "The Foundation and City of Greensboro broke ground on a $680K multi-sport renovation — the largest single facility investment in our history.",
    image: "/images/gallery3.jpg",
    imageAlt: "Officials breaking ground at Westside Park renovation ceremony",
  },
  {
    slug: "equipment-endowment-forsyth-county",
    date: "July 29, 2024",
    title: "Forsyth County Leagues Receive $210K Equipment Endowment Agreement",
    excerpt:
      "Eleven youth sports programs across Forsyth County will receive multi-year equipment endowments covering helmets, padding, and training tools through 2027.",
    image: "/images/gallery1.jpg",
    imageAlt: "Young athletes receiving new equipment through TSF endowment program",
  },
  {
    slug: "citybuild-partnership-announcement",
    date: "March 4, 2024",
    title: "CityBuild Co. Joins as Founding Corporate Partner in $1.8M Complex Project",
    excerpt:
      "The Winston-Salem multi-sport complex broke ground after CityBuild Co. committed an anchor investment, validating the Foundation's public-private co-investment model.",
    image: "/images/gallery5.jpg",
    imageAlt: "CityBuild Co. and TSF leadership at partnership signing ceremony",
  },
];

export default function NewsPage() {
  return (
    <>
      <Navbar />

      {/* PAGE HEADER */}
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
            Press &amp; Updates
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
            <span style={{ color: "#ffffff" }}>Foundation </span>
            <span style={{ color: "#06B085" }}>News.</span>
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
            Read the latest updates on our municipal partnerships, facility
            groundbreakings, and community impact.
          </p>
        </div>
      </section>

      {/* ARTICLE GRID */}
      <section style={{ background: "#f8fafc", padding: "6rem 1.5rem" }}>
        <style>{`.news-card { transition: box-shadow .25s ease, transform .25s ease; } .news-card:hover { box-shadow: 0 20px 48px rgba(0,0,0,.10), 0 4px 16px rgba(0,125,195,.07); transform: translateY(-3px); }`}</style>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "2rem",
          }}
        >
          {articles.map((article, idx) => (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              style={{ textDecoration: "none", display: "flex" }}
            >
              <article
                className="news-card"
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  border: "1px solid #f1f5f9",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <div style={{ aspectRatio: "16 / 9", overflow: "hidden", flexShrink: 0 }}>
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    width={640}
                    height={360}
                    loading={idx === 0 ? "eager" : "lazy"}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
                  <time
                    dateTime={article.date}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.72rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#06B085",
                    }}
                  >
                    {article.date}
                  </time>
                  <h2
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 800,
                      fontSize: "1.05rem",
                      lineHeight: 1.35,
                      letterSpacing: "-0.015em",
                      color: "#007DC3",
                      margin: 0,
                    }}
                  >
                    {article.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.88rem",
                      lineHeight: 1.75,
                      color: "#475569",
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {article.excerpt}
                  </p>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.82rem",
                      color: "#007DC3",
                      marginTop: "0.25rem",
                    }}
                  >
                    Read Article
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* TERMINAL CTA */}
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
            Ready to make headlines together?
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", lineHeight: 1.7, color: "#94a3b8", margin: 0, maxWidth: "440px" }}>
            Partner with us on the next groundbreaking. Our projects generate earned
            media, community goodwill, and lasting impact.
          </p>
          <Link
            href="/get-involved"
            id="news-cta-get-involved-btn"
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
