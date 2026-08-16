import Link from "next/link";

/**
 * A link whose characters roll over on hover, like an odometer or a split-flap
 * board — equipment language, matching the numbered units and mono labels the
 * rest of the page uses.
 *
 * The incoming copy is a CSS ::after using content: attr(data-char), not a
 * second copy of the text in the DOM. That matters: an earlier version
 * duplicated the label and hid one copy with utility classes, so whenever the
 * stylesheet lagged the markup the link rendered as "WorkWWoorrkk". With the
 * duplicate living in CSS, the worst case is a plain, correct label.
 *
 * It also means the accessible name is just the characters — no sr-only span
 * and no aria-hidden needed.
 */
export default function RollLink({
  href,
  label,
  external = false,
  className = "",
}: {
  href: string;
  label: string;
  external?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
      className={`roll inline-flex ${className}`}
    >
      {[...label].map((char, i) => (
        <span
          key={`${char}-${i}`}
          className="roll-char"
          data-char={char}
          style={{ "--i": i } as React.CSSProperties}
        >
          <span className="roll-inner">{char}</span>
        </span>
      ))}
    </Link>
  );
}
