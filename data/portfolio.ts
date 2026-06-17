export const personal = {
  name: "Amenti Liben",
  brand: "AMENTI.",
  role: "Full-Stack Developer",
  tagline: "Building web applications\nfrom scratch",
  subtitle: "< Full-Stack Developer />",
  description:
    "I'm a 4th-year Software Engineering student and Full-Stack Developer based in Ethiopia. I build web applications using Node.js, Python, PHP (Laravel), PostgreSQL, and React/Next.js. I'm passionate about learning and creating functional applications from database to user interface.",
  location: "Addis Ababa, Ethiopia",
  availability: "Open to opportunities",
  responseTime: "within 24 hours",
  email: "amentiliben454@gmail.com",
  phone: "+251917397648",
  github: "https://github.com/Amoliben",
  linkedin: "https://www.linkedin.com/in/amenti-liben-51233a378",
  telegram: "https://t.me/Amoliben",
  facebook: "https://www.facebook.com/amantii.liiban",
  instagram: "https://www.instagram.com/amoliben?igsh=MXJnbGo3amc3ZjVxZQ==",
  resume: "/resume.pdf",
  about: {
    description1:
      "I am a Full-Stack Developer with a strong focus on building scalable, maintainable, and user-friendly web applications. I work primarily with modern JavaScript technologies, including Next.js, TypeScript, Node.js, and PostgreSQL.",
    description2:
      "I enjoy designing backend systems, building REST APIs, and creating responsive frontend interfaces. I am continuously improving my skills in system design, performance optimization, and real-world application development.",
    description3:
      "I am currently open to internship and junior developer opportunities where I can contribute to meaningful projects and grow as a software engineer.",
    stats: [
      { label: "PROJECTS BUILT", value: "10+" },
      { label: "TECHNOLOGIES", value: "12+" },
      { label: "YEARS LEARNING", value: "2+" },
    ],
    principles: [
      {
        title: "SCALABLE SYSTEMS",
        desc: "Building applications with scalability and maintainability in mind. Focus on clean architecture, proper database design, and efficient API structures.",
      },
      {
        title: "BACKEND EXPERTISE",
        desc: "Strong focus on server-side development with Node.js, REST API design, PostgreSQL database optimization, and authentication systems.",
      },
      {
        title: "CONTINUOUS LEARNING",
        desc: "Constantly improving skills in system design, performance optimization, and modern development practices through real-world projects.",
      },
    ],
    timeline: [
      { year: "2024", event: "Started Software Engineering at Haramaya University" },
      { year: "2024-Q2", event: "Built first full-stack web application with Node.js and PostgreSQL" },
      { year: "2024-Q4", event: "Learned Flutter and built cross-platform mobile apps" },
      { year: "2025-Q1", event: "Currently building portfolio and exploring Laravel framework" },
    ],
    tags: ["FULL-STACK", "BACKEND SYSTEMS", "REST APIs", "CLEAN ARCHITECTURE"],
  },
};

