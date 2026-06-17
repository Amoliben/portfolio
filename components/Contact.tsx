"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personal } from "@/data/portfolio";
import { FaGithub, FaLinkedin, FaTelegram, FaFacebook, FaInstagram } from "react-icons/fa";

const mono = "'JetBrains Mono', monospace";
const FORMSPREE_ID = "xdkobqnw"; // ← replace with your Formspree form ID

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const a = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: "easeOut" },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          type: form.type,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", type: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
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
              Let&apos;s Connect
            </motion.h2>

            <motion.p {...a(0.2)} style={{ color: "var(--text-secondary)", fontSize: "clamp(15px, 1.4vw, 17px)", lineHeight: 1.75, marginBottom: 32, fontWeight: 500 }}>
              I&apos;m open to collaboration, internships, and opportunities. Feel free to reach out through any of the channels below.
            </motion.p>

            <motion.div {...a(0.25)} style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
              {[
                { k: "Email", v: personal.email, isLink: true, color: "rgba(16,185,129,0.3)" },
                { k: "Location", v: personal.location, isLink: false, color: "rgba(59,130,246,0.3)" },
                { k: "Availability", v: personal.availability, isLink: false, color: "rgba(168,85,247,0.3)" },
              ].map((item, i) => (
                <div key={item.k} style={{ backgroundColor: "var(--surface)", border: `1px solid ${item.color}`, borderRadius: 14, padding: "16px 20px" }}>
                  <div style={{ fontFamily: mono, fontSize: 9, color: "var(--text-secondary)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>{item.k}</div>
                  {item.isLink ? (
                    <a href={`mailto:${item.v}`} style={{ fontFamily: mono, fontSize: 13, color: ["var(--accent)", "#3b82f6", "#a855f7"][i], textDecoration: "none" }}>{item.v}</a>
                  ) : (
                    <div style={{ fontSize: 14, color: "var(--text)" }}>{item.v}</div>
                  )}
                </div>
              ))}
            </motion.div>

            <motion.div {...a(0.3)} style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
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
                    style={{ fontFamily: mono, fontSize: 12, border: "1px solid var(--border)", color: "var(--text-muted)", padding: "8px 16px", borderRadius: 9999, textDecoration: "none", transition: "all 0.2s", display: "flex", alignItems: "center", gap: 6 }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
                  >
                    <Icon size={14} />
                    {l.label}
                  </a>
                );
              })}
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
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(16,185,129,0.5)")} onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")} />
                </div>
                <div>
                  <label style={label}>Email</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(16,185,129,0.5)")} onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")} />
                </div>
              </div>

              <div className="form-row">
                <div>
                  <label style={label}>Phone Number</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+251 912 345 678" style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(16,185,129,0.5)")} onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")} />
                </div>
                <div>
                  <label style={label}>Inquiry Type</label>
                  <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(16,185,129,0.5)")} onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}>
                    <option value="">Select type...</option>
                    <option value="Internship Opportunity">Internship Opportunity</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Project Inquiry">Project Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={label}>Message</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about the opportunity or project..." style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(16,185,129,0.5)")} onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")} />
              </div>

              <button type="submit" className="btn-primary" style={{
                width: "100%", justifyContent: "center", padding: 16, borderRadius: 12,
                opacity: status === "sending" ? 0.7 : 1,
                cursor: status === "sending" ? "not-allowed" : "pointer",
              }}
                disabled={status === "sending"}
              >
                {status === "sending" && "SENDING..."}
                {status === "sent" && "MESSAGE SENT ✓"}
                {status === "error" && "FAILED — TRY AGAIN"}
                {status === "idle" && "SEND MESSAGE"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
