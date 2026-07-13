import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="micro-meta relative z-10 border-t border-rule bg-paper px-5 py-6 text-muted sm:px-8 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <p>© 2026 HuoHuoOvO</p>
        <nav aria-label="Footer navigation" className="flex gap-6">
          <Link href="/" className="footer-small-link">
            Home
          </Link>
          <Link href="/works/" className="footer-small-link">
            Works
          </Link>
          <Link href="/notes/" className="footer-small-link">
            Notes
          </Link>
          <Link href="/#cover" className="footer-small-link">
            Top
          </Link>
        </nav>
      </div>
    </footer>
  );
}
