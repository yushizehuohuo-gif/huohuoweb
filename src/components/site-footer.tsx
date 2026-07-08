import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-rule bg-paper px-5 py-6 font-display text-xs leading-none text-muted sm:px-8 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-x-6 gap-y-2">
        <p>© 2026 HuoHuoOvO</p>
        <Link
          href="/works/"
          className="border-b border-transparent pb-1 transition-colors hover:border-accent hover:text-accent focus-visible:text-accent"
        >
          Works
        </Link>
      </div>
    </footer>
  );
}
