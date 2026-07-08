"use client";

import { useEffect } from "react";

export default function MotionObserver() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (!targets.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    targets.forEach((target, index) => {
      target.style.setProperty("--reveal-order", String(index % 6));
    });

    let frame = 0;

    const revealVisible = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;

      targets.forEach((target) => {
        if (target.classList.contains("is-visible")) {
          return;
        }

        const rect = target.getBoundingClientRect();
        const entersViewport = rect.top < viewportHeight * 0.92;
        const hasNotPassed = rect.bottom > viewportHeight * -0.15;

        if (entersViewport && hasNotPassed) {
          target.classList.add("is-visible");
        }
      });
    };

    const scheduleReveal = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(revealVisible);
    };

    scheduleReveal();
    window.setTimeout(scheduleReveal, 240);
    window.addEventListener("scroll", scheduleReveal, { passive: true });
    window.addEventListener("resize", scheduleReveal);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", scheduleReveal);
      window.removeEventListener("resize", scheduleReveal);
    };
  }, []);

  return null;
}
