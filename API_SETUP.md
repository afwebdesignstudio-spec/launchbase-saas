# Launchbase - API Integration Setup

## Overview
This document covers setting up all required APIs for Launchbase to function fully.

## 1. Supabase Setup

### Create a Supabase Project
1. Go to https://supabase.co
2. Sign up or login
3. Create a new project
4. Go to Settings → API
5. Copy your:
   - Project URL → `VITE_SUPABASE_URL`
   - Public Anon Key → `VITE_SUPABASE_ANON_KEY`

### Database Setup
Create the following tables in Supabase:

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255),
  credits INT DEFAULT 5,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  name VARCHAR(255),
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Brand kits table
CREATE TABLE brand_kits (
  id UUID PRIMARY KEY,
  project_id UUID REFERENCES projects(id),
  colors JSON,
  fonts JSON,
  logo_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 2. Google Gemini API Setup

1. Go to https://ai.google.dev
2. Click "Get API Key"
3. Create a new project or select existing
4. Copy the API key → `VITE_GOOGLE_AI_API_KEY`

### Usage in Application
The API is used for:
- Brand name generation
- Tagline creation
- Color palette suggestions
- Logo concept descriptions

## 3. Environment Variables

Create a `.env.local` file in the root:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
VITE_GOOGLE_AI_API_KEY=your_google_key_here
VITE_APP_URL=http://localhost:5173
```

## 4. Testing APIs

### Test Supabase Connection
```javascript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

const { data } = await supabase.from('users').select()
console.log(data)
```

### Test Google Gemini API
```javascript
const response = await fetch('https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=' + API_KEY, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    contents: [{ parts: [{ text: 'Create a brand name for a coffee shop' }] }]
  })
})
```

## 5. Production Deployment

1. Set environment variables in Vercel
2. Deploy application
3. Monitor API usage and quotas
4. Set up alerts for quota limits

## Support
For issues, check:
- Supabase documentation: https://supabase.co/docs
- Google Gemini docs: https://ai.google.dev/docs
