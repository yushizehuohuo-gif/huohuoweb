import Link from "next/link";

export default function ArchiveTeaser() {
  const futureArchive = ["work", "ideas", "art", "thinking", "emotion", "tools"];

  return (
    <section
      id="archive"
      aria-labelledby="archive-title"
      className="bg-[#e5d8c4] px-6 py-20 text-ink md:px-10 md:py-28 lg:px-16"
    >
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-end lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal-red">
            archive teaser
          </p>
          <h2
            id="archive-title"
            className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl"
          >
            The archive is wider than Works.
          </h2>
          <p className="mt-5 font-cjk text-lg leading-[1.9] text-deep">
            未来的归档会容纳六个维度。本轮先保留现有 `/works` 和旧内容，不强行迁移。
          </p>
        </div>

        <div className="border-t border-rule pt-6">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 font-mono text-sm uppercase tracking-[0.14em] text-deep md:grid-cols-3">
            {futureArchive.map((item) => (
              <span key={item} className="border-b border-rule pb-3">
                {item}
              </span>
            ))}
          </div>
          <Link
            href="/works/"
            className="mt-9 inline-block border-b border-signal-red pb-1 font-display text-lg font-semibold text-ink transition-colors hover:text-signal-red focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-signal-red"
          >
            Enter current Works archive
          </Link>
        </div>
      </div>
    </section>
  );
}

