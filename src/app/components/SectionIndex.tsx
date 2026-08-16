"use client";

import { useEffect, useState } from "react";
import RollLink from "./RollLink";

const SECTIONS = [
  { id: "work", code: "01", label: "Work" },
  { id: "shipped", code: "02", label: "Shipped" },
  { id: "tools", code: "03", label: "Built for myself" },
  { id: "contact", code: "04", label: "Contact" },
] as const;

/**
 * The rail's index, marking which section you are currently in.
 *
 * This is the one piece of scroll-driven behaviour on the page, and it earns
 * that by answering "where am I" — a question a single long page otherwise
 * leaves open. It is not a reveal effect.
 *
 * The rootMargin makes a section active once it reaches the upper third of the
 * viewport rather than when it first appears, which is where a reader's
 * attention actually is. Falls back to no highlight if IntersectionObserver is
 * unavailable; the links still work.
 */
export default function SectionIndex() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const seen = new Map<string, boolean>();

    // The last section is short and sits at the end of the document, so once
    // the page bottoms out the detection band never reaches it. Without this
    // the final entry can never become current.
    const atBottom = () =>
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;

    const resolve = () => {
      if (atBottom()) {
        setActive(SECTIONS[SECTIONS.length - 1].id);
        return;
      }
      // Last intersecting section in document order wins, so crossing a
      // boundary hands over cleanly instead of flickering between neighbours.
      const current = SECTIONS.filter((s) => seen.get(s.id)).pop();
      setActive(current ? current.id : null);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          seen.set(entry.target.id, entry.isIntersecting);
        resolve();
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    for (const section of SECTIONS) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    window.addEventListener("scroll", resolve, { passive: true });
    window.addEventListener("resize", resolve);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", resolve);
      window.removeEventListener("resize", resolve);
    };
  }, []);

  return (
    <nav aria-label="Sections" className="lg:mt-2">
      <ul className="flex flex-wrap gap-x-5 gap-y-2 lg:flex-col lg:gap-2">
        {SECTIONS.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id} className="flex items-baseline gap-3">
              <span
                className={`font-mono text-[11px] transition-colors duration-300 ${
                  isActive ? "text-accent" : "text-muted"
                }`}
              >
                {s.code}
              </span>
              <RollLink
                href={`#${s.id}`}
                label={s.label === "Built for myself" ? "Tools" : s.label}
                className={`text-sm transition-colors duration-300 ${
                  isActive ? "text-accent" : ""
                }`}
              />
              {isActive && <span className="sr-only">(current section)</span>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
