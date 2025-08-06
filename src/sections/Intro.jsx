import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Intro() {
  const containerRef = useRef(null);
  const barsRef = useRef([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();


      barsRef.current.forEach((bar, i) => {
        gsap.to(bar, {
          scaleY: 1,
          duration: .75,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
          delay: i * 0.1,
          transformOrigin: "bottom",
        });
      });

      tl.to(
        containerRef.current,
        {
          opacity: 0,
          duration: .5,
          ease: "power2.inOut",
        },
        "+=3"
      );
      tl.set(containerRef.current, { display: "none" });

      timelineRef.current = tl;
    }, containerRef);

    return () => {
      timelineRef.current?.kill();
      gsap.killTweensOf(barsRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full bg-light dark:bg-dark flex items-end justify-center gap-2 z-[9999]"
    >
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (barsRef.current[i] = el)}
          className="w-[100%] h-full bg-red-500"
          style={{ transformOrigin: "bottom", transform: "scaleY(0.1)" }}
        />
      ))}
    </div>
  );
}
