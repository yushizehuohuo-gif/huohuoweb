import type { WorkTrace as WorkTraceItem } from "@/lib/homepage-content";

export default function WorkTrace({ items }: { items: WorkTraceItem[] }) {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="section-editorial bg-paper px-5 py-20 text-ink sm:px-8 md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-8 border-t border-rule pt-8 md:grid-cols-[0.36fr_0.64fr]">
          <div data-reveal>
            <p className="font-mono text-xs uppercase text-accent">
              Work trace
            </p>
            <h2
              id="work-title"
              className="mt-4 max-w-[18rem] font-cjk text-2xl font-medium leading-snug text-ink md:text-3xl"
            >
              不是项目墙，是工作留下的痕迹。
            </h2>
          </div>

          <div className="border-y border-rule">
            {items.map((item) => (
              <article
                key={item.title}
                data-reveal
                className="editorial-row work-news-row grid items-start gap-4 border-t border-rule py-7 first:border-t-0 md:grid-cols-[7rem_minmax(0,1fr)] md:pr-14 xl:grid-cols-[7rem_minmax(15rem,0.72fr)_minmax(16rem,1fr)]"
              >
                <p className="editorial-row-number font-mono text-xs uppercase text-muted">
                  {item.label}
                </p>
                <h3 className="editorial-row-title font-display text-[clamp(1.45rem,2.2vw,2.5rem)] font-medium leading-tight text-ink">
                  {item.title}
                </h3>
                <div className="md:col-start-2 xl:col-start-3">
                  <p className="text-sm leading-7 text-deep md:text-base">
                    {item.description}
                  </p>
                  <p className="mt-4 font-mono text-xs uppercase text-muted">
                    {item.meta}
                  </p>
                </div>
                <span aria-hidden="true" className="editorial-row-arrow">
                  view
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
