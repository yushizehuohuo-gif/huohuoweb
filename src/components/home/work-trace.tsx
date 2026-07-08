import type { WorkTrace as WorkTraceItem } from "@/lib/homepage-content";

export default function WorkTrace({ items }: { items: WorkTraceItem[] }) {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="bg-[#24211d] px-5 py-20 text-paper sm:px-8 md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-8 border-t border-[#5a5043] pt-8 md:grid-cols-[0.36fr_0.64fr]">
          <div data-reveal>
            <p className="font-mono text-xs uppercase text-[#c9b89d]">
              Work trace
            </p>
            <h2
              id="work-title"
              className="mt-4 max-w-[18rem] font-cjk text-2xl font-medium leading-snug text-paper md:text-3xl"
            >
              不是项目墙，是工作留下的痕迹。
            </h2>
          </div>

          <div className="border-y border-[#5a5043]">
            {items.map((item) => (
              <article
                key={item.title}
                data-reveal
                className="editorial-row editorial-row-dark grid gap-4 border-t border-[#5a5043] py-6 first:border-t-0 md:grid-cols-[0.28fr_1fr]"
              >
                <div>
                  <p className="editorial-row-number font-mono text-xs uppercase text-[#b99764]">
                    {item.label}
                  </p>
                  <h3 className="editorial-row-title mt-3 font-display text-2xl font-medium leading-tight text-paper">
                    {item.title}
                  </h3>
                </div>
                <div>
                  <p className="text-sm leading-7 text-[#d9ccb8] md:text-base">
                    {item.description}
                  </p>
                  <p className="mt-4 font-mono text-xs uppercase text-[#a99983]">
                    {item.meta}
                  </p>
                </div>
                <span aria-hidden="true" className="editorial-row-arrow">
                  →
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
