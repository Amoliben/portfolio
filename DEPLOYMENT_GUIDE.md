# Deployment Guide

## ✅ Pre-Deployment Checklist - COMPLETE

Your portfolio has passed all tests and is ready for deployment.

---

## Step 1: Push to GitHub

### Create a new repository on GitHub
1. Go to https://github.com/new
2. Repository name: `portfolio` (or your preferred name)
3. Description: "Professional portfolio showcasing enterprise management systems"
4. Choose Public or Private
5. Click "Create repository"

### Push your code
```bash
# Add remote origin
git remote add origin https://github.com/Amoliben/portfolio.git

# Rename branch to main (optional but recommended)
git branch -m master main

# Push to GitHub
git push -u origin main
```

---

## Step 2: Deploy to Vercel (Recommended)

### Option A: Deploy via Vercel Dashboard
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Select your portfolio repository
5. Click "Import"
6. Vercel will auto-detect Next.js settings
7. Click "Deploy"

### Option B: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

### Environment Variables (if needed)
- No environment variables required for this portfolio
- All data is static and included in the repo

---

## Step 3: Configure Custom Domain (Optional)

### In Vercel Dashboard
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Example domains
- `amoliben.com`
- `amol.dev`
- `portfolio.amoliben.com`

---

## Step 4: Post-Deployment Verification

### Test the live site
- [ ] Homepage loads correctly
- [ ] All sections visible
- [ ] Navigation works
- [ ] Social media links functional
- [ ] Contact form works
- [ ] Dark/light mode toggle works
- [ ] Mobile responsive
- [ ] Images load properly
- [ ] Animations smooth
- [ ] No console errors

### Check performance
```bash
# Lighthouse score should be 90+
# Visit: https://pagespeed.web.dev/
```

---

## Alternative Deployment Options

### Netlify
1. Go to https://netlify.com
2. Connect GitHub repository
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Deploy

### GitHub Pages (Static Export)
1. Update `next.config.js` to enable static export
2. Run `npm run build`
3. Push to GitHub
4. Enable GitHub Pages in repository settings

### Self-Hosted (VPS/Server)
```bash
# Build
npm run build

# Start production server
npm start

# Or use PM2 for process management
pm2 start npm --name "portfolio" -- start
```

---

## Monitoring & Maintenance

### After Deployment
- Monitor site performance
- Check error logs
- Test all functionality
- Verify analytics (if added)

### Regular Updates
- Update dependencies monthly
- Check for security vulnerabilities
- Backup your code
- Monitor uptime

---

## Troubleshooting

### Build fails on Vercel
- Check Node.js version (should be 18+)
- Verify all imports are correct
- Check for environment variable issues

### Site looks different on production
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS is loading
- Verify images are accessible

### Performance issues
- Check Lighthouse score
- Optimize images
- Enable caching headers
- Use CDN

---

## Quick Reference

### Important URLs
- **GitHub**: https://github.com/Amoliben
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Portfolio Data**: `data/portfolio.ts`
- **Styles**: `app/globals.css`

### Key Files
- `app/page.tsx` - Main page
- `app/layout.tsx` - Layout wrapper
- `components/` - All components
- `data/portfolio.ts` - All content
- `package.json` - Dependencies

### Build Commands
```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run linter
```

---

## Support & Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

### Contact
- Email: amentiliben454@gmail.com
- Phone: +251917397648
- GitHub: https://github.com/Amoliben

---

## Deployment Status

| Platform | Status | Link |
|----------|--------|------|
| GitHub | ✅ Ready | Push now |
| Vercel | ✅ Ready | Deploy now |
| Netlify | ✅ Ready | Deploy now |
| Custom Domain | ⏳ Optional | Configure after deploy |

---

**Your portfolio is production-ready. Deploy with confidence!** 🚀
