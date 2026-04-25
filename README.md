# Zuhaib Akhtar — Portfolio

An interactive, fast and animation-rich portfolio built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**, **Motion** (Framer Motion) and **Lucide icons**.

The design is a dark, monospace-first layout inspired by terminal aesthetics — with right-aligned section labels, colored skill chips, magnetic buttons, custom cursor, scroll progress, scroll-reveal stagger and a pointer-tracked spotlight on a faint grid.

## Stack

- **Next.js 15** (App Router, RSC where possible)
- **React 19**
- **TypeScript** (strict)
- **Tailwind CSS 3** (dark first, custom palette)
- **Motion** (`motion/react`) for all animations
- **Lucide React** for icons
- **JetBrains Mono** + **Inter** via `next/font` (zero layout shift)

## Features

- Custom cursor with magnetic hover scaling (auto-disabled on touch / coarse pointer)
- Scroll progress bar (gradient, springed)
- Scroll-reveal stagger using `useInView`
- Per-word fade + blur intro animation on hero copy
- Magnetic social buttons with springed offset
- Spotlight following the cursor on a subtle grid background
- Hover-tilt project cards with mouse-tracked radial highlight
- Color-coded chips for tech tags (8-color accent palette)
- Reduced motion respected (`prefers-reduced-motion`)
- Fully responsive (mobile → desktop)
- Lighthouse-friendly (preloaded fonts, no client work in layout, RSC main page)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to https://vercel.com/new and import the repo.
3. Framework will be auto-detected as **Next.js** — no config needed.
4. Click **Deploy**.

That's it. The site is statically pre-rendered at build time.

## Updating content

All resume content (projects, experience, skills, courses, awards) lives in a single file:

```
lib/data.ts
```

Edit values there — the UI updates automatically. Replace `public/ZuhaibAkhtarFinalResume.pdf` with a newer version when needed.

## Project structure

```
app/
  layout.tsx         # fonts, metadata, theme
  page.tsx           # main page (RSC)
  globals.css        # tailwind + custom CSS
  components/
    Header.tsx       # name + social icons
    Hero.tsx         # bio + "tinkering with" chips
    Section.tsx      # right-aligned section label
    Education.tsx
    Experience.tsx
    Projects.tsx     # interactive project cards
    Skills.tsx
    Courses.tsx
    Awards.tsx
    Footer.tsx
    BackgroundGrid.tsx   # grid + spotlight
    CustomCursor.tsx
    ScrollProgress.tsx
    Magnetic.tsx
    Reveal.tsx
    Tag.tsx
lib/
  data.ts            # all resume content
public/
  ZuhaibAkhtarFinalResume.pdf
  favicon.svg
```

## License

Personal portfolio — content © Zuhaib Akhtar.
