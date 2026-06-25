import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-rule px-6 py-6 font-display text-xs leading-none text-muted md:px-10 lg:px-16">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <p>© 2026 HuoHuoOvO</p>
        <Link
          href="/works/"
          className="border-b border-transparent pb-1 transition-colors hover:border-accent hover:text-ink focus-visible:text-ink focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-4"
        >
          Works
        </Link>
      </div>
    </footer>
  );
}
