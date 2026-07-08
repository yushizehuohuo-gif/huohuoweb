const patternRows = [
  "HUOHUO",
  "HUOHUOOVO",
  "火火",
  "FIELD NOTES",
  "UNFINISHED",
  "一些低温燃烧的东西",
  "WORKS",
  "TOOLS",
];

export default function TextPattern({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`text-pattern ${className}`}>
      <div className="text-pattern__grid">
        {patternRows.map((text, rowIndex) => (
          <div key={text} className="text-pattern__row">
            {Array.from({ length: 14 }).map((_, repeatIndex) => (
              <span key={`${text}-${repeatIndex}`} className="text-pattern__word">
                {text}
              </span>
            ))}
            <span className="text-pattern__row-index">
              {String(rowIndex + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
