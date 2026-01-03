import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const SkillsItem = ({ category, description, skills, video }) => {
  const videoRef = useRef(null);
  const enterRef = useRef(null);
  const leaveRef = useRef(null);
  const skillsRef = useRef([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    gsap.set(videoRef.current, {
      clipPath: "circle(0% at 50% 50%)",
      opacity: 1,
    });

    enterRef.current = () => {
      setIsActive(true);

      gsap.to(videoRef.current, {
        clipPath: "circle(150% at 50% 50%)",
        duration: 0.5,
        ease: "power3.out",
      });
    };

    leaveRef.current = () => {
      setIsActive(false);

      gsap.to(videoRef.current, {
        clipPath: "circle(0% at 50% 50%)",
        duration: 0.6,
        ease: "power3.inOut",
      });
    };
  }, []);

  useEffect(() => {
    if (!isActive || !skillsRef.current.length) return;

    gsap.fromTo(
      skillsRef.current,
      {
        opacity: 0,
        y: 20,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.06,
      }
    );
  }, [isActive]);

  return (
    <div
      className="text-pretty w-full flex-2/4 hover:flex-3/4 border-b-2 first:border-t-2 flex flex-col transition-all duration-200 group"
      onMouseEnter={() => enterRef.current?.()}
      onMouseLeave={() => leaveRef.current?.()}
    >
      <video
        ref={videoRef}
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover saturate-0 contrast-150 -z-10 pointer-events-none"
      />
      <h4 className="text-8xl max-md:text-2xl mix-blend-difference text-primary-dark font-sofiasans italic font-semibold transition-all duration-300">
        {category}
      </h4>

      {isActive && skills && (
        <div className="flex flex-row w-full gap-2.5 justify-start items-start flex-wrap transition-all duration-500">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (skillsRef.current[index] = el)}
              className="flex flex-row items-center gap-2 border-2 border-white rounded w-1/6 h-12 relative p-2 mix-blend-difference backdrop-brightness-20"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="h-full object-contain invert"
              />

              <p className="text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsItem;

{
  /* <div className="grid grid-cols-2 w-full h-full justify-center items-center gap-2.5 flex-wrap pb-2 px-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-full h-full flex dark:bg-[#363636] bg-gray-200 rounded-xl justify-center items-center text-center max-lg:h-24 max-md:h-16 p-2 md:text-xl transition-transform duration-200"
          >
            <img
              src={skill.img}
              alt={skill.name}
              loading="lazy"
              className="w-8 h-8 max-md:w-6 max-md:h-6 mr-2 dark:invert transition-all duration-300"
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div> */
}
