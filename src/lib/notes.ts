import { readFile, readdir } from "fs/promises";
import { join } from "path";
import matter from "gray-matter";
import { z } from "zod";

export const noteSchema = z.object({
  title: z.string().min(1),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9-]+$/, "slug must be URL-safe lowercase with hyphens"),
  era: z.string().min(1),
  description: z.string().min(1).max(220),
  order: z.number().int(),
});

export type Note = z.infer<typeof noteSchema> & {
  fileName: string;
};

const NOTES_DIR = join(process.cwd(), "content", "notes");

let notesCache: Note[] | null = null;

export async function getAllNotes(): Promise<Note[]> {
  if (notesCache) return notesCache;

  const filenames = await readdir(NOTES_DIR);
  const mdxFiles = filenames.filter((fileName) => fileName.endsWith(".mdx"));
  const notes: Note[] = [];

  for (const fileName of mdxFiles) {
    const raw = await readFile(join(NOTES_DIR, fileName), "utf-8");
    const { data } = matter(raw);
    const parsed = noteSchema.safeParse(data);

    if (!parsed.success) {
      const errors = parsed.error.issues
        .map((issue) => `  - ${issue.path.join(".")}: ${issue.message}`)
        .join("\n");
      throw new Error(`Invalid frontmatter in ${fileName}:\n${errors}`);
    }

    notes.push({ ...parsed.data, fileName });
  }

  const slugs = notes.map((note) => note.slug);
  const duplicates = slugs.filter(
    (slug, index) => slugs.indexOf(slug) !== index,
  );

  if (duplicates.length > 0) {
    throw new Error(
      `Duplicate note slugs found: ${[...new Set(duplicates)].join(", ")}`,
    );
  }

  notes.sort((a, b) => b.order - a.order);
  notesCache = notes;
  return notes;
}

export async function getNoteBySlug(slug: string): Promise<Note | null> {
  const notes = await getAllNotes();
  return notes.find((note) => note.slug === slug) ?? null;
}

export async function getNoteSlugs(): Promise<string[]> {
  const notes = await getAllNotes();
  return notes.map((note) => note.slug);
}
