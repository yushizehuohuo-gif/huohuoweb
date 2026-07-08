"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { href: "/#index", label: "Index" },
  { href: "/#work", label: "Work" },
  { href: "/#visual", label: "Visual" },
  { href: "/#notes", label: "Notes" },
  { href: "/works/", label: "Works" },
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
    <nav
      aria-label="Primary navigation"
      className="fixed left-5 top-5 z-20 flex max-w-[calc(100vw-2.5rem)] flex-wrap items-center gap-x-5 gap-y-2 bg-paper/82 px-1 py-1 font-display text-xs leading-none text-muted backdrop-blur md:left-auto md:right-8 md:top-7 lg:right-12"
    >
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
              "border-b border-transparent pb-1 transition-colors hover:border-accent hover:text-ink focus-visible:text-ink",
              isActive ? "border-accent text-ink" : "",
            ].join(" ")}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

