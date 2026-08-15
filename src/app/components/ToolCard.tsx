import { type Tool } from "@/lib/content/load";
import { Prose } from "./mdx";
import TechList from "./TechList";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <article className="bg-panel p-6 md:p-7">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="font-mono text-lg">{tool.title}</h3>
        {tool.replaces && (
          <p className="text-accent font-mono text-[11px] tracking-[0.15em] uppercase">
            replaces {tool.replaces}
          </p>
        )}
      </div>
      <div className="text-prose mt-3 max-w-[68ch] leading-relaxed">
        <Prose source={tool.body} />
      </div>
      <TechList tech={tool.tech} />
    </article>
  );
}
