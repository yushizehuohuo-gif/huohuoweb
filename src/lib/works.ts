import { access, readFile, readdir } from "fs/promises";
import { join } from "path";
import matter from "gray-matter";
import { z } from "zod";

// --- Types ---

export const workTypeEnum = z.enum([
  "game",
  "visual",
  "experiment",
  "writing",
  "other",
]);
export type WorkType = z.infer<typeof workTypeEnum>;

export const workStatusEnum = z.enum(["completed", "in-progress", "archived"]);
export type WorkStatus = z.infer<typeof workStatusEnum>;

const workTypeLabels: Record<WorkType, string> = {
  game: "Game",
  visual: "Visual",
  experiment: "Experiment",
  writing: "Writing",
  other: "Other",
};

const workStatusLabels: Record<WorkStatus, string> = {
  completed: "Completed",
  "in-progress": "In progress",
  archived: "Archived",
};

export function formatWorkType(type: WorkType) {
  return workTypeLabels[type];
}

export function formatWorkStatus(status: WorkStatus) {
  return workStatusLabels[status];
}

export const workSchema = z.object({
  title: z.string().min(1),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9-]+$/, "slug must be URL-safe lowercase with hyphens"),
  year: z.number().int().min(2000).max(2100),
  type: workTypeEnum,
  description: z.string().min(1).max(200),
  cover: z.string().min(1).startsWith("/", "cover must start with /"),
  status: workStatusEnum,
  order: z.number().int(),
  role: z.string().optional(),
});

export type Work = z.infer<typeof workSchema> & {
  fileName: string;
  coverExists: boolean;
};

// --- Content directory ---

const WORKS_DIR = join(process.cwd(), "content", "works");

async function publicAssetExists(publicPath: string): Promise<boolean> {
  if (!publicPath.startsWith("/")) {
    return false;
  }

  try {
    await access(join(process.cwd(), "public", publicPath.slice(1)));
    return true;
  } catch {
    return false;
  }
}

// --- Loader functions ---

let worksCache: Work[] | null = null;

export async function getAllWorks(): Promise<Work[]> {
  if (worksCache) return worksCache;

  const filenames = await readdir(WORKS_DIR);
  const mdxFiles = filenames.filter((fileName) => fileName.endsWith(".mdx"));

  const works: Work[] = [];

  for (const file of mdxFiles) {
    const filePath = join(WORKS_DIR, file);
    const raw = await readFile(filePath, "utf-8");
    const { data } = matter(raw);

    const parsed = workSchema.safeParse(data);
    if (!parsed.success) {
      const errors = parsed.error.issues
        .map((issue) => `  - ${issue.path.join(".")}: ${issue.message}`)
        .join("\n");
      throw new Error(`Invalid frontmatter in ${file}:\n${errors}`);
    }

    works.push({
      ...parsed.data,
      fileName: file,
      coverExists: await publicAssetExists(parsed.data.cover),
    });
  }

  const slugs = works.map((work) => work.slug);
  const dupes = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);
  if (dupes.length > 0) {
    throw new Error(`Duplicate slugs found: ${[...new Set(dupes)].join(", ")}`);
  }

  works.sort((a, b) => {
    if (a.order !== b.order) return b.order - a.order;
    if (a.year !== b.year) return b.year - a.year;
    return a.title.localeCompare(b.title);
  });

  worksCache = works;
  return works;
}

export async function getWorkBySlug(slug: string): Promise<Work | null> {
  const works = await getAllWorks();
  return works.find((work) => work.slug === slug) ?? null;
}

export async function getWorkSlugs(): Promise<string[]> {
  const works = await getAllWorks();
  return works.map((work) => work.slug);
}
