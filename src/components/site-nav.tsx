"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { href: "/#index", label: "INDEX" },
  { href: "/#work", label: "WORKS" },
  { href: "/#visual", label: "VISUAL", secondary: true },
  { href: "/#notes", label: "NOTES", secondary: true },
] as const;

function normalizePath(path: string) {
  const [pathname] = path.split("#");

  if (path === "/") {
    return path;
  }

  return pathname.replace(/\/+$/, "") || "/";
}

export default function SiteNav() {
  const pathname = usePathname();
  const currentPath = normalizePath(pathname);

  return (
    <header className="site-topbar fixed inset-x-0 top-0 z-20 px-5 py-5 sm:px-8 md:px-10 lg:px-12">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <nav
        aria-label="Primary navigation"
        className="grid grid-cols-[1fr_auto_1fr] items-start gap-4 font-display text-xs leading-none text-muted"
      >
        <Link
          href="/"
          className="site-topbar-link inline-flex justify-self-start text-ink"
          aria-label="HuoHuoOvO home"
        >
          HuoHuo/
        </Link>

        <Link
          href="/#archive"
          className="site-topbar-link hidden justify-self-center sm:inline-flex"
        >
          OPEN
        </Link>

        <div className="flex flex-wrap justify-end gap-x-5 gap-y-2">
          {navigationItems.map((item) => {
            const isHashLink = item.href.includes("#");
            const itemPath = normalizePath(item.href);
            const isActive =
              !isHashLink &&
              (currentPath === itemPath || currentPath.startsWith(`${itemPath}/`));

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "site-topbar-link inline-flex",
                  "secondary" in item && item.secondary
                    ? "site-topbar-secondary"
                    : "",
                  isActive ? "text-ink" : "",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/works/"
            className="site-topbar-link inline-flex text-ink"
          >
            ARCHIVE
          </Link>
        </div>
      </nav>
    </header>
  );
}
