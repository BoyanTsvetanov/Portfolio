import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { div, tr } from "framer-motion/client";
import { ArrowBigDown, MoveDown } from "lucide-react";

gsap.registerPlugin(SplitText);

const Hero = () => {
  const ref = useRef(null);
  const [loadSpline, setLoadSpline] = useState(false);
  const headerRef = useRef(null);
  const arrowRef = useRef(null);

  // Detect tablets / laptops only
  const isTabletOrLaptop = () =>
    window.matchMedia("(min-width: 768px)").matches; // adjust breakpoint as needed

  useEffect(() => {
    if (!isTabletOrLaptop()) return; // skip on mobile

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoadSpline(true);
        observer.disconnect();
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!loadSpline) return;

    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js";

    document.body.appendChild(script);

    return () => document.body.removeChild(script);
  }, [loadSpline]);

  useEffect(() => {
    const animateText = async () => {
      if (!headerRef.current) return;

      // Wait for font to load
      try {
        await document.fonts.load("1em Bebas Neue");
      } catch (e) {
        console.warn("Font failed to load, animating anyway");
      }

      const ctx = gsap.context(() => {
        const text = SplitText.create(headerRef.current, {
          type: "chars",
        });

        gsap
          .timeline()
          .fromTo(
            text.chars,
            { opacity: 0, y: -20 },
            {
              opacity: 1,
              delay: 0.6,
              y: 0,
              stagger: 0.5,
              ease: "power2.out",
            },
          )
          .fromTo(
            arrowRef.current,
            { autoAlpha: 0, y: -10 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
              onComplete: () => {
                gsap.set(arrowRef.current, { animation: "bounce 2s infinite" });
              },
            },
          );
      }, headerRef);

      return () => ctx.revert();
    };

    animateText();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full h-dvh max-sm:h-dvh pt-16 max-sm:pt-0 relative flex"
      name="Hero"
    >
      {!loadSpline && isTabletOrLaptop() && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-2/3 h-2/3 bg-gray-300 animate-pulse rounded-lg" />
        </div>
      )}

      {loadSpline && (
        <spline-viewer
          loading-anim-type="none"
          url="https://prod.spline.design/pxy8IAoIBJ7oMhfj/scene.splinecode"
          className=""
        />
      )}

      {!isTabletOrLaptop() && (
        <div className="flex flex-col relative h-fit w-full my-auto justify-center items-center">
          <h1
            className="text-8xl font-bold font-bebas mx-auto uppercase tracking-tighter!"
            style={{
              writingMode: "vertical-rl", // vertical text
              textOrientation: "upright", // letters remain upright
            }}
            ref={headerRef}
          >
            Boyan
          </h1>
          <MoveDown
            size={40}
            strokeWidth={1}
            ref={arrowRef}
            className="max-sm:invisible absolute -bottom-16"
          />
        </div>
      )}
    </section>
  );
};

export default Hero;
