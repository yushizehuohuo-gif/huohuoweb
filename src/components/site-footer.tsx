import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-[#5a5043] bg-[#27231d] px-5 py-6 font-display text-xs leading-none text-[#b8aa96] sm:px-8 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-x-6 gap-y-2">
        <p>© 2026 HuoHuoOvO</p>
        <Link
          href="/works/"
          className="border-b border-transparent pb-1 transition-colors hover:border-[#d5b37b] hover:text-paper focus-visible:text-paper"
        >
          Works
        </Link>
      </div>
    </footer>
  );
}

