import type { Metadata } from "next";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Amenti Liben | Full-Stack Engineer",
  description: "Full-stack engineer specializing in Next.js, TypeScript, and scalable web systems. Available for product development, performance optimization, and technical consulting.",
  keywords: ["full-stack developer", "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Product Engineer", "Ethiopia"],
  authors: [{ name: "Amenti Liben", url: "https://amentiliben.com" }],
  creator: "Amenti Liben",
  publisher: "Amenti Liben",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Amenti Liben | Full-Stack Engineer",
    description: "Building modern web products with clean architecture, strong performance, and real impact.",
    type: "website",
    url: "https://amentiliben.com",
    siteName: "Amenti Liben",
    images: [
      {
        url: "https://amentiliben.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amenti Liben - Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amenti Liben | Full-Stack Engineer",
    description: "Building modern web products with clean architecture and real performance.",
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
