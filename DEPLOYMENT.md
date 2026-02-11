# Launchbase - Deployment Guide

## Overview
This guide walks you through deploying Launchbase to production on Vercel.

## Prerequisites
- GitHub account (repo already created)
- Vercel account
- Supabase project set up
- Google Gemini API key

## Step 1: Connect GitHub to Vercel

1. Go to https://vercel.com and sign in
2. Click "New Project"
3. Select "Import Git Repository"
4. Search for "launchbase-saas" and click "Import"

## Step 2: Configure Environment Variables

1. After importing, go to "Settings" → "Environment Variables"
2. Add the following variables:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase publishable key
   - `VITE_GOOGLE_AI_API_KEY`: Your Google Gemini API key

## Step 3: Deploy

1. Click "Deploy"
2. Wait for the build to complete
3. Once complete, you'll get a live URL

## Step 4: Monitor Deployment

1. Check the Deployments tab for status
2. View build logs if needed
3. Test the live application

## Troubleshooting

### Build fails
- Check the build logs for specific errors
- Ensure all environment variables are set correctly
- Verify package.json has correct build command

### Application not loading
- Check browser console for errors
- Verify environment variables are accessible
- Check Supabase connection

## Next Steps

1. Set up custom domain (optional)
2. Configure analytics
3. Set up CI/CD pipeline
4. Monitor application performance

For more info, visit: https://vercel.com/docs
