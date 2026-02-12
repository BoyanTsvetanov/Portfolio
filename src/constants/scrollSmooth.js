import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenisScroll(isLocked = false) {
  const lenisRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    };

    rafId.current = requestAnimationFrame(raf);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      lenis.destroy();
    };
  }, []);

  // 🔥 Lock / unlock scrolling
  useEffect(() => {
    if (!lenisRef.current) return;

    if (isLocked) {
      lenisRef.current.stop();
    } else {
      lenisRef.current.start();
    }
  }, [isLocked]);
}
