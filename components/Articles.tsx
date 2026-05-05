"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const mono = "'JetBrains Mono', monospace";

const articles = [
  {
    id: 1,
    title: "Building High-Performance React Applications",
    excerpt: "Deep dive into optimization techniques: code splitting, lazy loading, memoization, and profiling tools to achieve 95+ Lighthouse scores.",
    category: "Performance",
    readTime: "8 min read",
    date: "2026-04-15",
    tags: ["React", "Performance", "Optimization"],
  },
  {
    id: 2,
    title: "Designing Scalable Database Schemas",
    excerpt: "Best practices for PostgreSQL schema design, indexing strategies, and query optimization for systems handling millions of records.",
    category: "Backend",
    readTime: "12 min read",
    date: "2026-03-28",
    tags: ["PostgreSQL", "Database", "Architecture"],
  },
  {
    id: 3,
    title: "Next.js 14: Server Components & Performance",
    excerpt: "Exploring React Server Components, streaming, and how to leverage Next.js 14 for faster, more efficient applications.",
    category: "Frontend",
    readTime: "10 min read",
    date: "2026-03-10",
    tags: ["Next.js", "React", "Server Components"],
  },
];

export default function Articles() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const a = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="articles" ref={ref} className="section-pad" style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="container">

        <motion.div {...a(0)} className="section-label"><span>Insights</span></motion.div>

        <motion.h2 {...a(0.1)} style={{
          fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 800,
          lineHeight: 1.1, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 16,
        }}>
          Technical articles &<br />
          <span style={{ color: "var(--accent)" }}>thought leadership.</span>
        </motion.h2>

        <motion.p {...a(0.2)} style={{ color: "var(--text)", fontSize: "clamp(15px, 1.3vw, 17px)", lineHeight: 1.8, maxWidth: 560, marginBottom: 48, fontWeight: 500 }}>
          Writing about performance optimization, system design, and modern web development practices.
        </motion.p>

        {/* Articles Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
        }}>
          {articles.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-hover)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Meta */}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 14,
              }}>
                <span style={{
                  fontFamily: mono,
                  fontSize: "clamp(9px, 0.9vw, 11px)",
                  color: "var(--accent)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}>
                  {article.category}
                </span>
                <span style={{
                  fontFamily: mono,
                  fontSize: "clamp(9px, 0.9vw, 11px)",
                  color: "var(--text-muted)",
                  letterSpacing: "0.05em",
                }}>
                  {article.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: "clamp(16px, 1.5vw, 20px)",
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: 12,
                lineHeight: 1.4,
                flex: 1,
              }}>
                {article.title}
              </h3>

              {/* Excerpt */}
              <p style={{
                fontSize: "clamp(13px, 1vw, 15px)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: 16,
                fontWeight: 500,
              }}>
                {article.excerpt}
              </p>

              {/* Tags */}
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
                marginBottom: 16,
              }}>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag"
                    style={{
                      fontSize: 10,
                      padding: "4px 8px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div style={{
                borderTop: "1px solid var(--border)",
                paddingTop: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
                <span style={{
                  fontFamily: mono,
                  fontSize: 10,
                  color: "var(--text-secondary)",
                }}>
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span style={{
                  color: "var(--accent)",
                  fontSize: 14,
                }}>
                  →
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...a(0.7)} style={{ marginTop: 48, textAlign: "center" }}>
          <a href="#" className="btn-outline">
            READ ALL ARTICLES
          </a>
        </motion.div>
      </div>
    </section>
  );
}
