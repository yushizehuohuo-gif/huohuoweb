import type { SignalFlowStep, WorkDossier } from "@/lib/homepage-content";

const accentClass: Record<WorkDossier["accent"], string> = {
  red: "border-signal-red text-signal-red",
  amber: "border-memory-amber text-memory-amber",
  cyan: "border-signal-cyan text-signal-cyan",
};

export default function SignalWork({
  dossiers,
  flow,
}: {
  dossiers: WorkDossier[];
  flow: SignalFlowStep[];
}) {
  const [primary, ...secondary] = dossiers;

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="bg-surface-ops px-6 py-20 text-ink-on-dark md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1440px] gap-10 xl:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="font-mono text-xs text-signal-red">SIGNAL WORK</p>
          <h2
            id="work-title"
            className="mt-4 max-w-[11ch] font-display text-[clamp(2.75rem,6vw,6.6rem)] font-black leading-[0.92]"
          >
            信号工作
          </h2>
          <p className="mt-6 max-w-[34rem] font-cjk text-base leading-8 text-ink-on-dark/68">
            Work 在这里不是项目卡片，而是一套把玩家现场、内容节奏、工具判断和长期档案连接起来的方法。
          </p>
        </div>

        <div className="grid gap-4">
          <article className="border border-signal-red bg-surface-ops-soft p-6 shadow-[0_24px_100px_rgba(179,30,61,0.12)] md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <p className="font-mono text-xs text-signal-red">
                  {primary.role}
                </p>
                <h3 className="mt-3 font-display text-[clamp(2.2rem,5vw,5rem)] font-black leading-none">
                  {primary.title}
                </h3>
              </div>
              <span className="border border-signal-red px-3 py-1 font-mono text-xs text-signal-red">
                {primary.publicBoundary}
              </span>
            </div>
            <p className="mt-8 max-w-[56rem] text-lg leading-8 text-ink-on-dark/78">
              {primary.signal}
            </p>
            <ul className="mt-8 grid gap-3 md:grid-cols-4">
              {primary.evidence.map((item) => (
                <li
                  key={item}
                  className="border-t border-rule-dark pt-3 font-mono text-xs text-ink-on-dark/62"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <div className="grid gap-4 lg:grid-cols-2">
            {secondary.map((dossier) => (
              <article
                key={dossier.title}
                className={`border bg-[#12110f] p-5 ${accentClass[dossier.accent]}`}
              >
                <p className="font-mono text-xs">{dossier.role}</p>
                <h3 className="mt-4 font-display text-2xl font-black leading-tight text-ink-on-dark">
                  {dossier.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-ink-on-dark/68">
                  {dossier.signal}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {dossier.evidence.map((item) => (
                    <li
                      key={item}
                      className="border border-rule-dark px-2 py-1 font-mono text-xs text-ink-on-dark/58"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="grid gap-3 border border-rule-dark p-4 md:grid-cols-4">
            {flow.map((step, index) => (
              <div key={step.label} className="relative">
                <p className="font-mono text-xs text-signal-cyan">
                  0{index + 1} / {step.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-ink-on-dark/62">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

