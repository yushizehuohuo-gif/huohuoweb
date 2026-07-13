import Link from "next/link";
import GrainOverlay from "@/components/grain-overlay";
import SiteFooter from "@/components/site-footer";
import SiteNav from "@/components/site-nav";

export default function NotFound() {
  return (
    <>
      <GrainOverlay />
      <SiteNav />
      <main
        id="main-content"
        tabIndex={-1}
        className="relative z-10 grid min-h-[calc(100svh-4rem)] place-items-center overflow-hidden bg-paper px-5 py-28 sm:px-8 md:px-10 lg:px-16"
      >
        <section className="w-full max-w-[1240px] border-y border-rule py-10 md:py-16">
          <p className="eyebrow eyebrow-accent">404 / Residue</p>
          <div className="mt-10 grid gap-10 md:grid-cols-[0.36fr_0.64fr] md:items-end">
            <h1 className="font-display text-[clamp(5rem,16vw,13rem)] font-medium leading-[0.72] text-ink">
              404
            </h1>
            <div className="md:pb-2">
              <h2 className="font-cjk text-2xl font-medium leading-snug text-ink md:text-4xl">
                这里没有被归档。
              </h2>
              <p className="mt-5 max-w-lg font-cjk text-base leading-8 text-muted">
                页面可能已经移动，或者这个片段还没有找到自己的容器。
              </p>
              <div className="mt-9 flex flex-wrap gap-6 font-display text-sm">
                <Link href="/" className="footer-large-link">
                  返回首页
                </Link>
                <Link href="/works/" className="footer-large-link">
                  查看 Works
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
