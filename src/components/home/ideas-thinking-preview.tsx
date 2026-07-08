import type { FieldLine } from "@/lib/homepage-content";

function LineList({
  title,
  eyebrow,
  lines,
}: {
  title: string;
  eyebrow: string;
  lines: FieldLine[];
}) {
  return (
    <div className="border-t border-rule pt-6">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal-red">
        {eyebrow}
      </p>
      <h3 className="mt-3 font-display text-3xl font-semibold text-ink">
        {title}
      </h3>
      <div className="mt-7 space-y-6">
        {lines.map((line) => (
          <blockquote key={line.text} className="grid gap-3 md:grid-cols-[7rem_1fr]">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
              {line.source}
            </span>
            <p className="font-cjk text-lg leading-[1.85] text-deep">
              {line.text}
            </p>
          </blockquote>
        ))}
      </div>
    </div>
  );
}

export default function IdeasThinkingPreview({
  ideas,
  thinking,
}: {
  ideas: FieldLine[];
  thinking: FieldLine[];
}) {
  return (
    <section
      id="ideas"
      aria-labelledby="ideas-title"
      className="bg-surface-archive px-6 py-20 text-ink md:px-10 md:py-28 lg:px-16"
    >
      <div className="mb-14 max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-memory-olive">
          ideas / thinking
        </p>
        <h2
          id="ideas-title"
          className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl"
        >
          Some things are positions before they are projects.
        </h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <LineList eyebrow="ideas" title="理念" lines={ideas} />
        <div id="thinking">
          <LineList eyebrow="field notes" title="思考" lines={thinking} />
        </div>
      </div>
    </section>
  );
}

