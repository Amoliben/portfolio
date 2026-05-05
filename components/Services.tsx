"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { services } from "@/data/portfolio";

const mono = "'JetBrains Mono', monospace";

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const a = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="services" ref={ref} className="section-pad" style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="container">

        <motion.div {...a(0)} className="section-label"><span>What I Offer</span></motion.div>

        <motion.h2 {...a(0.1)} style={{
          fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 800,
          lineHeight: 1.1, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 16,
        }}>
          Services tailored to<br />
          <span style={{ color: "var(--accent)" }}>product teams.</span>
        </motion.h2>

        <motion.p {...a(0.2)} style={{ color: "var(--text)", fontSize: "clamp(15px, 1.3vw, 17px)", lineHeight: 1.8, maxWidth: 560, marginBottom: 48, fontWeight: 500 }}>
          Whether you need a complete product built, performance optimization, or architectural guidance, I provide end-to-end solutions.
        </motion.p>

        {/* Services Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}>
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: 32,
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(232,255,71,0.3)";
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(232,255,71,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Title */}
              <h3 style={{
                fontSize: "clamp(18px, 2.5vw, 22px)",
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: 14,
                lineHeight: 1.3,
              }}>
                {service.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: "clamp(14px, 1.1vw, 16px)",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: 20,
                flex: 1,
                fontWeight: 500,
              }}>
                {service.description}
              </p>

              {/* Features */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {service.features.map((feature) => (
                  <div key={feature} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: "var(--accent)", fontSize: 12 }}>✓</span>
                    <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
