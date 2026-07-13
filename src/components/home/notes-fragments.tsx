import type { NoteFragment } from "@/lib/homepage-content";

export default function NotesFragments({ notes }: { notes: NoteFragment[] }) {
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
              Notes
            </p>
            <h2
              id="notes-title"
              className="mt-4 max-w-[18rem] font-cjk text-2xl font-medium leading-snug md:text-3xl"
            >
              留下来的短句。
            </h2>
          </div>

          <div className="notes-ledger border-y border-rule">
            {notes.map((note) => (
              <article
                key={note.label}
                className="editorial-row notes-ledger-row grid gap-4 border-t border-rule py-6 first:border-t-0 md:grid-cols-[5rem_1fr_10rem]"
                data-reveal
              >
                <p className="editorial-row-number micro-meta uppercase text-accent">
                  {note.label}
                </p>
                <p className="editorial-row-title font-cjk text-[clamp(1.2rem,2vw,2rem)] font-medium leading-snug text-ink">
                  {note.text}
                </p>
                <p className="micro-meta uppercase text-muted">
                  public note
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
