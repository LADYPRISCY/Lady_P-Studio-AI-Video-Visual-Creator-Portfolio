# LADY_P STUDIO — AI Video & Visual Creator Portfolio

A high-performance, cinematic portfolio showcasing AI-directed commercial videos, editorial visual art, motion experiments, and creative direction by **Adeleke Priscilla** (LADY_P STUDIO).

![LADY_P STUDIO](public/favicon.svg)

---

## 🌟 Key Highlights

- **Dynamic Video & Motion Showcase**: Native inline auto-looping video players with audio toggles, hover scrub, full-screen playback, and modal detail inspection.
- **Responsive Layout**: Engineered to scale across ultra-wide desktop monitors, laptops, tablets, and smartphones.
- **Themed Aesthetic**: High-contrast dark cinema theme with warm amber/gold accents (`#f5c32c`), glassmorphic overlays, and clean typographic hierarchy.
- **Interactive Lightbox & Modals**: Click to examine prompt concepts, camera and lens parameters, color grade recipes, and aspect ratios.
- **Client Brief Ingestion**: Interactive commission form with project category selectors, budget tier selectors, and response confirmation.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Audio & Video**: Cloudinary CDN + HTML5 Video API with muted autoplay & responsive aspect ratios

---

## 📂 Project Structure

```
├── public/
│   ├── favicon.svg             # Custom SVG brand favicon for Lady_P Studio
│   └── videos/                 # Local video and audio assets
├── src/
│   ├── assets/                 # Generated high-resolution imagery and brand assets
│   ├── components/             # Reusable UI sections
│   │   ├── Navbar.tsx          # Sticky navigation with mobile drawer & brand emblem
│   │   ├── Hero.tsx            # Cinematic hero statement with quick CTA
│   │   ├── SelectedWork.tsx    # Filterable project portfolio grid (commercial, fine art, etc.)
│   │   ├── FeaturedVideo.tsx   # Interactive theater mode player with ambient glow
│   │   ├── About.tsx           # Creator introduction, methodology, and "What I Create"
│   │   ├── Process.tsx         # 4-stage creative workflow pipeline
│   │   ├── ImageGallery.tsx    # Exhibition lightbox for high-resolution visual stills
│   │   ├── Services.tsx        # Commercial offerings & production tiers
│   │   ├── Contact.tsx         # Direct channels (Email, TikTok, Briefing form)
│   │   ├── ProjectModal.tsx    # Deep-dive project metadata modal
│   │   └── LightboxModal.tsx   # Exhibition image viewer
│   ├── context/
│   │   └── ThemeContext.tsx    # Light/Dark mode state management
│   ├── data/
│   │   └── portfolioData.ts    # Centralized portfolio items, videos, and creator profile
│   ├── types.ts                # TypeScript interfaces and categories
│   ├── App.tsx                 # Root layout assembler
│   ├── main.tsx                # Entry mount
│   └── index.css               # Global typography, Tailwind imports, and animations
├── index.html                  # HTML entry point with metadata & favicon links
├── package.json                # Project dependencies & scripts
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### 1. Installation

Install all dependencies:

```bash
npm install
```

### 2. Development

Start the local Vite development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### 3. Linting & Validation

Verify TypeScript types and build hygiene:

```bash
npm run lint
```

### 4. Production Build

Build the static bundle for production deployment:

```bash
npm run build
```

---

## 📬 Contact & Direct Inquiries

- **Creator**: Adeleke Priscilla (LADY_P STUDIO)
- **WhatsApp**: [+234 706 853 9317 (07068539317)](https://wa.me/2347068539317?text=Hello%20Lady_P%20Studio%2C%20I%20am%20interested%20in%20working%20with%20you%20on%20a%20project.)
- **Email**: [adelekepriscilla2019@gmail.com](mailto:adelekepriscilla2019@gmail.com)
- **TikTok**: [@adelekepriscilla8](https://www.tiktok.com/@adelekepriscilla8?_r=1&_t=ZS-9A5a3kWJAdl)
- **Role**: AI Video & Visual Creator (Cinematic Advertising, High-Concept Fashion, Surrealist Worldbuilding)
