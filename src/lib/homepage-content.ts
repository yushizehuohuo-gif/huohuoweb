export type CoverCopy = {
  name: string;
  handle: string;
  anchor: string;
  helper: string;
  annotation: string;
  imageSrc: string;
};

export type IndexEntry = {
  id: string;
  label: string;
  title: string;
  description: string;
  details: string[];
  href: string;
};

export type WorkTrace = {
  label: string;
  title: string;
  description: string;
  meta: string;
};

export type ToolFootnote = {
  tool: string;
  role: string;
};

export const coverCopy: CoverCopy = {
  name: "YUSHIZE",
  handle: "HuoHuoOvO",
  anchor: "一些低温燃烧的东西",
  helper: "我做游戏社区与内容，也用 AI 和视觉工具改进工作方法。",
  annotation:
    "Community work, AI workflows, visual practice, and personal writing.",
  imageSrc: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/home/cover-field.svg`,
};

export const personalIndex: IndexEntry[] = [
  {
    id: "who",
    label: "01",
    title: "About / 关于",
    description: "我是 YUSHIZE，也叫火火。做游戏社区、内容运营与工具实践。",
    details: ["YUSHIZE", "HuoHuoOvO", "community & content"],
    href: "#index",
  },
  {
    id: "work",
    label: "02",
    title: "Community / 社区",
    description: "整理玩家反馈，连接内容策划、创作者生态与社区判断。",
    details: ["Boommunity", "DOTA2", "player signals"],
    href: "#work",
  },
  {
    id: "visual",
    label: "03",
    title: "Visual / 视觉",
    description: "用图像、排版和视觉系统，为内容找到准确表达。",
    details: ["image making", "typography", "visual systems"],
    href: "#visual",
  },
  {
    id: "notes",
    label: "04",
    title: "Notes / 文字",
    description: "九篇从大学留到现在的旧文，关于关系、情绪与成长。",
    details: ["9 essays", "2015—now", "memory & emotion"],
    href: "/notes/",
  },
  {
    id: "archive",
    label: "05",
    title: "Archive / 作品",
    description: "公开作品、视觉研究和持续进行中的项目。",
    details: ["selected works", "visual studies", "project notes"],
    href: "/works/",
  },
];

export const workTraces: WorkTrace[] = [
  {
    label: "2026",
    title: "Boommunity",
    description: "把评论与社区讨论整理成议题、证据和行动，让判断可以回看。",
    meta: "feedback / evidence / action",
  },
  {
    label: "2025-2026",
    title: "DOTA2 社区与内容运营",
    description:
      "连接官方发布、活动传播、创作者合作与玩家反馈，观察内容之后的社区反应。",
    meta: "publishing / creators / community response",
  },
  {
    label: "Ongoing",
    title: "AI Agent 工作流",
    description:
      "连接 Obsidian、ChatGPT、Codex 与 Hermes，让研究、修改和复盘共享上下文。",
    meta: "context / collaboration / delivery",
  },
];

export const toolFootnotes: ToolFootnote[] = [
  { tool: "Obsidian", role: "知识与上下文" },
  { tool: "ChatGPT", role: "思考与写作" },
  { tool: "Codex", role: "代码与交付" },
  { tool: "Hermes", role: "任务编排" },
  { tool: "ComfyUI", role: "图像实验" },
  { tool: "Figma", role: "界面与版式" },
];
