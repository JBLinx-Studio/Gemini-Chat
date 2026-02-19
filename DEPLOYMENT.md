
# GitHub Pages Deployment Guide

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Automatic Deployment Setup

### Repository Settings:
1. Go to your repository on GitHub
2. Navigate to Settings → Pages
3. Under "Source", select "GitHub Actions"
4. The site will be available at: `https://jblinx-studio.github.io/JBLinx-Studio-HUB/`

### How it works:
- Every push to the `main` branch triggers the deployment workflow
- The workflow builds the React app with the correct base path
- The built files are deployed to GitHub Pages automatically
- No manual intervention required

### Manual Deployment:
- Go to the Actions tab in your repository
- Select "Deploy to GitHub Pages" workflow
- Click "Run workflow" to deploy manually

## Important Configuration

The app is configured with:
- **Base URL**: `/JBLinx-Studio-HUB/` (matches your repository name)
- **Build Output**: `./dist` directory
- **Node Version**: 20
- **Build Command**: `npm run build`

## Troubleshooting

If the site shows a 404 error:
1. Verify GitHub Pages is enabled in repository settings
2. Check that the workflow completed successfully in the Actions tab
3. Ensure the base path in `vite.config.ts` matches your repository name
4. Wait 5-10 minutes for GitHub Pages to propagate changes

## Environment Variables

Production environment variables are set in the workflow:
- `VITE_BASE_URL`: Set to `/JBLinx-Studio-HUB/`
- `NODE_ENV`: Set to `production`

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to the `public` directory with your domain
2. Configure DNS settings to point to `jblinx-studio.github.io`
3. Enable custom domain in repository settings → Pages