export const skills = {
  summary: {
    groups: 6,
    avgProficiency: "75%",
    topStack: "Next.js + Node.js",
    strengths: ["NEXT.JS", "REACT", "TYPESCRIPT", "NODE.JS", "EXPRESS.JS", "POSTGRESQL", "PYTHON", "LARAVEL"],
  },
  categories: [
    {
      label: "FRONTEND DEVELOPMENT",
      title: "User Interfaces",
      type: "CORE",
      desc: "Building responsive and modern web interfaces with React-based frameworks and modern CSS.",
      items: [
        { name: "Next.js", level: 78 },
        { name: "React", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "HTML5", level: 85 },
        { name: "CSS3", level: 82 },
        { name: "Tailwind CSS", level: 82 },
        { name: "Framer Motion", level: 70 },
      ],
    },
    {
      label: "BACKEND DEVELOPMENT",
      title: "Server & APIs",
      type: "CORE",
      desc: "Building RESTful APIs and server-side applications with Node.js, Python, and PHP frameworks.",
      items: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 75 },
        { name: "Python", level: 72 },
        { name: "PHP (Laravel)", level: 78 },
        { name: "REST API Development", level: 78 },
      ],
    },
    {
      label: "DATABASE & ORM",
      title: "Data Management",
      type: "CORE",
      desc: "Working with relational and NoSQL databases, schema design, query optimization, and modern ORMs.",
      items: [
        { name: "PostgreSQL", level: 74 },
        { name: "MongoDB", level: 65 },
        { name: "Prisma ORM", level: 72 },
      ],
    },
    {
      label: "MOBILE DEVELOPMENT",
      title: "Cross-Platform Apps",
      type: "LEARNING",
      desc: "Building native-like mobile applications using Flutter for iOS and Android platforms.",
      items: [
        { name: "Flutter", level: 72 },
        { name: "Dart", level: 70 },
        { name: "Firebase", level: 68 },
      ],
    },
    {
      label: "DEVOPS & DEPLOYMENT",
      title: "Infrastructure",
      type: "CORE",
      desc: "Version control, containerization, cloud deployments, and CI/CD workflows.",
      items: [
        { name: "Git & GitHub", level: 80 },
        { name: "Docker", level: 65 },
        { name: "Vercel", level: 78 },
      ],
    },
    {
      label: "DESIGN & TOOLS",
      title: "Development Workflow",
      type: "CORE",
      desc: "Design tools and development environments for efficient workflow and collaboration.",
      items: [
        { name: "Figma", level: 70 },
        { name: "VS Code", level: 85 },
      ],
    },
  ],
  techStack: [
    "NEXT.JS", "REACT", "TYPESCRIPT", "HTML5", "CSS3", "TAILWIND CSS",
    "NODE.JS", "EXPRESS.JS", "PYTHON", "PHP", "LARAVEL", "REST API",
    "POSTGRESQL", "MONGODB", "PRISMA", "FLUTTER", "DART",
    "GIT", "GITHUB", "DOCKER", "VERCEL", "FIGMA", "VS CODE",
  ],
};

export const projects = [
  {
    id: 1,
    year: "2025",
    badge: "LIVE PROJECT",
    type: "FULL STACK",
    featured: true,
    title: "Bole Cafe & Restaurant",
    desc: "A full-featured restaurant and accommodation website for Bole Cafe in Nekemte, Oromia. Features online menu with pricing, room booking system, customer testimonials, photo gallery, service showcase, and location information. Built for a real business serving customers in Ethiopia with modern design and Ethiopian hospitality.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Amoliben",
    live: "https://bolecafe.vercel.app",
    image: "/images/projects/bole-cafe.png",
    score: 94,
  },
  {
    id: 2,
    year: "2025",
    badge: "LIVE PROJECT",
    type: "FULL STACK",
    featured: true,
    title: "Koket Delivery - E-Commerce Platform",
    desc: "A bilingual (English/Amharic) e-commerce platform for premium female bags with real-time product catalog, free delivery service, and Telegram integration. Features responsive design, product showcase with pricing, contact system, and service area coverage. Built for a real business serving customers in Assosa, Ethiopia.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Amoliben",
    live: "https://koket-delivery.vercel.app",
    image: "/images/projects/koket-delivery.png",
    score: 93,
  },
  {
    id: 3,
    year: "2025",
    badge: "LIVE PROJECT",
    type: "FULL STACK",
    featured: true,
    title: "JiruuTech - Software Solutions Company",
    desc: "A professional software development company website showcasing services, products, and portfolio. Features modern UI/UX, responsive design, service offerings, product ecosystem, testimonials, and contact system. Built for a real business serving clients in Ethiopia and globally.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Amoliben",
    live: "https://www.jiruutech.com/",
    image: "/images/projects/jiruutech.png",
    score: 95,
  },
  {
    id: 5,
    year: "2025",
    badge: "BACKEND SYSTEM",
    type: "BACKEND",
    featured: true,
    title: "REST API for Data Management",
    desc: "A backend system built to handle data operations with a structured and scalable API design. Implements CRUD operations, structured routing and controller architecture, PostgreSQL database integration, and comprehensive error handling and validation.",
    tech: ["Node.js", "Express.js", "PostgreSQL"],
    github: "https://github.com/Amoliben",
    live: "#",
    image: "/images/projects/rest-api.png",
    score: 88,
  },
  {
    id: 6,
    year: "2025",
    badge: "LIVE PROJECT",
    type: "FULL STACK",
    featured: true,
    title: "MiinaMul Fashion - Online Store",
    desc: "A bilingual fashion e-commerce platform for MiinaMul Fashion in Nekemte, Ethiopia. Features a modern product catalog covering traditional and contemporary clothing, free delivery throughout Nekemte City, secure online ordering, customer testimonials, newsletter subscription, and a 7-day return policy. Trusted by thousands of customers in the Ethiopian Oromo community.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Amoliben",
    live: "https://miinamulfashion.vercel.app",
    image: "/images/projects/miinamul.png",
    score: 92,
  },
  {
    id: 7,
    year: "2025",
    badge: "LIVE PROJECT",
    type: "FULL STACK",
    featured: true,
    title: "JiruuTask - Task Management Platform",
    desc: "A professional task management and project collaboration platform with secure authentication system. Features user management, task organization, project tracking, and admin controls. Built for team productivity and workflow management with role-based access control.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    github: "https://github.com/Amoliben",
    live: "https://task.jiruutech.com/",
    image: "/images/projects/jiruutask.png",
    score: 90,
  },
];

