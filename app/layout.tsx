import type { Metadata } from "next";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Amenti Liben | Full-Stack Developer — Next.js, Node.js, TypeScript",
  description: "Amenti Liben is a Full-Stack Developer and 4th-year Software Engineering student from Ethiopia, specializing in Next.js, TypeScript, Node.js, and PostgreSQL. Building real-world web applications and available for internship and junior developer opportunities.",
  keywords: [
    "Amenti Liben",
    "Amenti Liben developer",
    "Amenti Liben Ethiopia",
    "full-stack developer Ethiopia",
    "Next.js developer Ethiopia",
    "software engineering student Ethiopia",
    "web developer Addis Ababa",
    "React developer Ethiopia",
    "TypeScript developer",
    "Node.js developer Ethiopia",
    "PostgreSQL developer",
    "Python developer Ethiopia",
    "Laravel developer",
    "Flutter developer Ethiopia",
    "Haramaya University software engineering",
    "JiruuTech developer",
    "portfolio Amenti",
  ],
  authors: [{ name: "Amenti Liben", url: "https://amentiliben.vercel.app" }],
  creator: "Amenti Liben",
  publisher: "Amenti Liben",
  metadataBase: new URL("https://amentiliben.vercel.app"),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Amenti Liben | Full-Stack Developer",
    description: "Full-Stack Developer from Ethiopia building real-world web applications with Next.js, TypeScript, Node.js, and PostgreSQL. Open to opportunities.",
    type: "website",
    url: "https://amentiliben.vercel.app",
    siteName: "Amenti Liben Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Amenti Liben - Full-Stack Developer from Ethiopia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amenti Liben | Full-Stack Developer",
    description: "Full-Stack Developer from Ethiopia. Building web apps with Next.js, TypeScript, Node.js, and PostgreSQL.",
    images: ["/images/profile.png"],
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
    canonical: "https://amentiliben.vercel.app",
  },
  verification: {
    google: "",
  },
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050505" />
        <meta name="author" content="Amenti Liben" />
        <meta name="geo.region" content="ET" />
        <meta name="geo.placename" content="Addis Ababa, Ethiopia" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* Structured Data — Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Amenti Liben",
              "url": "https://amentiliben.vercel.app",
              "image": "https://amentiliben.vercel.app/images/profile.png",
              "jobTitle": "Full-Stack Developer",
              "description": "Full-Stack Developer and 4th-year Software Engineering student from Ethiopia specializing in Next.js, TypeScript, Node.js, and PostgreSQL.",
              "email": "amentiliben454@gmail.com",
              "telephone": "+251917397648",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Addis Ababa",
                "addressCountry": "ET"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Haramaya University"
              },
              "sameAs": [
                "https://github.com/Amoliben",
                "https://www.linkedin.com/in/amenti-liben-51233a378",
                "https://t.me/Amoliben"
              ],
              "knowsAbout": [
                "Next.js", "React", "TypeScript", "Node.js", "Express.js",
                "PostgreSQL", "MongoDB", "Python", "Laravel", "Flutter",
                "REST API", "Full-Stack Development", "Web Development"
              ]
            })
          }}
        />
      </head>
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
