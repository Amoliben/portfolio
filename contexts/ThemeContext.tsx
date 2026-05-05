"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", theme);
      // Update CSS custom properties
      const root = document.documentElement;
      if (theme === "dark") {
        root.style.setProperty("--bg", "#0a0a0a");
        root.style.setProperty("--surface", "#111111");
        root.style.setProperty("--border", "#1f1f1f");
        root.style.setProperty("--text", "#ffffff");
        root.style.setProperty("--text-muted", "#aaa");
        root.style.setProperty("--text-subtle", "#666");
        root.style.setProperty("--bg-rgb", "10, 10, 10");
        root.style.setProperty("--surface-rgb", "17, 17, 17");
      } else {
        root.style.setProperty("--bg", "#ffffff");
        root.style.setProperty("--surface", "#f8f8f8");
        root.style.setProperty("--border", "#e5e5e5");
        root.style.setProperty("--text", "#000000");
        root.style.setProperty("--text-muted", "#555");
        root.style.setProperty("--text-subtle", "#888");
        root.style.setProperty("--bg-rgb", "255, 255, 255");
        root.style.setProperty("--surface-rgb", "248, 248, 248");
      }
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}