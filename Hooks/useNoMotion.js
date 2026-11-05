import { useReducedMotion } from "framer-motion";

// Master switch for the Brand Story and Master Plan page animations
// (Framer Motion + GSAP). Set to true to turn them back on.
export const ANIMATIONS_ENABLED = true;

export function useNoMotion() {
  const reduced = useReducedMotion();
  return Boolean(reduced) || !ANIMATIONS_ENABLED;
}
