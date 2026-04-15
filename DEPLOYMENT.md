# Deployment Guide

## Deploying to Vercel

Vercel is the easiest way to deploy your React portfolio. Follow these steps:

### Step 1: Push to GitHub

First, make sure your project is on GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/tamal-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in or create an account
3. Click "New Project"
4. Select your repository
5. Vercel will automatically detect Vite settings
6. Click "Deploy"

#### Option B: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Run deployment:
```bash
vercel
```

3. Follow the prompts to deploy

### Step 3: Custom Domain (Optional)

1. Go to Project Settings in Vercel
2. Click "Domains"
3. Add your custom domain
4. Follow the DNS instructions

## Building Locally

To build for production:

```bash
npm run build
npm run preview
```

## Environment Variables

If you need environment variables:

1. Create a `.env.local` file:
```
VITE_API_URL=https://your-api.com
```

2. Use in your code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

3. Add to Vercel project settings

## Performance Optimization

- **Lighthouse Score**: The portfolio achieves excellent Lighthouse scores
- **Bundle Size**: Optimized with Vite for minimal bundle size
- **CDN**: Vercel serves from global CDN for fast load times

## Troubleshooting

### Build fails
- Check `npm run build` locally first
- Verify Node version compatibility
- Check for missing dependencies

### Styling issues after deployment
- Verify Tailwind CSS is properly configured
- Check PostCSS configuration
- Ensure CSS files are imported

### Form submission not working
- Update contact form handler in `Contact.jsx`
- Consider using Formspree or EmailJS for backend

## Redeploying

- Push to main branch automatically triggers redeploy
- Or click "Redeploy" in Vercel dashboard

## Support

For more help, visit [Vercel Docs](https://vercel.com/docs)
