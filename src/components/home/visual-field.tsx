const visualBlocks = [
  {
    label: "visual 01",
    title: "HUOHUO",
    mode: "dark",
    words: ["HUOHUO", "HUOHUO", "HUOHUO", "HUOHUO"],
    caption: "将名字变成可重复的识别纹理",
  },
  {
    label: "visual 02",
    title: "一些低温燃烧的东西",
    mode: "light",
    words: ["一些低温燃烧的东西", "一些低温燃烧的东西"],
    caption: "把核心句子保留为情绪锚点",
  },
  {
    label: "visual 03",
    title: "FIELD NOTES",
    mode: "blue",
    words: ["FIELD NOTES", "WORKS", "VISUAL", "TOOLS"],
    caption: "让作品、工具与笔记共享一套字体秩序",
  },
] as const;

export default function VisualField() {
  return (
    <section
      id="visual"
      aria-labelledby="visual-title"
      className="section-editorial bg-paper px-5 py-20 text-ink sm:px-8 md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-8 border-t border-rule pt-8 md:grid-cols-[0.36fr_0.64fr]">
          <div data-reveal>
            <p className="eyebrow eyebrow-accent">
              Visual practice
            </p>
            <h2
              id="visual-title"
              className="mt-4 max-w-[18rem] font-cjk text-2xl font-medium leading-snug md:text-3xl"
            >
              让内容拥有形状。
            </h2>
            <p className="mt-5 max-w-[24rem] font-cjk text-sm leading-7 text-deep">
              文字、重复、纸张质感与高对比蓝色，连接社区工作、工具实践与私人写作。
            </p>
          </div>

          <div className="visual-type-grid">
            {visualBlocks.map((block, index) => (
              <figure
                key={block.label}
                data-reveal
                className="visual-type-block"
                data-mode={block.mode}
                data-wide={index === 0 ? "true" : undefined}
              >
                <div className="visual-type-field" aria-label={block.title}>
                  {Array.from({ length: index === 0 ? 9 : 7 }).map((_, row) => (
                    <p key={row}>
                      {block.words.map((word, wordIndex) => (
                        <span key={`${row}-${word}-${wordIndex}`}>{word}</span>
                      ))}
                    </p>
                  ))}
                </div>
                <figcaption>
                  <span>{block.label}</span>
                  <span>{block.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
