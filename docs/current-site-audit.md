# HuohuoWeb — Repository Audit

**Date:** 2026-06-25  
**Audited by:** Codex CLI 0.139.0 (read-only sandbox) + Hermes verification  
**Commit:** `d46a690` — Initial commit from Create Next App

---

## Summary

| Question | Answer |
|----------|--------|
| **Current site completion** | 0% — Default Next.js 16 starter template |
| **Three things worth preserving** | 1. Clean Next.js 16 + TypeScript + Tailwind 4 stack (no legacy cruft) 2. Correct git configuration with proper .gitignore 3. `references/` folder preserved as requested |
| **Five most urgent problems** | 1. Homepage is Vercel-branded default template (Next.js logo, Deploy Now, etc.) 2. Dark mode uses `prefers-color-scheme` media query only — no explicit class toggle 3. No content system — all content currently hardcoded in React components 4. Font is Geist (developer aesthetic) — not editorial/magazine 5. No Works routing, no MDX, no dynamic routes |
| **Homepage verdict** | **Full rebuild** — current template has zero custom content; nothing to salvage from `page.tsx` or globals.css |
| **Works system state** | **Not started** — no routes, no content loader, no data source |
| **Recommended next step** | Design system first (fonts, colors, spacing tokens), then homepage structure |

---

## 1. Directory Structure

```
huohuoweb/
├── .git/
├── .next/                          # Build output (Turbopack)
├── docs/                           # Empty (README only)
├── node_modules/
├── public/                         # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── references/                     # Design reference materials (preserved)
│   └── README.md
├── src/
│   └── app/
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## 2. Technology Stack

| Category | Choice | Version |
|----------|--------|---------|
| Framework | Next.js (App Router, Turbopack) | 16.2.9 |
| Runtime | Node.js | 24.16.0 |
| Language | TypeScript | 5.x |
| CSS | Tailwind CSS (v4) | 4.x |
| Package Manager | npm | — |
| Font | Geist Sans + Geist Mono (next/font/google) | — |
| Motion | None installed | — |
| Content | None — all content in components | — |
| Deployment | Not configured | — |

### Missing for Project Goals
- ❌ MDX / content layer (`next-mdx-remote`, `@next/mdx`, etc.)
- ❌ Animation library (Framer Motion or similar)
- ❌ Custom fonts (Space Grotesk, Chinese font)
- ❌ Static export config (`output: "export"`)
- ❌ GitHub Pages deployment workflow

## 3. Existing Pages and Components

### Routes (from build output)
```
/           — Homepage (default template)
/_not-found — Built-in 404 page
```

### Components
- `src/app/layout.tsx` — RootLayout with Geist fonts, HTML/CSS dark mode
- `src/app/page.tsx` — Default "To get started, edit the page.tsx file" page

**No custom components exist.** No navbar, no footer, no works list, no project detail.

## 4. Style and Font System

### Current Configuration
```css
/* globals.css */
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

### Problems
- **Geist is a developer font** — optimized for code reading, not editorial design
- **Media-query dark mode** — no explicit class toggle; can't force light/dark
- **Pure black/white palette** — `#ffffff` / `#0a0a0a` lacks warmth
- **No Chinese font** — CJK characters will fall back to system defaults
- **Only 2 color tokens** — `background` and `foreground`; no brand colors, no semantic tokens
- **No `@theme inline` definitions** for spacing, typography scale, or border radius

## 5. Animation/Motion Implementation

**None.** No animation libraries installed, no CSS transitions, no CSS animations in globals.css.

For the target "editorial magazine" aesthetic, we'll need:
- Purposeful entrance transitions (CSS or Framer Motion)
- `prefers-reduced-motion` handling
- Page transitions (Next.js View Transitions API or manual)

## 6. Content Data Source

**None.** All text is hardcoded in `page.tsx`. No data files, no MDX, no CMS.

Required for the Works system:
- Local MDX files with frontmatter (title, slug, year, type, description, cover, status, sort order)
- A content loader that reads the filesystem
- Dynamic routes for `/works/[slug]`

## 7. References Folder

```
references/
└── README.md    ("审美研究素材，保留不删除")
```

**Empty.** No design references have been added yet. This folder exists purely as a placeholder to satisfy the constraint "保留 references 文件夹".

## 8. Current Homepage State

The current homepage (`page.tsx`) is the stock Next.js template:
- Next.js logo (`next.svg`) centered at top
- "To get started, edit the page.tsx file." heading
- Vercel "Deploy Now" CTA button
- "Documentation" secondary link
- Dark mode via `prefers-color-scheme`

**Completion: 0%** — Nothing custom. Entire file will be replaced.

## 9. Works System

**Does not exist.** No:
- `/works` route
- `/works/[slug]` dynamic route
- MDX configuration
- Content directory
- Data loading logic
- `generateStaticParams`

## 10. Engineering Issues

### Verification Results (independently verified by Hermes)

| Check | Result |
|-------|--------|
| `npm run build` | ✅ Passed (Turbopack, 0 errors) |
| `npx tsc --noEmit` | ✅ Passed (0 errors) |
| `npm run lint` | ✅ Passed (0 warnings) |

