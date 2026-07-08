import type { Dimension } from "@/lib/homepage-content";

export default function HeroField({ dimensions }: { dimensions: Dimension[] }) {
  return (
    <section
      id="field"
      aria-labelledby="field-title"
      className="relative isolate min-h-[100svh] overflow-hidden bg-surface-ops px-6 pb-12 pt-28 text-ink-on-dark md:px-10 md:pt-32 lg:px-16"
    >
      <div className="absolute inset-0 -z-10 opacity-35 [background-image:linear-gradient(to_right,rgba(242,234,220,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(242,234,220,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute left-0 top-0 -z-10 h-px w-full bg-gradient-to-r from-transparent via-signal-red to-transparent opacity-70" />

      <div className="grid min-h-[calc(100svh-10rem)] gap-12 lg:grid-cols-[minmax(0,0.96fr)_minmax(420px,0.74fr)] lg:items-center">
        <div className="max-w-5xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal-cyan">
            HuoHuo Field / 火火场域
          </p>
          <h1
            id="field-title"
            className="mt-8 font-display text-5xl font-bold leading-[0.95] text-ink-on-dark sm:text-6xl md:text-[5.8rem] lg:text-[6.8rem]"
          >
            Nick Huo
            <span className="mt-3 block text-[0.46em] font-semibold leading-none text-memory-amber">
              HuoHuoOvO / 火火
            </span>
          </h1>
          <p className="mt-8 max-w-3xl font-cjk text-xl leading-[1.8] text-[#d8ccba] md:text-2xl">
            我在游戏、社区、工具、图像和未完成的想法之间移动。
          </p>
          <p className="mt-5 max-w-3xl font-display text-base leading-7 text-[#a99c8b] md:text-lg">
            I work with game communities, AI tools, visual systems, and the
            fragments that remain after everything becomes data.
          </p>
        </div>

        <div
          aria-label="Field dimensions"
          className="relative min-h-[27rem] border border-rule-dark bg-surface-ops-soft/80 p-5 shadow-[0_0_0_1px_rgba(242,234,220,0.03)]"
        >
          <div className="flex items-center justify-between border-b border-rule-dark pb-3 font-mono text-xs uppercase tracking-[0.18em] text-[#8f8374]">
            <span>field map</span>
            <span>six dimensions</span>
          </div>
          <div className="relative mt-5 h-[21rem]">
            <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 bg-rule-dark" />
            <div className="absolute left-1/2 top-1/2 h-full w-px -translate-y-1/2 bg-rule-dark" />
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 border border-signal-red/60" />
            <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 border border-rule-dark" />

            {dimensions.map((dimension, index) => {
              const positions = [
                "left-0 top-3",
                "right-0 top-8",
                "left-4 top-1/2 -translate-y-1/2",
                "right-4 top-1/2 -translate-y-1/2",
                "left-10 bottom-4",
                "right-10 bottom-0",
              ];

              return (
                <a
                  href={`#${dimension.key}`}
                  key={dimension.key}
                  className={[
                    "group absolute max-w-[11rem] border-l border-signal-red/50 pl-3 text-left transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-signal-cyan",
                    positions[index],
                  ].join(" ")}
                >
                  <span className="block font-display text-sm font-semibold text-ink-on-dark group-hover:text-signal-cyan">
                    {dimension.label}
                  </span>
                  <span className="mt-1 block font-cjk text-xs leading-5 text-[#9d9181]">
                    {dimension.title} / {dimension.signal}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

