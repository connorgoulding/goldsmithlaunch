# Goldsmith Growth

Enterprise AI & Operations Consultancy

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
goldsmithlaunch/
├── content/              # Blog posts (Markdown)
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── page.jsx     # Homepage
│   │   ├── automation/  # Automation services
│   │   ├── marketing/   # Marketing services
│   │   ├── book/        # Booking/diagnostic flows
│   │   ├── lexicon/     # Blog index & posts
│   │   └── privacy/     # Privacy policy
│   ├── components/ui/   # Reusable UI components
│   └── lib/             # Utilities
├── tailwind.config.js   # Tailwind + custom theme
└── next.config.js       # Next.js config
```

## 🎨 Design System

- **Colors:**
  - Cream: `#F2F0E9`
  - Charcoal: `#1A1A1A`
  - Clay: `#CC5833`
  - Moss: `#2E4036`

- **Fonts:**
  - Display: Outfit
  - Serif: Cormorant Garamond
  - Mono: JetBrains Mono

- **Animations:**
  - GSAP + ScrollTrigger
  - Lenis smooth scroll
  - Custom magnetic cursor
  - Sticky protocol cards

## 📝 Adding Blog Posts

Create a `.md` file in `/content/`:

```markdown
---
title: "Your Post Title"
date: "Feb 27, 2026"
tags: ["Automation", "Marketing"]
excerpt: "Brief description for the card."
---

Your markdown content here...
```

## 🛠️ Tech Stack

- Next.js 15 (App Router)
- React 18
- Tailwind CSS
- GSAP (animations)
- Lenis (smooth scroll)
- gray-matter (Markdown parsing)
- next-mdx-remote (MDX rendering)

## 🌐 Deployment

Build for static export:
```bash
npm run build
```

Output goes to `/dist/` — deploy to any static host (Vercel, Netlify, Cloudflare Pages).