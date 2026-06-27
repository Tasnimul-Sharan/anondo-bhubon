"use client";

import { useEffect } from "react";

export const useLenis = () => {
  useEffect(() => {
    let lenis;
    let rafId;
    let cancelled = false;
    let started = false;

    const startLenis = async () => {
      if (started) return;
      started = true;

      const Lenis = (await import("lenis")).default;

      if (cancelled) return;

      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        gestureOrientation: "vertical",
        syncTouch: false,
        touchMultiplier: 1.5,
        anchors: true,
      });

      function raf(time) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    };

    const startOnIntent = () => {
      startLenis();
    };

    window.addEventListener("wheel", startOnIntent, {
      once: true,
      passive: true,
    });
    window.addEventListener("touchstart", startOnIntent, {
      once: true,
      passive: true,
    });
    window.addEventListener("keydown", startOnIntent, { once: true });

    return () => {
      cancelled = true;

      window.removeEventListener("wheel", startOnIntent);
      window.removeEventListener("touchstart", startOnIntent);
      window.removeEventListener("keydown", startOnIntent);

      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);
};
