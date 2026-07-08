import type { VisualFragment } from "@/lib/homepage-content";

const cropPosition: Record<VisualFragment["crop"], string> = {
  wide: "center center",
  left: "20% 48%",
  right: "76% 36%",
  lower: "42% 86%",
};

export default function VisualField({
  imageSrc,
  fragments,
}: {
  imageSrc: string;
  fragments: VisualFragment[];
}) {
  const [main, ...rest] = fragments;

  return (
    <section
      id="visual"
      aria-labelledby="visual-title"
      className="bg-[#f0e8db] px-5 py-20 text-ink sm:px-8 md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-8 border-t border-[#cdbd9f] pt-8 md:grid-cols-[0.36fr_0.64fr]">
          <div data-reveal>
            <p className="font-mono text-xs uppercase text-accent">
              Visual field
            </p>
            <h2
              id="visual-title"
              className="mt-4 max-w-[18rem] font-cjk text-2xl font-medium leading-snug md:text-3xl"
            >
              一张封面，几块碎片。
            </h2>
            <p className="mt-5 max-w-[24rem] font-cjk text-sm leading-7 text-deep">
              纸张、旧屏、地图余影和一条红色切面，作为可继续生长的视觉样本。
            </p>
          </div>

          <div className="grid gap-4">
            <figure data-reveal className="visual-card">
              <div
                aria-label={main.title}
                className="visual-card-image visual-card-image-main min-h-[420px] border border-[#cdbd9f] bg-cover bg-no-repeat shadow-[0_22px_54px_rgba(76,56,33,0.1)] md:min-h-[560px]"
                style={{
                  backgroundImage: `url(${imageSrc})`,
                  backgroundPosition: cropPosition[main.crop],
                }}
              />
              <figcaption className="mt-3 grid gap-2 border-t border-[#cdbd9f] pt-3 md:grid-cols-[0.32fr_1fr]">
                <span className="font-mono text-xs uppercase text-accent">
                  {main.label}
                </span>
                <span className="text-sm leading-6 text-deep">
                  {main.title} — {main.caption}
                </span>
              </figcaption>
            </figure>

            <div className="grid gap-4 md:grid-cols-3">
              {rest.map((fragment) => (
                <figure key={fragment.label} data-reveal className="visual-card">
                  <div
                    aria-label={fragment.title}
                    className="visual-card-image min-h-[220px] border border-[#cdbd9f] bg-[length:132%] bg-no-repeat shadow-[0_22px_54px_rgba(76,56,33,0.1)]"
                    style={{
                      backgroundImage: `url(${imageSrc})`,
                      backgroundPosition: cropPosition[fragment.crop],
                    }}
                  />
                  <figcaption className="mt-3 border-t border-[#cdbd9f] pt-3">
                    <p className="font-mono text-xs uppercase text-accent">
                      {fragment.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-deep">
                      {fragment.caption}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
