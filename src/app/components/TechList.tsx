import { resolveTech } from "@/lib/tech";

export default function TechList({ tech }: { tech: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((key) => {
        const { label, Icon } = resolveTech(key);
        return (
          <li
            key={key}
            className="border-secondary flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm"
          >
            {Icon && <Icon size={16} className="text-accent" />}
            {label}
          </li>
        );
      })}
    </ul>
  );
}
