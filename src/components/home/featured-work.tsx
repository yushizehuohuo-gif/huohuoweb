import type { FeaturedWork } from "@/lib/homepage-content";

export default function FeaturedWorkSection({
  works,
}: {
  works: FeaturedWork[];
}) {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="bg-surface-ops px-6 py-20 text-ink-on-dark md:px-10 md:py-28 lg:px-16"
    >
      <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal-cyan">
            work / signal workbench
          </p>
          <h2
            id="work-title"
            className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl"
          >
            Work is where signals become systems.
          </h2>
          <p className="mt-5 font-cjk text-lg leading-[1.9] text-[#d8ccba]">
            工作是信号变成系统的地方。这里保留原来的 Signal Workbench，但它只是 Work 的方法论，不再定义整个网站。
          </p>
          <div className="mt-8 border-l border-signal-red pl-5">
            <p className="font-display text-lg leading-8 text-ink-on-dark">
              A work method for reading community noise, turning it into
              judgment, and building systems around it.
            </p>
          </div>
        </div>

        <div className="border-t border-rule-dark">
          {works.map((work) => (
            <article key={work.title} className="border-b border-rule-dark py-7">
              <div className="mb-4 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-[#8f8374]">
                <span className="text-signal-red">{work.eyebrow}</span>
                <span aria-hidden="true">/</span>
                <span>{work.meta.join(" · ")}</span>
              </div>
              <h3 className="font-display text-3xl font-semibold leading-tight text-ink-on-dark">
                {work.title}
              </h3>
              <p className="mt-3 max-w-3xl font-cjk text-base leading-[1.85] text-[#b9ad9d]">
                {work.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

