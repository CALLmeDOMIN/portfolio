"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/**
 * Lerped scrolling. Adds no feature — it changes how scrolling feels, and is
 * meant to go unnoticed rather than be admired.
 *
 * Renders null and attaches to the window rather than wrapping the tree, so
 * hydration cannot remount the page underneath it.
 *
 * `anchors` carries an offset because Lenis computes scroll targets itself and
 * so bypasses the scroll-mt on sections; without it, a heading lands flush
 * against the top of the viewport.
 *
 * Under prefers-reduced-motion Lenis is never constructed, which leaves native
 * scrolling entirely alone. That matters more than the usual reduced-motion
 * case: smooth scrolling is a common migraine and nausea trigger, so the right
 * behaviour is absence, not a shorter animation.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.11,
      wheelMultiplier: 1,
      autoRaf: true,
      anchors: { offset: -72 },
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
