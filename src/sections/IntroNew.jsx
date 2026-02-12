import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const IntroNew = () => {
  const introRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    const text = SplitText.create(textRef.current, {
      type: "chars",
    });

    tl.fromTo(
      text.chars,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 0.7,
        stagger: 0.05,
        ease: "power2.out",
      },
    );

    tl.to(introRef.current, {
      yPercent: 100,
      ease: "power2.out",
      delay: 1,
      onComplete: () => {
        introRef.current.style.display = "none";
      },
    });
  }, []);
  return (
    <div
      ref={introRef}
      className="fixed inset-0 z-50 bg-primary-dark dark:bg-primary-light flex items-center justify-center"
    >
      <p
        ref={textRef}
        className="text-2xl max-sm:text-4xl text-primary-light dark:text-primary-dark font-semibold"
      >
        Welcome
      </p>
    </div>
  );
};

export default IntroNew;
