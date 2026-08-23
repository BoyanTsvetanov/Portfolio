import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "../constants/index.js";
import ProjectItem from "../components/ProjectItem.jsx";
import { getTheme, setTheme } from "../constants/theme.js";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);
  const bgRef = useRef(null);
  const previousThemeRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".project");
      const totalWidth = horizontalRef.current.offsetWidth;
      const scrollEnd = window.innerWidth * (1.1 + 1 / sections.length);

      const switchToDarkTheme = () => {
        const currentTheme = getTheme();
        previousThemeRef.current = currentTheme;
        // sectionRef.current.style.opacity = 1;
        if (currentTheme === "light") setTheme("dark");
      };

      const revertToPreviousTheme = () => {
        // sectionRef.current.style.opacity = 0.5;
        if (previousThemeRef.current === "light") setTheme("light");
      };

      // 1. Theme & Opacity ScrollTrigger
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center",
        end: `+=${scrollEnd}`,
        onEnter: switchToDarkTheme,
        onEnterBack: switchToDarkTheme,
        onLeave: revertToPreviousTheme,
        onLeaveBack: revertToPreviousTheme,
      });

      // 2. Background Fade
      gsap.fromTo(
        bgRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top 10%",
            scrub: true,
          },
        },
      );

      // 3. Horizontal Scroll
      const horizontalTween = gsap.to(horizontalRef.current, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1.1,
          // snap: 1 / (sections.length - 1),
          start: "top top",
          end: `+=${totalWidth}`,
          markers: false,
        },
      });

      // 4. Sequenced Reveals with Synchronized Glow & ::after Frame
      sections.forEach((project) => {
        const targets = project.querySelectorAll(".project-reveal");
        const fadeElements = project.querySelectorAll(".project-reveal-fade");
        const container = project.querySelector(".project-container");

        if (targets.length > 0) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: project,
              containerAnimation: horizontalTween,
              start: "left 70%",
              toggleActions: "play none none reverse",
            },
          });

          // Step 1: Text & Main Image Slide Up
          tl.fromTo(
            targets,
            { yPercent: 100, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.12,
            },
          );

          // Step 2: Ambilight Glow
          if (fadeElements.length > 0) {
            tl.fromTo(
              fadeElements,
              { opacity: 0 },
              { opacity: 1, duration: 0.6, ease: "power2.out" },
              ">-0.1",
            );
          }

          // Step 3: ::after pseudo-element reveals SIMULTANEOUSLY with glow
          if (container) {
            tl.fromTo(
              container,
              { "--after-opacity": 0 },
              { "--after-opacity": 1, duration: 0.6, ease: "power2.out" },
              "<", // "<" targets the exact start of the previous step
            );
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      name="Projects"
      ref={sectionRef}
      id="Projects"
      /* Replaced overflow-x-hidden with overflow-x-clip to avoid vertical blur cropping */
      className="relative flex flex-col w-full lg:h-dvh lg:max-h-dvh mx-auto overflow-x-clip transition-opacity duration-500 max-sm:scroll-m-10"
    >
      <div className="flex flex-col justify-center items-center lg:py-6 max-md:mb-6 z-10">
        <h2 className="font-bold text-center font-poppins">Projects</h2>
        <h3 className="text-7xl max-md:text-5xl max-w-[94%] tracking-tight leading-none! font-bold text-center font-poppins z-10">
          Standout Work
        </h3>
      </div>

      <div className="relative max-md:items-stretch w-full h-full scroll-hide transition-colors duration-300">
        <div
          ref={horizontalRef}
          className="flex lg:h-full w-full items-stretch max-md:grid max-md:gap-8"
        >
          {projectsData.map((project) => (
            <ProjectItem
              key={project.title}
              title={project.title}
              subtitle={project.subtitle}
              date={project.date}
              description={project.description}
              images={project.images}
              type={project.type}
              link={project.link}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
