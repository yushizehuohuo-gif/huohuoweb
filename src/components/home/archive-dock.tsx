import Link from "next/link";
import type { ArchiveState } from "@/lib/homepage-content";

export default function ArchiveDock({ states }: { states: ArchiveState[] }) {
  return (
    <section
      id="archive"
      aria-labelledby="archive-title"
      className="bg-paper px-6 py-20 text-ink md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1440px] border border-rule bg-[#fbf7ee] p-5 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-mono text-xs text-accent">ARCHIVE DOCK</p>
            <h2
              id="archive-title"
              className="mt-4 max-w-[12ch] font-display text-[clamp(2.75rem,6vw,6.2rem)] font-black leading-[0.92]"
            >
              档案坞
            </h2>
            <p className="mt-6 max-w-[34rem] font-cjk text-base leading-8 text-deep">
              /works 继续保留。它现在只是整个场站里已经公开的一条通道，未来还会接住笔记、视觉研究和未完成片段。
            </p>
          </div>

          <div>
            <div className="grid gap-3 md:grid-cols-5">
              {states.map((state) => (
                <article
                  key={state.label}
                  className="min-h-[190px] border border-rule bg-paper p-4"
                >
                  <p className="font-mono text-xs text-accent">
                    {state.status}
                  </p>
                  <h3 className="mt-5 font-display text-xl font-black leading-tight">
                    {state.label}
                  </h3>
                  <p className="mt-4 font-cjk text-sm leading-6 text-deep">
                    {state.description}
                  </p>
                </article>
              ))}
            </div>
            <Link
              href="/works/"
              className="mt-6 inline-flex border-b border-accent pb-1 font-mono text-sm text-accent transition-colors hover:text-ink focus-visible:text-ink"
            >
              enter current works archive
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
