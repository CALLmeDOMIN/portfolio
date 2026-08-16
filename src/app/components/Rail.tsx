import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import RollLink from "./RollLink";
import SectionIndex from "./SectionIndex";
import Wordmark from "./Wordmark";

function RailLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-accent font-mono text-[11px] tracking-[0.18em] uppercase">
      {children}
    </p>
  );
}

/**
 * The rail is the site's only navigation. On desktop it sticks to the left as a
 * metadata panel; on mobile it collapses to a header with a sticky index strip,
 * so there is no fixed bar overlapping headings on scroll.
 */
export default function Rail() {
  return (
    <header className="border-line shrink-0 border-b lg:sticky lg:top-0 lg:h-screen lg:w-[260px] lg:border-r lg:border-b-0">
      {/* overflow-y-auto because the rail's content is taller than a short
          laptop viewport, which was clipping the contact block. */}
      <div className="flex flex-col gap-8 px-6 py-8 lg:h-full lg:gap-7 lg:overflow-y-auto lg:px-7 lg:py-10">
        <Wordmark />

        <div className="hidden lg:block">
          <RailLabel>Operator</RailLabel>
          <p className="mt-2 text-sm">Software Engineer</p>
          <p className="text-muted text-sm">AVSystem, Good Lood team</p>
        </div>

        <SectionIndex />

        <div className="hidden lg:block">
          <RailLabel>Credential</RailLabel>
          <p className="text-muted mt-2 text-[13px] leading-relaxed">
            inż. Informatyka Techniczna
            <br />
            AGH, Kraków
            <br />
            MSc in progress
          </p>
        </div>

        <div className="lg:mt-auto">
          <div className="hidden lg:block">
            <RailLabel>Contact</RailLabel>
          </div>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[13px] lg:flex-col lg:gap-1">
            <li>
              <RollLink
                href="https://github.com/CALLmeDOMIN"
                label="GitHub"
                external
              />
            </li>
            <li>
              <RollLink
                href="https://www.linkedin.com/in/dominiksieron/"
                label="LinkedIn"
                external
              />
            </li>
            <li className="inline-flex items-center">
              <RollLink href="/cv" label="CV" />
              <IconArrowUpRight size={14} className="-mt-0.5" aria-hidden />
            </li>
            <li>
              <RollLink
                href="mailto:contact@dsieron.pl"
                label="contact@dsieron.pl"
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
