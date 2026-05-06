"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personal } from "@/data/portfolio";
import { FaGithub, FaLinkedin, FaTelegram, FaFacebook, FaInstagram, FaArrowUp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const mono = "'JetBrains Mono', monospace";
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const a = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.5, delay, ease: "easeOut" },
  });

  return (
    <footer ref={ref} style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg)" }}>

      {/* CTA banner */}
      <div style={{ backgroundColor: "var(--surface)", borderBottom: "1px solid var(--border)", padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <motion.div {...a(0)} style={{ fontFamily: mono, fontSize: 10, color: "var(--text-secondary)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 14 }}>
            Ready to Build
          </motion.div>
          <motion.h2 {...a(0.1)} style={{ fontSize: "clamp(22px, 4vw, 40px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 14 }}>
            Need a fast, modern<br /><span style={{ color: "var(--accent)" }}>product experience?</span>
          </motion.h2>
          <motion.p {...a(0.2)} style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
            I help teams design and ship polished web products with strong UX and measurable performance.
          </motion.p>
          <motion.a {...a(0.3)} href={`mailto:${personal.email}`} className="btn-primary" style={{ padding: "14px 32px" }}>
            START A PROJECT
          </motion.a>
        </div>
      </div>

      {/* Footer grid */}
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "56px 64px 28px" }}>
        <div className="footer-grid">
          <div>
            <div style={{ fontFamily: mono, fontWeight: 900, fontSize: 20, color: "var(--accent)", marginBottom: 12, letterSpacing: "0.1em" }}>AMOL.</div>
            <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 12 }}>
              Full-stack engineer specializing in enterprise management systems and digital transformation. Building quality experiences from concept to launch.
            </p>
            <div style={{ fontFamily: mono, fontSize: 11, color: "var(--text-secondary)", marginBottom: 4, display: "flex", alignItems: "center", gap: 6 }}>
              <FaMapMarkerAlt size={12} />
              {personal.location}
            </div>
            <div style={{ fontFamily: mono, fontSize: 11, color: "var(--text-secondary)", marginBottom: 8 }}>Typically replies {personal.responseTime}</div>
            <a href={`mailto:${personal.email}`} style={{ fontFamily: mono, fontSize: 11, color: "var(--accent)", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
              <FaEnvelope size={12} />
              {personal.email}
            </a>
          </div>

          <div>
            <div style={{ fontFamily: mono, fontSize: 10, color: "var(--text-secondary)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>Navigation</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} style={{ fontSize: 14, color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >{l.label}</a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontFamily: mono, fontSize: 10, color: "var(--text-secondary)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>Connect</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { label: "GitHub", href: personal.github, icon: FaGithub },
                { label: "LinkedIn", href: personal.linkedin, icon: FaLinkedin },
                { label: "Telegram", href: personal.telegram, icon: FaTelegram },
                { label: "Facebook", href: personal.facebook, icon: FaFacebook },
                { label: "Instagram", href: personal.instagram, icon: FaInstagram },
              ].map((l) => {
                const Icon = l.icon;
                return (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: 14, color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s", display: "flex", alignItems: "center", gap: 8 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    <Icon size={14} />
                    {l.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div style={{ fontFamily: mono, fontSize: 11, color: "var(--text-secondary)" }}>© 2026 Amenti Liben. Crafted with intent.</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            {["NEXT.JS 14", "TYPESCRIPT", "TAILWIND", "FRAMER MOTION"].map((t) => (
              <span key={t} style={{ fontFamily: mono, fontSize: 10, color: "var(--text-secondary)", letterSpacing: "0.05em" }}>{t}</span>
            ))}
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ fontFamily: mono, fontSize: 11, color: "var(--text-secondary)", background: "none", border: "none", cursor: "pointer", transition: "color 0.2s", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: 6 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            BACK TO TOP <FaArrowUp size={10} />
          </button>
        </div>
      </div>
    </footer>
  );
}
