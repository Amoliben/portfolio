"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personal } from "@/data/portfolio";

const mono = "'JetBrains Mono', monospace";

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [sent, setSent] = useState(false);

  const a = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: "easeOut" },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio] ${form.type || "Project Inquiry"} from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nType: ${form.type}\n\n${form.message}`);
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", backgroundColor: "var(--surface)", border: "1px solid var(--border)",
    borderRadius: 12, padding: "12px 16px", fontSize: 14, color: "var(--text)",
    outline: "none", fontFamily: "inherit", transition: "border-color 0.2s",
  };

  const label: React.CSSProperties = {
    fontFamily: mono, fontSize: 10, color: "var(--text-secondary)",
    letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: 8,
  };

  return (
    <section id="contact" ref={ref} className="section-pad" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg)" }}>
      <div className="container">

        <motion.div {...a(0)} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
          <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.2em", color: "var(--text-secondary)", textTransform: "uppercase" }}>Contact</span>
          <div style={{ flex: 1, height: 1, backgroundColor: "var(--border)" }} />
        </motion.div>

        <div className="contact-grid">
          {/* Left */}
          <div>
            <motion.h2 {...a(0.1)} style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 20 }}>
              Let&apos;s build something<br /><span style={{ color: "var(--accent)" }}>useful and beautiful.</span>
            </motion.h2>

            <motion.p {...a(0.2)} style={{ color: "var(--text-secondary)", fontSize: "clamp(15px, 1.4vw, 17px)", lineHeight: 1.75, marginBottom: 32, fontWeight: 500 }}>
              Share your project idea, timeline, or problem space. I'll reply with a clear next step and technical direction.
            </motion.p>

            <motion.div {...a(0.25)} style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
              {[
                { k: "Availability", v: personal.availability, d: "Best for product design/engineering, full-stack implementation, and UI performance optimization." },
                { k: "Email", v: personal.email, isLink: true },
                { k: "Phone", v: personal.phone, isLink: false },
              ].map((item) => (
                <div key={item.k} style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, padding: "16px 20px" }}>
                  <div style={{ fontFamily: mono, fontSize: 9, color: "var(--text-secondary)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>{item.k}</div>
                  {item.isLink ? (
                    <a href={`mailto:${item.v}`} style={{ fontFamily: mono, fontSize: 13, color: "var(--accent)", textDecoration: "none" }}>{item.v}</a>
                  ) : (
                    <>
                      <div style={{ fontSize: 14, color: "var(--text)", marginBottom: 2 }}>{item.v}</div>
                      {item.d && <div style={{ fontSize: 12, color: "var(--text)" }}>{item.d}</div>}
                    </>
                  )}
                </div>
              ))}
            </motion.div>

            <motion.div {...a(0.3)} style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                { label: "GitHub", href: personal.github },
                { label: "LinkedIn", href: personal.linkedin },
                { label: "Telegram", href: personal.telegram },
                { label: "Facebook", href: personal.facebook },
                { label: "Instagram", href: personal.instagram },
              ].map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: mono, fontSize: 12, border: "1px solid var(--border)", color: "var(--text-muted)", padding: "8px 16px", borderRadius: 9999, textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
                >{l.label} ↗</a>
              ))}
            </motion.div>

            <motion.div {...a(0.35)} style={{ fontFamily: mono, fontSize: 10, color: "var(--text-secondary)", letterSpacing: "0.1em", marginTop: 20, textTransform: "uppercase" }}>
              Typical response: {personal.responseTime}
            </motion.div>
          </div>

          {/* Form */}
          <motion.div {...a(0.3)}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="form-row">
                <div>
                  <label style={label}>Name</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(232,255,71,0.5)")} onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")} />
                </div>
                <div>
                  <label style={label}>Email</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(232,255,71,0.5)")} onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")} />
                </div>
              </div>

              <div>
                <label style={label}>Project Type</label>
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(232,255,71,0.5)")} onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}>
                  <option value="">Select type...</option>
                  <option value="Full Stack App">Full Stack App</option>
                  <option value="Frontend / UI">Frontend / UI</option>
                  <option value="API / Backend">API / Backend</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label style={label}>Project Details</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Describe your project, timeline, and goals..." style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(232,255,71,0.5)")} onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")} />
              </div>

              <button type="submit" className="btn-primary" style={{
                width: "100%", justifyContent: "center", padding: 16, borderRadius: 12,
                opacity: sent ? 0.7 : 1,
              }}>
                {sent ? "MESSAGE SENT ✓" : "SEND MESSAGE"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
