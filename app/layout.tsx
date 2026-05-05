import type { Metadata } from "next";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Amenti Liben | Full-Stack Developer & Software Engineering Student",
  description: "3rd-year Software Engineering student and Full-Stack Developer building web applications with Next.js, TypeScript, Node.js, Python, and PostgreSQL. Open to internships and junior developer opportunities.",
  keywords: ["full-stack developer", "software engineering student", "Next.js", "React", "TypeScript", "Node.js", "Python", "Laravel", "PostgreSQL", "Flutter", "Ethiopia", "internship"],
  authors: [{ name: "Amenti Liben", url: "https://amentiliben.com" }],
  creator: "Amenti Liben",
  publisher: "Amenti Liben",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Amenti Liben | Full-Stack Developer & Software Engineering Student",
    description: "3rd-year Software Engineering student building web applications with Next.js, TypeScript, and modern technologies. Open to opportunities.",
    type: "website",
    url: "https://amentiliben.com",
    siteName: "Amenti Liben",
    images: [
      {
        url: "https://amentiliben.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amenti Liben - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amenti Liben | Full-Stack Developer & Software Engineering Student",
    description: "3rd-year Software Engineering student building web applications. Open to internships and opportunities.",
    creator: "@amentiliben",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://amentiliben.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script async src="https://cdn.jsdelivr.net/npm/@unocss/runtime"></script>
      </head>
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
