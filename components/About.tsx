"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { personal } from "@/data/portfolio";

const mono = "'JetBrains Mono', monospace";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.06 });
  const a = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section id="about" ref={ref} className="section-pad" style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="container">

        <motion.div {...a(0)} className="section-label">
          <span style={{ fontWeight: 600 }}>About Me</span>
        </motion.div>

        <div className="about-grid" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* ── Left ── */}
          <div>
            <motion.h2 {...a(0.1)} style={{
              fontSize: "clamp(32px, 4.2vw, 50px)", fontWeight: 800,
              lineHeight: 1.15, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 20,
            }}>
              Building scalable and<br />
              <span style={{ color: "var(--accent)" }}>maintainable applications.</span>
            </motion.h2>

            <motion.p {...a(0.2)} style={{ color: "var(--text-secondary)", fontSize: "clamp(15px, 1.35vw, 17px)", lineHeight: 1.75, marginBottom: 14, fontWeight: 500 }}>
              {personal.about.description1}
            </motion.p>
            <motion.p {...a(0.25)} style={{ color: "var(--text-secondary)", fontSize: "clamp(15px, 1.35vw, 17px)", lineHeight: 1.75, marginBottom: 14, fontWeight: 500 }}>
              {personal.about.description2}
            </motion.p>
            <motion.p {...a(0.28)} style={{ color: "var(--text-muted)", fontSize: "clamp(14px, 1.25vw, 16px)", lineHeight: 1.75, marginBottom: 32, fontWeight: 500, fontStyle: "italic" }}>
              {personal.about.description3}
            </motion.p>

            {/* Stats */}
            <motion.div {...a(0.3)} className="grid-3" style={{ marginBottom: 24 }}>
              {personal.about.stats.map((s, i) => (
                <motion.div 
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  style={{
                    backgroundColor: "var(--surface)", border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)", padding: "16px 14px",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(16,185,129,0.4)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(16,185,129,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ fontFamily: mono, fontSize: 24, fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontFamily: mono, fontSize: 9, color: "var(--text-secondary)", letterSpacing: "0.15em", marginTop: 7, textTransform: "uppercase" }}>{s.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Principles */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {personal.about.principles.map((p, i) => (
                <motion.div 
                  key={p.title} 
                  {...a(0.35 + i * 0.08)}
                  whileHover={{ x: 6, scale: 1.02 }}
                  style={{
                    backgroundColor: "var(--surface)", border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)", padding: "14px 18px",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => { 
                    e.currentTarget.style.borderColor = "rgba(16,185,129,0.3)"; 
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(16,185,129,0.1)";
                  }}
                  onMouseLeave={(e) => { 
                    e.currentTarget.style.borderColor = "var(--border)"; 
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ fontFamily: mono, fontSize: 10, color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 5, fontWeight: 600 }}>{p.title}</div>
                  <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.65, fontWeight: 500 }}>{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right ── */}
          <div>
            {/* Profile image */}
            <motion.div {...a(0.15)} style={{ position: "relative", marginBottom: 16 }}>
              <div style={{
                width: "100%", borderRadius: "var(--radius-xl)", overflow: "hidden",
                border: "1px solid var(--border)", position: "relative", aspectRatio: "1 / 1",
                transition: "border-color 0.3s",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(232,255,71,0.3)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <Image
                  src="/images/profile.png"
                  alt={personal.name}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  priority
                />
                {/* Gradient overlay */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: "50%",
                  background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.4) 60%, transparent 100%)",
                }} />
                {/* Name overlay */}
                <div style={{ position: "absolute", bottom: 24, left: 24, right: 24, display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontWeight: 700, color: "#fff", fontSize: 20, lineHeight: 1.2, marginBottom: 4 }}>{personal.name}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>{personal.role}</div>
                    <div style={{ fontFamily: mono, fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>📍 {personal.location}</div>
                  </div>
                  <div style={{
                    backgroundColor: "var(--green)", color: "#000",
                    fontFamily: mono, fontSize: 10, fontWeight: 700,
                    padding: "6px 12px", borderRadius: 9999, letterSpacing: "0.06em",
                    whiteSpace: "nowrap", boxShadow: "0 4px 12px rgba(74,222,128,0.3)",
                  }}>● AVAILABLE</div>
                </div>
              </div>
            </motion.div>

            {/* Info card */}
            <motion.div {...a(0.3)} style={{
              backgroundColor: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)", padding: 20, marginBottom: 14,
            }}>
              <div style={{ fontFamily: mono, fontSize: 10, color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 7, fontWeight: 600 }}>Current Focus</div>
              <div style={{ fontSize: 15, color: "var(--text-secondary)", marginBottom: 20, fontWeight: 500 }}>Seeking internship & junior developer opportunities</div>

              <div style={{ fontFamily: mono, fontSize: 10, color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>Learning Journey</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {personal.about.timeline.map((item, i) => (
                  <div key={item.year} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontFamily: mono, fontSize: 13, color: "var(--accent)", width: 50, flexShrink: 0, fontWeight: 700 }}>{item.year}</span>
                    <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, var(--border), transparent)` }} />
                    <span style={{ fontSize: 13, color: "var(--text-secondary)", flex: 2, minWidth: 0, fontWeight: 500 }}>{item.event}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div {...a(0.4)} style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {personal.about.tags.map((tag) => (
                <span key={tag} className="tag" style={{ fontSize: 10 }}>{tag}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
