"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const mono = "'JetBrains Mono', monospace";

const caseStudies = [
  {
    id: 1,
    title: "E-Commerce Platform",
    subtitle: "Multi-tenant SaaS with 96 Lighthouse Score",
    challenge: "Build a scalable e-commerce platform that handles high traffic, complex product catalogs, and real-time inventory management.",
    solution: "Architected a Next.js 14 frontend with server components, PostgreSQL with optimized queries, and Stripe integration. Implemented caching strategies and image optimization.",
    results: [
      { metric: "96", label: "Lighthouse Score" },
      { metric: "1.2s", label: "LCP" },
      { metric: "99.9%", label: "Uptime" },
      { metric: "32%", label: "Conversion Lift" },
    ],
    tech: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Redis"],
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    subtitle: "Real-time metrics for 10K+ daily events",
    challenge: "Create a real-time analytics dashboard that processes 10K+ events daily with interactive visualizations and instant data updates.",
    solution: "Built event ingestion pipeline with Redis, real-time WebSocket updates, and optimized Recharts visualizations. Implemented data aggregation and caching.",
    results: [
      { metric: "94", label: "Lighthouse Score" },
      { metric: "<100ms", label: "Query Time" },
      { metric: "10K+", label: "Events/Day" },
      { metric: "Real-time", label: "Updates" },
    ],
    tech: ["Next.js", "TypeScript", "Recharts", "Prisma", "Redis", "WebSockets"],
  },
];

export default function CaseStudies() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const a = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="case-studies" ref={ref} className="section-pad" style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="container">

        <motion.div {...a(0)} className="section-label"><span>Deep Dives</span></motion.div>

        <motion.h2 {...a(0.1)} style={{
          fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 800,
          lineHeight: 1.1, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 16,
        }}>
          Project breakdowns &<br />
          <span style={{ color: "var(--accent)" }}>technical insights.</span>
        </motion.h2>

        <motion.p {...a(0.2)} style={{ color: "var(--text-secondary)", fontSize: "clamp(15px, 1.3vw, 17px)", lineHeight: 1.8, maxWidth: 560, marginBottom: 48, fontWeight: 500 }}>
          Detailed case studies showing the challenges, solutions, and measurable outcomes from recent projects.
        </motion.p>

        {/* Case Studies */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.15 }}
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: 40,
                transition: "border-color 0.25s, transform 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-hover)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Header */}
              <div style={{ marginBottom: 28 }}>
                <h3 style={{
                  fontSize: "clamp(22px, 2.5vw, 32px)",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: 6,
                }}>
                  {study.title}
                </h3>
                <p style={{
                  fontSize: "clamp(12px, 1.1vw, 15px)",
                  color: "var(--accent)",
                  fontFamily: mono,
                  letterSpacing: "0.05em",
                }}>
                  {study.subtitle}
                </p>
              </div>

              {/* Content Grid */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 40,
                marginBottom: 32,
              }}>
                {/* Challenge & Solution */}
                <div>
                  <div style={{ marginBottom: 24 }}>
                    <h4 style={{
                      fontSize: "clamp(11px, 1vw, 13px)",
                      fontFamily: mono,
                      color: "var(--text-muted)",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: 10,
                    }}>
                      Challenge
                    </h4>
                    <p style={{
                      fontSize: "clamp(13px, 1.1vw, 16px)",
                      color: "var(--text)",
                      lineHeight: 1.8,
                    }}>
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: "clamp(11px, 1vw, 13px)",
                      fontFamily: mono,
                      color: "var(--text-muted)",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: 10,
                    }}>
                      Solution
                    </h4>
                    <p style={{
                      fontSize: "clamp(13px, 1.1vw, 16px)",
                      color: "var(--text)",
                      lineHeight: 1.8,
                    }}>
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 style={{
                    fontSize: "clamp(11px, 1vw, 13px)",
                    fontFamily: mono,
                    color: "var(--text-muted)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}>
                    Results
                  </h4>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 12,
                  }}>
                    {study.results.map((result) => (
                      <div
                        key={result.label}
                        style={{
                          backgroundColor: "var(--bg)",
                          border: "1px solid var(--border)",
                          borderRadius: "var(--radius-md)",
                          padding: 16,
                          textAlign: "center",
                        }}
                      >
                        <div style={{
                          fontSize: "clamp(18px, 2vw, 24px)",
                          fontWeight: 700,
                          color: "var(--accent)",
                          marginBottom: 6,
                        }}>
                          {result.metric}
                        </div>
                        <div style={{
                          fontSize: "clamp(10px, 0.9vw, 12px)",
                          fontFamily: mono,
                          color: "var(--text-muted)",
                          letterSpacing: "0.05em",
                        }}>
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div style={{
                borderTop: "1px solid var(--border)",
                paddingTop: 24,
              }}>
                <h4 style={{
                  fontSize: 12,
                  fontFamily: mono,
                  color: "var(--text-secondary)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}>
                  Tech Stack
                </h4>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                }}>
                  {study.tech.map((tech) => (
                    <span
                      key={tech}
                      className="tag"
                      style={{
                        fontSize: 12,
                        padding: "6px 12px",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
