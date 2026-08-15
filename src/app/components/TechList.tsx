import { resolveTech } from "@/lib/tech";

/**
 * Technologies read as a single mono line rather than pills. At ten items a
 * pill row wraps into a blob; a delimited line stays scannable and matches the
 * equipment-label voice of the rest of the page.
 */
export default function TechList({ tech }: { tech: readonly string[] }) {
  return (
    <p className="text-muted mt-4 font-mono text-xs leading-loose">
      {tech.map((key, i) => (
        <span key={key}>
          {i > 0 && <span className="text-line px-2">·</span>}
          {resolveTech(key).label}
        </span>
      ))}
    </p>
  );
}
