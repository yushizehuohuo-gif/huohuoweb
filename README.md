# HuoHuoOvO

个人网站与作品索引。方向是低温科技杂志式的个人档案：游戏社区、AI 工作流、视觉系统、笔记和公开作品放在同一个安静的索引里。

线上地址：https://yushizehuohuo-gif.github.io/huohuoweb/

## 技术栈

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- MDX 内容
- `output: "export"` 静态导出到 GitHub Pages

## 目录结构

- `src/app/`：App Router 页面、布局、metadata route
- `src/components/`：站点组件和首页区块
- `src/lib/`：内容读取、排序和 frontmatter 校验
- `content/works/`：作品 MDX
- `content/notes/`：笔记 MDX
- `docs/`：设计、实现和任务文档
- `public/`：静态资源

## 本地开发

```bash
npm ci
npm run dev
```

开发服务器默认运行在 http://localhost:3000/。

提交前检查：

```bash
npm run build
npx tsc --noEmit
npm run lint
```

## 部署

项目使用静态导出。推送到 `master` 后，GitHub Actions 构建 Next.js，生成 `out/`，再发布到 GitHub Pages。生产环境使用 `/huohuoweb` 作为 base path。
