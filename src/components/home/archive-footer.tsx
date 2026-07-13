import Link from "next/link";

export default function ArchiveFooter() {
  return (
    <section
      id="archive"
      aria-labelledby="archive-title"
      className="section-editorial bg-paper px-5 py-18 text-ink sm:px-8 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1240px] border-t border-rule pt-8">
        <div className="grid gap-10 md:grid-cols-[0.24fr_0.4fr_0.36fr]">
          <div data-reveal>
            <p className="eyebrow eyebrow-accent">Archive</p>
            <h2
              id="archive-title"
              className="mt-12 font-cjk text-2xl font-medium leading-snug"
            >
              当前公开入口。
            </h2>
          </div>

          <div data-reveal>
            <p className="eyebrow eyebrow-muted">
              Archive / links
            </p>
            <div className="mt-12 grid gap-4 font-display text-[clamp(1.6rem,3vw,3.4rem)] leading-none">
              <Link href="/works/" className="footer-large-link">
                ↘ Works
              </Link>
              <a href="#notes" className="footer-large-link">
                ↘ Notes
              </a>
              <a href="#visual" className="footer-large-link">
                ↘ Visual
              </a>
            </div>
          </div>

          <div data-reveal>
            <p className="eyebrow eyebrow-muted">
              Open topics
            </p>
            <p className="mt-12 max-w-[30rem] font-cjk text-sm leading-7 text-deep">
              游戏社区、玩家情绪、AI 工作流、本地 Agent、视觉系统、个人知识库，以及那些仍然需要人来判断的部分。
            </p>
          </div>
        </div>

        <div className="micro-meta mt-18 grid gap-6 border-t border-rule pt-6 text-muted md:grid-cols-[0.24fr_1fr_auto]">
          <p className="eyebrow eyebrow-accent">
            HuoHuoOvO
          </p>
          <p>
            Personal index for player signals, agent tools, visual fragments and
            field notes.
          </p>
          <p>© 2026</p>
        </div>
      </div>
    </section>
  );
}
