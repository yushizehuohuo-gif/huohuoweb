import type { LiveFieldZone } from "@/lib/homepage-content";

export default function LiveField({ zones }: { zones: LiveFieldZone[] }) {
  return (
    <section
      id="field"
      aria-labelledby="field-title"
      className="bg-paper px-6 py-20 text-ink md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div>
          <p className="font-mono text-xs text-accent">LIVE FIELD</p>
          <h2
            id="field-title"
            className="mt-4 max-w-[11ch] font-display text-[clamp(2.8rem,6vw,6.8rem)] font-black leading-[0.92]"
          >
            当前场域
          </h2>
          <p className="mt-6 max-w-[34rem] font-cjk text-base leading-8 text-deep">
            这里不再把 Work、Tools、Writing、Visual 平铺成表格。它们像同一张操作台上的三个区域：现场、工具链、以及还没完全变成项目的东西。
          </p>
        </div>

        <div className="station-index border border-rule bg-[#fbf7ee] p-4 shadow-[0_28px_90px_rgba(69,50,22,0.12)] md:p-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-rule pb-4">
            <p className="font-mono text-xs text-deep">FIELD VIEW // 03 LANES</p>
            <p className="font-mono text-xs text-accent">signal density: mixed</p>
          </div>
          <div className="grid gap-4 xl:grid-cols-3">
            {zones.map((zone, index) => (
              <article
                key={zone.title}
                className="min-h-[320px] border border-rule bg-paper p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs text-accent">
                      0{index + 1} / {zone.status}
                    </p>
                    <h3 className="mt-4 font-display text-2xl font-black leading-none">
                      {zone.title}
                    </h3>
                    <p className="mt-2 font-cjk text-lg font-bold text-deep">
                      {zone.titleCn}
                    </p>
                  </div>
                  <span className="mt-1 h-12 w-2 bg-signal-red/80" />
                </div>
                <p className="mt-8 font-cjk text-sm leading-7 text-deep">
                  {zone.description}
                </p>
                <ul className="mt-8 grid gap-2">
                  {zone.tokens.map((token) => (
                    <li
                      key={token}
                      className="flex items-center justify-between gap-4 border-t border-rule pt-2 font-mono text-xs"
                    >
                      <span>{token}</span>
                      <span className="text-muted">linked</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

