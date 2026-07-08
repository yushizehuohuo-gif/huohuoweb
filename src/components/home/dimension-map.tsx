import type { Dimension } from "@/lib/homepage-content";

export default function DimensionMap({
  dimensions,
}: {
  dimensions: Dimension[];
}) {
  return (
    <section
      id="dimensions"
      aria-labelledby="dimensions-title"
      className="bg-surface-archive px-6 py-20 text-ink md:px-10 md:py-28 lg:px-16"
    >
      <div className="mb-12 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal-red">
          dimension map
        </p>
        <h2
          id="dimensions-title"
          className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl"
        >
          Not a title. A field.
        </h2>
        <p className="mt-5 font-cjk text-lg leading-[1.9] text-deep">
          这里不是把人压缩成一个岗位，而是把工作、理念、艺术、思考、情绪和工具放回同一个场域。
        </p>
      </div>

      <div className="border-t border-rule">
        {dimensions.map((dimension, index) => (
          <a
            href={`#${dimension.key}`}
            key={dimension.key}
            className="grid gap-4 border-b border-rule py-7 transition-colors hover:bg-[#eadfce] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-signal-red md:grid-cols-[5rem_1fr_1.2fr_1.1fr] md:items-baseline md:gap-8"
          >
            <span className="font-mono text-xs text-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-3xl font-semibold leading-none text-ink">
              {dimension.label}
            </span>
            <span className="font-cjk text-xl font-semibold text-ink">
              {dimension.title}
            </span>
            <span className="font-cjk text-base leading-[1.8] text-deep">
              {dimension.description}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

