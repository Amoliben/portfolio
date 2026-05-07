"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects, personal } from "@/data/portfolio";

const mono = "'JetBrains Mono', monospace";
const filters = ["All", "Full Stack", "Backend", "Frontend"];

const gradients = [
  { bg: "linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(16,185,129,0.03) 100%)", border: "rgba(16,185,129,0.3)", hover: "rgba(16,185,129,0.25)" },
  { bg: "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(59,130,246,0.03) 100%)", border: "rgba(59,130,246,0.3)", hover: "rgba(59,130,246,0.25)" },
  { bg: "linear-gradient(135deg, rgba(168,85,247,0.12) 0%, rgba(168,85,247,0.03) 100%)", border: "rgba(168,85,247,0.3)", hover: "rgba(168,85,247,0.25)" },
  { bg: "linear-gradient(135deg, rgba(249,115,22,0.12) 0%, rgba(249,115,22,0.03) 100%)", border: "rgba(249,115,22,0.3)", hover: "rgba(249,115,22,0.25)" },
];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered = projects.filter((p) => {
    if (active === "All") return true;
    if (active === "Full Stack") return p.type === "FULL STACK";
    if (active === "Backend") return p.type === "BACKEND";
    return p.type === "FRONTEND";
  });

  const a = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="projects" ref={ref} className="section-pad" style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="container">

        <motion.div {...a(0)} className="section-label"><span>Selected Work</span></motion.div>

        <motion.h2 {...a(0.1)} style={{
          fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 800,
          lineHeight: 1.1, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 16,
        }}>
          Real projects built with<br />
          <span style={{ color: "var(--accent)" }}>modern technologies.</span>
        </motion.h2>

        <motion.p {...a(0.2)} style={{ color: "var(--text)", fontSize: "clamp(15px, 1.3vw, 17px)", lineHeight: 1.8, maxWidth: 560, marginBottom: 36, fontWeight: 500 }}>
          Showcasing actual projects I've built, deployed, and maintained. Each project demonstrates practical application of full-stack development skills.
        </motion.p>

        {/* Stats */}
        <motion.div {...a(0.25)} style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
          {[
            { label: "TOTAL PROJECTS", value: projects.length },
            { label: "LIVE DEMOS",     value: projects.filter((p) => p.live && !p.live.includes("#")).length },
            { label: "LATEST YEAR",    value: "2025" },
          ].map((s) => (
            <div key={s.label} style={{
              backgroundColor: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)", padding: "12px 20px",
            }}>
              <div style={{ fontFamily: mono, fontSize: 20, fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: mono, fontSize: 9, color: "var(--text-secondary)", letterSpacing: "0.15em", marginTop: 5, textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Filters */}
        <motion.div {...a(0.3)} style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)} style={{
              fontFamily: mono, fontSize: 12, padding: "9px 20px", borderRadius: 9999,
              border: active === f ? "1px solid var(--accent)" : "1px solid var(--border)",
              backgroundColor: active === f ? "var(--accent)" : "transparent",
              color: active === f ? "#000" : "var(--text)",
              cursor: "pointer", transition: "all 0.2s", fontWeight: active === f ? 700 : 400,
              letterSpacing: "0.04em",
            }}
              onMouseEnter={(e) => { if (active !== f) { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.color = "var(--text)"; } }}
              onMouseLeave={(e) => { if (active !== f) { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text)"; } }}
            >{f}</button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="projects-grid-responsive">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div key={project.id} layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                style={{
                  backgroundColor: "var(--surface)", 
                  border: `1px solid ${gradients[(project.id - 1) % gradients.length].border}`,
                  borderRadius: "var(--radius-lg)", overflow: "hidden",
                  display: "flex", flexDirection: "column",
                  transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
                  minHeight: "400px",
                }}
                onMouseEnter={(e) => { 
                  const color = gradients[(project.id - 1) % gradients.length].hover;
                  e.currentTarget.style.borderColor = color.replace("0.25", "0.5"); 
                  e.currentTarget.style.transform = "translateY(-4px)"; 
                  e.currentTarget.style.boxShadow = `0 20px 60px ${color.replace("0.25", "0.15")}`; 
                }}
                onMouseLeave={(e) => { 
                  e.currentTarget.style.borderColor = gradients[(project.id - 1) % gradients.length].border; 
                  e.currentTarget.style.transform = "translateY(0)"; 
                  e.currentTarget.style.boxShadow = "none"; 
                }}
              >
                {/* Thumbnail */}
                <div style={{
                  position: "relative", height: "clamp(120px, 15vw, 168px)",
                  background: gradients[(project.id - 1) % gradients.length].bg,
                  borderBottom: `1px solid ${gradients[(project.id - 1) % gradients.length].border}`,
                  display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
                  flexShrink: 0,
                }}>
                  {/* Watermark initials */}
                  <span style={{
                    fontFamily: mono, fontSize: "clamp(40px, 8vw, 80px)", fontWeight: 800,
                    color: "rgba(255,255,255,0.06)", letterSpacing: "-0.04em",
                    userSelect: "none", position: "absolute",
                  }}>
                    {project.title.split(" ").map(w => w[0]).join("").slice(0, 3)}
                  </span>

                  {/* Score */}
                  <div style={{
                    position: "absolute", bottom: 12, left: 12,
                    display: "flex", alignItems: "center", gap: 6,
                    backgroundColor: "rgba(0,0,0,0.65)", backdropFilter: "blur(8px)",
                    border: "1px solid rgba(232,255,71,0.2)", borderRadius: 8, padding: "5px 10px",
                  }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "var(--accent)" }} />
                    <span style={{ fontFamily: mono, fontSize: 11, color: "var(--accent)", fontWeight: 700 }}>{project.score}</span>
                    <span style={{ fontFamily: mono, fontSize: 9, color: "var(--text-secondary)" }}>SCORE</span>
                  </div>

                  {project.featured && (
                    <div style={{ position: "absolute", top: 12, left: 12, fontFamily: mono, fontSize: 9, fontWeight: 700, backgroundColor: "var(--accent)", color: "#000", padding: "4px 9px", borderRadius: 4, letterSpacing: "0.06em" }}>FEATURED</div>
                  )}
                  <div style={{ position: "absolute", top: 12, right: 12, fontFamily: mono, fontSize: 9, border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)", padding: "4px 9px", borderRadius: 4, backgroundColor: "rgba(0,0,0,0.5)" }}>{project.type}</div>

                  {/* Links */}
                  <div style={{ position: "absolute", bottom: 12, right: 12, display: "flex", gap: 6 }}>
                    {[{ label: "Code", href: project.github }, { label: "Live ↗", href: project.live }].map((l) => (
                      <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={{
                        fontFamily: mono, fontSize: 10, border: "1px solid rgba(255,255,255,0.12)",
                        color: "rgba(255,255,255,0.7)", padding: "4px 10px", borderRadius: 6,
                        backgroundColor: "rgba(0,0,0,0.6)", textDecoration: "none",
                        backdropFilter: "blur(8px)", transition: "all 0.2s",
                      }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.7)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
                      >{l.label}</a>
                    ))}
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "clamp(14px, 2vw, 22px)", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                    <span style={{ fontFamily: mono, fontSize: "clamp(10px, 1.2vw, 11px)", color: "var(--text-secondary)" }}>{project.year}</span>
                    <span className="badge-accent">{project.badge}</span>
                  </div>
                  <h3 style={{ fontSize: "clamp(14px, 1.6vw, 17px)", fontWeight: 700, color: "var(--text)", marginBottom: 8, lineHeight: 1.3 }}>{project.title}</h3>
                  <p style={{ fontSize: "clamp(12px, 1.3vw, 13px)", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 16, flex: 1 }}>{project.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(4px, 0.8vw, 6px)", marginBottom: 16 }}>
                    {project.tech.map((t) => (
                      <span key={t} className="tag" style={{ fontSize: "clamp(9px, 1vw, 10px)", padding: "3px 8px" }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ borderTop: "1px solid var(--border)", paddingTop: "clamp(12px, 1.5vw, 16px)" }}>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" style={{
                      fontFamily: mono, fontSize: "clamp(11px, 1.2vw, 12px)", color: "var(--accent)", textDecoration: "none",
                      display: "inline-flex", alignItems: "center", gap: 6, transition: "gap 0.2s",
                      letterSpacing: "0.04em",
                    }}
                      onMouseEnter={(e) => (e.currentTarget.style.gap = "10px")}
                      onMouseLeave={(e) => (e.currentTarget.style.gap = "6px")}
                    >View Live Demo <span>→</span></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div {...a(0.7)} style={{ textAlign: "center", marginTop: 52 }}>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
            VIEW ALL ON GITHUB ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
