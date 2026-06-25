"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { href: "/works/", label: "Works" },
  { href: "/now/", label: "Now" },
  { href: "/about/", label: "About" },
] as const;

function normalizePath(path: string) {
  if (path === "/") {
    return path;
  }

  return path.replace(/\/+$/, "");
}

export default function SiteNav() {
  const pathname = usePathname();
  const currentPath = normalizePath(pathname);

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed left-6 top-6 z-20 flex max-w-[calc(100vw-3rem)] flex-wrap items-center gap-x-6 gap-y-2 font-display text-sm leading-none md:left-auto md:right-10 md:top-10 lg:right-16"
    >
      {navigationItems.map((item) => {
        const itemPath = normalizePath(item.href);
        const isActive =
          currentPath === itemPath || currentPath.startsWith(`${itemPath}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={[
              "border-b pb-1 text-muted transition-colors hover:text-ink focus-visible:text-ink focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-4",
              isActive ? "border-accent text-ink" : "border-transparent",
            ].join(" ")}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
