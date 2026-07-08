export default function OpenChannel({ topics }: { topics: string[] }) {
  return (
    <section
      id="open"
      aria-labelledby="open-title"
      className="bg-surface-ops px-6 py-20 text-ink-on-dark md:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1440px] gap-8 border-t border-rule-dark pt-12 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="font-mono text-xs text-signal-cyan">OPEN CHANNEL</p>
          <h2
            id="open-title"
            className="mt-4 font-display text-[clamp(2.5rem,5vw,5.4rem)] font-black leading-none"
          >
            开放频道
          </h2>
        </div>
        <div>
          <p className="max-w-[56rem] font-cjk text-lg leading-8 text-ink-on-dark/76">
            欢迎聊游戏社区、AI 工作流、视觉系统、本地 Agent，以及那些仍然需要人来判断的部分。
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {topics.map((topic) => (
              <li
                key={topic}
                className="border border-rule-dark bg-surface-ops-soft px-3 py-2 font-mono text-xs text-ink-on-dark/66"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

