"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "@/data/portfolio";

const mono = "'JetBrains Mono', monospace";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div ref={ref} style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 7 }}>
        <span style={{ fontSize: 13, color: "var(--text)", fontWeight: 500 }}>{name}</span>
        <span style={{ fontFamily: mono, fontSize: 11, color: "var(--accent)", fontWeight: 600 }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const a = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="skills" ref={ref} className="section-pad" style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="container">

        <motion.div {...a(0)} className="section-label"><span>Skills</span></motion.div>

        <motion.h2 {...a(0.1)} style={{
          fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 800,
          lineHeight: 1.1, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 16,
        }}>
          Core technologies for<br />
          <span style={{ color: "var(--accent)" }}>modern web development.</span>
        </motion.h2>

        <motion.p {...a(0.2)} style={{ color: "var(--text-secondary)", fontSize: "clamp(15px, 1.3vw, 17px)", lineHeight: 1.8, maxWidth: 560, marginBottom: 48, fontWeight: 500 }}>
          Focused on essential technologies for building scalable full-stack web applications — from frontend interfaces to backend APIs and databases.
        </motion.p>

        {/* Summary stats */}
        <motion.div {...a(0.25)} className="stats-row">
          {[
            { label: "SKILL GROUPS",    value: skills.summary.groups },
            { label: "AVG PROFICIENCY", value: skills.summary.avgProficiency },
            { label: "TOP STACK",       value: skills.summary.topStack },
            { label: "STRENGTHS",       value: `${skills.summary.strengths.length}+` },
          ].map((s) => (
            <div key={s.label} style={{
              backgroundColor: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)", padding: "18px 16px",
              transition: "border-color 0.2s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(232,255,71,0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{ fontFamily: mono, fontSize: 20, fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: mono, fontSize: 9, color: "var(--text-secondary)", letterSpacing: "0.15em", marginTop: 8, textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Strengths */}
        <motion.div {...a(0.3)} style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 44, alignItems: "center" }}>
          <span style={{ fontFamily: mono, fontSize: 10, color: "var(--text-secondary)", letterSpacing: "0.15em", textTransform: "uppercase", marginRight: 4 }}>Top Skills</span>
          {skills.summary.strengths.map((s) => (
            <span key={s} style={{
              fontFamily: mono, fontSize: 10,
              border: "1px solid rgba(232,255,71,0.3)", color: "var(--accent)",
              padding: "5px 12px", borderRadius: 9999,
              backgroundColor: "rgba(232,255,71,0.06)", letterSpacing: "0.05em",
              transition: "background-color 0.2s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(232,255,71,0.12)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(232,255,71,0.06)")}
            >{s}</span>
          ))}
        </motion.div>

        {/* Skill cards */}
        <div className="skills-grid">
          {skills.categories.map((cat, ci) => (
            <motion.div key={cat.label} {...a(0.35 + ci * 0.1)} style={{
              backgroundColor: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)", padding: 24,
              transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.25)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
                <div>
                  <div style={{ fontFamily: mono, fontSize: 10, color: "var(--text-secondary)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>{cat.label}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--text)" }}>{cat.title}</h3>
                </div>
                <span className="badge-accent">{cat.type}</span>
              </div>
              <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.65, marginBottom: 22 }}>{cat.desc}</p>
              {cat.items.map((item, ii) => (
                <SkillBar key={item.name} name={item.name} level={item.level} delay={0.4 + ci * 0.1 + ii * 0.06} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Delivery principle */}
        <motion.div {...a(0.7)} style={{
          marginTop: 24, border: "1px solid rgba(232,255,71,0.2)",
          borderRadius: "var(--radius-lg)", padding: 28,
          background: "linear-gradient(135deg, rgba(232,255,71,0.04) 0%, transparent 100%)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "var(--accent)" }} />
            <div style={{ fontFamily: mono, fontSize: 10, color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Learning Approach</div>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.75 }}>
            I focus on mastering core technologies deeply rather than spreading thin across many tools. Each skill is developed through hands-on projects and real-world application, ensuring practical understanding alongside theoretical knowledge.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
