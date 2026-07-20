import type { CoverCopy, IndexEntry } from "@/lib/homepage-content";
import HeroPointerInteraction from "./hero-pointer-interaction";
import TextPattern from "./text-pattern";

export default function CoverHero({
  copy,
  index,
}: {
  copy: CoverCopy;
  index: IndexEntry[];
}) {
  return (
    <section
      id="cover"
      aria-labelledby="cover-title"
      className="cover-shell relative overflow-hidden bg-paper px-5 pb-10 pt-24 text-ink sm:px-8 md:min-h-screen md:px-10 md:pb-12 md:pt-28 lg:px-16"
    >
      <HeroPointerInteraction />
      <TextPattern className="cover-pattern" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8.5rem)] max-w-[1480px] flex-col justify-end gap-14 md:min-h-[calc(100vh-9.5rem)]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(320px,0.38fr)] lg:items-end">
          <div className="max-w-[960px]">
            <p className="eyebrow eyebrow-muted hero-reveal hero-reveal--0">
              Community / Systems / Visuals / Notes
            </p>

            <h1
              id="cover-title"
              className="hero-reveal hero-reveal--1 mt-8 font-display text-[clamp(4rem,10vw,10.5rem)] font-medium leading-[0.88] text-ink"
            >
              <span className="block">{copy.name}</span>
              <span className="mt-4 block font-cjk text-[clamp(1.25rem,2.4vw,2rem)] font-normal leading-tight text-deep">
                {copy.handle} / 火火
              </span>
            </h1>

            <p className="hero-reveal hero-reveal--2 mt-10 font-cjk text-[clamp(2rem,4.2vw,4.8rem)] font-normal leading-[1.08] text-ink md:whitespace-nowrap">
              {copy.anchor}
            </p>

            <p className="hero-reveal hero-reveal--3 mt-6 max-w-[42rem] font-cjk text-base leading-8 text-deep md:text-lg">
              {copy.helper}
            </p>
          </div>

          <aside className="hero-reveal hero-reveal--4 max-w-[27rem] border-t border-rule pt-5 lg:ml-auto">
            <p className="eyebrow eyebrow-accent">
              HuoHuo Field Notes
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">{copy.annotation}</p>
            <p className="mt-8 font-cjk text-sm leading-7 text-deep">
              社区内容、玩家反馈、AI 工作流、视觉实验与个人写作。
            </p>
          </aside>
        </div>

        <nav
          aria-label="Homepage index"
          className="hero-reveal hero-reveal--5 cover-index grid border-y border-rule md:grid-cols-5"
        >
          {index.slice(0, 5).map((item) => (
            <a key={item.id} href={item.href} className="cover-index-link group">
              <span className="micro-meta text-muted">{item.label}</span>
              <span className="font-display text-lg font-medium text-ink">
                {item.title}
              </span>
              <span className="cover-index-line" />
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
