import {
  formatWorkStatus,
  formatWorkType,
  type Work,
} from "@/lib/works";

const coverNumbers: Record<string, string> = {
  "low-temperature-room": "01",
  "visual-language-2025": "02",
  "q-version-dota2": "03",
};

export default function WorkCover({ work }: { work: Work }) {
  const coverNumber = coverNumbers[work.slug] ?? "00";
  const repeatedTitle = Array.from({ length: 7 }, () => work.title);

  return (
    <div aria-hidden="true" className="work-cover" data-cover={work.slug}>
      <div className="work-cover__repetition">
        {repeatedTitle.map((title, index) => (
          <span key={`${work.slug}-${index}`}>{title}</span>
        ))}
      </div>

      <div className="work-cover__meta micro-meta">
        <span>
          {coverNumber} / {work.year}
        </span>
        <span>{formatWorkType(work.type)}</span>
      </div>

      <div className="work-cover__title-group">
        <p className="eyebrow">HuoHuo archive</p>
        <p className="work-cover__title">{work.title}</p>
        <p className="micro-meta">{formatWorkStatus(work.status)}</p>
      </div>
    </div>
  );
}
