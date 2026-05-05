"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { faq } from "@/data/portfolio";

const mono = "'JetBrains Mono', monospace";

export default function FAQ() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [openId, setOpenId] = useState<number | null>(null);

  const a = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="faq" ref={ref} className="section-pad" style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="container">

        <motion.div {...a(0)} className="section-label"><span>Questions</span></motion.div>

        <motion.h2 {...a(0.1)} style={{
          fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 800,
          lineHeight: 1.1, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 16,
        }}>
          Frequently asked<br />
          <span style={{ color: "var(--accent)" }}>questions.</span>
        </motion.h2>

        <motion.p {...a(0.2)} style={{ color: "var(--text-secondary)", fontSize: "clamp(15px, 1.3vw, 17px)", lineHeight: 1.8, maxWidth: 560, marginBottom: 48, fontWeight: 500 }}>
          Common questions about my process, availability, tech stack, and how we can work together.
        </motion.p>

        {/* FAQ Items */}
        <div style={{ maxWidth: 800 }}>
          {faq.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                marginBottom: 12,
                overflow: "hidden",
                transition: "border-color 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              {/* Question */}
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                style={{
                  width: "100%",
                  padding: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <h3 style={{
                  fontSize: "clamp(15px, 1.3vw, 18px)",
                  fontWeight: 600,
                  color: "var(--text)",
                  lineHeight: 1.5,
                  flex: 1,
                }}>
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    fontSize: 20,
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  ↓
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      borderTop: "1px solid var(--border)",
                      overflow: "hidden",
                    }}
                  >
                    <p style={{
                      padding: "0 24px 24px",
                      fontSize: "clamp(13px, 1.1vw, 16px)",
                      color: "var(--text)",
                      lineHeight: 1.8,
                    }}>
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...a(0.7)} style={{ marginTop: 48, textAlign: "center" }}>
          <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 16 }}>
            Didn't find what you're looking for?
          </p>
          <a href="#contact" className="btn-outline">
            GET IN TOUCH
          </a>
        </motion.div>
      </div>
    </section>
  );
}
