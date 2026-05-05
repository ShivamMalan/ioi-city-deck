# IOI City Mall - Interactive Sales Deck

A fully interactive, browser-based presentation deck for IOI City Mall, Southeast Asia's largest shopping destination. Built as a modern web application that replaces traditional PowerPoint decks, PDFs, and video presentations.

**Live Demo**: [https://ioi-city-deck.vercel.app](https://ioi-city-deck.vercel.app)

## 🎯 Project Overview

This interactive sales deck is designed for:
- **Prospective retail tenants** (luxury, mid-tier, flagship, pop-up)
- **Corporate sponsors and brand partners**
- **Event promoters and producers**

The deck tells IOI City Mall's story through video, data, imagery, and narrative with the visual polish of a luxury brand and interactivity of a modern web experience.

## ✨ Features

- **Cinematic Opening** - Animated cover with immediate visual impact
- **Video Introduction** - YouTube-embedded intro showcasing scale and energy
- **Non-Linear Navigation** - Viewers control their journey through 11 slides
- **Luxury UI/UX** - Inspired by Apple, Hermès, Tesla design language
- **Responsive Design** - Flawless on desktop, tablet, and mobile
- **High Performance** - Optimized assets, lazy loading, smooth animations
- **Modular Architecture** - Expandable codebase ready for new sections

## 📑 Slides

1. **Cover** - Animated entry point with "Enter Presentation" CTA
2. **Intro** - YouTube video showcasing the mall experience
3. **Overview** - Why IOI City Mall? Demographics, stats, awards
4. **Retail** - 500+ stores including AEON, H&M, Uniqlo, Zara
5. **Luxury** - Premium brands: Coach, Michael Kors, Kate Spade
6. **Dining** - 200+ F&B options: Din Tai Fung, Nando's, TGI Friday's
7. **Attractions** - District 21, Icescape Ice Rink, GSC Cinemas
8. **Events** - World-class venues and past event showcases
9. **Sponsorship** - Partnership tiers and activation opportunities
10. **Leasing** - Retail categories, rates, and leasing process
11. **Contact** - CTAs for leasing, events, partnerships

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router & Turbopack
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Utilities**: clsx, tailwind-merge

## 🚀 Getting Started

### Prerequisites

- **Node.js 20.9.0** or higher (required for Next.js 16)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/ShivamMalan/ioi-city-deck.git

# Navigate to directory
cd ioi-city-deck

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Deploy to Vercel

The easiest way to deploy is via [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ShivamMalan/ioi-city-deck)

Or deploy manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📁 Project Structure

```
ioi-city-deck/
├── app/
│   ├── globals.css       # Global styles (Tailwind v4)
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Main presentation page
│   └── favicon.ico       # IOI City Mall favicon
├── components/
│   ├── navigation.tsx    # Slide navigation dots
│   ├── slide.tsx         # Slide container components
│   ├── slides/
│   │   ├── cover.tsx     # Animated cover slide
│   │   └── intro.tsx     # YouTube video intro
│   └── sections/
│       ├── overview.tsx
│       ├── retail.tsx
│       ├── luxury.tsx
│       ├── dining.tsx
│       ├── attractions.tsx
│       ├── events.tsx
│       ├── sponsorship.tsx
│       ├── leasing.tsx
│       └── contact.tsx
├── lib/
│   ├── constants.ts      # Mall data, stats, tenants
│   └── utils.ts          # Utility functions (cn)
├── store/
│   └── navigation.ts     # Zustand presentation store
└── public/
    ├── apple-touch-icon.png  # IOI logo
    └── favicon.ico           # Browser tab icon
```

## 🎨 Design Decisions

### Visual Direction
- **Dark/Cinematic** theme with amber (#F59E0B) accent colors
- Gradient overlays for depth and sophistication
- Glass-morphism effects for UI elements
- Smooth entrance animations with Framer Motion

### Architecture
- **Slide-based** navigation mimicking presentation software
- **Zustand** store for slide state management
- **Component composition** with reusable Slide primitives
- **CSS-in-JS** with Tailwind for rapid styling

### Performance
- Lazy loading for off-screen content
- YouTube embed for video (no large file hosting)
- Next.js Image optimization
- Framer Motion's `viewport` for animation triggers
- Minimal bundle size with tree-shaking

## 🤖 AI Tools Used

- **GitHub Copilot** - Code completion and generation
- **Claude** - Architecture planning and code review
- **Placeholder for AI-generated images** - Supplement real mall assets

## 🔮 Future Enhancements

With more time, these features would be added:

1. **Interactive Map** - Clickable floor plans with store locations
2. **Video Showreel** - Full-screen video player with curated content
3. **Testimonials** - Partner/tenant success stories
4. **Virtual Tour** - 360° walkthrough integration
5. **Analytics Dashboard** - Real-time visitor data
6. **Multi-language** - Malay, Mandarin, Arabic support
7. **Dark/Light Mode** - Theme toggle
8. **PDF Export** - Download as presentation

## 📝 License

This project was created as part of an interview assignment. All IOI City Mall branding, imagery, and data are used for demonstration purposes only.

## 🙏 Acknowledgments

- [IOI City Mall](https://www.ioicitymall.com.my/) for inspiration
- [Digideck](https://www.thedigideck.com/) for format reference
- Apple, Tesla, Hermès for design inspiration

---

**Built with ❤️ for the future of real estate presentations**
