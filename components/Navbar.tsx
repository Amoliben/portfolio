"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personal } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About",        href: "#about" },
  { label: "Skills",       href: "#skills" },
  { label: "Services",     href: "#services" },
  { label: "Projects",     href: "#projects" },
  { label: "Contact",      href: "#contact" },
];

const mono = "'JetBrains Mono', monospace";

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeSection, setActive]  = useState("");

  /* scroll + active section */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map(l => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          transition: "background-color 0.3s, border-color 0.3s, backdrop-filter 0.3s",
          backgroundColor: scrolled ? "rgba(var(--bg-rgb), 0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
        }}
      >
        <div style={{
          maxWidth: 1600, margin: "0 auto", padding: "0 64px", height: 68,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Brand */}
          <a href="#" style={{
            fontFamily: mono, fontWeight: 900, fontSize: 18,
            color: "var(--accent)", letterSpacing: "0.12em", textDecoration: "none", flexShrink: 0,
          }}>
            AMENTI.
          </a>

          {/* Desktop links */}
          <div className="nav-links">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a key={link.href} href={link.href} style={{
                  fontFamily: mono, fontSize: 12, letterSpacing: "0.06em",
                  color: isActive ? "var(--accent)" : "var(--text-muted)",
                  textDecoration: "none", transition: "color 0.2s",
                  position: "relative", paddingBottom: 2,
                }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = "var(--text)"; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "var(--text-muted)"; }}
                >
                  {link.label}
                  {isActive && (
                    <motion.span layoutId="nav-indicator" style={{
                      position: "absolute", bottom: -2, left: 0, right: 0,
                      height: 1, backgroundColor: "var(--accent)", borderRadius: 9999,
                    }} />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="nav-cta">
            <ThemeToggle />
            <a href={personal.github} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: mono, fontSize: 12, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >GitHub</a>
            <a href={`mailto:${personal.email}`} className="btn-primary" style={{ padding: "8px 20px", fontSize: 12 }}>
              Hire Me
            </a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="nav-hamburger"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, flexDirection: "column", gap: 5 }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: "block", width: 22, height: 2,
                backgroundColor: "var(--text)", borderRadius: 2, transition: "all 0.3s",
                transform: menuOpen && i === 0 ? "rotate(45deg) translate(5px, 5px)" : menuOpen && i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{ position: "fixed", inset: 0, zIndex: 38, backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="mobile-menu"
              style={{
                position: "fixed", top: 0, right: 0, bottom: 0, width: "min(320px, 85vw)",
                zIndex: 40, backgroundColor: "var(--surface)",
                borderLeft: "1px solid var(--border)",
                display: "flex", flexDirection: "column",
              }}
            >
              <div style={{ padding: "24px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: mono, fontWeight: 900, fontSize: 16, color: "var(--accent)", letterSpacing: "0.1em" }}>AMENTI.</span>
                <button onClick={() => setMenuOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", fontSize: 20, lineHeight: 1 }} aria-label="Close menu">✕</button>
              </div>
              <div style={{ flex: 1, padding: "16px 24px", display: "flex", flexDirection: "column", gap: 4, overflowY: "auto" }}>
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <motion.a
                      key={link.href} href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        fontFamily: mono, fontSize: 15, letterSpacing: "0.05em",
                        color: isActive ? "var(--accent)" : "var(--text-muted)",
                        textDecoration: "none", padding: "14px 12px",
                        borderRadius: "var(--radius-md)",
                        backgroundColor: isActive ? "var(--accent-dim)" : "transparent",
                        transition: "all 0.2s", display: "block",
                      }}
                      onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.backgroundColor = "var(--bg)"; e.currentTarget.style.color = "var(--text)"; } }}
                      onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--text-muted)"; } }}
                    >{link.label}</motion.a>
                  );
                })}
              </div>
              <div style={{ padding: "20px 24px", borderTop: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: 12 }}>
                <ThemeToggle />
                <a href={`mailto:${personal.email}`} className="btn-primary" style={{ textAlign: "center", justifyContent: "center" }}>
                  Hire Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
