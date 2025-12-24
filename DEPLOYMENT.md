# 🚀 Deployment Guide

Complete guide to deploy your Christmas Greeting website to Vercel.

## Prerequisites

- A Vercel account (free) - [Sign up here](https://vercel.com/signup)
- Git installed on your computer
- Your project code ready

## Method 1: Deploy via Vercel Dashboard (Recommended)

This is the easiest method for beginners.

### Step 1: Prepare Your Project

1. Make sure you have the audio files in the `public` folder:
   - `christmas-music.mp3`
   - `bell-sound.mp3`
   - `chime-sound.mp3`

   See `AUDIO-FILES-NEEDED.md` for details.

2. Initialize git in your project (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Christmas greeting website"
   ```

### Step 2: Push to GitHub

1. Create a new repository on GitHub
2. Follow GitHub's instructions to push your code:
   ```bash
   git remote add origin YOUR_GITHUB_REPO_URL
   git branch -M main
   git push -u origin main
   ```

### Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect it's a Vite project
5. Click "Deploy"
6. Wait 1-2 minutes for deployment to complete
7. Your site is live! 🎉

### Step 4: Get Your URL

After deployment:
- You'll get a URL like: `https://your-project.vercel.app`
- You can customize this in Project Settings
- Share it with friends and family!

## Method 2: Deploy via Vercel CLI

For developers who prefer command-line tools.

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

From your project directory:

```bash
vercel
```

Follow the prompts:
- Set up and deploy: Y
- Which scope: Your account
- Link to existing project: N
- Project name: merryxmass (or your choice)
- Directory: ./ (just press Enter)
- Override settings: N

### Step 4: Production Deployment

```bash
vercel --prod
```

Your site is now live!

## Method 3: One-Click Deploy

If you have your code on GitHub:

1. Add this to your README.md:
   ```markdown
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_GITHUB_REPO_URL)
   ```

2. Anyone can click this button to deploy their own copy

## Post-Deployment

### Custom Domain (Optional)

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Environment Variables (If Needed)

If you add any environment variables later:
1. Go to Project Settings
2. Click "Environment Variables"
3. Add your variables
4. Redeploy

### Analytics

Vercel provides free analytics:
1. Go to your project dashboard
2. Click "Analytics" tab
3. See visitor stats, performance metrics

## Updating Your Site

### Via GitHub (Automatic)

1. Make changes to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push
   ```
3. Vercel automatically rebuilds and deploys!

### Via CLI

```bash
vercel --prod
```

## Troubleshooting

### Build Fails

Check the build logs in Vercel dashboard:
- Common issue: Missing dependencies
- Solution: Make sure `package.json` is correct
- Run `npm install` locally first to test

### Audio Files Not Playing

- Make sure audio files are in `public/` folder
- Check file names are exactly correct
- Verify files are committed to git
- Browser may block autoplay - this is normal

### Site Loads Slowly

- Optimize audio file sizes (use compressed MP3s)
- Check image optimization
- Use Vercel's CDN (automatic)

### 404 Errors

- Make sure `vercel.json` is in the root directory
- Check that build output is set to `dist`

## Performance Tips

1. **Optimize Audio Files**
   - Compress MP3s to reduce file size
   - Background music: 128kbps is sufficient
   - Sound effects: 64-96kbps is fine

2. **Enable Vercel Speed Insights**
   ```bash
   npm install @vercel/speed-insights
   ```

   Add to your `main.jsx`:
   ```javascript
   import { SpeedInsights } from '@vercel/speed-insights/react'

   // In your render:
   <SpeedInsights />
   ```

3. **Monitor Performance**
   - Use Vercel Analytics
   - Check Core Web Vitals
   - Optimize based on real user data

## Sharing Your Site

Once deployed:

1. **Get the URL**
   - Your deployment URL from Vercel
   - Example: `https://merryxmass.vercel.app`

2. **Create a QR Code**
   - Use [QR Code Generator](https://www.qr-code-generator.com/)
   - Makes sharing easy in person!

3. **Share on Social Media**
   - Facebook, Twitter, Instagram
   - WhatsApp, Telegram, etc.

4. **Email to Friends & Family**
   - Send the link with a personal message

## Free Tier Limits

Vercel's free tier includes:
- ✅ Unlimited deployments
- ✅ 100GB bandwidth per month
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Free subdomain (.vercel.app)

This is more than enough for a personal greeting site!

## Support

If you need help:
- Vercel Documentation: https://vercel.com/docs
- Vercel Discord: https://vercel.com/discord
- GitHub Issues: Create an issue in your repo

---

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

---

Happy deploying! 🎄✨ Share your beautiful Christmas greeting with the world!
