"use client";

import { useEffect } from "react";

export const useLenis = () => {
  useEffect(() => {
    let lenis = null;
    let rafId;
    let cancelled = false;

    const startLenis = async () => {
      const Lenis = (await import("lenis")).default;

      if (cancelled) return;

      lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
        syncTouch: false,
        touchMultiplier: 1.5,
        anchors: true,
      });

      const raf = (time) => {
        if (!lenis) return;

        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };

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

    window.addEventListener("keydown", startOnIntent, {
      once: true,
    });

    return () => {
      cancelled = true;

      if (rafId !== undefined) {
        cancelAnimationFrame(rafId);
      }

      lenis?.destroy();
    };
  }, []);
};
