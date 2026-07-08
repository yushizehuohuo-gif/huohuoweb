import Link from "next/link";

export default function ArchiveFooter() {
  return (
    <section
      id="archive"
      aria-labelledby="archive-title"
      className="bg-[#24211d] px-5 py-16 text-paper sm:px-8 md:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1240px] gap-8 border-t border-[#5a5043] pt-8 md:grid-cols-[0.36fr_0.64fr]">
        <div data-reveal>
          <p className="font-mono text-xs uppercase text-[#c9b89d]">
            Archive
          </p>
          <h2
            id="archive-title"
            className="mt-4 font-cjk text-2xl font-medium leading-snug"
          >
            当前公开入口。
          </h2>
        </div>
        <div data-reveal>
          <p className="max-w-[42rem] font-cjk text-sm leading-7 text-[#d9ccb8]">
            现在可读的内容先放在作品档案里。更多笔记、视觉研究和未完成片段，会在以后慢慢进入这个索引。
          </p>
          <Link
            href="/works/"
            className="archive-link mt-8 inline-flex border-b border-[#b99764] pb-1 font-mono text-sm uppercase text-[#d5b37b] transition-colors hover:text-paper"
          >
            enter /works
          </Link>
        </div>
      </div>
    </section>
  );
}
