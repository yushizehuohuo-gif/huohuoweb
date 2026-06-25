# 实施路线图（Implementation Roadmap）

本文档把 [homepage-direction.md](./homepage-direction.md) 与 [works-system-plan.md](./works-system-plan.md) 拆成可独立验证的实施阶段。每个阶段都应保持小范围提交，避免一次性重写整站。

## 3.1 阶段拆分（Phase Breakdown）

### Phase 1: Design System Foundation（设计系统基础）

范围（Scope）：
- `src/app/globals.css`：替换默认 tokens，加入 `@theme inline` 颜色、字体、字号变量。
- `src/app/layout.tsx`：替换 Geist 为 `Space Grotesk`、`Noto Serif SC`、可选 `IBM Plex Mono`；更新 `metadata`；设置 `html lang="zh-CN"`；建立 light 默认与显式 theme class 的基础。
- `tailwind.config.*`：如果存在则移除或确认不需要；当前 scaffold 没有该文件，不新增。
- `public/`：删除 Vercel / Next starter SVG：`file.svg`、`globe.svg`、`next.svg`、`vercel.svg`、`window.svg`。

不包含（NOT in scope）：
- 不改首页内容结构。
- 不新增 Works 页面。
- 不配置 MDX。
- 不引入 motion library。
- 不改 `references/`。

交付物（Deliverable）：
- 全站基础 colors/fonts/tokens 可用。
- 默认 light mode 是 `#F4EFE4` 暖纸色，不再是纯白。
- 字体变量可在 Tailwind v4 中通过 theme token 使用。
- `npm run build` 通过。

预计文件数（Estimated files）：
- 3-4 modified。

### Phase 2: Homepage Structure（首页结构）

范围（Scope）：
- `src/app/page.tsx`：完整重建首页首屏，保留固定三行核心文本。
- 可新增 `src/components/site-nav.tsx`。
- 可新增 `src/components/grain-overlay.tsx`。
- 可新增 `src/components/site-footer.tsx`，如果首页内容流需要 footer。

不包含（NOT in scope）：
- 不做 Works 页面。
- 不做 MDX。
- 不安装 animation library。
- 不做 About/Now 详情页；导航可先只链接已存在路由，未实现项暂不展示。

交付物（Deliverable）：
- 首页前 `100svh` 形成 editorial poster composition。
- `HuoHuoOvO` 是最大视觉锚点，`火火` 与固定 tagline 层级明确。
- Desktop、tablet、mobile 三个断点重新排布，不只是缩小。
- 没有 Vercel starter 文案和 CTA。

预计文件数（Estimated files）：
- 3-5 new/modified。

### Phase 3: MDX Content System（MDX 内容系统）

范围（Scope）：
- 安装 MDX 与 frontmatter 校验依赖：`@next/mdx`、`@mdx-js/loader`、`@mdx-js/react`、`@types/mdx`、`gray-matter`、`zod`、`remark-frontmatter`、`remark-mdx-frontmatter`。
- `next.config.ts`：接入 `@next/mdx`，设置 `pageExtensions`；若确认静态托管目标，加入 `output: "export"`、`trailingSlash: true`、`images.unoptimized: true`。
- 新增 `mdx-components.tsx`。
- 新增 `content/works/`。
- 新增 `src/lib/works.ts`。
- 新增 2-3 个 sample works。

不包含（NOT in scope）：
- 不做 Works list UI。
- 不做 Works detail layout。
- 不做复杂 MDX shortcode。
- 不迁移或修改 `references/`。

交付物（Deliverable）：
- `npm run build` 能解析本地 MDX。
- `src/lib/works.ts` 有类型化 loader，能校验 frontmatter。
- sample works 可被读取、排序、按 slug 查询。

预计文件数（Estimated files）：
- 5-7 new/modified。

### Phase 4: /works List Page（/works 列表页）

范围（Scope）：
- 新增 `src/app/works/page.tsx`。
- 可新增 `src/components/work-list.tsx`。
- 可新增 `src/components/work-entry.tsx`。
- 使用 `getAllWorks()` 渲染作品索引。

不包含（NOT in scope）：
- 不做 `/works/[slug]` 详情页。
- 不做 filter 或 sort controls。
- 不做图片 lightbox。
- 不改变 MDX loader schema。

交付物（Deliverable）：
- `/works/` 是 editorial work index，不是 card grid。
- 每个条目显示 title、year、type、description、status，cover 可按节奏选择显示。
- Mobile 单列，desktop editorial grid。
- Build、type check、lint 全通过。

预计文件数（Estimated files）：
- 3-4 new。

### Phase 5: /works/[slug] Detail Page（作品详情页）

范围（Scope）：
- 新增 `src/app/works/[slug]/page.tsx`。
- 实现 `generateStaticParams`。
- 实现 `generateMetadata`。
- 使用 `notFound()` 处理未知 slug。
- 渲染对应 MDX body。

不包含（NOT in scope）：
- 不做 image lightbox。
- 不做复杂 per-work 自定义 layout engine。
- 不做评论、搜索、标签页。
- 不扩展内容 schema，除非 Phase 3 发现必须修正。

交付物（Deliverable）：
- 每个 work 都有独立详情页。
- 动态 metadata 来自 frontmatter。
- 未知 slug 返回 404。
- `params` 按 Next.js 16 要求作为 `Promise` 处理。

预计文件数（Estimated files）：
- 2-3 new。

