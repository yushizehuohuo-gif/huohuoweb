import Link from "next/link";
import type { IndexEntry, ToolFootnote } from "@/lib/homepage-content";

export default function PersonalIndex({
  entries,
  tools,
}: {
  entries: IndexEntry[];
  tools: ToolFootnote[];
}) {
  return (
    <section
      id="index"
      aria-labelledby="index-title"
      className="section-editorial bg-paper px-5 py-20 text-ink sm:px-8 md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-8 border-t border-rule pt-8 md:grid-cols-[0.36fr_0.64fr]">
          <div data-reveal>
            <p className="eyebrow eyebrow-accent">
              Start here
            </p>
            <h2
              id="index-title"
              className="mt-4 max-w-[18rem] font-cjk text-2xl font-medium leading-snug text-ink md:text-3xl"
            >
              我做社区内容，也改进工作方法。
            </h2>
          </div>

          <div className="index-sitemap border-y border-rule">
            {entries.map((entry) => {
              const row = (
                <article
                  data-reveal
                  className="editorial-row index-sitemap-row grid gap-4 border-t border-rule py-6 first:border-t-0 md:grid-cols-[4rem_0.4fr_1fr_auto] md:py-8"
                >
                  <p className="editorial-row-number micro-meta text-muted">
                    {entry.label}
                  </p>
                  <h3 className="editorial-row-title font-display text-[clamp(1.65rem,3.2vw,3.6rem)] font-medium leading-[0.96] text-ink">
                    {entry.title}
                  </h3>
                  <div>
                    <p className="font-cjk text-sm leading-7 text-deep">
                      {entry.description}
                    </p>
                    <p className="micro-copy mt-3 text-muted">
                      {entry.details.join(" / ")}
                    </p>
                  </div>
                  <span aria-hidden="true" className="editorial-row-arrow static self-start justify-self-end">
                    →
                  </span>
                </article>
              );

              if (entry.href.startsWith("#")) {
                return (
                  <a
                    key={entry.id}
                    href={entry.href}
                    className="editorial-link block"
                  >
                    {row}
                  </a>
                );
              }

              return (
                <Link
                  key={entry.id}
                  href={entry.href}
                  className="editorial-link block"
                >
                  {row}
                </Link>
              );
            })}
          </div>
        </div>

        <div
          id="tools"
          className="mt-12 grid gap-4 border-t border-rule pt-6 md:grid-cols-[0.36fr_0.64fr]"
          data-reveal
        >
          <p className="eyebrow eyebrow-muted">
            How I work
          </p>
          <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((item) => (
              <li key={item.tool} className="text-sm leading-6">
                <span className="font-display font-medium text-ink">
                  {item.tool}
                </span>
                <span className="text-muted"> — {item.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
