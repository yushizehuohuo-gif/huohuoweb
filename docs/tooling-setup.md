# Tooling Setup for Visual Rework

Date: 2026-07-07
Scope: visual rework pre-stage and tool capability check only.
Status: checked. No homepage code, CSS, component, dependency, or project config was changed in this stage.

## 1. Summary

This pass confirmed that the current project can be previewed and visually reviewed without adding new dependencies.

The strongest available workflow for the next visual phase is:

1. Run the local Next.js dev server.
2. Open the page through the browser / Playwright MCP.
3. Capture desktop and mobile screenshots.
4. Review screenshots directly.
5. Only then implement the next visual version.

No new tools were installed in this pass.

## 2. Local Project Environment

Checked capabilities:

- Filesystem access: available.
- Shell access: available through PowerShell.
- Git: available at `C:\Program Files\Git\cmd\git.exe`.
- Node.js: available, version `v24.16.0`.
- npm: available through `npm.cmd`, version `11.13.0`.
- `npm` PowerShell shim: blocked by Windows execution policy. Use `npm.cmd` instead.
- `npx`: available through `npx.ps1`.
- `rg`: available.

Commands used:

```powershell
Get-Command git, node, npm, npx, rg | Select-Object Name, Source
node --version
npm.cmd --version
git status --short
git diff --name-only
```

Notes:

- The working tree already contains the current v1 homepage changes from the previous stage.
- This stage did not revert those changes and did not add more UI changes.
- Future validation commands should prefer `npm.cmd run build`, `npm.cmd run lint`, and `npx.cmd tsc --noEmit` on this Windows setup.

## 3. Dev Server and Current Preview

Current local preview:

- URL: `http://127.0.0.1:3001`
- HTTP status: `200`
- Page title detected by browser: `HuoHuoOvO`

Command used:

```powershell
Invoke-WebRequest -Uri http://127.0.0.1:3001 -UseBasicParsing -TimeoutSec 5
```

The dev server was already reachable on port `3001`, so no new server process was required for this check.

## 4. Browser / Playwright Capability

Available through MCP:

- `mcp__playwright.browser_tabs`
- `mcp__playwright.browser_resize`
- `mcp__playwright.browser_take_screenshot`
- `mcp__playwright.browser_snapshot`

Verified actions:

- Opened `http://127.0.0.1:3001`.
- Resized viewport to desktop `1440 x 900`.
- Captured desktop first-screen screenshot.
- Captured desktop full-page screenshot.
- Resized viewport to mobile `390 x 844`.
- Captured mobile first-screen screenshot.
- Captured mobile full-page screenshot.
- Visually inspected the screenshots.

Screenshot files:

- `C:\Users\yushi\Documents\Codex\2026-07-07\ni\huohuoweb-v1-desktop-first.png`
- `C:\Users\yushi\Documents\Codex\2026-07-07\ni\huohuoweb-v1-desktop-full.png`
- `C:\Users\yushi\Documents\Codex\2026-07-07\ni\huohuoweb-v1-mobile-first.png`
- `C:\Users\yushi\Documents\Codex\2026-07-07\ni\huohuoweb-v1-mobile-full.png`

Important finding:

- The project does not need local Playwright installation for manual visual QA because the Playwright MCP can already capture screenshots.

## 5. Local Playwright Package Check

Checked whether Playwright is installed in the project:

```powershell
node -e "for (const m of ['playwright','@playwright/test']) { try { require.resolve(m); console.log(m + ':installed') } catch { console.log(m + ':missing') } }"
```

Result:

- `playwright:missing`
- `@playwright/test:missing`

Decision:

- Do not install Playwright now.
- Use the existing Playwright MCP for this visual rework stage.
- Consider installing `@playwright/test` only later if the project needs repeatable screenshot regression tests in the repo.

## 6. Browser Plugin / Node REPL

Checked capabilities:

- Browser plugin skill is available.
- Node REPL MCP is available.
- Node REPL can be used for browser automation when deeper in-app browser control is needed.

Available Node REPL tools:

- `mcp__node_repl.js`
- `mcp__node_repl.js_add_node_module_dir`
- `mcp__node_repl.js_reset`

This pass used Playwright MCP screenshots directly because it was the shortest path for visual evidence.

## 7. Context7 Documentation MCP

Available through MCP:

- `mcp__context7.resolve_library_id`
- `mcp__context7.query_docs`

Verified action:

```text
resolve_library_id("Next.js")
```

Result:

- Resolved to `/vercel/next.js`.
- Context7 includes Next.js `v16.2.9`, matching this project.

Decision:

- Context7 is ready for the implementation phase if we need current Next.js, React, Tailwind, or animation-library docs.
- No Context7 implementation query was needed in this stage because no code changes were made.

## 8. Figma Plugin / MCP

Available through Figma plugin MCP:

- `use_figma`
- `generate_figma_design`
- `get_design_context`
- `get_screenshot`
- `create_new_file`
- `search_design_system`
- `get_libraries`
- `whoami`
- `generate_diagram`

Status:

- Figma tools are available, but were not used in this pass.

Reasons:

- The user did not provide a Figma file URL or file key.
- Creating a new Figma file can require selecting a Figma plan/team.
- Figma write actions require loading the relevant Figma skill first.

Recommendation:

- If the next stage needs a Figma exploration board, ask for permission and either a target Figma file URL or approval to create a new file.

## 9. Visual Design Skill Check

Checked for a dedicated frontend-design / UI / UX / visual-design skill.

Result:

- No separate dedicated visual-design skill was found in the active skill list.
- Available adjacent capabilities are screenshot review, browser preview, Figma MCP, image generation, and general design judgment.

Decision:

- This stage uses direct screenshot critique plus the existing creative direction.
- Later, if a dedicated visual-design skill becomes available, it can be added to the review loop.

## 10. Agent Reach / Internet Research

Used `agent-reach doctor --json` to check internet and platform research capability.

Available now:

- General web pages through Jina Reader.
- RSS / Atom feeds through `feedparser`.
- YouTube metadata / subtitles through `yt-dlp`.
- Bilibili search API.
- V2EX public API.

Unavailable or requiring setup/auth:

- Exa semantic web search: not configured.
- GitHub CLI: installed but not authenticated.
- Twitter/X: backend not installed.
- Reddit: no zero-config backend; requires login-state setup.
- Facebook / Instagram: require OpenCLI and browser login.
- Xiaohongshu: requires OpenCLI or another login/scanning setup.
- LinkedIn: MCP not configured.
- Xueqiu: requires login cookie.

Decision:

- Do not install social-platform tools or request login in this phase.
- Use only general web/reference browsing for broad visual-direction calibration.

## 11. Config and Dependency Changes

Changes made in this stage:

- None.

Not changed:

- `package.json`
- `package-lock.json`
- `next.config.ts`
- homepage components
- CSS
- routes
- content files

New or updated documents in this stage:

- `docs/tooling-setup.md`
- `docs/visual-rework-brief.md`

## 12. Recommended Next QA Loop

For the next implementation phase, use this loop:

1. Implement a coarse visual version.
2. Run or reuse the dev server.
3. Capture screenshots at:
   - desktop `1440 x 900`
   - desktop full page
   - mobile `390 x 844`
   - mobile full page
4. Inspect screenshots directly.
5. Fix layout overlap, hierarchy, spacing, and text fit before considering the version acceptable.
6. Run TypeScript, lint, and build checks only after the visual structure is not obviously wrong.

