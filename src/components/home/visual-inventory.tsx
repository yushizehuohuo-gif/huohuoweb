import type { VisualInventoryItem } from "@/lib/homepage-content";

export default function VisualInventory({
  items,
}: {
  items: VisualInventoryItem[];
}) {
  return (
    <section
      id="visual"
      aria-labelledby="visual-title"
      className="bg-[#eee3cf] px-6 py-20 text-ink md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.64fr_1.36fr]">
        <div>
          <p className="font-mono text-xs text-accent">VISUAL INVENTORY</p>
          <h2
            id="visual-title"
            className="mt-4 max-w-[12ch] font-display text-[clamp(2.8rem,6vw,6.8rem)] font-black leading-[0.92]"
          >
            视觉库存
          </h2>
          <p className="mt-6 max-w-[34rem] font-cjk text-base leading-8 text-deep">
            这里不是空灰占位图。每个 tile 都先作为一个可继续发展的视觉研究：颜色、路线、纸面、界面碎片和玩家情绪的温度。
          </p>
        </div>

        <div className="grid auto-rows-[minmax(220px,auto)] gap-4 md:grid-cols-6">
          {items.map((item, index) => (
            <article
              key={item.title}
              className={[
                "visual-tile relative overflow-hidden border border-[#d5c7af] p-5",
                `visual-tile-${item.variant}`,
                index === 0 ? "md:col-span-3 md:row-span-2" : "",
                index === 1 ? "md:col-span-3" : "",
                index === 2 ? "md:col-span-2" : "",
                index === 3 ? "md:col-span-2" : "",
                index === 4 ? "md:col-span-2" : "",
              ].join(" ")}
            >
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <p className="font-mono text-xs text-ink/62">{item.label}</p>
                  <h3 className="mt-3 max-w-[14rem] font-display text-2xl font-black leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="max-w-[18rem] font-mono text-xs leading-5 text-ink/70">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

