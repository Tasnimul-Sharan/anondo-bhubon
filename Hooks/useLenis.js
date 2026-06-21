"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export const useLenis = () => {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

      smoothWheel: true,
      syncTouch: false,

      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,

      infinite: false,

      // Important:
      // input/select/textarea ekhane prevent korben na
      prevent: (node) => {
        return node.closest("iframe") || node.closest("[data-lenis-prevent]");
      },
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    const handleResize = () => {
      lenis.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      lenis.destroy();
      lenisRef.current = null;
      rafRef.current = null;
    };
  }, []);

  return lenisRef;
};
