"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { personal, skills } from "@/data/portfolio";

const mono = "'JetBrains Mono', monospace";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animate(count, to, { duration: 1.8, ease: "easeOut" });
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section style={{
      position: "relative", minHeight: "100vh",
      display: "flex", flexDirection: "column", justifyContent: "center",
      overflow: "hidden", paddingTop: 68, backgroundColor: "var(--bg)",
    }}>
      {/* Subtle grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
        backgroundSize: "64px 64px", opacity: 0.25,
      }} />
      {/* Radial glow */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "30%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(800px, 100vw)", height: "min(800px, 100vw)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,255,71,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="container hero-container" style={{ position: "relative" }}>

        {/* Status badge */}
        <motion.div {...fadeUp(0.1)} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 36 }}>
          <span className="animate-pulse-dot" style={{
            width: 8, height: 8, borderRadius: "50%", backgroundColor: "var(--green)",
            display: "inline-block", flexShrink: 0,
          }} />
          <span style={{ fontFamily: mono, fontSize: "clamp(10px, 2vw, 11px)", letterSpacing: "0.22em", color: "var(--text-secondary)", textTransform: "uppercase" }}>
            {personal.availability}
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p {...fadeUp(0.2)} style={{
          fontSize: "clamp(16px, 2vw, 20px)",
          fontWeight: 500, color: "var(--text-muted)",
          marginBottom: 16, letterSpacing: "-0.01em",
        }}>
          Hi, I'm <span style={{ color: "var(--text)", fontWeight: 600 }}>Amenti Liben</span>
        </motion.p>

        {/* Heading */}
        <motion.h1 {...fadeUp(0.3)} style={{
          fontSize: "clamp(40px, 7vw, 88px)",
          fontWeight: 800, lineHeight: 1.1,
          letterSpacing: "-0.03em", marginBottom: 24, color: "var(--text)",
        }}>
          <span style={{ color: "var(--accent)" }} className="text-glow">Full-Stack Developer</span>
          <br />
          building scalable and<br />
          high-performance web applications
        </motion.h1>

        {/* Description */}
        <motion.p {...fadeUp(0.4)} style={{
          color: "var(--text-muted)", fontSize: "clamp(15px, 1.6vw, 18px)",
          lineHeight: 1.8, maxWidth: 600, marginBottom: 20,
        }}>
          I specialize in modern technologies like <span style={{ color: "var(--text)", fontWeight: 500 }}>Next.js</span>, <span style={{ color: "var(--text)", fontWeight: 500 }}>TypeScript</span>, and <span style={{ color: "var(--text)", fontWeight: 500 }}>Node.js</span> to create efficient and user-focused solutions.
        </motion.p>

        {/* Focus badge */}
        <motion.div {...fadeUp(0.45)} style={{ marginBottom: 44 }}>
          <span style={{
            fontFamily: mono, fontSize: "clamp(11px, 1.3vw, 13px)", color: "var(--text-secondary)",
            border: "1px solid var(--border)", padding: "10px 18px",
            borderRadius: 9999, display: "inline-block", backgroundColor: "var(--surface)",
            letterSpacing: "0.02em",
          }}>
            Focused on <span style={{ color: "var(--accent)" }}>Backend Systems</span> • <span style={{ color: "var(--accent)" }}>REST APIs</span> • <span style={{ color: "var(--accent)" }}>Clean Architecture</span>
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div {...fadeUp(0.5)} className="hero-ctas">
          <a href="#experience" className="btn-primary">
            VIEW PROJECTS
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#contact" className="btn-outline">
            CONTACT ME
          </a>
          {[
            { label: "GitHub", href: personal.github, icon: "🐙" },
            { label: "LinkedIn", href: personal.linkedin, icon: "💼" },
            { label: "Telegram", href: personal.telegram, icon: "✈️" },
            { label: "Facebook", href: personal.facebook, icon: "👥" },
            { label: "Instagram", href: personal.instagram, icon: "📸" },
          ].map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span>{l.icon}</span>
              {l.label}
            </a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div {...fadeUp(0.6)} className="hero-stats">
          {[
            { label: "PROJECTS BUILT", value: 5, suffix: "+" },
            { label: "TECHNOLOGIES", value: 12, suffix: "+" },
            { label: "YEARS LEARNING", value: 2, suffix: "+" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: mono, fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div style={{ fontFamily: mono, fontSize: 10, color: "var(--text-secondary)", letterSpacing: "0.18em", marginTop: 8, textTransform: "uppercase" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tech marquee */}
        <motion.div {...fadeUp(0.7)}>
          <div style={{ fontFamily: mono, fontSize: 10, color: "var(--text-secondary)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 14 }}>
            Core Technologies
          </div>
          <div style={{ overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to right, var(--bg), transparent)", zIndex: 1, pointerEvents: "none" }} />
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to left, var(--bg), transparent)", zIndex: 1, pointerEvents: "none" }} />
            <div className="animate-marquee" style={{ display: "flex", gap: 10, whiteSpace: "nowrap" }}>
              {[...skills.techStack, ...skills.techStack].map((tech, i) => (
                <span key={i} className="tag" style={{ flexShrink: 0, fontSize: 11, padding: "6px 14px" }}>{tech}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}
        >
          <span style={{ fontFamily: mono, fontSize: 9, color: "var(--text-secondary)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 40, backgroundColor: "var(--border)", position: "relative", overflow: "hidden" }}>
            <motion.div
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute", top: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to bottom, transparent, var(--accent))" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
