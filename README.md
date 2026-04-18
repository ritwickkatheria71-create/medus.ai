# medus.ai

**AI-powered telehealth platform for India**

medus.ai connects patients with licensed doctors, personalized treatments, and doorstep medicine delivery — all from your phone.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19 + TypeScript |
| Build | Vite 6 |
| Styling | Tailwind CSS 3 |
| Animation | GSAP (ScrollTrigger, Draggable) |
| 3D / WebGL | Three.js + EffectComposer bloom |
| UI Components | Radix UI + shadcn/ui |
| Routing | React Router v7 |

---

## Getting Started

### Prerequisites
- Node.js 20+
- npm 9+

### Installation

```bash
git clone https://github.com/your-org/medus-ai.git
cd medus-ai
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
medus-ai/
├── public/
│   ├── images/          # Static images (conditions, about)
│   └── videos/          # Platform showcase video
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ui/          # shadcn/ui base components
│   │   ├── FiberOpticDrift.tsx   # Three.js WebGL hero effect
│   │   ├── Navigation.tsx
│   │   ├── SectionHeader.tsx
│   │   └── StickyCTAFooter.tsx
│   ├── sections/        # Page sections (one per viewport scroll unit)
│   │   ├── HeroSection.tsx
│   │   ├── VideoShowcase.tsx
│   │   ├── MetricsSection.tsx
│   │   ├── ProductMarquee.tsx
│   │   ├── ProductShowcase.tsx
│   │   ├── ImmersiveStories.tsx
│   │   ├── AboutSection.tsx
│   │   ├── TechStackSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   ├── useScrollReveal.ts   # GSAP scroll entrance animations
│   │   ├── useNavScroll.ts      # Nav scroll state
│   │   └── use-mobile.ts
│   ├── lib/utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/workflows/ci.yml
├── tech-spec.md
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

---

## Products

| Product | Target |
|---------|--------|
| SugarPass | Diabetes management |
| RootRx | Hair loss treatment |
| SlimRx | Weight management |
| HerBalance | PCOS / women's health |
| GlowRx | Skincare |
| ViraaQ | Men's health |

---

## Contact

- Email: hello@medus.ai
- Website: https://medus.ai
- Location: Bengaluru, India
