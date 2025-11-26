# Vercel Deployment Guide

## Quick Deploy to Vercel

### Method 1: Using Vercel CLI
1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Navigate to your project directory and run:
   ```bash
   vercel
   ```

3. Follow the prompts:
   - Set up and deploy: Yes
   - Which scope: Select your account
   - Link to existing project: No
   - Project name: ahamad-afif-portfolio (or your preferred name)
   - In which directory is your code located: ./
   - Want to override the settings: No

4. For production deployment:
   ```bash
   vercel --prod
   ```

### Method 2: Using Vercel Dashboard (Recommended)
1. Push your code to GitHub, GitLab, or Bitbucket

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your repository

5. Vercel will auto-detect the Vite framework. Verify these settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

6. Click "Deploy"

## Configuration Files

All necessary configuration files are already set up:

- ✅ **vercel.json** - SPA routing configuration
- ✅ **package.json** - Build scripts and dependencies
- ✅ **vite.config.ts** - Vite build configuration
- ✅ **tsconfig.json** - TypeScript configuration
- ✅ **index.html** - Entry HTML file

## Environment Variables

This project doesn't require any environment variables for basic deployment.

## Important Notes

- The build output directory is `dist` (Vite default)
- Build command compiles TypeScript first (`tsc`), then builds with Vite
- All routing is handled client-side through `vercel.json` rewrites
- Dark mode preference is stored in browser localStorage

## Post-Deployment

After successful deployment:
1. Your site will be live at `https://your-project-name.vercel.app`
2. Vercel provides automatic HTTPS
3. Every push to your main branch will trigger a new deployment
4. Preview deployments are created for pull requests

## Troubleshooting

If you encounter build errors:
1. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. Test build locally:
   ```bash
   npm run build
   npm run preview
   ```

3. Check Vercel build logs for specific error messages

## Custom Domain

To add a custom domain:
1. Go to your project settings in Vercel dashboard
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
