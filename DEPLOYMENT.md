# 🚀 Deployment Guide

This guide walks you through deploying your personalized Birthday 3D website to various hosting platforms.

## Prerequisites

Before deploying:
- ✅ Customize your `.env` with personal information
- ✅ Add your photos to `src/assets/`
- ✅ Test locally with `npm run dev`
- ✅ Ensure everything works as expected

---

## 🔷 Deploy to Vercel (Recommended)

Vercel offers the easiest deployment with automatic builds and SSL certificates.

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ak-1344/Birthday-3d)

1. Click the "Deploy with Vercel" button
2. Sign in to Vercel (GitHub account recommended)
3. Give your project a name
4. Click "Deploy"

### Option 2: Manual Deploy via GitHub

1. **Fork this repository** to your GitHub account

2. **Go to [Vercel](https://vercel.com)** and sign in

3. **Import your repository**:
   - Click "Add New Project"
   - Select your forked repository
   - Click "Import"

4. **Configure your project**:
   - Framework Preset: **Vite**
   - Root Directory: `./` (leave as default)

5. **Add environment variables**:
   ```
   VITE_PERSON_NAME=YourName
   VITE_PERSON_AGE=25
   VITE_BIRTHDAY_MESSAGE=Your custom message
   VITE_PHOTO_COUNT=6
   ```

6. **Deploy!** Click "Deploy"

7. **Add your photos**:
   - After first deployment, add photos via Git
   - Push to your repository
   - Vercel will auto-redeploy

### Option 3: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Set environment variables** in Vercel dashboard:
1. Go to Project Settings
2. Navigate to "Environment Variables"
3. Add all `VITE_*` variables
4. Redeploy

---

## 🟢 Deploy to Netlify

Netlify provides continuous deployment with drag-and-drop option.

### Option 1: Deploy via GitHub

1. **Fork this repository** to your GitHub account

2. **Go to [Netlify](https://www.netlify.com)** and sign in

3. **Import your project**:
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select your forked repository

4. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Base directory: (leave empty)

5. **Add environment variables**:
   - Go to "Site settings" → "Environment variables"
   - Add all `VITE_*` variables:
     ```
     VITE_PERSON_NAME=YourName
     VITE_PERSON_AGE=25
     VITE_BIRTHDAY_MESSAGE=Your message
     VITE_PHOTO_COUNT=6
     ```

6. **Deploy!** Click "Deploy site"

### Option 2: Manual Deploy (Drag & Drop)

```bash
# Build the project
npm run build

# The dist/ folder is created
```

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop your `dist/` folder
3. Your site is live instantly!

**Note**: Manual deploys don't support environment variables easily. Better to use Git-based deployment.

### Option 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Build your site
npm run build

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

---

## 📘 Deploy to GitHub Pages

Free hosting directly from your GitHub repository.

### Setup

1. **Install `gh-pages` package**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `package.json`**:
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/Birthday-3d",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update `vite.config.js`**:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/Birthday-3d/', // Your repo name
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**:
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save

6. **Visit your site**: `https://YOUR_USERNAME.github.io/Birthday-3d`

### Environment Variables on GitHub Pages

GitHub Pages is static hosting without server-side env variables. You have two options:

**Option A: Hard-code values before deployment**
```bash
# Set env vars in your shell
export VITE_PERSON_NAME="Alex"
export VITE_PERSON_AGE=25
npm run build
npm run deploy
```

**Option B: Use a `.env` file** (not recommended for public repos as it exposes data)

---

## 🌐 Deploy to Other Platforms

### Cloudflare Pages

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Add environment variables in dashboard

### Render

1. Create a new Static Site
2. Connect your repository
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables

### Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting

# Build
npm run build

# Deploy
firebase deploy
```

---

## 🔧 Environment Variables Setup

All platforms require these environment variables:

| Variable | Example | Required |
|----------|---------|----------|
| `VITE_PERSON_NAME` | `Alex` | ✅ Yes |
| `VITE_PERSON_AGE` | `25` | ✅ Yes |
| `VITE_BIRTHDAY_MESSAGE` | `Happy Birthday!` | ✅ Yes |
| `VITE_PHOTO_COUNT` | `6` | ✅ Yes |
| `VITE_CAKE_TIERS` | `3` | No (default: 3) |
| `VITE_CANDLE_COUNT` | `5` | No (uses age) |

### How to Set Environment Variables

**Vercel**: Project Settings → Environment Variables

**Netlify**: Site Settings → Environment Variables → Add variable

**GitHub Actions** (for GitHub Pages):
```yaml
env:
  VITE_PERSON_NAME: Alex
  VITE_PERSON_AGE: 25
```

---

## 📸 Managing Photos in Deployment

### Including Photos in Git Repository

```bash
# Add photos to src/assets/
cp photo1.jpg src/assets/
cp photo2.jpg src/assets/
# ... etc

# Commit and push
git add src/assets/photo*.jpg
git commit -m "Add birthday photos"
git push
```

### Large Photo Files

If photos are large (>1MB each):

1. **Optimize images** before adding:
   - Use tools like [TinyPNG](https://tinypng.com/)
   - Resize to reasonable dimensions (1920px max width)
   - Convert to `.webp` format for smaller size

2. **Use Git LFS** for large files:
   ```bash
   git lfs install
   git lfs track "*.jpg"
   git lfs track "*.png"
   git add .gitattributes
   ```

---

## 🔒 Privacy Considerations

### Keeping Information Private

If deploying publicly:
- Be mindful of personal photos
- Consider using a private repository
- Use privacy settings on hosting platforms
- Share the URL only with intended recipients

### Private Deployment Options

1. **Vercel/Netlify Password Protection**:
   - Available on paid plans
   - Adds password requirement to access site

2. **Private GitHub Repository**:
   - Keep repo private
   - Deploy to Vercel/Netlify (works with private repos)

3. **Self-Hosting**:
   - Host on personal server
   - Use `.htpasswd` for authentication

---

## 🎯 Post-Deployment Checklist

After deploying, verify:

- [ ] Site loads correctly
- [ ] Name and age display properly
- [ ] Birthday message shows correctly
- [ ] All photos load successfully
- [ ] Candles match expected count
- [ ] Blow button works
- [ ] Photo zoom works
- [ ] No console errors
- [ ] Mobile version works well

---

## 🐛 Troubleshooting

### Build Fails

- Check Node.js version (16+ required)
- Run `npm install` to ensure dependencies are installed
- Check for syntax errors in components

### Environment Variables Not Working

- Ensure they start with `VITE_`
- Redeploy after adding variables
- Check platform-specific env var syntax

### Photos Not Loading

- Verify photos are in `src/assets/`
- Check file names: `photo1.jpg`, `photo2.jpg`, etc.
- Ensure photos are committed to Git
- Check browser console for 404 errors

### Site is Blank

- Check browser console for errors
- Verify build completed successfully
- Check base URL configuration in `vite.config.js`

---

## 📧 Need Help?

If you encounter issues:
- Open an issue on [GitHub](https://github.com/ak-1344/Birthday-3d/issues)
- Check existing issues for solutions
- Provide deployment platform and error messages

---

Happy deploying! 🚀🎉
