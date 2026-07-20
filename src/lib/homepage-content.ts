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
  helper:
    "我长期参与游戏社区与内容工作：理解玩家、组织信息、推动内容，也把 AI 与视觉工具变成更可靠的工作方法。",
  annotation:
    "Community work, player signals, AI workflows, visual practice, and personal writing — kept together as one evolving body of work.",
  imageSrc: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/home/cover-field.svg`,
};

export const personalIndex: IndexEntry[] = [
  {
    id: "who",
    label: "01",
    title: "About / 关于",
    description:
      "我是 YUSHIZE，也叫火火。长期在游戏社区、内容运营与工具实践之间工作。",
    details: ["YUSHIZE", "HuoHuoOvO", "community & content"],
    href: "#index",
  },
  {
    id: "work",
    label: "02",
    title: "Community / 社区",
    description:
      "围绕玩家反馈、内容策划、创作者生态和社区信任，把分散信号整理成可执行的判断。",
    details: ["Boommunity", "DOTA2", "player signals"],
    href: "#work",
  },
  {
    id: "visual",
    label: "03",
    title: "Visual / 视觉",
    description:
      "用图像生成、排版和视觉系统，为游戏内容与个人项目寻找更准确的表达。",
    details: ["image making", "typography", "visual systems"],
    href: "#visual",
  },
  {
    id: "notes",
    label: "04",
    title: "Notes / 文字",
    description:
      "九篇跨越大学至今的旧文，记录关系、情绪、成长与那些当时无法解释的时刻。",
    details: ["9 essays", "2015—now", "memory & emotion"],
    href: "/notes/",
  },
  {
    id: "archive",
    label: "05",
    title: "Archive / 作品",
    description: "公开作品、视觉研究和持续更新中的项目，按时间与主题归档。",
    details: ["selected works", "visual studies", "project notes"],
    href: "/works/",
  },
];

export const workTraces: WorkTrace[] = [
  {
    label: "2026",
    title: "Boommunity",
    description:
      "把散落在评论、社媒和社区讨论里的玩家反馈，整理成议题、证据与后续动作，让团队能够回看判断是如何形成的。",
    meta: "feedback / evidence / action",
  },
  {
    label: "2025-2026",
    title: "DOTA2 社区与内容运营",
    description:
      "持续参与 DOTA2 社区与内容工作，连接官方发布、活动传播、创作者合作与玩家反馈，关注内容发布之后仍在发生的社区反应。",
    meta: "publishing / creators / community response",
  },
  {
    label: "Ongoing",
    title: "AI Agent 工作流",
    description:
      "围绕真实任务搭建 Obsidian、ChatGPT、Codex 与 Hermes 工作流，让研究、判断、修改和复盘连接起来，减少上下文丢失。",
    meta: "context / collaboration / delivery",
  },
];

export const toolFootnotes: ToolFootnote[] = [
  { tool: "Obsidian", role: "知识库与长期上下文" },
  { tool: "ChatGPT", role: "发散、推演与写作协作" },
  { tool: "Codex", role: "代码修改、检查与交付" },
  { tool: "Hermes", role: "多任务编排与推进" },
  { tool: "ComfyUI", role: "图像生成与视觉试验" },
  { tool: "Figma", role: "界面整理与版式校准" },
];
