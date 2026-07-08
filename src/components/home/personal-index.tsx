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
      className="bg-paper px-5 py-20 text-ink sm:px-8 md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-8 border-t border-rule pt-8 md:grid-cols-[0.36fr_0.64fr]">
          <div data-reveal>
            <p className="font-mono text-xs uppercase text-accent">
              Index
            </p>
            <h2
              id="index-title"
              className="mt-4 max-w-[18rem] font-cjk text-2xl font-medium leading-snug text-ink md:text-3xl"
            >
              一个轻量的个人索引。
            </h2>
          </div>

          <div className="border-y border-rule">
            {entries.map((entry) => {
              const row = (
                <article
                  data-reveal
                  className="editorial-row grid gap-4 border-t border-rule py-5 first:border-t-0 md:grid-cols-[4rem_0.25fr_1fr] md:py-6"
                >
                  <p className="editorial-row-number font-mono text-xs text-muted">
                    {entry.label}
                  </p>
                  <h3 className="editorial-row-title font-display text-xl font-medium leading-tight text-ink">
                    {entry.title}
                  </h3>
                  <div>
                    <p className="font-cjk text-sm leading-7 text-deep">
                      {entry.description}
                    </p>
                    <p className="mt-3 text-xs leading-6 text-muted">
                      {entry.details.join(" / ")}
                    </p>
                  </div>
                  <span aria-hidden="true" className="editorial-row-arrow">
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
          <p className="font-mono text-xs uppercase text-muted">
            Tool footnotes
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