### Phase 6: Motion & Accessibility（动效与可访问性）

范围（Scope）：
- CSS transitions 与首屏文字 reveal。
- Grain / paper texture 的最终 CSS。
- Keyboard navigation。
- `focus-visible` 状态。
- `prefers-reduced-motion` fallback。
- 检查 nav、back link、works entry 链接的 hover/focus/active 状态。

不包含（NOT in scope）：
- 不新增页面。
- 不改内容字段。
- 不引入 Framer Motion，除非 CSS 无法满足一个明确交互需求。
- 不做滚动中大量元素 fade-in-float-up。

交付物（Deliverable）：
- 动效关闭后页面仍完整可读。
- 所有交互元素可键盘访问。
- Focus state 清晰但不破坏视觉语气。
- Grain 不影响文字对比度与性能。

预计文件数（Estimated files）：
- 2-3 modified。

### Phase 7: Visual QA & Cleanup（视觉 QA 与清理）

范围（Scope）：
- Browser screenshots：`1440px`、`1280px`、`390px`。
- 检查无水平滚动。
- 清理未使用代码、未使用 imports、废弃 starter assets。
- 检查图片尺寸、懒加载、静态导出输出。
- Build size 粗查。

不包含（NOT in scope）：
- 不新增功能。
- 不新增内容。
- 不重写已通过验收的设计系统。
- 不改 `references/`。

交付物（Deliverable）：
- 视觉质量在 desktop/tablet/mobile 都符合方向文档。
- Clean build。
- 无死代码。
- 无 Vercel starter 残留。

预计文件数（Estimated files）：
- 0-2 modified。

## 3.2 阶段依赖（Dependencies Between Phases）

- Phase 2 depends on Phase 1。
- Phase 3 is independent，可以与 Phase 1-2 并行准备；但如果单人顺序实施，建议先完成 Phase 1-2，再接 Phase 3。
- Phase 4 depends on Phase 3。
- Phase 5 depends on Phase 3-4。
- Phase 6 depends on Phase 2-5，因为动效、focus 与 reduced-motion 要覆盖所有已存在页面。
- Phase 7 depends on Phase 1-6。

## 3.3 分阶段验收标准（Acceptance Criteria Per Phase）

每个阶段共同必须通过：
- `npm run build`
- `npx tsc --noEmit`
- `npm run lint`
- Browser 中无 runtime errors。
- 不修改 `references/`。
- 不引入与该阶段无关的文件改动。

Phase 1 视觉检查：
- 页面背景不是 `#ffffff` 或 `#0a0a0a`。
- `@theme inline` 中存在 paper、ink、accent、rule、muted token。
- `layout.tsx` metadata 不再是 `Create Next App`。
- Geist 不再作为主字体。

Phase 2 视觉检查：
- 首屏必须出现三行固定文本：`HuoHuoOvO`、`火火`、`这里是一些低温燃烧的东西。`
- 1440px 下主构图不垂直居中。
- 390px 下文字不溢出、不水平滚动。
- 导航不超过 4 个链接，无 hamburger。
- 首屏底部有轻微档案深度提示。

Phase 3 视觉/功能检查：
- `content/works/` 中 sample MDX 可被 loader 读取。
- malformed frontmatter 会让 build 失败。
- `getAllWorks()` 排序按 `order` 降序。
- 静态导出配置与 `next/image` 限制一致：如果 `output: "export"` 启用，则 `images.unoptimized: true` 同步启用。

Phase 4 视觉检查：
- `/works/` 不是等宽 card grid。
- 每个 entry 都有 title、year、type、description、status。
- cover 显示有节奏差异，不强制每条完全同构。
- Mobile 是单列，desktop 是 editorial grid。

Phase 5 功能检查：
- `generateStaticParams` 覆盖所有 work slug。
- `generateMetadata` 为每个 work 输出对应 title、description、openGraph。
- 未知 slug 调用 `notFound()`。
- 直接访问一个已知 work URL 能渲染详情页。

Phase 6 可访问性检查：
- Tab 顺序符合视觉顺序。
- 所有 link/button 有可见 `focus-visible`。
- `prefers-reduced-motion: reduce` 下没有明显动画。
- Grain overlay 不拦截点击，`pointer-events: none`。

Phase 7 QA 检查：
- 截图断点：1440、1280、390。
- 任一断点无水平滚动。
- 首屏文字、导航、Works entries 不重叠。
- 无 starter SVG 引用。
- Build output 中 `/works/` 和 work detail pages 存在。

## 3.4 风险缓解（Risk Mitigation）

- 每个 phase 完成后单独 git commit，便于回滚。
- 不跳过阶段间验证；一个阶段未通过 build/type/lint，不进入下一阶段。
- 如果某阶段引入 regression，先修复 regression，再继续后续阶段。
- 每阶段文件数控制在 10 个以内；如果超过，拆分阶段。
- `references/` 目录全程 untouched。
- Next.js 16 相关 API 以本地 `node_modules/next/dist/docs/` 为准，尤其是 `params: Promise`、`generateStaticParams`、`generateMetadata`、static export 限制。
- 静态导出下不依赖服务端 runtime、cookies、headers、ISR、默认 `next/image` optimization。
- CJK 字体可能增加 bundle 体积；Phase 1 后检查实际 build 输出，如过大，优先减少 weights，而不是换回 Geist。
- Motion 只在 Phase 6 集中处理；前面阶段不零散添加动画，避免后续统一 reduced-motion 时返工。
