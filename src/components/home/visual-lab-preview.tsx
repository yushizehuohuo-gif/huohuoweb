import type { VisualStudy } from "@/lib/homepage-content";

export default function VisualLabPreview({
  studies,
}: {
  studies: VisualStudy[];
}) {
  return (
    <section
      id="art"
      aria-labelledby="art-title"
      className="bg-[#ede3d2] px-6 py-20 text-ink md:px-10 md:py-28 lg:px-16"
    >
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1fr] lg:items-start lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal-red">
            art / visual lab
          </p>
          <h2
            id="art-title"
            className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl"
          >
            Images as studies.
          </h2>
          <p className="mt-5 font-cjk text-lg leading-[1.9] text-deep">
            这里放视觉实验、图像生成、DOTA2 视觉、海报、字体、色彩和审美研究。当前不强行引用不存在的图片，先让结构可以容纳图像。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {studies.map((study, index) => (
            <article key={study.title} className="group">
              <div
                className={[
                  "relative aspect-[4/5] overflow-hidden border border-rule",
                  index === 0
                    ? "bg-[linear-gradient(135deg,#f4efe4_0%,#f4efe4_42%,#b31e3d_42%,#b31e3d_45%,#dbcdb9_45%)]"
                    : "",
                  index === 1
                    ? "bg-[repeating-linear-gradient(135deg,#1a1815_0_12px,#252119_12px_24px)]"
                    : "",
                  index === 2
                    ? "bg-[linear-gradient(180deg,#94d7d2_0%,#d9cfbd_58%,#777d58_58%)]"
                    : "",
                ].join(" ")}
              >
                <div className="absolute inset-x-4 bottom-4 border-t border-current pt-3 font-mono text-xs uppercase tracking-[0.16em] text-ink opacity-70">
                  visual study 0{index + 1}
                </div>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                {study.title}
              </h3>
              <p className="mt-2 font-cjk text-sm leading-[1.8] text-deep">
                {study.description}
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-muted">
                {study.tone}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

