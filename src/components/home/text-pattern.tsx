import type { CSSProperties } from "react";

const rows = [
  ["HUOHUO", "火火", "HUOHUOOVO", "FIELD NOTES"],
  ["一些低温燃烧的东西", "HUOHUO", "UNFINISHED"],
  ["NICK HUO", "VISUAL", "TOOLS", "NOTES"],
  ["火火", "FIELD NOTES", "HUOHUO", "WORKS"],
];

export default function TextPattern({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`text-pattern ${className}`}>
      {rows.map((row, rowIndex) => (
        <div
          key={row.join("-")}
          className="text-pattern__row"
          style={
            {
              "--pattern-offset": rowIndex % 2 === 0 ? "-8%" : "-22%",
              "--pattern-duration": `${42 + rowIndex * 7}s`,
            } as CSSProperties
          }
        >
          {Array.from({ length: 4 }).map((_, repeatIndex) => (
            <span key={`${rowIndex}-${repeatIndex}`}>
              {row.map((word) => (
                <span key={`${word}-${repeatIndex}`} className="text-pattern__word">
                  {word}
                </span>
              ))}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
