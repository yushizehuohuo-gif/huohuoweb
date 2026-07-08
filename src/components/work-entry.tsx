import Link from "next/link";
import type { Work } from "@/lib/works";

function WorkMeta({ work }: { work: Work }) {
  return (
    <div className="mb-2 flex items-baseline gap-3 font-display text-xs leading-none text-muted sm:gap-4">
      <span className="font-mono">{work.year}</span>
      <span aria-hidden="true">·</span>
      <span>{work.type}</span>
      <span className="ml-auto text-right">{work.status}</span>
    </div>
  );
}

function RhythmCover({ work }: { work: Work }) {
  if (!work.coverExists) {
    return (
      <div
        aria-hidden="true"
        className="grid aspect-[16/10] w-full place-items-end border border-rule bg-[linear-gradient(135deg,#f4efe4_0%,#f4efe4_55%,#e3dacb_55%,#e3dacb_56%,#d8ccba_56%)] p-4"
      >
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
          visual pending
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- Static export uses native images for optional work covers.
    <img
      src={work.cover}
      alt=""
      loading="lazy"
      className="block w-full object-cover"
      style={{ aspectRatio: "16 / 10" }}
    />
  );
}

export default function WorkEntry({
  work,
  index,
}: {
  work: Work;
  index: number;
}) {
  const rhythm = index % 3;
  const href = `/works/${work.slug}/`;

  if (rhythm === 0) {
    return (
      <Link
        href={href}
        className="group block border-t border-rule pt-8 focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-4 md:pt-10"
      >
        <WorkMeta work={work} />
        <h2 className="max-w-4xl font-display text-3xl font-bold leading-tight text-ink transition-colors group-hover:text-accent md:text-4xl">
          {work.title}
        </h2>
        <p className="mt-3 max-w-2xl font-cjk text-base leading-[1.85] text-muted md:text-lg">
          {work.description}
        </p>
      </Link>
    );
  }

  if (rhythm === 1) {
    return (
      <Link
        href={href}
        className="group block border-t border-rule pt-8 focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-4 md:pt-10"
      >
        <div className="md:grid md:grid-cols-3 md:gap-10">
          <div className="md:col-span-2">
            <WorkMeta work={work} />
            <h2 className="font-display text-3xl font-bold leading-tight text-ink transition-colors group-hover:text-accent">
              {work.title}
            </h2>
            <p className="mt-3 font-cjk text-base leading-[1.85] text-muted">
              {work.description}
            </p>
          </div>
          <div className="mt-5 md:mt-0">
            <RhythmCover work={work} />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group block border-t border-rule pt-8 focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-4 md:pt-10"
    >
      <div className="mb-5">
        <RhythmCover work={work} />
      </div>
      <WorkMeta work={work} />
      <h2 className="font-display text-3xl font-bold leading-tight text-ink transition-colors group-hover:text-accent">
        {work.title}
      </h2>
      <p className="mt-3 max-w-2xl font-cjk text-base leading-[1.85] text-muted">
        {work.description}
      </p>
    </Link>
  );
}
