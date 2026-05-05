"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const mono = "'JetBrains Mono', monospace";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.92 }}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      style={{
        display: "flex", alignItems: "center", gap: 6,
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 8, padding: "7px 12px",
        cursor: "pointer", transition: "all 0.2s ease",
        fontFamily: mono, fontSize: 11,
        color: "var(--text-muted)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#e8ff47";
        e.currentTarget.style.color = "#e8ff47";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.color = "var(--text-muted)";
      }}
    >
      {/* Track */}
      <div style={{
        width: 32, height: 18, borderRadius: 9999,
        backgroundColor: isDark ? "#1f1f1f" : "#e8ff47",
        position: "relative", transition: "background-color 0.3s",
        border: "1px solid var(--border)",
        flexShrink: 0,
      }}>
        {/* Thumb */}
        <motion.div
          animate={{ x: isDark ? 2 : 14 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{
            position: "absolute", top: 2,
            width: 12, height: 12, borderRadius: "50%",
            backgroundColor: isDark ? "#e8ff47" : "#000",
          }}
        />
      </div>
      <span style={{ letterSpacing: "0.05em", textTransform: "uppercase" }}>
        {isDark ? "Light" : "Dark"}
      </span>
    </motion.button>
  );
}
