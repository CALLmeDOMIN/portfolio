import Link from "next/link";

/**
 * The nickname doubling as a command prompt. It signals "developer" the way the
 * old src/Dominik.tsx mark did, without implying frontend-only — which the rest
 * of the page contradicts.
 */
export default function Wordmark() {
  return (
    <Link href="#top" className="inline-block font-mono text-xl lowercase">
      cmd
      <span
        className="caret bg-accent ml-0.5 inline-block h-4 w-2 translate-y-0.5"
        aria-hidden
      />
    </Link>
  );
}
