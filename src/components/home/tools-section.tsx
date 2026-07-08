export default function ToolsSection({
  groups,
}: {
  groups: { label: string; tools: string[] }[];
}) {
  return (
    <section
      id="tools"
      aria-labelledby="tools-title"
      className="bg-surface-ops px-6 py-20 text-ink-on-dark md:px-10 md:py-28 lg:px-16"
    >
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1fr] lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal-cyan">
            tools / instruments
          </p>
          <h2
            id="tools-title"
            className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl"
          >
            Tools are instruments, not badges.
          </h2>
          <p className="mt-5 font-cjk text-lg leading-[1.9] text-[#d8ccba]">
            这些工具用来思考、制作、整理、执行和保存记忆。它们不是技能章，也不是炫技清单。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((group) => (
            <div key={group.label} className="border-t border-rule-dark pt-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal-red">
                {group.label}
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-3">
                {group.tools.map((tool) => (
                  <li
                    key={tool}
                    className="border-b border-signal-cyan/40 pb-1 font-display text-lg text-ink-on-dark"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

