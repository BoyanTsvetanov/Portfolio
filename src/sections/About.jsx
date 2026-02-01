import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link as LinkScroll } from "react-scroll";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);
  const pictureRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const text = textRef.current;

      // Split text into words (GSAP 3.12+)
      const split = SplitText.create(text, {
        type: "words, chars",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=150%", // controls pin duration
            pin: true,
            // once: true,
            scrub: 1,
          },
        })
        .fromTo(
          headingRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
          },
        )
        .fromTo(
          split.words,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            ease: "power2.out",
          },
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
          },
        );

      gsap.fromTo(
        pictureRef.current,
        { opacity: 0, x: 120 },
        {
          opacity: 1,
          x: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: pictureRef.current,
            start: "top top", // when top of picture hits 80% of viewport
            end: "+=80%", // optional
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      name="About"
      className="flex max-lg:flex-col items-center justify-center w-full h-dvh relative mb-6 mask-fade"
      ref={sectionRef}
    >
      <video
        src="./videos/about.mp4"
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover -z-10 not-dark:invert touch-none transition-all duration-300"
      ></video>

      <div className="absolute max-lg:relative left-0 flex flex-col w-full sm:w-3/5 sm:h-2/5 h-fit min-h-[25%] px-16 sm:py-3 justify-center max-lg:text-center text-pretty max-md:text-sm">
        <h2
          className="font-bold font-poppins text-7xl max-md:text-5xl lg:my-2 max-lg:mb-2 text-primary-dark mix-blend-difference"
          ref={headingRef}
        >
          About Me
        </h2>
        <p
          className="font-montserrat text-pretty md:text-4xl text-lg leading-normal text-primary-dark mix-blend-difference"
          ref={textRef}
        >
          An independent and self-motivated Front-End Developer looking to apply
          my knowledge and skills in programming. I love creating beautiful
          programs with attention to detail.
        </p>

        <div ref={ctaRef}>
          <LinkScroll
            to="Contact"
            className="cta-button flex gap-2 hover:cursor-pointer items-center max-lg:justify-self-center max-lg:mt-2 text-nowrap w-fit bg-black text-primary-dark mix-blend-normal! md:mt-4 p-2 px-4 font-poppins font-bold text-3xl max-md:rounded max-md:text-xl! max-sm:text-sm transition-all duration-500"
            smooth
          >
            Let's get in touch
            <ArrowRight className="cta-arrow" strokeWidth={4} size={30} />
          </LinkScroll>
        </div>
      </div>

      <div className="lg:w-2/5 w-full h-[80%]  max-lg:hidden lg:absolute right-0 bottom-0 overflow-hidden">
        <img
          ref={pictureRef}
          src="./images/about.png"
          alt="myself-about"
          className="w-full h-full object-contain saturate-0"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default About;
