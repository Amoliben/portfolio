"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const mono = "'JetBrains Mono', monospace";

export default function Newsletter() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const a = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section ref={ref} className="section-pad" style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <motion.div {...a(0)} style={{ fontFamily: mono, fontSize: 10, color: "var(--text-secondary)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 14 }}>
            Stay Updated
          </motion.div>

          <motion.h2 {...a(0.1)} style={{
            fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800,
            lineHeight: 1.1, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 16,
          }}>
            Get insights on<br />
            <span style={{ color: "var(--accent)" }}>web performance & product design.</span>
          </motion.h2>

          <motion.p {...a(0.2)} style={{ color: "var(--text-secondary)", fontSize: "clamp(14px, 1.2vw, 16px)", lineHeight: 1.7, marginBottom: 32, fontWeight: 500 }}>
            Bi-weekly newsletter with technical deep-dives, performance tips, and product insights. No spam, unsubscribe anytime.
          </motion.p>

          <motion.form {...a(0.3)} onSubmit={handleSubscribe} style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                flex: 1,
                backgroundColor: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: 9999,
                padding: "12px 20px",
                fontSize: 14,
                color: "var(--text)",
                outline: "none",
                fontFamily: "inherit",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(232,255,71,0.5)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            />
            <button
              type="submit"
              style={{
                fontFamily: mono,
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: "0.05em",
                backgroundColor: subscribed ? "var(--surface)" : "var(--accent)",
                color: subscribed ? "var(--accent)" : "#000",
                border: subscribed ? "1px solid var(--accent)" : "none",
                padding: "12px 28px",
                borderRadius: 9999,
                cursor: "pointer",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                if (!subscribed) {
                  e.currentTarget.style.filter = "brightness(1.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (!subscribed) {
                  e.currentTarget.style.backgroundColor = "var(--accent)";
                }
              }}
            >
              {subscribed ? "✓ SUBSCRIBED" : "SUBSCRIBE"}
            </button>
          </motion.form>

          <motion.p {...a(0.4)} style={{ fontFamily: mono, fontSize: 10, color: "var(--text-secondary)", letterSpacing: "0.05em" }}>
            No spam. Unsubscribe anytime.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
