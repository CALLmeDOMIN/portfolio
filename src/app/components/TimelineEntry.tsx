import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { formatDateRange } from "@/lib/format";
import { Prose } from "./mdx";
import TechList from "./TechList";

export type TimelineEntryProps = {
  /** The organization. Heads the entry, names the logo, and stands in for a missing one. */
  organization: string;
  /** What the position was. Never used as the entry's identity. */
  role: string;
  url: string;
  logo: string | null;
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
    <article className="flex flex-col gap-4 md:flex-row md:gap-8">
      <div className="flex shrink-0 flex-col gap-3 md:w-40">
        <div className="relative flex aspect-video items-center justify-center">
          {logo ? (
            <Image
              src={logo}
              alt={`${organization} logo`}
              fill
              sizes="(min-width: 768px) 160px, 100vw"
              className="object-contain"
            />
          ) : (
            <span className="text-center text-lg font-semibold opacity-80">
              {organization}
            </span>
          )}
        </div>
        {dateStart && (
          <p className="text-center text-sm font-semibold">
            {formatDateRange(dateStart, dateEnd)}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            <h3 className="text-2xl font-semibold md:text-3xl">
              {organization}
              <IconArrowUpRight size={28} className="-mt-1 inline-block" />
            </h3>
          </Link>
          <p className="opacity-80">{role}</p>
        </div>
        <div>
          <Prose source={body} />
        </div>
        <TechList tech={tech} />
      </div>
    </article>
  );
}
