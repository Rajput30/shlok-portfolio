# Shlok Singh — Cinematic Portfolio
## Complete Next.js Setup Guide

---

## 1. Create Next.js Project

```bash
npx create-next-app@latest shlok-portfolio --app --no-src-dir --no-tailwind
cd shlok-portfolio
```

---

## 2. File Placement

```
shlok-portfolio/
├── app/
│   ├── globals.css          ← copy global.css here
│   ├── layout.js            ← copy layout.js here
│   └── page.js              ← copy page.js here
├── components/
│   └── ShlokPortfolio.jsx   ← copy ShlokPortfolio.jsx here
└── public/
    └── hero.mp4             ← RENAME your video to hero.mp4 and place here
```

---

## 3. Your Video File

Rename your video file:
```
829450493_1780924077372397.mp4  →  hero.mp4
```
Place it inside the `public/` folder.

---

## 4. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 5. What's Included — All Sections

| Section | Features |
|---|---|
| **Loading Screen** | Animated ring, progress bar, % counter, cinematic reveal |
| **Navbar** | Sticky transparent → frosted glass on scroll, active section detection, mobile hamburger menu |
| **Hero** | Fullscreen video (main + blurred ambient), particle canvas with mouse parallax, typewriter, stats, glassmorphism controls |
| **About & Skills** | Animated skill bars, bio with timeline tags, IntersectionObserver scroll reveals |
| **Journey / Timeline** | Vertical timeline with colored dots, hover accent lines, staggered entrance |
| **Projects** | 6-card grid with hover effects, top accent lines, tag badges |
| **Contact** | Glass-style form, success state, social links, location info |
| **Footer** | Branded footer with gradient line |
| **Custom Cursor** | Orange dot + ring with lag, click animation (desktop only) |

---

## 6. Customisation

Edit these constants at the top of `ShlokPortfolio.jsx`:

```js
// Typewriter texts
const TYPEWRITER_TEXTS = [...];

// Timeline milestones
const TIMELINE_DATA = [...];

// Project cards
const PROJECTS_DATA = [...];

// Skill bars
const SKILLS_DATA = [...];
```

---

## 7. Design System

| Token | Value |
|---|---|
| Background (deep) | `#02050a` |
| Background (section) | `#030711` |
| Orange accent | `#ff8c42` |
| Gold accent | `#ffd700` |
| Blue accent | `#64b5f6` |
| Display font | Playfair Display (Google Fonts) |
| Mono font | Space Mono (Google Fonts) |

---

## 8. No Extra Packages Needed

- ✅ Canvas particles — vanilla JS
- ✅ Animations — pure CSS keyframes + React transitions
- ✅ Scroll reveals — native `IntersectionObserver`
- ✅ Custom cursor — `requestAnimationFrame`
- ✅ Typewriter — React `useState/useEffect`
