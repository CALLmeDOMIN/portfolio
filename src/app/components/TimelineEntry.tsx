import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { formatDateRange } from "@/lib/format";
import LogoPlates from "./LogoPlates";
import { Prose } from "./mdx";
import TechList from "./TechList";

export type TimelineEntryProps = {
  /** The organization. Heads the entry and is the entry's identity. */
  organization: string;
  /** What the position was. Never used as the entry's identity. */
  role: string;
  url: string;
  logo: readonly string[] | null;
  dateStart: Date | null;
  dateEnd: Date | null;
  tech: readonly string[];
  body: string;
};

export default function TimelineEntry({
  organization,
  role,
  url,
  logo,
  dateStart,
  dateEnd,
  tech,
  body,
}: TimelineEntryProps) {
  return (
    <article className="border-line mb-12 border-b pb-12 last:mb-0 last:border-b-0 last:pb-0">
      {/* Plates stack above the text on narrow screens: side by side, a pair of
          72px plates plus the × leaves too little room for the heading. */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-5">
        {logo && <LogoPlates logos={logo} />}
        <div className="min-w-0">
          {dateStart && (
            <p className="text-accent flex items-center gap-2 font-mono text-xs tracking-wider">
              {/* A live indicator, the way a panel shows a running unit: it
                  says at a glance which roles are current, without the reader
                  parsing dates. */}
              {dateEnd === null && <span className="status-dot" aria-hidden />}
              {formatDateRange(dateStart, dateEnd)}
            </p>
          )}
          <h3 className="mt-1 text-2xl font-semibold md:text-[1.75rem]">
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent inline-flex items-center gap-1 transition-colors"
            >
              {organization}
              <IconArrowUpRight
                size={22}
                className="-mt-1 shrink-0"
                aria-hidden
              />
            </Link>
          </h3>
          <p className="text-muted mt-0.5 text-[15px]">{role}</p>
        </div>
      </div>
      <div className="text-prose mt-5 max-w-[62ch] leading-relaxed">
        <Prose source={body} />
      </div>
      <TechList tech={tech} />
    </article>
  );
}
