import type { Metadata } from "next";
import Link from "next/link";
import GrainOverlay from "@/components/grain-overlay";
import SiteFooter from "@/components/site-footer";
import SiteNav from "@/components/site-nav";
import { getAllNotes } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Notes",
  description: "YUSHIZE 从大学时期到现在留下的九篇文章。",
  alternates: {
    canonical: "https://yushizehuohuo-gif.github.io/huohuoweb/notes/",
  },
  openGraph: {
    title: "Notes | HuoHuoOvO",
    description: "关于相聚、晚安、友谊、爱情、意识与燃烧。",
    type: "website",
    url: "https://yushizehuohuo-gif.github.io/huohuoweb/notes/",
  },
};

export default async function NotesPage() {
  const notes = await getAllNotes();

  return (
    <>
      <GrainOverlay />
      <SiteNav />
      <main
        id="main-content"
        tabIndex={-1}
        className="relative z-10 overflow-x-clip px-5 pb-20 pt-28 sm:px-8 md:px-10 md:pt-32 lg:px-16"
      >
        <div className="mx-auto max-w-[1240px]">
          <header className="mb-16 border-t border-rule pt-6 md:mb-24">
            <div className="flex items-center justify-between gap-4">
              <p className="eyebrow eyebrow-accent">Field notes</p>
              <p className="micro-meta text-muted">
                {String(notes.length).padStart(2, "0")} entries
              </p>
            </div>
            <h1 className="mt-8 max-w-3xl font-cjk text-4xl font-medium leading-tight text-ink md:text-6xl">
              留下来的灰烬
            </h1>
            <p className="mt-6 max-w-2xl font-cjk text-base leading-[1.9] text-muted md:text-lg">
              从大学时期到现在，关于相聚、晚安、友谊、爱情、意识与燃烧的九篇文字。
            </p>
          </header>

          <div className="border-y border-rule">
            {notes.map((note, index) => (
              <Link
                key={note.slug}
                href={`/notes/${note.slug}/`}
                className="editorial-link group block border-t border-rule first:border-t-0 focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-4"
              >
                <article className="editorial-row grid gap-4 py-7 md:grid-cols-[6rem_minmax(0,1fr)_10rem] md:py-9">
                  <p className="editorial-row-number micro-meta text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h2 className="editorial-row-title font-cjk text-2xl font-medium leading-snug text-ink md:text-3xl">
                      {note.title}
                    </h2>
                    <p className="mt-3 max-w-2xl font-cjk text-sm leading-[1.85] text-muted md:text-base">
                      {note.description}
                    </p>
                  </div>
                  <p className="micro-meta flex items-start justify-between gap-3 text-muted md:justify-end md:text-right">
                    <span>{note.era}</span>
                    <span className="editorial-row-arrow text-accent" aria-hidden="true">
                      ↗
                    </span>
                  </p>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-16 border-t border-rule pt-8">
            <Link
              href="/"
              className="font-display text-sm text-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-4"
            >
              ← Home
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
