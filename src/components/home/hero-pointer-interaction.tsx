"use client";

import { useEffect } from "react";

const neutralVars = {
  "--pattern-active": "0",
  "--pattern-pointer-x": "50%",
  "--pattern-pointer-y": "50%",
  "--pattern-layer-x": "0px",
  "--pattern-layer-y": "0px",
  "--pattern-wake-x": "0px",
  "--pattern-wake-y": "0px",
  "--pattern-row-odd-x": "0px",
  "--pattern-row-even-x": "0px",
  "--pattern-row-y": "0px",
  "--pattern-row-y-reverse": "0px",
};

export default function HeroPointerInteraction() {
  useEffect(() => {
    const hero = document.getElementById("cover");

    if (!hero) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    Object.entries(neutralVars).forEach(([key, value]) => {
      hero.style.setProperty(key, value);
    });

    if (reducedMotion.matches || !finePointer.matches) {
      return;
    }

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let targetActive = 0;
    let targetPointerX = 50;
    let targetPointerY = 50;

    let currentX = 0;
    let currentY = 0;
    let currentActive = 0;
    let currentPointerX = 50;
    let currentPointerY = 50;

    const writeVars = () => {
      frame = 0;

      currentX += (targetX - currentX) * 0.11;
      currentY += (targetY - currentY) * 0.11;
      currentActive += (targetActive - currentActive) * 0.14;
      currentPointerX += (targetPointerX - currentPointerX) * 0.18;
      currentPointerY += (targetPointerY - currentPointerY) * 0.18;

      hero.style.setProperty("--pattern-active", currentActive.toFixed(3));
      hero.style.setProperty("--pattern-pointer-x", `${currentPointerX}%`);
      hero.style.setProperty("--pattern-pointer-y", `${currentPointerY}%`);
      hero.style.setProperty("--pattern-layer-x", `${currentX * 8}px`);
      hero.style.setProperty("--pattern-layer-y", `${currentY * 5}px`);
      hero.style.setProperty("--pattern-wake-x", `${currentX * 12}px`);
      hero.style.setProperty("--pattern-wake-y", `${currentY * 7}px`);
      hero.style.setProperty("--pattern-row-odd-x", `${currentX * 2.4}px`);
      hero.style.setProperty("--pattern-row-even-x", `${currentX * -2}px`);
      hero.style.setProperty("--pattern-row-y", `${currentY * 1.2}px`);
      hero.style.setProperty("--pattern-row-y-reverse", `${currentY * -1.2}px`);

      const shouldContinue =
        Math.abs(targetX - currentX) > 0.002 ||
        Math.abs(targetY - currentY) > 0.002 ||
        Math.abs(targetActive - currentActive) > 0.002 ||
        Math.abs(targetPointerX - currentPointerX) > 0.04 ||
        Math.abs(targetPointerY - currentPointerY) > 0.04;

      if (shouldContinue) {
        frame = window.requestAnimationFrame(writeVars);
      }
    };

    const schedule = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(writeVars);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      const heroRect = hero.getBoundingClientRect();
      const pattern = hero.querySelector<HTMLElement>(".cover-pattern");
      const patternRect = pattern?.getBoundingClientRect() ?? heroRect;

      const normalizedX =
        (event.clientX - heroRect.left) / Math.max(heroRect.width, 1) - 0.5;
      const normalizedY =
        (event.clientY - heroRect.top) / Math.max(heroRect.height, 1) - 0.5;

      targetX = Math.max(-0.5, Math.min(0.5, normalizedX));
      targetY = Math.max(-0.5, Math.min(0.5, normalizedY));
      targetPointerX = Math.max(
        -8,
        Math.min(
          108,
          ((event.clientX - patternRect.left) /
            Math.max(patternRect.width, 1)) *
            100,
        ),
      );
      targetPointerY = Math.max(
        -8,
        Math.min(
          108,
          ((event.clientY - patternRect.top) /
            Math.max(patternRect.height, 1)) *
            100,
        ),
      );
      targetActive = 1;

      schedule();
    };

    const onPointerLeave = () => {
      targetX = 0;
      targetY = 0;
      targetActive = 0;
      targetPointerX = 50;
      targetPointerY = 50;
      schedule();
    };

    hero.addEventListener("pointermove", onPointerMove, { passive: true });
    hero.addEventListener("pointerleave", onPointerLeave);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      hero.removeEventListener("pointermove", onPointerMove);
      hero.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return null;
}
