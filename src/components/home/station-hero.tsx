import type { StationToken } from "@/lib/homepage-content";

type StationHeroProps = {
  copy: {
    station: string;
    title: string;
    anchor: string;
    helper: string;
    english: string;
    identity: string;
  };
  tokens: StationToken[];
};

function TokenPill({ token }: { token: StationToken }) {
  return (
    <li className="station-token" data-status={token.status}>
      <span className="font-mono text-[0.68rem] uppercase leading-none">
        {token.label}
      </span>
      <span className="text-[0.72rem] leading-snug text-ink-on-dark/62">
        {token.short}
      </span>
    </li>
  );
}

function TokenColumn({
  title,
  subtitle,
  tokens,
}: {
  title: string;
  subtitle: string;
  tokens: StationToken[];
}) {
  return (
    <div className="station-console-block">
      <div className="mb-3 flex items-start justify-between gap-4 border-b border-rule-dark pb-3">
        <div>
          <p className="font-mono text-xs text-signal-cyan">{title}</p>
          <p className="mt-1 text-xs leading-relaxed text-ink-on-dark/52">
            {subtitle}
          </p>
        </div>
        <span className="h-2 w-2 shrink-0 rounded-full bg-signal-red shadow-[0_0_18px_var(--signal-red)]" />
      </div>
      <ul className="grid gap-2">
        {tokens.map((token) => (
          <TokenPill key={token.id} token={token} />
        ))}
      </ul>
    </div>
  );
}

export default function StationHero({ copy, tokens }: StationHeroProps) {
  const communityTokens = tokens.filter((token) => token.zone === "community");
  const toolTokens = tokens.filter((token) => token.zone === "tools");
  const archiveTokens = tokens.filter((token) =>
    ["visual", "writing", "archive"].includes(token.zone),
  );

  return (
    <section
      id="station"
      aria-labelledby="station-title"
      className="station-surface relative isolate overflow-hidden bg-surface-ops text-ink-on-dark"
    >
      <div aria-hidden="true" className="station-scanline" />
      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-[1540px] grid-cols-1 gap-10 px-6 pb-14 pt-28 md:grid-cols-[0.9fr_1.1fr] md:items-center md:px-10 md:pt-24 lg:px-16">
        <div className="max-w-[760px]">
          <p className="font-mono text-xs text-signal-cyan">{copy.station}</p>
          <h1
            id="station-title"
            className="mt-8 max-w-[11ch] font-display text-[clamp(4rem,9vw,8.8rem)] font-black leading-[0.86] text-ink-on-dark"
          >
            <span className="block">Nick Huo</span>
            <span className="block text-[0.52em] leading-[0.95] text-memory-amber">
              HuoHuoOvO
            </span>
          </h1>

          <p className="mt-8 max-w-[680px] font-cjk text-[clamp(2.15rem,5.4vw,4.7rem)] font-black leading-[1.03] text-paper">
            {copy.anchor}
          </p>
          <p className="mt-6 max-w-[640px] font-cjk text-lg leading-relaxed text-ink-on-dark/82 md:text-xl">
            {copy.helper}
          </p>
          <p className="mt-5 max-w-[600px] text-sm leading-7 text-ink-on-dark/55 md:text-base">
            {copy.english}
          </p>

          <div className="mt-8 flex max-w-[680px] flex-wrap gap-2 border-l border-signal-red pl-4 font-cjk text-sm leading-relaxed text-ink-on-dark/68">
            {copy.identity.split(" / ").map((item) => (
              <span
                key={item}
                className="border border-rule-dark bg-surface-ops-soft px-3 py-1"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="console-shell station-grid relative overflow-hidden border border-rule-dark bg-surface-ops-soft/92 p-4 shadow-[0_28px_120px_rgba(0,0,0,0.42)] md:p-5 lg:p-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-rule-dark pb-4">
            <div>
              <p className="font-mono text-xs text-ink-on-dark">
                FIELD STATION // LIVE SURFACE
              </p>
              <p className="mt-1 text-xs text-ink-on-dark/46">
                player signals, agent routes, visual residue
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-signal-cyan">
              <span className="h-2 w-2 rounded-full bg-signal-cyan shadow-[0_0_16px_var(--signal-cyan)]" />
              running
            </div>
          </div>

          <div className="relative grid gap-4 lg:grid-cols-[0.86fr_1.08fr_0.86fr]">
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
              viewBox="0 0 900 460"
              preserveAspectRatio="none"
            >
              <path
                d="M72 92 C240 92 244 226 420 226 C552 226 572 126 815 126"
                className="station-route station-route-red"
              />
              <path
                d="M92 344 C230 300 285 340 412 282 C560 215 618 338 805 300"
                className="station-route station-route-cyan"
              />
            </svg>

            <TokenColumn
              title="COMMUNITY"
              subtitle="field input"
              tokens={communityTokens}
            />

            <div className="station-radar relative flex min-h-[300px] flex-col justify-between overflow-hidden border border-rule-dark bg-[#10120f]/90 p-5">
              <div className="relative z-10">
                <p className="font-mono text-xs text-signal-red">
                  ACTIVE ROUTE
                </p>
                <p className="mt-2 max-w-[18rem] font-cjk text-xl font-bold leading-tight text-paper">
                  从玩家现场，到工具判断，再到能留下来的档案。
                </p>
              </div>
              <div className="relative z-10 grid gap-2 font-mono text-xs text-ink-on-dark/62">
                <div className="flex items-center justify-between border-t border-rule-dark pt-3">
                  <span>noise</span>
                  <span className="text-signal-red">judgment</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>agent route</span>
                  <span className="text-signal-cyan">tool surface</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>archive</span>
                  <span className="text-memory-amber">unfinished</span>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <TokenColumn title="TOOLS" subtitle="agent dock" tokens={toolTokens} />
              <TokenColumn
                title="ARCHIVE"
                subtitle="things kept"
                tokens={archiveTokens}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