### Known Risks
- **ESLint 9 + FlatCompat** — `eslint.config.mjs` uses `FlatCompat` which may cause circular reference errors when rules expand. Known fix: switch to direct `@next/eslint-plugin-next` usage.
- **Next.js 16 breaking changes** — `params` and `searchParams` are now Promises in page/layout props. Must `await` them.
- **Static export limits** — `output: "export"` doesn't support `next/image` optimization, ISR, or server-side dynamic routes. Will need `generateStaticParams` and `images.unoptimized: true`.
- **Turbopack is default** — webpack-specific plugins/config will not work.

## 11. Design Issues

The default template exhibits every anti-pattern to avoid:
- ❌ Vercel/Next.js branding throughout
- ❌ Pure black/white color scheme
- ❌ Developer tooling aesthetic
- ❌ "To get started" as primary headline
- ❌ Deploy Now CTA — no personal content
- ❌ No visual hierarchy beyond a centered stack
- ❌ No personality, no editorial voice

## 12. What Can Be Preserved

| Item | Verdict | Reason |
|------|---------|--------|
| `package.json` scripts | ✅ Keep | `dev`, `build`, `start`, `lint` are correct |
| `tsconfig.json` | ✅ Keep | Sensible defaults; `paths: {"@/*": ["./src/*"]}` is correct |
| `next.config.ts` | ✅ Keep | Clean baseline; add `output: "export"` when needed |
| `postcss.config.mjs` | ✅ Keep | Correct for Tailwind v4 |
| `.gitignore` | ✅ Keep | Already extended with `.codex-task.md` |
| `src/app/layout.tsx` | 🔧 Refactor | Keep App Router structure; replace fonts, metadata, and theme |
| `src/app/globals.css` | 🔧 Refactor | Keep Tailwind import; replace color tokens and add design tokens |
| `src/app/page.tsx` | ❌ Replace | No salvageable custom content |
| `public/` SVGs | ❌ Remove | Vercel/Next.js branding assets |
| `references/` | ✅ Preserve | As mandated |

## 13. What Must Be Rebuilt

1. **Entire homepage** — Replace default template with editorial first screen
2. **Design system** — Fonts (Space Grotesk + Chinese font), color palette (warm tones, no tech blue), spacing tokens
3. **Globals CSS** — New `@theme inline` with brand colors, typography scale, semantic tokens
4. **Layout** — Proper `<html lang="zh">`, explicit dark/light control, metadata
5. **Font loading** — Replace Geist with Space Grotesk for English, MiSans or similar for Chinese
6. **Public assets** — Remove Vercel/Next.js SVGs; add personal favicon
7. **Content system** — Add MDX support, content directory, frontmatter schema
8. **Works routes** — `/works` list + `/works/[slug]` detail pages
9. **Static export config** — If targeting GitHub Pages

## 14. Risk Items

| Risk | Severity | Mitigation |
|------|----------|------------|
| Next.js 16 API changes | Medium | Read `node_modules/next/dist/docs/` before writing code |
| ESLint FlatCompat circular ref | Low | Known workaround exists |
| Static export + dynamic routes | Medium | Must implement `generateStaticParams` |
| `next/image` + static export | Low | Set `images.unoptimized: true` |
| TypeScript strictness exposing weak schemas | Low | Good — catches errors early |
| CJK font loading performance | Medium | Subset fonts, preload critical weights |
| Turbopack vs webpack | Low | Don't use webpack-specific features |

## 15. Recommendations

### Homepage
1. Remove default template entirely
2. Establish editorial first screen with "HuoHuoOvO / 火火 / 这里是一些低温燃烧的东西。"
3. Large, bold typography — HuoHuoOvO as visual anchor
4. Limited navigation (3-4 links)
5. Hint at archival nature without showing all content

### Content System
1. Start with local MDX in `content/works/`
2. Define frontmatter schema: `title`, `slug`, `year`, `type`, `description`, `cover`, `status`, `order`
3. Implement loader + `generateStaticParams`
4. Keep content separate from presentation

### Styling
1. Define paper/ink/warm palette tokens
2. Space Grotesk for English, quality Chinese font
3. Explicit theme class (not media-query-only dark mode)
4. Typography scale: 6-8 sizes with proportional line heights
5. Avoid Tech Blue, purple gradients, glass morphism, bento grids

### Motion
1. CSS transitions first; add Framer Motion only when CSS is insufficient
2. `prefers-reduced-motion` from day one
3. Motion should serve editorial purpose, not spectacle

### Implementation Order (Phases)
1. **Phase 1:** Design system foundation (fonts, colors, spacing)
2. **Phase 2:** Homepage structure + responsive
3. **Phase 3:** MDX content system
4. **Phase 4:** `/works` list page
5. **Phase 5:** `/works/[slug]` detail page
6. **Phase 6:** Motion, interaction, accessibility
7. **Phase 7:** Visual QA, performance, cleanup

### What to Avoid
- ❌ Adding animation libraries before design foundation
- ❌ Building all pages at once
- ❌ Importing heavy UI libraries for minor effects
- ❌ Creating a "portfolio grid" of equal cards
- ❌ "Hello, I am a designer" hero patterns
- ❌ Particle backgrounds, 3D elements, floating elements
