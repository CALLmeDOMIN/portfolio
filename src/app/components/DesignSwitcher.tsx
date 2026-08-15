"use client";

// PROTOTYPE — throwaway. Two independent axes, accent and wordmark, each with
// its own arrows. Delete this file and the ?accent=/?mark= reads once both are
// settled.
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { MARKS } from "./Wordmark";

// Cold options dropped: the direction is warm. This is a spectrum from red
// through orange to amber, plus a desaturated one, so the choice is about
// temperature and loudness rather than hue family.
export const ACCENTS = [
  { key: "orange", name: "Safety orange", value: "#ff6b2c" },
  { key: "ember", name: "Ember (softer)", value: "#ff8552" },
  { key: "blood", name: "Blood orange", value: "#e8503a" },
  { key: "amber", name: "Signal amber", value: "#f5a524" },
  { key: "rust", name: "Muted rust", value: "#c4573a" },
] as const;

export default function DesignSwitcher() {
  const router = useRouter();
  const params = useSearchParams();

  const accentKey = params.get("accent") ?? "orange";
  const markKey = params.get("mark") ?? "name";
  const ai = Math.max(
    0,
    ACCENTS.findIndex((a) => a.key === accentKey),
  );
  const mi = Math.max(
    0,
    MARKS.findIndex((m) => m.key === markKey),
  );

  const set = (k: string, v: string) => {
    const next = new URLSearchParams(params.toString());
    next.set(k, v);
    router.replace(`/?${next.toString()}`, { scroll: false });
  };

  const cycleAccent = (d: number) =>
    set("accent", ACCENTS[(ai + d + ACCENTS.length) % ACCENTS.length].key);
  const cycleMark = (d: number) =>
    set("mark", MARKS[(mi + d + MARKS.length) % MARKS.length].key);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement;
      if (
        el instanceof HTMLInputElement ||
        el instanceof HTMLTextAreaElement ||
        (el instanceof HTMLElement && el.isContentEditable)
      )
        return;
      if (e.key === "ArrowLeft") cycleAccent(-1);
      if (e.key === "ArrowRight") cycleAccent(1);
      if (e.key === "ArrowUp") {
        e.preventDefault();
        cycleMark(-1);
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        cycleMark(1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (process.env.NODE_ENV === "production") return null;

  return (
    <>
      <style>{`:root { --color-accent: ${ACCENTS[ai].value}; }`}</style>
      <div className="fixed bottom-5 left-1/2 z-[9999] -translate-x-1/2 rounded-xl bg-white p-2 font-mono text-[13px] text-black shadow-2xl">
        <Row
          label="← →"
          swatch={ACCENTS[ai].value}
          text={ACCENTS[ai].name}
          onPrev={() => cycleAccent(-1)}
          onNext={() => cycleAccent(1)}
        />
        <Row
          label="↑ ↓"
          text={MARKS[mi].name}
          onPrev={() => cycleMark(-1)}
          onNext={() => cycleMark(1)}
        />
      </div>
    </>
  );
}

function Row({
  label,
  swatch,
  text,
  onPrev,
  onNext,
}: {
  label: string;
  swatch?: string;
  text: string;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex items-center gap-1">
      <span className="w-9 text-center text-[10px] text-neutral-500">
        {label}
      </span>
      <button onClick={onPrev} className="size-6 rounded bg-neutral-200">
        ‹
      </button>
      <span className="flex min-w-[150px] items-center gap-2 px-2">
        {swatch && (
          <span
            className="size-3 rounded-full"
            style={{ background: swatch }}
            aria-hidden
          />
        )}
        {text}
      </span>
      <button onClick={onNext} className="size-6 rounded bg-neutral-200">
        ›
      </button>
    </div>
  );
}
