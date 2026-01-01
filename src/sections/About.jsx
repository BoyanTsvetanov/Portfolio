import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
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
          }
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
          }
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
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      name="About"
      className="flex items-center w-full h-dvh relative max-md:my-10"
      ref={sectionRef}
    >
      <video
        src="./videos/about.mp4"
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover -z-10 not-dark:invert touch-none transition-all duration-300"
      ></video>

      <div className="absolute left-0 flex flex-col w-3/5 h-2/5 min-h-[25%] text-primary-dark mix-blend-difference px-16 sm:py-3 justify-center max-lg:text-center text-pretty max-md:text-sm">
        <h2
          className="font-bold font-poppins text-7xl lg:my-2 max-lg:mb-2 max-sm:hidden"
          ref={headingRef}
        >
          About Me
        </h2>
        <p
          className="font-montserrat text-pretty md:text-xl max-md:text-sm leading-normal"
          ref={textRef}
        >
          An independent and self-motivated Front-End Developer looking to apply
          my knowledge and skills in programming. I love creating beautiful
          programs with attention to detail.
        </p>
      </div>

      <div className="w-2/5 h-[80%] absolute right-0 bottom-0 overflow-hidden">
        <img
          ref={pictureRef}
          src="./images/about.png"
          alt="myself-about"
          className="w-full h-full object-contain saturate-0"
          loading="lazy"
        />
      </div>
      {/* <div className="relative flex max-md:flex-col w-full max-h-80 h-80 rounded-2xl justify-center items-center">
        <div className='relative sm:w-full md:h-full h-3/5 rounded-2xl max-sm:rounded-full max-lg:aspect-square overflow-hidden'>
          <video
            src="./videos/about.mp4"
            autoPlay
            muted
            loop
            className="absolute w-full h-full object-cover -z-10 dark:invert touch-none"
          ></video>
          <picture>
            <source media="(max-width: 640px)" srcset="./images/about-sm.png" />
            <source media="(max-width: 1024px)" srcset="./images/about-md.png" />
            <img
              src="./images/about.png"
              alt="myself-about"
              className="w-full h-full absolute object-contain max-lg:pt-2 bottom-0"
              loading='lazy'
            />
          </picture>
        </div>

        <div className="relative flex flex-col w-full h-2/5 min-h-[25%] px-6 sm:py-3 justify-center max-lg:text-center text-pretty max-md:text-sm">
         <h2 className="font-bold font-poppins text-2xl lg:my-2 max-lg:mb-2 max-sm:hidden">About Me</h2>
          <p className="font-montserrat text-pretty md:text-lg max-md:text-sm leading-normal">
            An independent and self-motivated Front-End Developer looking to apply my knowledge and skills in programming. I love creating beautiful programs with attention to detail.
          </p>
       </div>
      </div> */}
      {/* <img src="./images/tron.png" alt="bg" className='absolute sm:hidden w-full object-contain top-10 left-0 -z-20 dark:invert' /> */}
    </section>
  );
};

export default About;
