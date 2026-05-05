"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const mono = "'JetBrains Mono', monospace";

const stats = [
  { label: "Projects Shipped", value: 15, suffix: "+" },
  { label: "Avg Lighthouse Score", value: 94, suffix: "" },
  { label: "Performance Improvement", value: 35, suffix: "%" },
  { label: "Client Satisfaction", value: 100, suffix: "%" },
  { label: "Code Coverage", value: 92, suffix: "%" },
  { label: "Uptime", value: 99.9, suffix: "%" },
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => {
    const formatted = to % 1 === 0 ? Math.round(v) : v.toFixed(1);
    return `${formatted}${suffix}`;
  });
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animate(count, to, { duration: 2, ease: "easeOut" });
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const a = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section ref={ref} className="section-pad" style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="container">

        <motion.div {...a(0)} style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800,
            lineHeight: 1.1, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 16,
          }}>
            Measurable<br />
            <span style={{ color: "var(--accent)" }}>impact.</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "clamp(14px, 1.2vw, 16px)", lineHeight: 1.7, maxWidth: 500, margin: "0 auto", fontWeight: 500 }}>
            Real metrics from projects shipped, optimized, and deployed to production.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 24,
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              style={{
                backgroundColor: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: 28,
                textAlign: "center",
              }}
            >
              <div style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 800,
                color: "var(--accent)",
                marginBottom: 12,
                lineHeight: 1,
              }}>
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{
                fontFamily: mono,
                fontSize: "clamp(10px, 0.9vw, 12px)",
                color: "var(--text-muted)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
