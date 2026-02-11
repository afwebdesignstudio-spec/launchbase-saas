# Launchbase - Quick Start Guide

## 🚀 Get Started in 5 Minutes

Welcome to Launchbase! This guide will get your SaaS app running locally.

## Prerequisites

- Node.js 16+ installed
- Git
- npm or yarn

## Local Development

### 1. Clone the Repository
```bash
git clone https://github.com/afwebdesignstudio-spec/launchbase-saas.git
cd launchbase-saas
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables

Copy `.env.example` to `.env.local` and fill in your API keys:

```bash
cp .env.example .env.local
```

Edit `.env.local` with:
- Supabase URL and key (from supabase.co)
- Google Gemini API key (from ai.google.dev)

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
launchbase-saas/
├── src/
│   ├── App.jsx              # Main app component
│   ├── App.css              # App styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Build config
├── vercel.json              # Deployment config
├── README.md                # Project info
├── DEPLOYMENT.md            # Deployment guide
├── API_SETUP.md             # API configuration
└── .env.example             # Environment template
```

## Key Features

✅ React 18 with Vite (Fast builds)
✅ Supabase authentication & database
✅ Google Gemini AI integration
✅ Modern UI with gradient design
✅ Ready for Vercel deployment

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## Deploying to Vercel

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables
5. Deploy!

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## Documentation

- [API Setup](API_SETUP.md) - Configure Supabase and Gemini
- [Deployment Guide](DEPLOYMENT.md) - Deploy to production
- [README](README.md) - Full project overview

## Support

For issues or questions:
1. Check existing documentation
2. Review GitHub issues
3. Create a new issue with details

## Next Steps

1. Customize the brand colors and styling
2. Set up your Supabase database tables
3. Test the authentication flow
4. Integrate the AI brand generation feature
5. Deploy to Vercel

You're all set! Happy building! 🎉
