"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { personal, skills } from "@/data/portfolio";
import { FaGithub, FaLinkedin, FaTelegram, FaFacebook, FaInstagram, FaArrowRight } from "react-icons/fa";

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
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  return (
    <section style={{
      position: "relative", minHeight: "95vh",
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
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "30%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(900px, 100vw)", height: "min(900px, 100vw)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(60px)",
        }}
      />

      <div className="container" style={{ position: "relative" }}>
        <div style={{ textAlign: "center" }}>

          {/* Status badge */}
          <motion.div {...fadeUp(0.1)} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24, justifyContent: "center" }}>
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
            fontSize: "clamp(18px, 2.2vw, 22px)",
            fontWeight: 500, color: "var(--text-muted)",
            marginBottom: 20, letterSpacing: "-0.01em",
          }}>
            Hi, I'm <span style={{ color: "var(--accent)", fontWeight: 700 }}>Amenti Liben</span>
          </motion.p>

          {/* Heading */}
          <motion.h1 {...fadeUp(0.3)} style={{
            fontSize: "clamp(44px, 7vw, 72px)",
            fontWeight: 900, lineHeight: 1.15,
            letterSpacing: "-0.03em", marginBottom: 24, color: "var(--text)",
          }}>
            Full-Stack Developer<br />
            building <span style={{ color: "var(--accent)" }} className="text-glow">scalable</span> and<br />
            <span style={{ color: "var(--accent)" }} className="text-glow">high-performance</span> web apps
          </motion.h1>

          {/* Description */}
          <motion.p {...fadeUp(0.4)} style={{
            color: "var(--text-secondary)", fontSize: "clamp(17px, 1.8vw, 20px)",
            lineHeight: 1.7, maxWidth: 700, marginBottom: 32, fontWeight: 400,
            margin: "0 auto 32px",
          }}>
            I specialize in modern technologies like <span style={{ color: "var(--accent)", fontWeight: 600 }}>Next.js</span>, <span style={{ color: "var(--accent)", fontWeight: 600 }}>TypeScript</span>, and <span style={{ color: "var(--accent)", fontWeight: 600 }}>Node.js</span> to create efficient and user-focused solutions.
          </motion.p>

          {/* Focus badges */}
          <motion.div {...fadeUp(0.45)} style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40, justifyContent: "center" }}>
            {["Backend Systems", "REST APIs", "Clean Architecture"].map((item, i) => (
              <motion.span 
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.05, y: -2 }}
                style={{
                  fontFamily: mono, fontSize: "clamp(12px, 1.3vw, 14px)", 
                  color: "var(--text-secondary)",
                  border: "1px solid rgba(16,185,129,0.3)", 
                  padding: "9px 18px",
                  borderRadius: 9999, 
                  display: "inline-block", 
                  backgroundColor: "rgba(16,185,129,0.05)",
                  letterSpacing: "0.02em",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(16,185,129,0.12)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(16,185,129,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(16,185,129,0.05)";
                  e.currentTarget.style.borderColor = "rgba(16,185,129,0.3)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div {...fadeUp(0.5)} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14, marginBottom: 56, justifyContent: "center" }}>
            <a href="#projects" className="btn-primary" style={{ padding: "16px 32px", fontSize: 15 }}>
              VIEW PROJECTS
              <FaArrowRight size={15} />
            </a>
            <a href="#contact" className="btn-outline" style={{ padding: "15px 32px", fontSize: 15 }}>
              CONTACT ME
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.6)} style={{ display: "flex", flexWrap: "wrap", gap: 48, paddingTop: 48, borderTop: "1px solid var(--border)", marginBottom: 48, justifyContent: "center" }}>
            {[
              { label: "PROJECTS BUILT", value: 5, suffix: "+" },
              { label: "TECHNOLOGIES", value: 12, suffix: "+" },
              { label: "YEARS LEARNING", value: 2, suffix: "+" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: mono, fontSize: "clamp(32px, 3.8vw, 48px)", fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div style={{ fontFamily: mono, fontSize: 11, color: "var(--text-secondary)", letterSpacing: "0.18em", marginTop: 8, textTransform: "uppercase" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div {...fadeUp(0.65)} style={{ marginBottom: 48 }}>
            <div style={{ fontFamily: mono, fontSize: 11, color: "var(--text-secondary)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>
              Connect With Me
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              {[
                { label: "GitHub", href: personal.github, icon: FaGithub },
                { label: "LinkedIn", href: personal.linkedin, icon: FaLinkedin },
                { label: "Telegram", href: personal.telegram, icon: FaTelegram },
                { label: "Facebook", href: personal.facebook, icon: FaFacebook },
                { label: "Instagram", href: personal.instagram, icon: FaInstagram },
              ].map((l, i) => {
                const Icon = l.icon;
                return (
                  <motion.a 
                    key={l.label} 
                    href={l.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    style={{ 
                      display: "flex", alignItems: "center", gap: 8,
                      fontFamily: mono, fontSize: 14, 
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)", 
                      padding: "11px 20px",
                      borderRadius: 9999, 
                      textDecoration: "none",
                      backgroundColor: "var(--surface)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent)";
                      e.currentTarget.style.color = "var(--accent)";
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(16,185,129,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.color = "var(--text-muted)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <Icon size={16} />
                    {l.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* Tech marquee */}
        <motion.div {...fadeUp(0.75)} style={{ marginTop: 40 }}>
          <div style={{ fontFamily: mono, fontSize: 11, color: "var(--text-secondary)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 20, textAlign: "center" }}>
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
