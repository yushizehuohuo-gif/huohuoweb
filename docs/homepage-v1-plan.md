# Homepage V1 Plan

Date: 2026-07-07
Status: implementation guide for current v1

## Goal

Implement the first homepage version for **HuoHuo Field / 火火场域**.

The page should make one thing clear:

> Nick Huo / HuoHuoOvO moves between games, communities, AI tools, visual experiments, personal writing, and emotional memory.

## Scope

Allowed in v1:

- Update `src/app/page.tsx`.
- Add homepage-only components.
- Add homepage static data.
- Add small design tokens for the field palette.
- Keep `/works` and existing MDX content.
- Make existing work covers optional so missing files do not visually break pages.

Not allowed in v1:

- No dependency installs.
- No animation library.
- No fake OS desktop.
- No 3D scene.
- No global content migration.
- No deletion of old docs or existing content.
- No private Obsidian content on the public page.

## Page Structure

1. Hero Field
2. Dimension Map
3. Featured Work / Signal Workbench
4. Ideas + Thinking Preview
5. Visual Lab Preview
6. Emotion / Residue
7. Archive Teaser
8. Handoff

## Dimensions

- Work / 工作
- Ideas / 理念
- Art / 艺术
- Thinking / 思考
- Emotion / 情绪
- Tools / 工具

## Implementation Notes

- Use static arrays for v1.
- Use CSS/SVG only for visual anchors.
- Treat Work as one dimension, not the full identity.
- Keep Signal Workbench inside the Work section.
- Use no-image placeholders for visual material until real assets are ready.

