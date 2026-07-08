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

export type VisualFragment = {
  label: string;
  title: string;
  caption: string;
  crop: "wide" | "left" | "right" | "lower";
};

export type NoteFragment = {
  label: string;
  text: string;
};

export const coverCopy: CoverCopy = {
  name: "Nick Huo",
  handle: "HuoHuoOvO",
  anchor: "一些低温燃烧的东西",
  helper: "玩家信号、AI 工具、视觉实验、个人笔记，和一些还没找到容器的东西。",
  annotation:
    "A personal index of work traces, tools, visual studies, notes, and unfinished residue.",
  imageSrc: "/home/cover-field.svg",
};

export const personalIndex: IndexEntry[] = [
  {
    id: "work",
    label: "01",
    title: "Work",
    description: "玩家信号、内容节奏、社区判断和可执行的系统。",
    details: ["Boommunity", "DOTA2 community", "Signal workbench"],
    href: "#work",
  },
  {
    id: "tools",
    label: "02",
    title: "Tools",
    description: "不是 badge，而是把注意力、上下文和执行串起来的仪器。",
    details: ["Obsidian", "ChatGPT", "Codex", "Hermes", "ComfyUI", "Figma"],
    href: "#tools",
  },
  {
    id: "writing",
    label: "03",
    title: "Writing",
    description: "短句、笔记、未完成的想法，以及一些还不能归档的余温。",
    details: ["field notes", "unfinished fragments", "memory"],
    href: "#notes",
  },
  {
    id: "visual",
    label: "04",
    title: "Visual",
    description: "图像生成、颜色、纸张感、旧屏幕记忆和私人视觉封面。",
    details: ["cover study", "visual fragments", "paper scan"],
    href: "#visual",
  },
  {
    id: "archive",
    label: "05",
    title: "Archive",
    description: "当前公开作品入口，以及未来会继续长出来的个人索引。",
    details: ["/works", "public notes", "selected traces"],
    href: "/works/",
  },
];

export const workTraces: WorkTrace[] = [
  {
    label: "public work",
    title: "Boommunity",
    description:
      "把分散的玩家讨论整理成议题、问题、动作和可回看的判断。它不是一个炫技项目，更像一套让社区信号变得可处理的方法。",
    meta: "community intelligence / player signal / reviewable action",
  },
  {
    label: "long field",
    title: "DOTA2 community / content operations",
    description:
      "围绕一个长期存在的游戏社区工作：官方内容、活动传播、创作者生态、玩家情绪和那些不会立刻消失的反馈余波。",
    meta: "official content / creator ecosystem / community memory",
  },
  {
    label: "working method",
    title: "Agent workflow / Signal workbench",
    description:
      "用 Obsidian、ChatGPT、Codex、Hermes 和本地工作流把判断推到更前面。工具不是替代人，而是让人更早看见问题的形状。",
    meta: "context / agent / automation / judgment",
  },
];

export const toolFootnotes: ToolFootnote[] = [
  { tool: "Obsidian", role: "keeps context" },
  { tool: "ChatGPT", role: "opens thought" },
  { tool: "Codex", role: "changes files" },
  { tool: "Hermes", role: "coordinates tasks" },
  { tool: "ComfyUI", role: "tests images" },
  { tool: "Figma", role: "fixes shape" },
];

export const visualFragments: VisualFragment[] = [
  {
    label: "visual study 01",
    title: "cover field",
    caption: "warm paper, dark field, muted burn path, old-screen memory",
    crop: "wide",
  },
  {
    label: "visual study 02",
    title: "map afterimage",
    caption: "not a game screenshot, only the feeling of a map remembered late",
    crop: "left",
  },
  {
    label: "visual study 03",
    title: "paper residue",
    caption: "archive slip, scan texture, unfinished note",
    crop: "lower",
  },
  {
    label: "visual study 04",
    title: "red cut",
    caption: "a quiet red cut through paper and old-screen memory",
    crop: "right",
  },
];

export const noteFragments: NoteFragment[] = [
  {
    label: "note 01",
    text: "不是每个信号都应该变成任务。",
  },
  {
    label: "note 02",
    text: "有些东西留下来，是因为它们还没找到容器。",
  },
  {
    label: "note 03",
    text: "游戏社区保存的是长期情绪，不只是反馈。",
  },
  {
    label: "note 04",
    text: "工具不是替代判断，而是把判断推到更前面。",
  },
];

// Compatibility types kept so older unused components still type-check.
export type StationZone =
  | "community"
  | "tools"
  | "visual"
  | "writing"
  | "archive";

export type StationStatus = "active" | "stored" | "fragment" | "public";

export type StationToken = {
  id: string;
  label: string;
  zone: StationZone;
  status: StationStatus;
  short: string;
};

export type LiveFieldZone = {
  title: string;
  titleCn: string;
  status: string;
  description: string;
  tokens: string[];
};

export type WorkDossier = {
  title: string;
  role: string;
  signal: string;
  evidence: string[];
  publicBoundary: "public" | "rewritten" | "private-source";
  accent: "red" | "amber" | "cyan";
};

export type SignalFlowStep = {
  label: string;
  description: string;
};

export type AgentBenchItem = {
  role: string;
  tool: string;
  description: string;
  status: string;
};

export type VisualInventoryItem = {
  title: string;
  label: string;
  description: string;
  variant: "route" | "memory" | "paper" | "signal" | "interface";
};

export type FieldNote = {
  tag: string;
  textCn: string;
  textEn: string;
};

export type ArchiveState = {
  label: string;
  description: string;
  status: string;
};

export type DimensionKey =
  | "work"
  | "ideas"
  | "art"
  | "thinking"
  | "emotion"
  | "tools";

export type Dimension = {
  key: DimensionKey;
  label: string;
  title: string;
  description: string;
  signal: string;
};

export type FeaturedWork = {
  title: string;
  eyebrow: string;
  description: string;
  meta: string[];
};

export type FieldLine = {
  text: string;
  source: string;
};

export type VisualStudy = {
  title: string;
  description: string;
  tone: string;
};
