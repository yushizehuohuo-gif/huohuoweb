# 首页方向（Homepage Direction）

本文档定义首页前 100vh 的设计方向。范围只覆盖视觉基础、首屏结构、导航、响应式、动效与页脚；Works 内容系统见 [works-system-plan.md](./works-system-plan.md)，实施顺序见 [implementation-roadmap.md](./implementation-roadmap.md)。

## 1.1 保留分析（Retention Analysis）

保留：
- `src/app/layout.tsx` 的 App Router 根布局位置保留，但内容需要重构。
- `src/app/globals.css` 中的 `@import "tailwindcss";` 保留，这是 Tailwind CSS v4 的正确入口。
- `package.json` 的 `dev`、`build`、`start`、`lint` scripts 保留。
- `tsconfig.json` 的严格 TypeScript 基础与 `@/*` path alias 保留。
- `postcss.config.mjs` 保留。
- `references/` 目录完整保留，不移动、不删除、不清理。

不保留视觉内容：
- 删除 `public/file.svg`、`public/globe.svg`、`public/next.svg`、`public/vercel.svg`、`public/window.svg`，这些都是 starter/Vercel 品牌资产。
- 移除 `page.tsx` 中的 Next.js logo、Deploy Now、Documentation、Templates、Learning 等默认文字与链接。
- 移除 Geist 字体配置；它偏开发者工具气质，不适合“低温科技杂志”。
- 移除纯白/纯黑视觉基调：`#ffffff`、`#0a0a0a` 不作为主背景。
- 移除只依赖 `prefers-color-scheme` 的暗色模式；后续改为 light 默认、显式 class 切换。

保留结论：当前 scaffold 只保留工程骨架，不保留任何视觉表达。

## 1.2 字体系统（Typography System）

字体策略：
- 英文主字体：`Space Grotesk`，来自 Google Fonts，通过 `next/font/google` 自托管；加载 weights `400`、`500`、`600`、`700`，用途为站名、导航、年份、类型、技术标签与英文界面文字。
- 中文字体：`Noto Sans SC`，weights `400`、`500`、`700`；用途为中文标题、tagline、正文与档案说明。选黑体而非宋体，保持与 personaweb 一致的现代低温感。
- 中文 fallback stack：`"Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif`。
- Monospace 可选：`IBM Plex Mono`，weights `400`、`500`；只用于代码、路径、年份索引或实验编号，不用于正文。

建议在 `layout.tsx` 中定义变量：
- `--font-space-grotesk`
- `--font-noto-sans-sc`
- `--font-ibm-plex-mono`

排版尺度：

| Token | Size | Latin line-height | CJK line-height | Letter spacing | 用途 |
| --- | ---: | ---: | ---: | ---: | --- |
| `sm` | `0.875rem` / 14px | `1.35` | `1.7` | `0` | 小型 meta、状态文字 |
| `base` | `1rem` / 16px | `1.55` | `1.85` | `0` | 正文、导航 |
| `lg` | `1.125rem` / 18px | `1.55` | `1.85` | `0` | tagline、摘要 |
| `xl` | `1.25rem` / 20px | `1.45` | `1.75` | `0` | 首屏中文说明、段落引语 |
| `2xl` | `1.5rem` / 24px | `1.35` | `1.65` | `0` | 小标题 |
| `3xl` | `2rem` / 32px | `1.22` | `1.45` | `0` | 移动端主视觉标题 |
| `4xl` | `3rem` / 48px | `1.08` | `1.25` | `0` | 中文大字、栏目标题 |
| `5xl` | `4.5rem` / 72px | `1` | `1.12` | `0` | 桌面次级展示标题 |
| `6xl` | `6rem` / 96px | `0.95` | `1.08` | `0` | 桌面 `HuoHuoOvO` 主锚点 |

CJK 处理规则：
- 中文正文不使用 Latin 的紧行高；正文最小 line-height 为 `1.75`，长段落建议 `1.85`。
- 中英文混排时，容器使用 CJK line-height，避免中文标点被压住。
- 不使用负 letter-spacing；大标题、导航、meta 全部保持 `0`。

## 1.3 色彩系统（Color Palette）

