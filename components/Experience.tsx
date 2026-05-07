"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experience, education } from "@/data/portfolio";

const mono = "'JetBrains Mono', monospace";

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const a = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: "easeOut" },
  });

  const card: React.CSSProperties = {
    backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: 20, padding: 28,
  };

  return (
    <section id="experience" ref={ref} className="section-pad" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg)" }}>
      <div className="container">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <motion.div {...a(0)} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
          <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.2em", color: "var(--text-secondary)", textTransform: "uppercase" }}>Experience</span>
          <div style={{ flex: 1, height: 1, backgroundColor: "var(--border)" }} />
        </motion.div>

        <motion.h2 {...a(0.1)} style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 16 }}>
          Experience shaped by<br /><span style={{ color: "var(--accent)" }}>real product delivery.</span>
        </motion.h2>

        <motion.p {...a(0.2)} style={{ color: "var(--text-muted)", fontSize: "clamp(15px, 1.4vw, 17px)", lineHeight: 1.75, maxWidth: 580, marginBottom: 40 }}>
          Building enterprise systems and web applications with focus on scalability, performance, and user experience.
        </motion.p>

        {/* Summary stats */}
        <motion.div {...a(0.25)} className="exp-stats">
          {[
            { label: "YEARS BUILDING", value: "2+" },
            { label: "SYSTEMS BUILT", value: "7" },
            { label: "MAIN FOCUS", value: "Enterprise" },
          ].map((s) => (
            <div key={s.label} style={card}>
              <div style={{ fontFamily: mono, fontSize: 20, fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: mono, fontSize: 9, color: "var(--text-secondary)", letterSpacing: "0.15em", marginTop: 6, textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Experience cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 20 }}>
          {experience.map((exp, i) => (
            <motion.div key={exp.title} {...a(0.3 + i * 0.12)} style={card}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 14 }}>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--text)" }}>{exp.title}</h3>
                  <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4 }}>{exp.company} · {exp.type}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontFamily: mono, fontSize: 11, color: "var(--text-secondary)" }}>{exp.period}</span>
                  <span style={{
                    fontFamily: mono, fontSize: 9, padding: "3px 8px", borderRadius: 4,
                    border: exp.status === "ACTIVE" ? "1px solid rgba(74,222,128,0.3)" : "1px solid var(--border)",
                    color: exp.status === "ACTIVE" ? "var(--green)" : "var(--text-subtle)",
                    backgroundColor: exp.status === "ACTIVE" ? "rgba(74,222,128,0.06)" : "transparent",
                  }}>{exp.status}</span>
                </div>
              </div>

              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 14 }}>{exp.desc}</p>

              <ul style={{ listStyle: "none", marginBottom: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                {exp.bullets.map((b) => (
                  <li key={b} style={{ fontSize: 13, color: "var(--text-muted)", display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }}>•</span>{b}
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
                {exp.metrics.map((m) => (
                  <div key={m.label} style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", borderRadius: 10, padding: "10px 14px" }}>
                    <div style={{ fontFamily: mono, fontSize: 14, fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>{m.value}</div>
                    <div style={{ fontFamily: mono, fontSize: 9, color: "var(--text-secondary)", letterSpacing: "0.1em", marginTop: 4, textTransform: "uppercase" }}>{m.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {exp.tech.map((t) => (
                  <span key={t} style={{ fontFamily: mono, fontSize: 10, border: "1px solid var(--border)", color: "var(--text-muted)", padding: "3px 8px", borderRadius: 4 }}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div {...a(0.6)} style={card}>
          <div style={{ fontFamily: mono, fontSize: 10, color: "var(--text-secondary)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>Education</div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 18 }}>
            <div>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--text)" }}>{education.degree}</h3>
              <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4 }}>{education.university} • {education.period}</div>
            </div>
            <div style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", borderRadius: 10, padding: "10px 14px" }}>
              <div style={{ fontFamily: mono, fontSize: 14, fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>{education.standing}</div>
              <div style={{ fontFamily: mono, fontSize: 9, color: "var(--text-secondary)", letterSpacing: "0.1em", marginTop: 4, textTransform: "uppercase" }}>Academic Standing</div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 14 }}>
            <div style={{ fontFamily: mono, fontSize: 10, color: "var(--text-secondary)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>Languages</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {education.languages.map((lang) => (
                <div key={lang.name} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 14, color: "var(--text)" }}>{lang.name}</span>
                  <span style={{ fontFamily: mono, fontSize: 9, border: "1px solid var(--border)", color: "var(--text-muted)", padding: "3px 8px", borderRadius: 4, letterSpacing: "0.05em" }}>{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
