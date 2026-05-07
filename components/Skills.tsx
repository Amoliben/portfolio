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
    initial: { opacity: 0, y: 40 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section id="skills" ref={ref} className="section-pad" style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--border)" }}>
      <div className="container">

        <motion.div {...a(0)} className="section-label"><span>Technical Skills</span></motion.div>

        <div style={{ marginBottom: 40 }}>
          <motion.h2 {...a(0.1)} style={{
            fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 900,
            lineHeight: 1.15, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 16,
          }}>
            Technologies I work with to build <span style={{ color: "var(--accent)" }} className="text-glow">modern solutions</span>
          </motion.h2>

          <motion.p {...a(0.2)} style={{ color: "var(--text-secondary)", fontSize: "clamp(16px, 1.45vw, 18px)", lineHeight: 1.65, maxWidth: 650, marginBottom: 0, fontWeight: 400 }}>
            From frontend interfaces to backend APIs and databases — I focus on mastering essential technologies for building scalable full-stack applications.
          </motion.p>
        </div>

        {/* Summary stats */}
        <motion.div {...a(0.25)} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 36 }}>
          {[
            { label: "SKILL GROUPS", value: skills.summary.groups, icon: "📦" },
            { label: "AVG PROFICIENCY", value: skills.summary.avgProficiency, icon: "📊" },
            { label: "TOP STACK", value: skills.summary.topStack, icon: "⚡" },
            { label: "CORE SKILLS", value: `${skills.summary.strengths.length}`, icon: "🎯" },
          ].map((s, i) => (
            <motion.div 
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -6 }}
              style={{
                backgroundColor: "var(--bg)", border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)", padding: "20px 18px",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(16,185,129,0.4)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(16,185,129,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
              <div style={{ fontFamily: mono, fontSize: 24, fontWeight: 800, color: "var(--accent)", lineHeight: 1, marginBottom: 7 }}>{s.value}</div>
              <div style={{ fontFamily: mono, fontSize: 10, color: "var(--text-secondary)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Top Skills Tags */}
        <motion.div {...a(0.3)} style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: mono, fontSize: 11, color: "var(--text-secondary)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "var(--accent)" }} />
            Top Skills
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {skills.summary.strengths.map((s, i) => (
              <motion.span 
                key={s}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.08, y: -3 }}
                style={{
                  fontFamily: mono, fontSize: 13, fontWeight: 600,
                  border: "1px solid rgba(16,185,129,0.3)", color: "var(--accent)",
                  padding: "10px 20px", borderRadius: 9999,
                  backgroundColor: "rgba(16,185,129,0.08)", letterSpacing: "0.05em",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(16,185,129,0.15)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(16,185,129,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(16,185,129,0.08)";
                  e.currentTarget.style.borderColor = "rgba(16,185,129,0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >{s}</motion.span>
            ))}
          </div>
        </motion.div>

        {/* Skill cards */}
        <div className="skills-grid">
          {skills.categories.map((cat, ci) => (
            <motion.div key={cat.label} {...a(0.4 + ci * 0.08)} className="card">
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                <div>
                  <div style={{ fontFamily: mono, fontSize: 10, color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8, fontWeight: 600 }}>{cat.label}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>{cat.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 0 }}>{cat.desc}</p>
                </div>
                <span className="badge-accent" style={{ flexShrink: 0, marginLeft: 12 }}>{cat.type}</span>
              </div>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 20, marginTop: 20 }}>
                {cat.items.map((item, ii) => (
                  <SkillBar key={item.name} name={item.name} level={item.level} delay={0.5 + ci * 0.08 + ii * 0.04} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Approach */}
        <motion.div 
          {...a(0.8)}
          whileHover={{ scale: 1.01 }}
          style={{
            marginTop: 40, border: "1px solid rgba(16,185,129,0.25)",
            borderRadius: "var(--radius-xl)", padding: "32px 28px",
            background: "linear-gradient(135deg, rgba(16,185,129,0.06) 0%, transparent 100%)",
            position: "relative",
            overflow: "hidden",
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(16,185,129,0.4)";
            e.currentTarget.style.boxShadow = "0 12px 40px rgba(16,185,129,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(16,185,129,0.25)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 3, background: "linear-gradient(90deg, var(--accent), transparent)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "var(--accent)", boxShadow: "0 0 12px var(--accent)" }} 
            />
            <div style={{ fontFamily: mono, fontSize: 11, color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600 }}>My Learning Philosophy</div>
          </div>
          <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.65, maxWidth: 800 }}>
            I focus on <span style={{ color: "var(--accent)", fontWeight: 600 }}>mastering core technologies deeply</span> rather than spreading thin across many tools. Each skill is developed through hands-on projects and real-world application, ensuring practical understanding alongside theoretical knowledge.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
