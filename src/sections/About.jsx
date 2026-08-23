import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useCountUp } from "react-countup";
import { getTheme, setTheme } from "../constants/theme";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);
  const previousThemeRef = useRef(null);

  // Refs for CountUp target elements
  const countRef1 = useRef(null);
  const countRef2 = useRef(null);

  // CountUp instances
  const { start: startCount1 } = useCountUp({
    ref: countRef1,
    start: 0,
    end: 5,
    duration: 5,
    suffix: "+",
    startOnMount: false,
  });

  const { start: startCount2 } = useCountUp({
    ref: countRef2,
    start: 0,
    end: 12,
    duration: 5,
    suffix: "+",
    startOnMount: false,
  });

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 2. Theme Switching Functions
      const switchToAboutTheme = () => {
        previousThemeRef.current = getTheme();
        setTheme("dark");
      };

      const revertToPreviousTheme = () => {
        if (previousThemeRef.current) {
          setTheme(previousThemeRef.current);
        }
      };

      // 3. Trigger theme change when scrolling into section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center",
        end: "+=200%",
        onEnter: switchToAboutTheme,
        onEnterBack: switchToAboutTheme,
        onLeave: revertToPreviousTheme,
        onLeaveBack: revertToPreviousTheme,
      });

      // 4. Pinned Scroll Animations
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=100%",
            pin: true,
            scrub: 1,
          },
        })
        .fromTo(
          headingRef.current,
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
        )
        .fromTo(
          textRef.current.querySelectorAll("p"),
          { yPercent: 110 },
          {
            yPercent: 0,
            stagger: 0.15,
            ease: "power2.out",
            onStart: () => {
              startCount1();
              startCount2();
            },
          },
        )
        .fromTo(
          ctaRef.current.querySelector("a"),
          { opacity: 0, yPercent: 100 },
          {
            opacity: 1,
            yPercent: 0,
            ease: "power2.out",
          },
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [startCount1, startCount2]);

  return (
    <section
      name="About"
      id="About"
      className="flex max-lg:flex-col items-center justify-center w-full h-dvh overflow-hidden relative"
      ref={sectionRef}
    >
      <div className="absolute max-lg:relative left-0 flex flex-col w-full max-sm:h-svh h-fit min-h-[25%] px-16 sm:py-4 justify-center max-lg:text-center text-pretty max-md:text-sm pointer-events-auto z-20 mix-blend-difference">
        {/* Heading Wrapper */}
        <div className="overflow-hidden w-full">
          <h2
            className="font-bold font-poppins uppercase text-7xl max-md:text-5xl lg:my-2 max-lg:mb-2"
            ref={headingRef}
          >
            About
          </h2>
        </div>

        <div
          className="relative flex w-full justify-between mt-2 max-lg:flex-col max-lg:gap-6 gap-4"
          ref={textRef}
        >
          <div className="flex flex-col w-full space-y-4 mix-blend-difference">
            <div className="overflow-hidden w-full">
              <p className="md:text-xl text-lg max-w-3xl">
                A results-driven Developer with professional experience building
                high-performance, interactive applications for the iGaming
                industry, freelance clients, and complex web platforms. I
                specialize in crafting seamless user interfaces backed by
                reliable server architecture, with a strong focus on real-time
                state synchronization, database efficiency, and edge-case
                handling.
              </p>
            </div>

            <div className="overflow-hidden w-full sm:block hidden">
              <p className="md:text-xl text-lg max-w-3xl">
                Beyond writing clean code, I bring a practical engineering
                mindset-solving complex concurrency bottlenecks, optimizing
                database flows, and building secure authentication systems to
                deliver fast, production-ready web applications.
              </p>
            </div>

            <div className="overflow-hidden w-full sm:block hidden">
              <p className="md:text-xl text-lg max-w-3xl">
                Currently pursuing my degree at UNWE while continuously
                sharpening my technical capabilities.
              </p>
            </div>
          </div>

          <div className="realtive w-full flex justify-center gap-4">
            <div className="px-4 py-2 border-2 aspect-square h-fit w-full flex justify-center items-center">
              <div className="overflow-hidden w-full text-center">
                <p>
                  <span className="text-xl font-bold" ref={countRef1}>
                    +0
                  </span>{" "}
                  <br /> years of experience
                </p>
              </div>
            </div>
            <div className="px-4 py-2 border-2 aspect-square h-fit w-full flex justify-center items-center">
              <div className="overflow-hidden w-full text-center">
                <p>
                  <span className="text-xl font-bold" ref={countRef2}>
                    +0
                  </span>{" "}
                  <br /> months of professional experience
                </p>
              </div>
            </div>
            <div className="px-4 py-2 border-2 aspect-square h-fit w-full flex justify-center items-center">
              <div className="overflow-hidden w-full text-center">
                <p>Over a dozen of projects completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Link Wrapper */}
        <div className="overflow-hidden w-full" ref={ctaRef}>
          <a
            href="#Contact"
            className="cta-animated-border flex gap-2 hover:cursor-pointer items-center max-lg:justify-self-center max-lg:mt-4 max-sm:mt-8 text-nowrap w-fit text-primary-dark md:mt-6 p-3 px-5 font-poppins font-bold text-3xl max-md:rounded max-md:text-xl! max-sm:text-sm transition-colors duration-300"
          >
            Let's get in touch
            <ArrowRight className="cta-arrow" strokeWidth={4} size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
