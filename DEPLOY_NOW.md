# 🚀 Deploy Your Portfolio to Vercel NOW

## Why This is Critical
❌ **"Coming Soon - Deploy to Vercel"** = Recruiters will skip your portfolio  
✅ **Live URL** = Professional, accessible, hireable

---

## Option 1: Deploy via Vercel Dashboard (EASIEST - 2 minutes)

### Step 1: Go to Vercel
1. Open: https://vercel.com
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"**

### Step 2: Import Your Repository
1. Click **"Add New..."** → **"Project"**
2. Find your repository: `Amoliben/portfolio`
3. Click **"Import"**

### Step 3: Configure (Use Defaults)
- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `./` (leave as is)
- **Build Command**: `npm run build` (auto-filled)
- **Output Directory**: `.next` (auto-filled)
- **Install Command**: `npm install` (auto-filled)

### Step 4: Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes
3. **DONE!** You'll get a live URL like: `https://portfolio-amenti.vercel.app`

---

## Option 2: Deploy via CLI (FAST - 1 minute)

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Login
```bash
vercel login
```
(Opens browser, authenticate with GitHub)

### Step 3: Deploy
```bash
vercel
```

Follow prompts:
- Set up and deploy? **Y**
- Which scope? (Select your account)
- Link to existing project? **N**
- What's your project's name? **portfolio** (or press Enter)
- In which directory is your code located? **./** (press Enter)
- Want to override settings? **N**

**DONE!** You'll get a live URL immediately.

### Step 4: Deploy to Production
```bash
vercel --prod
```

---

## After Deployment

### 1. Update README.md
Replace:
```markdown
Visit the live portfolio: [Coming Soon - Deploy to Vercel]
```

With:
```markdown
Visit the live portfolio: **[https://your-actual-url.vercel.app](https://your-actual-url.vercel.app)**
```

### 2. Update Your Resume/LinkedIn
Add your live portfolio URL everywhere:
- LinkedIn profile
- GitHub profile README
- Resume
- Email signature

### 3. Test Your Live Site
- ✅ Check all sections load
- ✅ Test mobile responsiveness
- ✅ Verify all links work
- ✅ Check contact form

---

## Custom Domain (Optional - Later)

### Buy a Domain
- Namecheap: ~$10/year
- GoDaddy: ~$12/year
- Google Domains: ~$12/year

### Connect to Vercel
1. Go to Vercel Dashboard → Your Project
2. Click **"Settings"** → **"Domains"**
3. Add your domain (e.g., `amentiliben.com`)
4. Follow DNS instructions
5. Wait 24-48 hours for DNS propagation

---

## Troubleshooting

### Build Failed?
```bash
# Test locally first
npm run build
npm start
```

If local build works, check Vercel logs for specific errors.

### Environment Variables Needed?
1. Go to Vercel Dashboard → Your Project
2. Click **"Settings"** → **"Environment Variables"**
3. Add any needed variables

### Want to Redeploy?
```bash
vercel --prod
```

Or just push to GitHub (auto-deploys if connected).

---

## 🎯 DO THIS NOW

1. **Stop reading**
2. **Go to https://vercel.com**
3. **Click "Sign Up with GitHub"**
4. **Import your repository**
5. **Click Deploy**
6. **Update your README with the live URL**

**Time needed: 2 minutes**  
**Impact: MASSIVE** (from "not deployed" to "professional live portfolio")

---

## Questions?

If deployment fails, check:
1. Does `npm run build` work locally?
2. Are all dependencies in `package.json`?
3. Is your GitHub repository public?

**Need help?** Check Vercel docs: https://vercel.com/docs
