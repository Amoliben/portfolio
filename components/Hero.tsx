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
        animate(count, to, { duration: 1.6, ease: "easeOut" });
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
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
      {/* Subtle grid background */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
        backgroundSize: "80px 80px", opacity: 0.18,
      }} />

      {/* Accent radial glow */}
      <div style={{
        position: "absolute", top: "20%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px", height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative" }}>
        <div style={{ textAlign: "center", maxWidth: 800, margin: "0 auto" }}>

          {/* Status badge */}
          <motion.div {...fadeUp(0.05)} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 32, justifyContent: "center" }}>
            <span className="animate-pulse-dot" style={{
              width: 6, height: 6, borderRadius: "50%", backgroundColor: "var(--accent)",
              display: "inline-block", flexShrink: 0,
            }} />
            <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.2em", color: "var(--text-muted)", textTransform: "uppercase" }}>
              {personal.availability}
            </span>
          </motion.div>

          {/* Name line */}
          <motion.p {...fadeUp(0.1)} style={{
            fontSize: "clamp(14px, 1.5vw, 16px)",
            fontWeight: 400, color: "var(--text-muted)",
            marginBottom: 16, letterSpacing: "0.01em",
            fontFamily: mono,
          }}>
            Hi, I'm <span style={{ color: "var(--accent)", fontWeight: 600 }}>Amenti Liben</span>
          </motion.p>

          {/* Heading */}
          <motion.h1 {...fadeUp(0.18)} style={{
            fontSize: "clamp(40px, 6vw, 68px)",
            fontWeight: 800, lineHeight: 1.12,
            letterSpacing: "-0.03em", marginBottom: 20, color: "var(--text)",
          }}>
            Full-Stack Developer<br />
            building{" "}
            <span style={{ color: "var(--accent)" }}>scalable</span> and{" "}
            <span style={{ color: "var(--accent)" }}>high-performance</span>
            {" "}web apps
          </motion.h1>

          {/* Description */}
          <motion.p {...fadeUp(0.26)} style={{
            color: "var(--text-secondary)", fontSize: "clamp(15px, 1.5vw, 18px)",
            lineHeight: 1.75, maxWidth: 600, marginBottom: 36, fontWeight: 400,
            margin: "0 auto 36px",
          }}>
            I specialize in{" "}
            <span style={{ color: "var(--text)", fontWeight: 500 }}>Next.js</span>,{" "}
            <span style={{ color: "var(--text)", fontWeight: 500 }}>TypeScript</span>, and{" "}
            <span style={{ color: "var(--text)", fontWeight: 500 }}>Node.js</span>{" "}
            to create efficient, user-focused solutions.
          </motion.p>

          {/* Focus tags */}
          <motion.div {...fadeUp(0.32)} style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40, justifyContent: "center" }}>
            {["Backend Systems", "REST APIs", "Clean Architecture"].map((item) => (
              <span
                key={item}
                style={{
                  fontFamily: mono, fontSize: 11,
                  color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                  padding: "7px 16px",
                  borderRadius: "var(--radius-sm)",
                  display: "inline-block",
                  letterSpacing: "0.04em",
                }}
              >
                {item}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div {...fadeUp(0.38)} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, marginBottom: 64, justifyContent: "center" }}>
            <a href="#projects" className="btn-primary" style={{ padding: "13px 28px", fontSize: 12 }}>
              VIEW PROJECTS
              <FaArrowRight size={13} />
            </a>
            <a href="#contact" className="btn-outline" style={{ padding: "12px 28px", fontSize: 12 }}>
              CONTACT ME
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.44)} style={{
            display: "flex", flexWrap: "wrap", gap: 48,
            paddingTop: 40, borderTop: "1px solid var(--border)",
            marginBottom: 48, justifyContent: "center",
          }}>
            {[
              { label: "PROJECTS BUILT", value: 10, suffix: "+" },
              { label: "TECHNOLOGIES", value: 12, suffix: "+" },
              { label: "YEARS LEARNING", value: 2, suffix: "+" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: mono, fontSize: "clamp(28px, 3.2vw, 40px)", fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div style={{ fontFamily: mono, fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.16em", marginTop: 8, textTransform: "uppercase" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div {...fadeUp(0.5)} style={{ marginBottom: 56 }}>
            <div style={{ fontFamily: mono, fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
              Connect
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
              {[
                { label: "GitHub", href: personal.github, icon: FaGithub },
                { label: "LinkedIn", href: personal.linkedin, icon: FaLinkedin },
                { label: "Telegram", href: personal.telegram, icon: FaTelegram },
                { label: "Facebook", href: personal.facebook, icon: FaFacebook },
                { label: "Instagram", href: personal.instagram, icon: FaInstagram },
              ].map((l) => {
                const Icon = l.icon;
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", gap: 7,
                      fontFamily: mono, fontSize: 12,
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                      padding: "9px 18px",
                      borderRadius: "var(--radius-md)",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      transition: "border-color 0.2s, color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-hover)";
                      e.currentTarget.style.color = "var(--text)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.color = "var(--text-muted)";
                    }}
                  >
                    <Icon size={14} />
                    {l.label}
                  </a>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* Tech marquee */}
        <motion.div {...fadeUp(0.56)}>
          <div style={{ fontFamily: mono, fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16, textAlign: "center" }}>
            Core Technologies
          </div>
          <div style={{ overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to right, var(--bg), transparent)", zIndex: 1, pointerEvents: "none" }} />
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to left, var(--bg), transparent)", zIndex: 1, pointerEvents: "none" }} />
            <div className="animate-marquee" style={{ display: "flex", gap: 8, whiteSpace: "nowrap" }}>
              {[...skills.techStack, ...skills.techStack].map((tech, i) => (
                <span key={i} className="tag" style={{ flexShrink: 0, fontSize: 10, padding: "5px 12px" }}>{tech}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}
        >
          <div style={{ width: 1, height: 32, backgroundColor: "var(--border)", position: "relative", overflow: "hidden" }}>
            <motion.div
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute", top: 0, left: 0, right: 0, height: "40%", background: "var(--accent)" }}
            />
          </div>
          <span style={{ fontFamily: mono, fontSize: 9, color: "var(--text-muted)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
