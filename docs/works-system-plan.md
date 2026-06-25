# Works 系统计划（Works System Plan）

本文档定义 `/works` 与 `/works/[slug]` 的本地 MDX 内容系统。视觉语言应继承 [homepage-direction.md](./homepage-direction.md) 中的字体、颜色、纸张质感与克制动效；实施阶段见 [implementation-roadmap.md](./implementation-roadmap.md)。

## 2.1 内容架构（Content Architecture）

目录结构：

```text
content/
  works/
    sample-game.mdx
    visual-lab-2026.mdx
```

规则：
- 每个作品一个 `.mdx` 文件。
- 新增作品只需要创建一个 `.mdx` 文件，并补齐 frontmatter；不改 React 组件、不改硬编码数组。
- 文件名建议与 slug 一致，例如 `low-temperature-room.mdx`。
- `references/` 目录可以作为素材来源记录，但实现阶段不清理、不移动、不改写该目录。

Frontmatter schema：

```yaml
title: string
slug: string # URL-safe；若省略则由 title 或文件名派生，派生失败时报错
year: number
type: "game" | "visual" | "experiment" | "writing" | "other"
description: string # 1-2 句
cover: string # /public 下的公开路径，或 references/ 下的素材路径
status: "completed" | "in-progress" | "archived"
order: number # 手动排序，越大越靠前
role: string # optional，例如 "Game Designer"、"Artist"
```

规范化后的 TypeScript 类型中 `slug` 必须存在。原始 frontmatter 允许省略 `slug`，但只有在能得到 URL-safe slug 时才通过：
- 英文标题可派生：`Low Temperature Room` -> `low-temperature-room`
- 中文标题通常不能可靠派生，必须显式写 `slug`
- 重复 slug 直接让 build 失败

示例：

```mdx
---
title: Low Temperature Room
slug: low-temperature-room
year: 2026
type: experiment
description: 一个关于低温燃烧、房间记忆与交互边界的小实验。
cover: /works/low-temperature-room/cover.jpg
status: in-progress
order: 120
role: Designer / Developer
---

这里写作品正文。可以包含图片、分节、短注释与技术记录。
```

## 2.2 MDX 设置（MDX Setup）

选择：`@next/mdx`，不选择 `next-mdx-remote`。

理由：
- 当前项目是 Next.js 16 App Router，`@next/mdx` 是官方支持路径。
- 内容是本地文件，不需要 remote MDX 的运行时字符串编译模型。
- 静态导出时，MDX 可以在 build 阶段编译为页面内容。
- 本地 Next 文档明确要求 App Router 使用 `@next/mdx` 时提供 `mdx-components.tsx`。

需要安装的包：

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx gray-matter zod remark-frontmatter remark-mdx-frontmatter
```

职责划分：
- `@next/mdx`：让 `.mdx` 可作为模块导入。
- `remark-frontmatter`、`remark-mdx-frontmatter`：让 MDX 编译阶段能接受 YAML frontmatter。
- `gray-matter`：在 `src/lib/works.ts` 中读取 frontmatter，供列表、排序、metadata 使用。
- `zod`：校验 frontmatter，错误在 build 阶段暴露。

`next.config.ts` 规划：

```ts
import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      "remark-frontmatter",
      ["remark-mdx-frontmatter", { name: "frontmatter" }],
    ],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default withMDX(nextConfig);
