import type { NoteFragment } from "@/lib/homepage-content";

export default function NotesFragments({ notes }: { notes: NoteFragment[] }) {
  return (
    <section
      id="notes"
      aria-labelledby="notes-title"
      className="bg-paper px-5 py-20 text-ink sm:px-8 md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-8 border-t border-rule pt-8 md:grid-cols-[0.36fr_0.64fr]">
          <div data-reveal>
            <p className="font-mono text-xs uppercase text-muted">
              Notes
            </p>
            <h2
              id="notes-title"
              className="mt-4 max-w-[18rem] font-cjk text-2xl font-medium leading-snug md:text-3xl"
            >
              留下来的短句。
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {notes.map((note) => (
              <article key={note.label} className="note-fragment" data-reveal>
                <p className="font-mono text-xs uppercase text-accent">
                  {note.label}
                </p>
                <p className="mt-8 font-cjk text-[clamp(1.35rem,2.4vw,2.2rem)] font-medium leading-snug text-ink">
                  {note.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
