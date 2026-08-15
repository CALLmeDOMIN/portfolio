import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { formatDateRange } from "@/lib/format";
import { Prose } from "./mdx";
import TechList from "./TechList";

export type TimelineEntryProps = {
  title: string;
  subtitle: string;
  url: string;
  logo: string | null;
  dateStart: Date | null;
  dateEnd: Date | null;
  tech: readonly string[];
  body: string;
};

export default function TimelineEntry({
  title,
  subtitle,
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
              alt={`${subtitle} logo`}
              fill
              sizes="160px"
              className="object-contain"
            />
          ) : (
            <span className="text-primary text-center text-lg font-semibold">
              {subtitle}
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
              {title}
              <IconArrowUpRight size={28} className="-mt-1 inline-block" />
            </h3>
          </Link>
          <p className="text-primary">{subtitle}</p>
        </div>
        <div>
          <Prose source={body} />
        </div>
        <TechList tech={tech} />
      </div>
    </article>
  );
}
