"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const mono = "'JetBrains Mono', monospace";

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description: "We align on goals, scope, and technical requirements. I create detailed specs and architecture diagrams.",
    duration: "1-2 weeks",
    deliverables: ["Project Brief", "Architecture Diagram", "Timeline & Milestones"],
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description: "Collaborate on UI/UX design, create interactive prototypes, and validate the approach with stakeholders.",
    duration: "1-2 weeks",
    deliverables: ["Design System", "Prototypes", "Component Library"],
  },
  {
    number: "03",
    title: "Development",
    description: "Build the product in 2-week sprints with regular demos. I handle frontend, backend, and DevOps.",
    duration: "4-8 weeks",
    deliverables: ["Working Features", "API Documentation", "Test Coverage"],
  },
  {
    number: "04",
    title: "Optimization & Launch",
    description: "Performance tuning, security audits, monitoring setup, and production deployment.",
    duration: "1-2 weeks",
    deliverables: ["Performance Report", "Monitoring Setup", "Launch Checklist"],
  },
  {
    number: "05",
    title: "Support & Iteration",
    description: "30 days of free support, bug fixes, and feature refinements based on user feedback.",
    duration: "Ongoing",
    deliverables: ["Bug Fixes", "Performance Monitoring", "Feature Iterations"],
  },
];

export default function Process() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const a = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="process" ref={ref} className="section-pad" style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="container">

        <motion.div {...a(0)} className="section-label"><span>Workflow</span></motion.div>

        <motion.h2 {...a(0.1)} style={{
          fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 800,
          lineHeight: 1.1, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 16,
        }}>
          How we work<br />
          <span style={{ color: "var(--accent)" }}>together.</span>
        </motion.h2>

        <motion.p {...a(0.2)} style={{ color: "var(--text-secondary)", fontSize: "clamp(15px, 1.3vw, 17px)", lineHeight: 1.8, maxWidth: 560, marginBottom: 48, fontWeight: 500 }}>
          A structured, collaborative approach to building products. Clear communication, regular demos, and measurable progress at every stage.
        </motion.p>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: "calc(50% - 1px)",
            top: 0,
            bottom: 0,
            width: 2,
            background: "linear-gradient(to bottom, var(--accent), transparent)",
            pointerEvents: "none",
          }} />

          {/* Steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 40,
                  alignItems: "center",
                }}
              >
                {/* Left - Content */}
                {i % 2 === 0 ? (
                  <>
                    <div>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        marginBottom: 12,
                      }}>
                        <span style={{
                          fontFamily: mono,
                          fontSize: "clamp(20px, 2.5vw, 32px)",
                          fontWeight: 700,
                          color: "var(--accent)",
                        }}>
                          {step.number}
                        </span>
                        <span style={{
                          fontFamily: mono,
                          fontSize: "clamp(9px, 0.9vw, 11px)",
                          color: "var(--text-muted)",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}>
                          {step.duration}
                        </span>
                      </div>
                      <h3 style={{
                        fontSize: "clamp(18px, 1.8vw, 24px)",
                        fontWeight: 700,
                        color: "var(--text)",
                        marginBottom: 12,
                      }}>
                        {step.title}
                      </h3>
                      <p style={{
                        fontSize: "clamp(13px, 1.1vw, 16px)",
                        color: "var(--text)",
                        lineHeight: 1.8,
                        marginBottom: 16,
                      }}>
                        {step.description}
                      </p>
                      <div>
                        <div style={{
                          fontFamily: mono,
                          fontSize: "clamp(9px, 0.9vw, 11px)",
                          color: "var(--text-muted)",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginBottom: 10,
                        }}>
                          Deliverables
                        </div>
                        <ul style={{
                          listStyle: "none",
                          display: "flex",
                          flexDirection: "column",
                          gap: 6,
                        }}>
                          {step.deliverables.map((d) => (
                            <li key={d} style={{
                              fontSize: "clamp(12px, 1vw, 14px)",
                              color: "var(--text)",
                              display: "flex",
                              alignItems: "center",
                              gap: 8,
                            }}>
                              <span style={{ color: "var(--accent)" }}>✓</span> {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      backgroundColor: "var(--accent)",
                      position: "relative",
                      zIndex: 1,
                    }} />
                  </>
                ) : (
                  <>
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      backgroundColor: "var(--accent)",
                      position: "relative",
                      zIndex: 1,
                    }} />
                    <div>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        marginBottom: 12,
                      }}>
                        <span style={{
                          fontFamily: mono,
                          fontSize: "clamp(20px, 2.5vw, 32px)",
                          fontWeight: 700,
                          color: "var(--accent)",
                        }}>
                          {step.number}
                        </span>
                        <span style={{
                          fontFamily: mono,
                          fontSize: "clamp(9px, 0.9vw, 11px)",
                          color: "var(--text-muted)",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}>
                          {step.duration}
                        </span>
                      </div>
                      <h3 style={{
                        fontSize: "clamp(18px, 1.8vw, 24px)",
                        fontWeight: 700,
                        color: "var(--text)",
                        marginBottom: 12,
                      }}>
                        {step.title}
                      </h3>
                      <p style={{
                        fontSize: "clamp(13px, 1.1vw, 16px)",
                        color: "var(--text)",
                        lineHeight: 1.8,
                        marginBottom: 16,
                      }}>
                        {step.description}
                      </p>
                      <div>
                        <div style={{
                          fontFamily: mono,
                          fontSize: "clamp(9px, 0.9vw, 11px)",
                          color: "var(--text-muted)",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginBottom: 10,
                        }}>
                          Deliverables
                        </div>
                        <ul style={{
                          listStyle: "none",
                          display: "flex",
                          flexDirection: "column",
                          gap: 6,
                        }}>
                          {step.deliverables.map((d) => (
                            <li key={d} style={{
                              fontSize: "clamp(12px, 1vw, 14px)",
                              color: "var(--text)",
                              display: "flex",
                              alignItems: "center",
                              gap: 8,
                            }}>
                              <span style={{ color: "var(--accent)" }}>✓</span> {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
