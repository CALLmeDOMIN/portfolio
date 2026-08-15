"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const MARKS = [
  { key: "name", name: "DOMINIK." },
  { key: "cmd", name: "cmd_" },
  { key: "file", name: "src/Dominik.tsx" },
  { key: "tag", name: "DS/01" },
  { key: "surname", name: "SIEROŃ" },
] as const;

/** PROTOTYPE: the ?mark= override is temporary and goes once a mark is chosen. */
export default function Wordmark() {
  const params = useSearchParams();
  const mark = params.get("mark") ?? "name";

  return (
    <Link href="#top" className="inline-block">
      {mark === "cmd" && (
        <span className="font-mono text-xl lowercase">
          cmd
          <span className="bg-accent ml-0.5 inline-block h-4 w-2 translate-y-0.5" />
        </span>
      )}
      {mark === "file" && (
        <span className="text-lg font-bold">
          <span className="text-muted align-top text-xs">src</span>
          <span className="text-accent text-2xl">/</span>
          Dominik
          <span className="text-accent">.</span>
          tsx
        </span>
      )}
      {mark === "tag" && (
        <span className="border-line inline-flex items-center gap-2 border px-2 py-1 font-mono text-sm tracking-[0.2em]">
          DS<span className="text-accent">/</span>01
        </span>
      )}
      {mark === "surname" && (
        <span className="font-display text-2xl tracking-wide uppercase">
          Sieroń<span className="text-accent">.</span>
        </span>
      )}
      {mark === "name" && (
        <span className="font-display text-2xl tracking-wide uppercase">
          Dominik<span className="text-accent">.</span>
        </span>
      )}
    </Link>
  );
}
