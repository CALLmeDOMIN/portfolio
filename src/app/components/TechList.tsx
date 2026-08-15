import { resolveTech } from "@/lib/tech";

/**
 * Technologies read as a delimited mono line rather than pills. At ten items a
 * pill row wraps into a blob; a delimited line stays scannable and matches the
 * equipment-label voice of the rest of the page.
 *
 * Flex items with a CSS-generated separator, not inline text: an inline `·`
 * between two elements has no break opportunity after it, so the browser
 * commits the separator to a line and then overflows the label that follows.
 * That caused horizontal scroll at 384px.
 */
export default function TechList({ tech }: { tech: readonly string[] }) {
  return (
    <ul className="text-muted mt-4 flex flex-wrap items-baseline gap-x-2.5 gap-y-1 font-mono text-xs">
      {tech.map((key) => (
        <li
          key={key}
          className="before:text-line before:mr-2.5 before:content-['·'] first:before:hidden"
        >
          {resolveTech(key).label}
        </li>
      ))}
    </ul>
  );
}
