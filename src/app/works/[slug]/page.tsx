import type { ComponentType } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GrainOverlay from "@/components/grain-overlay";
import SiteFooter from "@/components/site-footer";
import SiteNav from "@/components/site-nav";
import WorkCover from "@/components/work-cover";
import {
  formatWorkStatus,
  formatWorkType,
  getAllWorks,
  getWorkBySlug,
  getWorkSlugs,
} from "@/lib/works";
import LowTemperatureRoom from "../../../../content/works/low-temperature-room.mdx";
import QVersionDota2 from "../../../../content/works/q-version-dota2.mdx";
import VisualLanguage2025 from "../../../../content/works/visual-language-2025.mdx";

const mdxModules: Record<string, ComponentType> = {
  "low-temperature-room": LowTemperatureRoom,
  "q-version-dota2": QVersionDota2,
  "visual-language-2025": VisualLanguage2025,
};

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getWorkSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = await getWorkBySlug(slug);
  if (!work) return { title: "Not Found" };

  return {
    title: work.title,
    description: work.description,
    alternates: {
      canonical: `https://yushizehuohuo-gif.github.io/huohuoweb/works/${work.slug}/`,
    },
    openGraph: {
      title: `${work.title} | HuoHuoOvO`,
      description: work.description,
      type: "article",
      url: `https://yushizehuohuo-gif.github.io/huohuoweb/works/${work.slug}/`,
      ...(work.coverExists && {
        images: [{ url: work.cover, alt: work.title }],
      }),
    },
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = await getWorkBySlug(slug);
  if (!work) notFound();

  const works = await getAllWorks();
  const currentIndex = works.findIndex((item) => item.slug === slug);
  const previousWork = currentIndex > 0 ? works[currentIndex - 1] : null;
  const nextWork = currentIndex < works.length - 1 ? works[currentIndex + 1] : null;

  const MdxContent = mdxModules[slug];
  if (!MdxContent) {
    throw new Error(
      `MDX module not found for slug: ${slug}. Add import to page.tsx.`,
    );
  }

  return (
    <>
      <GrainOverlay />
      <SiteNav />
      <main
        id="main-content"
        tabIndex={-1}
        className="relative z-10 overflow-x-clip px-6 pb-16 pt-28 md:px-10 md:pt-32 lg:px-16"
      >
        <article className="mx-auto max-w-[1240px]">
          <header className="mb-10 md:mb-16">
            <Link
              href="/works/"
              className="font-display text-sm text-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-4"
            >
              ← Works
            </Link>

            <h1 className="mt-8 font-display text-4xl font-bold leading-tight text-ink md:text-5xl lg:text-6xl">
              {work.title}
            </h1>

            <div className="micro-meta mt-6 flex flex-wrap items-baseline gap-3 text-muted sm:gap-4">
              <span>{work.year}</span>
              <span aria-hidden="true">·</span>
              <span>{formatWorkType(work.type)}</span>
              <span aria-hidden="true">·</span>
              <span>{formatWorkStatus(work.status)}</span>
              {work.role && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{work.role}</span>
                </>
              )}
            </div>
          </header>

          {work.coverExists ? (
            <div className="mb-10 md:mb-16">
              {/* eslint-disable-next-line @next/next/no-img-element -- Static export uses native images for work covers. */}
              <img
                src={work.cover}
                alt=""
                className="block w-full"
                style={{ aspectRatio: "16 / 10", objectFit: "cover" }}
              />
            </div>
          ) : (
            <div className="mb-10 md:mb-16">
              <WorkCover work={work} />
            </div>
          )}

          <div className="mx-auto max-w-[720px]">
            <MdxContent />
          </div>

          <div className="mx-auto mt-16 max-w-[720px] border-t border-rule pt-8">
            <Link
              href="/works/"
              className="font-display text-sm text-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-4"
            >
              ← Back to Works
            </Link>
          </div>

          <nav
            aria-label="Adjacent works"
            className="mx-auto mt-16 grid max-w-[960px] gap-px border border-rule bg-rule sm:grid-cols-2"
          >
            {previousWork ? (
              <Link
                href={`/works/${previousWork.slug}/`}
                className="work-pagination-link bg-paper"
              >
                <span className="eyebrow eyebrow-muted">Previous work</span>
                <span>{previousWork.title}</span>
              </Link>
            ) : (
              <span className="hidden bg-paper sm:block" aria-hidden="true" />
            )}
            {nextWork ? (
              <Link
                href={`/works/${nextWork.slug}/`}
                className="work-pagination-link bg-paper sm:text-right"
              >
                <span className="eyebrow eyebrow-muted">Next work</span>
                <span>{nextWork.title}</span>
              </Link>
            ) : (
              <span className="hidden bg-paper sm:block" aria-hidden="true" />
            )}
          </nav>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
