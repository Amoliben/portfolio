# Amol Iben - Professional Portfolio

A modern, responsive portfolio showcasing enterprise management systems and full-stack development expertise.

## 🌐 Live Demo

Visit the live portfolio: [Coming Soon - Deploy to Vercel]

## ✨ Features

- **Modern Design** - Clean, professional interface with smooth animations
- **Dark & Light Mode** - User preference-based theme switching
- **Fully Responsive** - Perfect on mobile, tablet, and desktop
- **Performance Optimized** - 90+ Lighthouse score
- **Accessibility Compliant** - WCAG AA standards
- **SEO Optimized** - All meta tags and structured data included
- **Enterprise Focus** - Showcases 7 management systems
- **Smooth Animations** - Framer Motion for engaging interactions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Amoliben/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the portfolio.

## 📦 Build & Deploy

### Production Build
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── page.tsx              # Main page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/               # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Services.tsx
│   ├── Projects.tsx
│   ├── CaseStudies.tsx
│   ├── Stats.tsx
│   ├── Process.tsx
│   ├── Articles.tsx
│   ├── Certificates.tsx
│   ├── Experience.tsx
│   ├── FAQ.tsx
│   ├── Newsletter.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   └── ScrollProgress.tsx
├── contexts/                 # React contexts
│   └── ThemeContext.tsx
├── data/
│   └── portfolio.ts          # All portfolio content
├── hooks/
│   └── useMediaQuery.ts
├── public/                   # Static files
│   └── images/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Package Manager**: npm

## 📊 Portfolio Content

### Projects
- 7 Enterprise Management Systems
- 2 Additional featured projects
- Real-world case studies

### Skills
- Frontend Systems (React, Next.js, TypeScript, Tailwind)
- Mobile Development (Flutter, Dart)
- Backend & Data (Node.js, PostgreSQL, Prisma)
- DevOps & Delivery (Docker, Git, Vercel)

### Experience
- Full-Stack Engineer & Digital Transformation Specialist
- Full-Stack Developer

### Services
- Enterprise Management Systems
- Full-Stack Product Development
- Mobile App Development
- Backend & API Development
- Digital Transformation

## 🎨 Design System

### Colors
- **Dark Mode** (Default)
  - Background: `#0a0a0a`
  - Surface: `#111111`
  - Accent: `#e8ff47`
  - Text: `#ffffff`

- **Light Mode**
  - Background: `#ffffff`
  - Surface: `#f5f5f5`
  - Accent: `#d4af37`
  - Text: `#1a1a1a`

### Typography
- **Headings**: Inter (300-900 weights)
- **Body**: Inter (400-600 weights)
- **Code**: JetBrains Mono (400-700 weights)

### Responsive Breakpoints
- Mobile: < 480px
- Tablet: 480px - 767px
- Desktop: 768px - 1024px
- Large: > 1024px

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- ✅ iPhone (375px)
- ✅ iPad (768px)
- ✅ Desktop (1024px+)
- ✅ Large screens (1600px+)

## ♿ Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ Color contrast (WCAG AA)
- ✅ Alt text for images

## 🔍 SEO

- ✅ Meta tags
- ✅ Open Graph
- ✅ Twitter Card
- ✅ Canonical URL
- ✅ Structured data
- ✅ Sitemap ready

## 📈 Performance

- **Page Size**: 68.3 kB (optimized)
- **First Load JS**: 155 kB
- **Lighthouse Score**: 90+
- **Mobile Score**: 90+
- **Desktop Score**: 95+

## 🔒 Security

- No sensitive data in code
- Environment variables ready
- HTTPS ready (Vercel provides)
- CSP headers ready
- XSS protection
- CSRF protection

## 📝 Available Scripts

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint

# Dependencies
npm install              # Install dependencies
npm update               # Update dependencies
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Auto-deploys on push

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

### Self-Hosted
```bash
npm run build
npm start
```

## 📞 Contact

- **Email**: amentiliben454@gmail.com
- **Phone**: +251917397648
- **Location**: Addis Ababa, Ethiopia

### Social Media
- [GitHub](https://github.com/Amoliben)
- [LinkedIn](https://www.linkedin.com/in/amenti-liben-51233a378)
- [Telegram](https://t.me/Amoliben)
- [Facebook](https://www.facebook.com/amantii.liiban)
- [Instagram](https://www.instagram.com/amoliben?igsh=MXJnbGo3amc3ZjVxZQ==)

## 📚 Documentation

- [Deployment Guide](./DEPLOYMENT_GUIDE.md) - Step-by-step deployment instructions
- [Test Results](./TEST_RESULTS.txt) - Comprehensive test report
- [Final Summary](./FINAL_SUMMARY.md) - Project overview
- [Quick Reference](./QUICK_REFERENCE.md) - Quick reference card

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Vercel](https://vercel.com/) - Deployment platform

## 🎯 Future Enhancements

- [ ] Blog section with MDX
- [ ] Case study videos
- [ ] Client testimonials
- [ ] Analytics integration
- [ ] Contact form backend
- [ ] Newsletter integration
- [ ] Dark mode persistence
- [ ] Multi-language support

## 🐛 Bug Reports

Found a bug? Please create an issue on GitHub.

## 💡 Contributing

Contributions are welcome! Feel free to fork and submit pull requests.

---

**Status**: ✅ Production Ready  
**Last Updated**: May 5, 2026  
**Version**: 1.0.0

Made with ❤️ by Amol Iben
