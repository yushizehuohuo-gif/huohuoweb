import Link from "next/link";
import type { Note } from "@/lib/notes";

export default function NotesFragments({ notes }: { notes: Note[] }) {
  return (
    <section
      id="notes"
      aria-labelledby="notes-title"
      className="section-editorial bg-paper px-5 py-20 text-ink sm:px-8 md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-8 border-t border-rule pt-8 md:grid-cols-[0.36fr_0.64fr]">
          <div data-reveal>
            <p className="eyebrow eyebrow-muted">
              Personal writing
            </p>
            <h2
              id="notes-title"
              className="mt-4 max-w-[18rem] font-cjk text-2xl font-medium leading-snug md:text-3xl"
            >
              九篇旧文，写到今天。
            </h2>
          </div>

          <div className="notes-ledger border-y border-rule">
            {notes.map((note, index) => (
              <Link
                key={note.slug}
                href={`/notes/${note.slug}/`}
                className="editorial-link block border-t border-rule first:border-t-0 focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-4"
              >
                <article
                  className="editorial-row notes-ledger-row grid gap-4 py-6 md:grid-cols-[5rem_minmax(0,1fr)_10rem]"
                  data-reveal
                >
                  <p className="editorial-row-number micro-meta uppercase text-accent">
                    note {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="editorial-row-title font-cjk text-[clamp(1.2rem,2vw,2rem)] font-medium leading-snug text-ink">
                      {note.title}
                    </h3>
                    <p className="mt-2 max-w-2xl font-cjk text-sm leading-[1.8] text-muted">
                      {note.description}
                    </p>
                  </div>
                  <p className="micro-meta flex justify-between gap-3 uppercase text-muted md:justify-end md:text-right">
                    <span>{note.era}</span>
                    <span className="editorial-row-arrow text-accent" aria-hidden="true">
                      ↗
                    </span>
                  </p>
                </article>
              </Link>
            ))}
          </div>

          <div className="md:col-start-2">
            <Link
              href="/notes/"
              className="editorial-link mt-3 inline-flex items-center gap-3 font-display text-sm text-muted transition-colors hover:text-accent focus-visible:text-accent"
            >
              查看全部笔记 <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
