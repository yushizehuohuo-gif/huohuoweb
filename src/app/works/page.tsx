import Link from "next/link";
import type { Metadata } from "next";
import GrainOverlay from "@/components/grain-overlay";
import SiteFooter from "@/components/site-footer";
import SiteNav from "@/components/site-nav";
import WorkEntry from "@/components/work-entry";
import { getAllWorks } from "@/lib/works";

export const metadata: Metadata = {
  title: "Works",
  description: "作品档案 - HuoHuoOvO 的创作记录。",
};

export default async function WorksPage() {
  const works = await getAllWorks();

  return (
    <>
      <GrainOverlay />
      <SiteNav />
      <main
        id="main-content"
        tabIndex={-1}
        className="relative z-10 overflow-x-clip px-6 pb-16 pt-28 md:px-10 md:pt-32 lg:px-16"
      >
        <div className="mb-16 md:mb-24">
          <h1 className="font-display text-4xl font-bold leading-none text-ink md:text-5xl">
            Works
          </h1>
          <p className="mt-4 max-w-2xl font-cjk text-base leading-[1.85] text-muted md:text-lg">
            作品档案 - 一些完成的和未完成的东西。
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {works.map((work, index) => (
            <WorkEntry key={work.slug} work={work} index={index} />
          ))}
        </div>

        <div className="mt-24 border-t border-rule pt-8">
          <Link
            href="/"
            className="font-display text-sm text-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-4"
          >
            ← Home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
