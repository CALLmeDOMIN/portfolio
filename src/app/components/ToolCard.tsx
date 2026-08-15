import { type Tool } from "@/lib/content/load";
import { Prose } from "./mdx";
import TechList from "./TechList";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <article className="border-secondary flex flex-col gap-3 rounded-xl border p-6">
      <div className="flex flex-wrap items-baseline gap-x-3">
        <h3 className="text-2xl font-semibold">{tool.title}</h3>
        {tool.replaces && (
          <p className="text-primary text-sm">instead of {tool.replaces}</p>
        )}
      </div>
      <div className="grow">
        <Prose source={tool.body} />
      </div>
      <TechList tech={tool.tech} />
    </article>
  );
}
