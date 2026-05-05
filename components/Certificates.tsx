"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { certificates } from "@/data/portfolio";

const mono = "'JetBrains Mono', monospace";

export default function Certificates() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const a = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: "easeOut" },
  });

  return (
    <section id="certificates" ref={ref} className="section-pad" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg)" }}>
      <div className="container">

        <motion.div {...a(0)} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
          <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.2em", color: "var(--text-secondary)", textTransform: "uppercase" }}>Proof Verification</span>
          <div style={{ flex: 1, height: 1, backgroundColor: "var(--border)" }} />
        </motion.div>

        <motion.h2 {...a(0.1)} style={{
          fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 800,
          lineHeight: 1.12, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 52,
        }}>
          <span style={{ color: "#e8ff47" }}>CERTIFIED</span><br />ACHIEVEMENTS.
        </motion.h2>

        <div className="grid-cards">
          {certificates.map((cert, i) => (
            <motion.div key={cert.id} {...a(0.2 + i * 0.12)} style={{
              backgroundColor: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: 20, padding: 28, transition: "border-color 0.2s, transform 0.2s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#e8ff47"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontFamily: mono, fontSize: 52, fontWeight: 800, color: "var(--border)", lineHeight: 1, marginBottom: 18, userSelect: "none" }}>{cert.id}</div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--text)", marginBottom: 8, lineHeight: 1.4 }}>{cert.title}</h3>
              <div style={{ fontFamily: mono, fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>{cert.issuer} • {cert.year}</div>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 14 }}>
                <div style={{ fontFamily: mono, fontSize: 9, color: "var(--text-secondary)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>Credential ID</div>
                <div style={{ fontFamily: mono, fontSize: 12, color: "#e8ff47" }}>{cert.credentialId}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
