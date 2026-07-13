import type { ComponentType } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GrainOverlay from "@/components/grain-overlay";
import SiteFooter from "@/components/site-footer";
import SiteNav from "@/components/site-nav";
import {
  getAllNotes,
  getNoteBySlug,
  getNoteSlugs,
} from "@/lib/notes";
import AfterSinglesDay from "../../../../content/notes/after-singles-day.mdx";
import ConsciousnessDiffusion from "../../../../content/notes/consciousness-diffusion.mdx";
import DisgustAndBurning from "../../../../content/notes/disgust-and-burning.mdx";
import Falling from "../../../../content/notes/falling.mdx";
import Friendship from "../../../../content/notes/friendship.mdx";
import GoodNight from "../../../../content/notes/good-night.mdx";
import Gathering from "../../../../content/notes/gathering.mdx";
import LoveAndAffection from "../../../../content/notes/love-and-affection.mdx";
import PullYourselfTogether from "../../../../content/notes/pull-yourself-together.mdx";

const noteModules: Record<string, ComponentType> = {
  "after-singles-day": AfterSinglesDay,
  "consciousness-diffusion": ConsciousnessDiffusion,
  "disgust-and-burning": DisgustAndBurning,
  falling: Falling,
  friendship: Friendship,
  "good-night": GoodNight,
  gathering: Gathering,
  "love-and-affection": LoveAndAffection,
  "pull-yourself-together": PullYourselfTogether,
};

type NotePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getNoteSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);
  if (!note) return { title: "Not Found" };

  const url = `https://yushizehuohuo-gif.github.io/huohuoweb/notes/${note.slug}/`;

  return {
    title: note.title,
    description: note.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${note.title} | HuoHuoOvO`,
      description: note.description,
      type: "article",
      url,
    },
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);
  if (!note) notFound();

  const notes = await getAllNotes();
  const currentIndex = notes.findIndex((item) => item.slug === slug);
  const previousNote = currentIndex > 0 ? notes[currentIndex - 1] : null;
  const nextNote = currentIndex < notes.length - 1 ? notes[currentIndex + 1] : null;
  const MdxContent = noteModules[slug];

  if (!MdxContent) {
    throw new Error(`MDX module not found for note slug: ${slug}`);
  }

  return (
    <>
      <GrainOverlay />
      <SiteNav />
      <main
        id="main-content"
        tabIndex={-1}
        className="relative z-10 overflow-x-clip px-5 pb-20 pt-28 sm:px-8 md:px-10 md:pt-32 lg:px-16"
      >
        <article className="mx-auto max-w-[1240px]">
          <header className="grid gap-10 border-t border-rule pt-6 md:grid-cols-[0.32fr_0.68fr] md:gap-14">
            <div>
              <Link
                href="/notes/"
                className="font-display text-sm text-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-4"
              >
                ← Notes
              </Link>
              <p className="micro-meta mt-8 uppercase text-muted">
                {note.era} · by YUSHIZE
              </p>
            </div>
            <div>
              <p className="eyebrow eyebrow-accent">Field note</p>
              <h1 className="mt-5 font-cjk text-4xl font-medium leading-tight text-ink md:text-6xl">
                {note.title}
              </h1>
              <p className="mt-6 max-w-2xl font-cjk text-base leading-[1.9] text-muted md:text-lg">
                {note.description}
              </p>
            </div>
          </header>

          <div className="note-body mx-auto mt-16 max-w-[720px] border-t border-rule pt-10 md:mt-24 md:pt-14">
            <MdxContent />
          </div>

          <div className="mx-auto mt-16 max-w-[720px] border-t border-rule pt-8">
            <Link
              href="/notes/"
              className="font-display text-sm text-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-4"
            >
              ← Back to Notes
            </Link>
          </div>

          <nav
            aria-label="Adjacent notes"
            className="mx-auto mt-16 grid max-w-[960px] gap-px border border-rule bg-rule sm:grid-cols-2"
          >
            {previousNote ? (
              <Link
                href={`/notes/${previousNote.slug}/`}
                className="work-pagination-link bg-paper"
              >
                <span className="eyebrow eyebrow-muted">Previous note</span>
                <span>{previousNote.title}</span>
              </Link>
            ) : (
              <span className="hidden bg-paper sm:block" aria-hidden="true" />
            )}
            {nextNote ? (
              <Link
                href={`/notes/${nextNote.slug}/`}
                className="work-pagination-link bg-paper sm:text-right"
              >
                <span className="eyebrow eyebrow-muted">Next note</span>
                <span>{nextNote.title}</span>
              </Link>
            ) : (
              <span className="hidden bg-paper sm:block" aria-hidden="true" />
            )}
          </nav>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
