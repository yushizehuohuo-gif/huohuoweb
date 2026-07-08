import type { FieldNote } from "@/lib/homepage-content";

export default function FieldNotesResidue({ notes }: { notes: FieldNote[] }) {
  return (
    <section
      id="notes"
      aria-labelledby="notes-title"
      className="bg-surface-ops px-6 py-20 text-ink-on-dark md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="font-mono text-xs text-memory-amber">
            FIELD NOTES + RESIDUE
          </p>
          <h2
            id="notes-title"
            className="mt-4 max-w-[12ch] font-display text-[clamp(2.75rem,6vw,6.3rem)] font-black leading-[0.92]"
          >
            场地笔记与余温档案
          </h2>
          <p className="mt-6 max-w-[34rem] font-cjk text-base leading-8 text-ink-on-dark/66">
            这一层保留短句、碎片和还不能完全命名的东西。它们经过改写，可以公开，但不暴露私人来源。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {notes.map((note) => (
            <article
              key={note.tag}
              className="archive-slip min-h-[230px] border border-rule-dark bg-paper p-5 text-ink"
            >
              <p className="font-mono text-xs text-accent">{note.tag}</p>
              <p className="mt-8 font-cjk text-[clamp(1.55rem,3vw,2.5rem)] font-black leading-tight">
                {note.textCn}
              </p>
              <p className="mt-6 max-w-[28rem] text-sm leading-7 text-deep">
                {note.textEn}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

