import React from "react";

const SkillsItem = ({ category, description, skills, video }) => {
  return (
    <div className="text-pretty w-full h-full not-even:border-y-2 border-b-2 flex flex-col group transition-all duration-100">
      {/* <video
        src={video}
        autoPlay
        loop
        muted
        className="absolute w-full h-full top-0 object-cover saturate-150 -z-10 rounded-xl touch-none opacity-100 max-lg:opacity-100 transition-opacity duration-500"
      ></video> */}
      <h4 className="text-8xl max-md:text-2xl mix-blend-difference text-primary-dark font-sofiasans italic font-semibold self-start max-md:max-w-[90%] transition-all duration-300">
        {category}
      </h4>

      {/* <div className="grid grid-cols-2 w-full h-full justify-center items-center gap-2.5 flex-wrap pb-2 px-2">
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
      </div> */}
    </div>
  );
};

export default SkillsItem;