默认 light mode 是暖纸色，不是纯白。暗色模式可做，但必须是显式 class 切换，不靠 media query 自动覆盖。

核心颜色：
- Background / paper：`#F4EFE4`
- Ink / text：`#241F1A`
- Accent / low-temperature burn：`#A8523D`
- Neutral rule：`#E3DACB`
- Neutral muted：`#AFA392`
- Neutral deep：`#6B6257`

Dark mode：
- Warm dark background：`#1D1A16`
- Warm dark ink：`#E9DFD0`
- Warm dark rule：`#2D2720`
- Warm dark muted：`#8C8072`
- Accent 仍使用 `#A8523D`，不新增第二强调色；只在大面积文字以外的短线、标记、hover 中使用。

`globals.css` 中应使用 CSS custom properties，并映射进 `@theme inline`：

```css
:root,
html.theme-light {
  --paper: #f4efe4;
  --ink: #241f1a;
  --accent-burn: #a8523d;
  --neutral-rule: #e3dacb;
  --neutral-muted: #afa392;
  --neutral-deep: #6b6257;
}

html.theme-dark {
  --paper: #1d1a16;
  --ink: #e9dfd0;
  --accent-burn: #a8523d;
  --neutral-rule: #2d2720;
  --neutral-muted: #8c8072;
  --neutral-deep: #b8ac9c;
}

@theme inline {
  --color-background: var(--paper);
  --color-foreground: var(--ink);
  --color-paper: var(--paper);
  --color-ink: var(--ink);
  --color-accent: var(--accent-burn);
  --color-rule: var(--neutral-rule);
  --color-muted: var(--neutral-muted);
  --color-deep: var(--neutral-deep);

  --font-display: var(--font-space-grotesk);
  --font-cjk: var(--font-noto-sans-sc);
  --font-mono: var(--font-ibm-plex-mono);

  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2rem;
  --text-4xl: 3rem;
  --text-5xl: 4.5rem;
  --text-6xl: 6rem;
}
```

使用限制：
- 不使用 tech blue、紫色渐变、荧光描边。
- Accent 只作为“低温燃烧”的少量痕迹：短线、hover、当前导航、极小标记。
- 大面积背景只使用 paper / warm dark，不做蓝紫渐变。

## 1.4 首屏构图（First Screen Composition）

首屏只做前 `100svh`，不是完整长页面设计。核心三行文字必须原样出现：

```text
HuoHuoOvO
火火
这里是一些低温燃烧的东西。
```

视觉层级：
- `HuoHuoOvO` 是主锚点，使用 `Space Grotesk`、weight `700`、desktop `6xl`，占据最大视觉重量。
- `火火` 是第二层，使用 `Noto Sans SC`、weight `700`、desktop `4xl`。
- Tagline 使用固定文本，不重写、不翻译、不扩写；desktop 使用 `xl`，移动端使用 `lg` 或 `base`。

构图：
- 不做垂直居中、不做 “Hello, I am ...” hero。
- Desktop 采用非对称 editorial poster：主文本块在左侧偏上，约 `top: 22svh`、`left: 9vw`，右侧与底部保留大量空白。
- 画面可以有细线、页码式编号、档案索引式小字，但不加入装饰性图标、粒子、3D 元素。
- 首屏底部保留一个低调的 below-the-fold hint，例如 `— 私人档案馆` 或 `INDEX / WORKS BELOW`，放在左下或右下，字号 `sm`，颜色 `muted`。

首屏边界：
- 只设计 `100svh` 内的首屏与一个轻微的下一屏暗示。
- 不在首页首屏塞 Works 列表、履历、技能、社交 link farm。
- 不使用卡片包住主标题。

## 1.5 导航（Navigation）

导航定位：
- Desktop：右上角或左上角，避开主标题，不抢首屏重量。
- Mobile：顶部横向排列，允许换行成两行，但不使用 hamburger，除非未来链接超过 4 个。

链接数量：
- `Works` -> `/works/`
- `Now` -> `/now/`，后续可做近况页；若未实现，Phase 2 可暂时隐藏。
- `About` -> `/about/`，后续可做简短说明页；不要做传统履历页。
- 可选第 4 个：`Notes` -> `/notes/`，只有确认有内容系统后再加。

