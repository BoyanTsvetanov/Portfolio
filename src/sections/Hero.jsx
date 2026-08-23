import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const MarqueeRow = ({
  text,
  repeatCount,
  duration,
  reverse = false,
  customClass = "",
}) => {
  const rowRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!rowRef.current) return;

      if (reverse) {
        gsap.set(rowRef.current, { xPercent: -50 });
        tweenRef.current = gsap.to(rowRef.current, {
          xPercent: 0,
          duration,
          ease: "none",
          repeat: -1,
        });
      } else {
        tweenRef.current = gsap.to(rowRef.current, {
          xPercent: -50,
          duration,
          ease: "none",
          repeat: -1,
        });
      }
    });

    return () => ctx.revert();
  }, [duration, reverse]);

  const handleMouseEnter = () => {
    // Only pause if the device supports actual mouse hover (disables on mobile touch)
    if (!window.matchMedia("(hover: hover)").matches) return;
    if (!tweenRef.current) return;

    gsap.to(tweenRef.current, {
      timeScale: 0,
      duration: 0.8,
      ease: "power2.out",
      overwrite: "auto", // Prevents race conditions during rapid hovers
    });
  };

  const handleMouseLeave = () => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    if (!tweenRef.current) return;

    gsap.to(tweenRef.current, {
      timeScale: 1,
      duration: 0.4,
      ease: "power2.in",
      overwrite: "auto", // Immediately cancels deceleration and resumes speed
    });
  };

  const itemElements = Array.from({ length: repeatCount }).map((_, i) => (
    <p
      key={i}
      className="text-[120px] !font-bebas font-semibold text-nowrap uppercase select-none !text-primary-dark"
    >
      {text}
    </p>
  ));

  return (
    <div
      className={`flex w-full py-1 ${customClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={rowRef} className="flex w-max">
        <div className="flex gap-16 pr-16 w-max">{itemElements}</div>
        <div className="flex gap-16 pr-16 w-max">{itemElements}</div>
      </div>
    </div>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="w-full h-dvh pt-16 max-sm:pt-0 relative flex overflow-x-hidden bg-transparent"
      name="Hero"
      id="Hero"
    >
      <div className="flex flex-col my-auto w-full">
        {/* Row 1: Above White BG (z-30), Behind Image (z-40) */}
        <MarqueeRow
          text="Full-Stack Developer"
          repeatCount={4}
          duration={25}
          customClass="relative z-30 mix-blend-difference"
        />

        {/* Row 2: Behind entirely (z-10) */}
        <MarqueeRow
          text="UI design"
          repeatCount={8}
          duration={20}
          reverse={true}
          customClass="relative z-10 mix-blend-difference"
        />

        {/* Row 3: Above everything (z-45) */}
        <MarqueeRow
          text="Creative"
          repeatCount={9}
          duration={18}
          customClass="relative z-45 mix-blend-difference"
        />
      </div>

      {/* Central Images & Box */}
      <div className="absolute bg-white dark:bg-dark z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 saturate-0 h-2/4 w-1/4 max-md:w-2/3 max-md:h-1/3 hover:saturate-80 transition-all duration-500 pointer-events-none"></div>

      <img
        src="./images/pfp-1.png"
        alt="Profile Picture"
        className="absolute z-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 saturate-90 w-1/4 max-md:w-2/3 object-contain hover:saturate-80 transition-all duration-500 pointer-events-none"
      />

      {/* Footer Details */}
      <div className="absolute mix-blend-difference left-16 max-md:left-6 lg:bottom-6 md:bottom-4 max-md:bottom-2 font-sofiasans !text-primary-dark pointer-events-none z-45">
        <p>Based in Sofia, Bulgaria</p>
        <span>{time}</span>
      </div>

      <div className="absolute flex items-center gap-2 right-16 max-md:right-6 lg:bottom-6 md:bottom-4 max-md:bottom-2 pointer-events-none z-45">
        <div className="status w-2 h-2 rounded-full"></div>
        <p>Open to work</p>
      </div>
    </section>
  );
};

export default Hero;
