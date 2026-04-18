# medus.ai — Technical Specification

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.0.0 | UI framework |
| react-dom | ^19.0.0 | DOM renderer |
| typescript | ~5.7.0 | Type safety |
| vite | ^6.0.0 | Build tool |
| tailwindcss | ^3.4.0 | Utility CSS |
| three | ^0.170.0 | WebGL fiber optic effect + bloom post-processing |
| @types/three | ^0.170.0 | Three.js type definitions |
| gsap | ^3.12.0 | Animation engine, ScrollTrigger, Draggable, InertiaPlugin |
| @gsap/react | ^2.1.0 | useGSAP hook for React lifecycle integration |

GSAP plugins (free as of 2025, included in `gsap` package): **ScrollTrigger**, **Draggable**, **InertiaPlugin**.

Three.js addons from `three/examples/jsm/`: **EffectComposer**, **RenderPass**, **ShaderPass**.

---

## Component Inventory

### Layout

| Component | Source | Notes |
|-----------|--------|-------|
| Navigation | Custom | Fixed top bar, transparent→frosted transition on scroll, mobile hamburger overlay |
| StickyCTAFooter | Custom | Fixed bottom bar, appears after hero, backdrop blur |
| Footer | Custom | Three-row: product links, company links, legal disclaimer |

### Sections

| Component | Source | Notes |
|-----------|--------|-------|
| HeroSection | Custom | Full-viewport with FiberOpticDrift canvas behind content overlay |
| VideoShowcase | Custom | 16:9 video player with custom controls overlay, poster frame |
| MetricsSection | Custom | Sticky left panel (35%) + scrolling right blocks (4x 100vh), GSAP countUp scrub |
| ProductMarquee | Custom | Dual-row infinite GSAP auto-scroll, opposite directions, pause on hover |
| ProductShowcase | Custom | 2-column grid, parallax stagger per row, clickable lightbox |
| ImmersiveStories | Custom | Three full-viewport story sections with gradient overlays |
| AboutSection | Custom | Two-column (55/45), stats row |
| TechStackSection | Custom | 3-column grid of tech cards |
| ContactSection | Custom | Two-column (50/50), form with submit states |

### Reusable Components

| Component | Source | Used By |
|-----------|--------|---------|
| FiberOpticDrift | Custom (Three.js) | HeroSection — raw WebGL + EffectComposer bloom |
| ProductLightbox | Custom (GSAP Draggable) | ProductShowcase — full-screen drag gallery |
| SectionHeader | Custom | VideoShowcase, ProductShowcase, TechStack, etc. — eyebrow/headline/subtext pattern |
| MetricCounter | Custom | MetricsSection — GSAP ScrollTrigger-driven countUp |

### Hooks

| Hook | Purpose |
|------|---------|
| useScrollReveal | GSAP ScrollTrigger fade+translate entrance, reused by all sections |
| useNavScroll | Track scroll position for nav background transition + active section highlighting |

---

## Animation Implementation

| Animation | Library | Approach | Complexity |
|-----------|---------|----------|------------|
| Fiber Optic Drift (WebGL) | Three.js + EffectComposer | Raw ShaderMaterial with custom vertex/frag shaders, 9-pass Kawase bloom, 2400 fibers + 16000 particles, custom color palette | **High** 🔒 |
| Hero entrance stagger | GSAP timeline | Sequenced fade+translateY on 7 elements, delays 0.2–1.6s | Medium |
| Scroll-triggered section reveals | GSAP ScrollTrigger | IntersectionObserver-driven, opacity+translateY, staggered children | Low |
| Video controls fade | CSS transitions | Opacity 0→1 on hover, 2s inactivity timeout | Low |
| Metrics countUp + sticky panel | GSAP ScrollTrigger scrub | Number animates from 0 scrubbed to block scroll position, progress indicator bar | **High** 🔒 |
| Dual-row product marquee | GSAP tween | Infinite x-translation, linear ease, row 1: 25s left, row 2: 30s right, pause on hover | Medium |
| Product card parallax | GSAP ScrollTrigger scrub | Odd rows 0.9x, even rows 1.1x scroll speed | Low |
| Product lightbox drag | GSAP Draggable + Inertia | Horizontal drag gallery, snap-to-closest on release, backdrop close | **High** 🔒 |
| Sticky CTA slide-up | GSAP | translateY(64→0) triggered once at 100vh scroll | Low |
| Nav background transition | CSS + JS | Transparent→frosted class toggle at 100vh | Low |
| Mobile menu overlay | CSS transitions | Full-screen slide-in with staggered link reveals | Low |

---

## State & Logic Plan

### Fiber Optic Effect ↔ React Bridge
The Three.js scene runs entirely inside a `useEffect` with imperative animation loop. No React state for the canvas — the effect manages its own `TIME`, `ZOOM`, and resize via refs and DOM events. React only provides the mount point (`canvasRef`) and cleans up on unmount. Visibility state (tab hidden, off-screen) gates the `TIME` increment to pause rendering.

### Metrics Section: Imperative Scroll-Driven Updates
The sticky panel's displayed number is **not** React state — it is a DOM element whose `textContent` is updated directly by GSAP ScrollTrigger's `onUpdate` callback. This avoids 60fps React re-renders during scroll. Four metric blocks each have their own ScrollTrigger instance scrubbing a tween that updates a shared number element.

### Product Lightbox: Imperative DOM Manipulation
The lightbox uses GSAP Draggable on a proxy object, applying transforms directly to gallery item DOM nodes. No React state for drag position — snap-to-closest calculates target transforms on throw complete. The lightbox open/close is toggled via React state (visible/hidden), but all animation during drag is imperative.

### Form Submit: Multi-State Sequence
Contact form has a 3-state sequence: idle → submitting → success → reset. Managed with `useState<'idle' | 'submitting' | 'success'>`. The 3-second success timeout requires cleanup on unmount to prevent memory leaks.

---

## Other Key Decisions

**Video strategy**: The platform showcase video (5s loop) is embedded as a standard HTML5 `<video>` element with `loop muted playsinline` attributes. Custom controls (play/pause, progress, mute) are implemented as an overlaid React component, not the native browser controls. The video source is lazy-loaded via IntersectionObserver.

**Font loading**: Google Fonts loaded via `<link>` tags in `index.html` with `preconnect` hints. `font-display: swap` prevents FOIT. Space Grotesk 500 is preloaded for the hero headline.

**Mobile performance**: Fiber count drops to 1200, particles to 8000, dpr capped at 1.0. Bloom reduced to 5 passes. Smooth scrolling disabled. Product grid goes single-column.

**Reduced motion**: All entrance animations reduce to opacity-only. Fiber drift speed drops to 0.0001. Marquee pauses. Scroll indicator disabled.
