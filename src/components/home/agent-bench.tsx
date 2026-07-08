import type { AgentBenchItem } from "@/lib/homepage-content";

export default function AgentBench({ items }: { items: AgentBenchItem[] }) {
  return (
    <section
      id="tools"
      aria-labelledby="tools-title"
      className="bg-[#0d1514] px-6 py-20 text-ink-on-dark md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="font-mono text-xs text-signal-cyan">AGENT BENCH</p>
            <h2
              id="tools-title"
              className="mt-4 max-w-[14ch] font-display text-[clamp(2.75rem,5.2vw,5.7rem)] font-black leading-[0.92]"
            >
              Agent <span className="whitespace-nowrap">工作台</span>
            </h2>
          </div>
          <p className="max-w-[52rem] font-cjk text-base leading-8 text-ink-on-dark/68">
            工具不是 badge。它们是注意力的仪器：有的保存上下文，有的打开思路，有的负责改文件，有的测试画面，有的把形状固定下来。
          </p>
        </div>

        <div className="agent-pipeline mt-12 grid gap-3 lg:grid-cols-7">
          {items.map((item, index) => (
            <article
              key={`${item.role}-${item.tool}`}
              className="relative min-h-[250px] border border-[#22413f] bg-[#0f1b1a] p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-mono text-xs text-signal-cyan">
                  0{index + 1} / {item.role}
                </p>
                <span className="h-2 w-2 bg-signal-cyan" />
              </div>
              <h3 className="mt-8 font-display text-2xl font-black leading-none text-paper">
                {item.tool}
              </h3>
              <p className="mt-5 font-cjk text-sm leading-7 text-ink-on-dark/66">
                {item.description}
              </p>
              <p className="absolute bottom-4 left-4 right-4 border-t border-[#22413f] pt-3 font-mono text-xs text-signal-cyan/80">
                {item.status}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