export const certificates = [
  {
    id: "01",
    title: "Full-Stack Web Development",
    issuer: "Udacity",
    year: "2024",
    credentialId: "UD-FULLSTACK-2024",
  },
  {
    id: "02",
    title: "Mobile App Development with Flutter",
    issuer: "Udacity",
    year: "2024",
    credentialId: "UD-FLUTTER-2024",
  },
  {
    id: "03",
    title: "Web Programming & Database Design",
    issuer: "Hucisa",
    year: "2024",
    credentialId: "HU-WEB-2024",
  },
];

export const experience = [
  {
    title: "Full-Stack Developer",
    company: "Personal Projects & Learning",
    type: "Remote",
    period: "2024 — PRESENT",
    status: "ACTIVE",
    desc: "Building full-stack web applications while studying Software Engineering. Learning modern technologies and best practices through hands-on projects.",
    bullets: [
      "Built full-stack web applications using Node.js, Python, and PHP (Laravel) with PostgreSQL databases and proper schema design.",
      "Developed RESTful APIs with authentication, authorization, and data validation following industry best practices.",
      "Created responsive user interfaces with Next.js, React, and Tailwind CSS ensuring mobile-first design and accessibility.",
      "Learned and implemented Flutter for cross-platform mobile app development with state management and Firebase integration.",
      "Continuously learning new technologies including Docker, Redis, and advanced database optimization techniques.",
    ],
    metrics: [
      { label: "PROJECTS BUILT", value: "10+" },
      { label: "TECHNOLOGIES", value: "12+" },
      { label: "YEARS LEARNING", value: "2+" },
    ],
    tech: ["NODE.JS", "PYTHON", "LARAVEL", "POSTGRESQL", "PRISMA", "NEXT.JS", "REACT", "FLUTTER", "TAILWIND"],
  },
];

export const education = {
  degree: "B.Sc. Software Engineering",
  university: "Haramaya University",
  period: "2024 — 2028",
  standing: "4th Year",
  languages: [
    { name: "English", level: "PROFESSIONAL" },
    { name: "Afaan Oromoo", level: "NATIVE" },
    { name: "Amharic", level: "NATIVE" },
  ],
};

// Testimonials removed - will add real testimonials from actual clients/collaborators in the future
export const testimonials: any[] = [];

// Services section removed - not appropriate for a student portfolio focused on job seeking
export const services: any[] = [];

// FAQ section removed - not appropriate for a student portfolio focused on job seeking
export const faq: any[] = [];
