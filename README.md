# HuoHuoOvO

HuoHuoOvO 的个人工作索引与作品档案。网站以杂志式编排呈现游戏社区、视觉实验和长期项目记录，并针对桌面端与移动端做了响应式适配。

线上地址：[yushizehuohuo-gif.github.io/huohuoweb](https://yushizehuohuo-gif.github.io/huohuoweb/)

## 技术栈

- Next.js 16 App Router
- React 19 + TypeScript
- Tailwind CSS 4
- MDX 作品内容
- GitHub Pages 静态部署

## 本地运行

```bash
npm ci
npm run dev
```

打开 [http://localhost:3000/](http://localhost:3000/)。生产构建会自动挂载到 GitHub Pages 的 `/huohuoweb/` 路径。

提交前可运行完整检查：

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## 内容结构

- `src/app/page.tsx`：主页入口
- `src/components/home/`：主页各编辑区块
- `src/app/works/`：作品索引与作品详情页
- `content/works/`：MDX 作品正文
- `src/lib/works.ts`：作品读取、排序与元数据格式化

新增作品时，在 `content/works/` 创建 MDX 文件并填写 frontmatter；缺少封面图片时，页面会使用项目内置的代码生成封面。

## 部署

推送到 `master` 后，`.github/workflows/pages.yml` 会构建静态站点并发布到 GitHub Pages。
