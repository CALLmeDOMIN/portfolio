import Link from "next/link";

/**
 * A link whose characters roll over on hover, like an odometer or a split-flap
 * board. Chosen because that is equipment language rather than decoration: it
 * matches the numbered units and mono labels the rest of the page uses.
 *
 * CSS only — two stacked copies of each character inside a clipped box, the
 * stack translating by half its height. The per-character delay is what makes
 * it read as a roll rather than a single block sliding.
 *
 * Under prefers-reduced-motion the transition is removed in globals.css, so the
 * label simply stays put.
 */
export default function RollLink({
  href,
  label,
  className = "",
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link href={href} className={`group inline-flex ${className}`}>
      <span className="sr-only">{label}</span>
      <span aria-hidden className="inline-flex">
        {[...label].map((char, i) => (
          <span
            key={`${char}-${i}`}
            className="roll-char inline-block h-[1.15em] overflow-hidden"
            style={{ "--i": i } as React.CSSProperties}
          >
            <span className="roll-stack flex flex-col">
              <span className="block h-[1.15em] leading-[1.15]">
                {char === " " ? " " : char}
              </span>
              <span className="text-accent block h-[1.15em] leading-[1.15]">
                {char === " " ? " " : char}
              </span>
            </span>
          </span>
        ))}
      </span>
    </Link>
  );
}
