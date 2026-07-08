const patternLines = [
  { lang: "en", text: "HUOHUOOVO", repeat: 6 },
  { lang: "cn", text: "火火", repeat: 12 },
  { lang: "en", text: "YUSHIZE", repeat: 7 },
  { lang: "cn", text: "一些低温燃烧的东西", repeat: 3 },
  { lang: "en", text: "FIELDNOTES", repeat: 6 },
] as const;

function PatternRows() {
  return (
    <>
      {patternLines.map((line) => (
        <div
          key={`${line.lang}-${line.text}`}
          className="text-pattern__row"
          data-lang={line.lang}
        >
          <span className="text-pattern__track">
            {Array.from({ length: line.repeat })
              .map(() => line.text)
              .join(" ")}
          </span>
        </div>
      ))}
    </>
  );
}

export default function TextPattern({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`text-pattern ${className}`}>
      <div className="text-pattern__plane text-pattern__plane--base">
        <div className="text-pattern__grid">
          <PatternRows />
        </div>
      </div>
      <div className="text-pattern__plane text-pattern__plane--wake">
        <div className="text-pattern__grid">
          <PatternRows />
        </div>
      </div>
    </div>
  );
}
