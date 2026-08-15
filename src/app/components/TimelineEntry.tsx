import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { formatDateRange } from "@/lib/format";
import { Prose } from "./mdx";
import TechList from "./TechList";

export type TimelineEntryProps = {
  /** The organization. Heads the entry and names it for screen readers. */
  organization: string;
  /** What the position was. Never used as the entry's identity. */
  role: string;
  url: string;
  dateStart: Date | null;
  dateEnd: Date | null;
  tech: readonly string[];
  body: string;
};

export default function TimelineEntry({
  organization,
  role,
  url,
  dateStart,
  dateEnd,
  tech,
  body,
}: TimelineEntryProps) {
  return (
    <article className="border-line mb-12 border-b pb-12 last:mb-0 last:border-b-0 last:pb-0">
      {dateStart && (
        <p className="text-accent font-mono text-xs tracking-wider">
          {formatDateRange(dateStart, dateEnd)}
        </p>
      )}
      <h3 className="mt-2 text-2xl font-semibold md:text-[1.75rem]">
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent inline-flex items-center gap-1 transition-colors"
        >
          {organization}
          <IconArrowUpRight size={22} className="-mt-1" aria-hidden />
        </Link>
      </h3>
      <p className="text-muted mt-0.5 text-[15px]">{role}</p>
      <div className="text-prose mt-5 max-w-[62ch] leading-relaxed">
        <Prose source={body} />
      </div>
      <TechList tech={tech} />
    </article>
  );
}