样式：
- 纯文字导航，`Space Grotesk` `base` 或 `sm`。
- 默认颜色 `muted`，hover/focus 转 `ink`。
- 当前页面使用 `aria-current="page"`，并用一条 `1px` accent underline 或左侧短线表示 active，不使用彩色 badge。
- Focus state 必须可见：`outline: 1px solid var(--accent-burn)`，`outline-offset: 4px`。

## 1.6 响应式策略（Responsive Strategy）

Desktop `1440px+`：
- 首屏是 editorial poster composition。
- 主标题使用 `6xl`，文本块最大宽度约 `980px`。
- 页面内边距建议 `40px 64px` 或 `clamp` 到固定断点值，但不使用 `vw` 直接缩放字体。
- below-the-fold hint 在底部 8-10vh 内可见。

Tablet `768px-1024px`：
- 主文本块仍偏左，但 `top` 下移到约 `24svh`。
- `HuoHuoOvO` 降为 `5xl`，`火火` 使用 `4xl`，tagline 使用 `xl`。
- 导航保持顶部横排，间距缩小，主标题与导航至少保留 `80px` 垂直距离。

Mobile `320px-428px`：
- 重新构图，而不是把 desktop 缩小。
- 导航固定在顶部内容流内，左对齐或两端分布；主标题从约 `18svh` 开始。
- `HuoHuoOvO` 使用 `4xl` 或 `3xl`，根据 320px 宽度选择 `3xl`，避免单词溢出。
- `火火` 使用 `3xl`，tagline 使用 `base` 或 `lg`，中文 line-height 至少 `1.75`。
- below-the-fold hint 保留，但放到首屏底部左侧，避免遮挡 tagline。
- 全站设置 `overflow-x: clip` 或等效约束，任何 breakpoint 不允许水平滚动。

## 1.7 动效原则（Motion Principles）

动效原则：
- 最多一个主动作：首屏三行文字 on load 进入。
- CSS-first，不引入 animation library；Phase 6 前不安装 Framer Motion。
- 如果删除所有 animation 页面仍成立，说明设计正确。

建议实现：
- `HuoHuoOvO`、`火火`、tagline 三行使用 `opacity` + `transform: translateY(8px)` + `clip-path` 的轻微 reveal。
- Stagger：每行相差 `80ms`。
- Duration：`480ms`。
- Easing：`cubic-bezier(0.2, 0.7, 0.1, 1)`。
- 只在首次加载触发，不做每个元素滚动 fade-in-float-up。

`prefers-reduced-motion`：

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.001ms !important;
  }
}
```

Reduced motion 下首屏为静态排版，不隐藏内容，不等待动画完成。

## 1.8 印刷/纸张质感（Print/Paper Texture）

目标是“轻微纸张、印刷或颗粒质感”，不是明显滤镜。

CSS-only 方案：
- 在 `body::before` 或独立 `GrainOverlay` 组件上创建固定覆盖层。
- `position: fixed; inset: 0; pointer-events: none; z-index: 0;`
- 使用小尺寸 SVG noise data URI 或多层 `radial-gradient` 模拟纸张颗粒。
- Light mode opacity 控制在 `0.025-0.04`；dark mode 控制在 `0.015-0.03`。
- `mix-blend-mode: multiply` 只在不影响文字清晰度时使用；如果导致对比下降，改为普通透明叠加。

性能限制：
- 不使用 Canvas 实时噪声。
- 不在每帧动画 grain。
- 不给正文容器加 `filter`。
- 粒理层必须在文字下方或足够透明，正文对比度不被破坏。

## 1.9 页脚（Footer）

Footer 极简：
- 内容建议：`© 2026 HuoHuoOvO` 和一个可选链接，例如 `Works` 或 `RSS`。
- 语气保持低温、安静、档案感；不做 sitemap、不做社交平台 link farm。
- 位置在页面底部内容流中，不固定悬浮。
- 字号 `sm`，颜色 `muted`，上方使用 `1px` `rule` 或留白，不用卡片。
- 如果首页 Phase 2 只有首屏，Footer 可先不出现；等 Works 或后续内容页加入时再统一落地。
