import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SkillsItem = ({ category, description, skills, video }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const skillsRef = useRef([]);
  const tl = useRef(null);

  const canHover = () =>
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  useEffect(() => {
    if (!canHover()) return;

    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(videoRef.current, {
        clipPath: "circle(0% at 50% 50%)",
        autoAlpha: 1,
      });

      gsap.set(skillsRef.current, {
        autoAlpha: 0,
        y: 10,
        scale: 0.95,
      });

      // SINGLE timeline
      tl.current = gsap.timeline({ paused: true });

      tl.current
        .to(videoRef.current, {
          clipPath: "circle(150% at 50% 50%)",
          duration: 0.5,
          ease: "power3.out",
        })
        .to(
          skillsRef.current,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            stagger: 0.06,
            ease: "power2.out",
          },
          "<", // start at same time
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleEnter = () => {
    tl.current?.timeScale(1).play();
  };

  const handleLeave = () => {
    // faster reverse feels more premium
    tl.current?.timeScale(1.4).reverse();
  };

  return (
    <div
      ref={containerRef}
      className="text-pretty w-full flex-2/4 hover:flex-3/4 max-sm:min-h-60 gap-2 border-b-2 first:border-t-2 flex flex-col max-xl:py-4 transition-all duration-200 group"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <video
        ref={videoRef}
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover saturate-0 contrast-150 -z-10 pointer-events-none hidden xl:block"
      />

      <h4 className="text-8xl max-lg:text-5xl max-lg:self-center max-lg:justify-self-center mix-blend-difference text-primary-dark font-sofiasans sm:tracking-tighter! sm:italic font-semibold transition-all duration-300">
        {category}
      </h4>

      {skills && (
        <div className="flex flex-row max-sm:grid max-sm:grid-cols-2 w-full gap-2.5 justify-start items-start flex-wrap transition-all duration-500">
          {(skillsRef.current = [])}

          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => el && (skillsRef.current[index] = el)}
              className="flex flex-row items-center max-sm:justify-center gap-2 border-2 border-white rounded xl:w-1/6 w-fit max-sm:w-full h-12 relative p-2 mix-blend-difference xl:backdrop-brightness-20"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="h-full object-contain invert"
              />

              <p className="text-white leading-none!">{skill.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsItem;
