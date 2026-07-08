# tacto / MiMo Translation Memo

Date: 2026-07-07
Status: execution memo before visual and motion update.

## 1. tacto: What To Borrow

- Large quiet space before information density appears.
- Editorial structure: small navigation, thin rules, compact indexes, news-like rows.
- Bilingual text as texture, not duplicated explanation.
- Big type that feels cropped and composed, not shouted.
- Links behave like text links: subtle color/position changes, no button performance.
- Sections transition through spacing and rules instead of panels.

## 2. MiMo: What To Borrow

- Repeated identity text as a visual field.
- A simple direct entrance sentence over the pattern.
- Black, white, gray, and thin rules creating enough visual memory without complex images.
- Row-based indexes with numbers and arrows.
- Mobile keeps the same identity pattern but reduces density.

## 3. What Not To Copy

- No copied source code, assets, logo, proprietary copy, or brand shapes.
- No `M I M O` pattern.
- No Xiaomi product-card logic.
- No tacto logo/menu composition copied directly.
- No dashboard / HUD / console / radar / token wall visual language.

## 4. Translation To YUSHIZE

The page should become:

> A personal editorial cover with a HuoHuo text pattern, followed by a light index of work, tools, visual fragments, notes, and archive.

tacto provides the structure and air.
MiMo provides the memorable text-body.
YUSHIZE provides the content temperature:

- `YUSHIZE`
- `HuoHuoOvO / 火火`
- `一些低温燃烧的东西`
- player signals, AI tools, visual experiments, notes, unfinished residue.

## 5. Homepage Structure

1. Cover: name, handle, Chinese anchor line, helper sentence, slow moving text pattern.
2. Index: five editorial rows, not cards.
3. Work: dated work traces, compact and news-like.
4. Visual: one strong cover crop plus fragments with mask reveal.
5. Notes: short public-safe fragments, light paper feeling.
6. Archive: quiet link to `/works`, no large CTA.

## 6. Visual Rules

- Palette: tacto-like cool off-white, black, quiet gray, and direct blue links. No warm beige, burn red, amber, or gold as the core surface.
- Type: reduce giant headings; let small labels and rules do the structure.
- Chinese: `一些低温燃烧的东西` appears once in the hero, quiet and well spaced.
- Pattern: use `HUOHUO`, `火火`, `FIELD NOTES`, `UNFINISHED`, and the core Chinese line at low opacity.
- Motion: CSS first, then IntersectionObserver for scroll reveal. No animation library needed.
- Reduced motion: disable movement and reveal content immediately.

## 7. Files To Update

- `src/app/page.tsx`
- `src/app/globals.css`
- `src/components/home/cover-hero.tsx`
- `src/components/home/personal-index.tsx`
- `src/components/home/work-trace.tsx`
- `src/components/home/visual-field.tsx`
- `src/components/home/notes-fragments.tsx`
- `src/components/home/archive-footer.tsx`
- New: `src/components/home/text-pattern.tsx`
- New: `src/components/home/motion-observer.tsx`

Unused dashboard components can remain on disk for now, but they must not be imported by the homepage.

## 8. Fidelity Pass Notes

Current online gap:

- The hero pattern borrowed the idea of repeated text, but not MiMo's discipline. It used mixed sizes, mixed weights, row-by-row motion, and rotation.
- The page has sections, but not enough tacto-like web bones: corner navigation, sitemap entries, news/work rows, and address-like footer density.
- Visual still behaves like a cropped image area instead of a strong typographic visual system.
- Notes still read too much like cards.

Corrections:

- Pattern becomes a level, horizontal text grid: one size, one weight, one line-height, no rotation, no skew, one slow parent movement.
- Top navigation becomes a tacto-like small corner system: identity left, open/contact center, menu/index right.
- Index becomes a compact sitemap with large editorial entries and fine rules.
- Work becomes a news/work list with period, title, short signal, metadata, and hover line.
- Visual becomes typographic blocks using `HUOHUO`, `火火`, `FIELD NOTES`, `UNFINISHED`, and the core Chinese line.
- Notes become numbered text records with annotations and thin rules.
- Archive/footer becomes a small address-style information grid with works, notes, open topics, and copyright.

## 9. Palette Correction

Latest direction: do not keep the warm archive palette. The page should now lean closer to tacto's restraint:

- cool gray-white background;
- black or near-black typography;
- thin neutral gray rules;
- blue for live links and small active signals;
- no brown, gold, amber, burn red, or beige-led atmosphere.

This means the previous `Field Station` warmth is not expressed through color anymore. It is carried by the Chinese anchor line, personal content, and the quiet editorial rhythm.
