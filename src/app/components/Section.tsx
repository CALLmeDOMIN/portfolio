import { type ReactNode } from "react";

/**
 * A numbered unit. The code is structural, not decorative: the same numbers
 * index the sections in the rail, so they are the page's coordinate system.
 */
export default function Section({
  id,
  code,
  title,
  children,
}: {
  id: string;
  code: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="border-line scroll-mt-24 border-t py-14 md:py-20"
    >
      <div className="mb-10 flex gap-5 md:gap-6">
        <span className="text-muted w-10 shrink-0 pt-2 font-mono text-[11px] md:w-12">
          {code}
        </span>
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] uppercase">
          {title}
        </h2>
      </div>
      <div className="md:pl-[4.25rem]">{children}</div>
    </section>
  );
}