```

Turbopack 注意事项：
- remark / rehype 插件优先使用字符串名称或可序列化配置。
- 不在 config 中传不可序列化函数。

MDX 组件：
- 新增 `mdx-components.tsx`，位置在项目根或 `src/` 根层级，按 Next 约定提供 `useMDXComponents`。
- 覆盖 `img`、`a`、`pre`、`code`、`h2`、`h3`、`blockquote` 等基础元素。
- 图片默认可先用原生 `img`，如果启用 `next/image`，静态导出下必须配合 `images.unoptimized: true`。

Body 渲染方式：
- `/works/[slug]/page.tsx` 先用 loader 找到 work 元数据。
- 再按 `work.fileName` 动态 import 对应 MDX module，渲染默认导出的 Server Component。
- 如果 Turbopack 对动态 import 表达式限制过严，退回到一个显式 manifest，例如 `src/lib/work-modules.ts`，但仍然保持“一篇作品一个 MDX 文件”的内容架构。

## 2.3 数据加载（Data Loading）

Loader 文件：`src/lib/works.ts`

导出内容：
- `WorkType`
- `WorkStatus`
- `Work`
- `getAllWorks()`
- `getWorkBySlug(slug: string)`
- `getWorkSlugs()`

实现职责：
- 使用 `fs/promises` 读取 `content/works/`。
- 只接受 `.mdx` 文件。
- 使用 `gray-matter` 解析 frontmatter。
- 使用 `zod` 校验字段类型、枚举值、必填项与 `description` 长度。
- 规范化 slug：frontmatter slug 优先，其次文件名，其次 title 派生；结果必须 URL-safe。
- 检查重复 slug。
- 按 `order` 降序排序；`order` 相同则按 `year` 降序，再按 `title` 升序。

缓存策略：
- 静态导出，内容只在 build 阶段读取。
- 不在客户端 fetch 内容。
- `getAllWorks` 可以用 React `cache()` 包裹，避免 `generateStaticParams`、`generateMetadata` 与页面渲染重复读文件。

错误处理：
- 缺少 `title`、`year`、`type`、`description`、`cover`、`status`、`order`：throw build error。
- `type` 或 `status` 不在 enum 内：throw build error。
- `slug` 缺失且不能派生：throw build error，提示具体文件路径。
- slug 重复：throw build error，列出冲突文件。
- `cover` 不是 `/` 或 `references/` 开头：throw build error。
- `role` 可省略；省略时 UI 不渲染 role 行。

## 2.4 路由（Routing）

路由：
- `/works/`：作品列表页。
- `/works/[slug]/`：作品详情页。

Next.js 16 约束：
- `params` 是 `Promise`，页面与 metadata 中都必须 `await params`。
- `generateStaticParams` 返回所有 work slug。

详情页规划：

```ts
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllWorks().map((work) => ({ slug: work.slug }));
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();
  // render MDX body
}
```

404：
- 未知 slug 使用 `notFound()`。
- `dynamicParams = false` 让未列入 `generateStaticParams` 的路径在静态导出语义下明确失败。

Trailing slash：
- 因计划使用 `output: "export"`，配置 `trailingSlash: true`。
- 内部链接统一写 `/works/` 与 `/works/${slug}/`。
- 本地 dev 验证 `/works/some-slug` 与 `/works/some-slug/`；静态导出验证以 `/works/some-slug/` 为 canonical。

## 2.5 Works 列表页设计（Works List Page Design）

目标：像私人档案索引和杂志目录，不像 portfolio card grid。

每个 work entry 包含：
- title
- year
- type
- description
- cover 数据存在，但 UI 可选择某些条目不显示 cover，用来制造编辑节奏
- status 以小号文字显示，例如 `in-progress`，不是 badge

布局原则：
- 不使用等宽卡片网格。
- Desktop 可用 12-column editorial grid：标题跨 4-6 列，描述跨 3-4 列，cover 跨 2-5 列。
- 条目之间使用不同节奏：有的 cover 在右侧，有的 cover 较窄，有的只显示文字和细线。
- 大量留白比堆叠内容更重要。
- 第一屏列表顶部保留 `/works` 标题、短说明与排序感，不做营销式 hero。

排序/筛选：
- 初版不做 filter、不做 sort controls。
- 只按 frontmatter `order` 控制顺序。
- 后续内容超过 12 个作品后再考虑 type filter。

状态显示：
- 文案直接用 enum：`completed`、`in-progress`、`archived`。
- 样式为 `sm`、`muted`，可加一条 `1px` accent 短线。
- 不使用圆角 badge、不使用彩色标签堆叠。

## 2.6 Works 详情页设计（Works Detail Page Design）

结构顺序：
1. Title
2. Meta：`year` / `type` / `status` / `role`
3. Cover
4. MDX Body
5. Back link：返回 `/works/`

版式：
- Title 使用 `Space Grotesk` 或中英文混排组合，最大不超过首页主标题重量。
- Meta 使用小号等宽或 Space Grotesk，保持档案索引感。
- Cover 可全宽或偏移，但不放进圆角卡片。
- Body 最大正文宽度建议 `680px-760px`，图片可突破正文宽度。
- 不同作品的节奏由 MDX 内容决定；页面模板只提供基础阅读秩序。

MDX body：
- 支持普通 markdown 段落、标题、列表、链接、图片、代码块、blockquote。
- `img` 默认 `loading="lazy"`，设置 `max-width: 100%`、`height: auto`。
- 如果使用 `next/image`，必须保证静态导出配置 `images.unoptimized: true`。

Metadata：
- `generateMetadata` 根据 work 返回动态 `title`、`description`、`openGraph`。
- 标题格式：`${work.title} | HuoHuoOvO`。
- `openGraph.description` 使用 frontmatter `description`。
- `openGraph.images` 优先使用 `cover`；若 cover 指向 `references/`，则不写入公开 OG image，避免生成不可访问 URL。

Back navigation：
- 详情页底部与顶部可各有一个返回链接，但初版只保留底部一个。
- 文案建议：`← Back to Works` 或 `← 返回 Works`。
- Focus state 与全站导航一致。

## 2.7 响应式（Responsive）

List page：
- Mobile：单列，顺序为 meta -> title -> description -> optional cover，条目之间用留白和细线分隔。
- Tablet：两列过渡，cover 可以穿插到右侧。
- Desktop：editorial grid，不等高、不等宽、不做 card grid。
- 任何 cover 都必须有 `aspect-ratio`，避免图片加载导致布局跳动。

Detail page：
- Mobile：title 与 meta 全宽；cover 全宽；正文宽度随视口，左右 padding `20px-24px`。
- Desktop：正文限制 `680px-760px`，cover 可扩展到 `960px-1120px`。
- 图片懒加载；首图 cover 可设高优先级，但不强制所有图片 priority。
- 代码块允许横向滚动在代码块内部发生，但页面本身不允许水平滚动。

## 2.8 验证（Verification）

必须通过：
- `npm run build`
- `npx tsc --noEmit`
- `npm run lint`

路由验证：
- Build 输出中能看到 `/works/` 与所有 `/works/[slug]/` 被预渲染。
- 直接访问 `/works/some-slug` 在 dev 中可到达对应页面。
- 静态导出后直接访问 `/works/some-slug/` 可到达对应 `index.html`。
- 未知 slug 显示 404。

内容验证：
- malformed frontmatter 会让 build 失败，而不是页面静默缺字段。
- `order` 排序可预测。
- 缺少可派生 slug 的中文标题文件会报错，提示添加显式 `slug`。

类型验证：
- `WorkType` 与 `WorkStatus` 不允许任意字符串。
- `generateStaticParams` 返回 `{ slug: string }[]`。
- `generateMetadata` 与 page props 使用 `params: Promise<{ slug: string }>`。
