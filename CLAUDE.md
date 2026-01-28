# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture

Next.js 16 portfolio site using the App Router, React 19, TypeScript, and Tailwind CSS v4.

- **Routing:** Each page is at `src/app/<route>/page.tsx` (about, contact, experience, interests, papers, projects). The root `/` redirects to `/about`.
- **Layout:** `src/app/layout.tsx` provides the root layout with a sticky nav header using Geist fonts.
- **Navigation:** `src/components/Nav.tsx` is a client component with active link detection.
- **Styling:** Tailwind v4 with design tokens (colors, fonts) defined in `src/app/globals.css`. Uses `@tailwindcss/postcss` plugin.
- **Path alias:** `@/*` maps to `./src/*`.
- **Inline components:** Some pages define local components (e.g., `ProjectCard` in projects/page.tsx) rather than extracting them to `src/components/`.
