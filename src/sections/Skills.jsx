import React from "react";
import { skillsData } from "../constants";
import SkillsItem from "../components/SkillsItem";

const Skills = () => {
  return (
    <section
      name="Skills"
      className="relative flex max-xl:flex-col justify-center xl:justify-between px-16 gap-8 items-stretch"
    >
      <div className="flex flex-col justify-center items-center pointer-events-none mix-blend-difference text-primary-dark max-xl:mx-auto xl:[writing-mode:vertical-rl] xl:rotate-180 max-xl:mb-8 px-10 z-10">
        <h2 className="font-bold text-center font-poppins">Skills</h2>
        <h3 className="xl:text-[110px] text-7xl max-md:text-5xl tracking-tight font-bold text-center font-poppins">
          Expertise
        </h3>
      </div>
      {/* <h1 className='text-[220px] max-lg:text-[80px] max-sm:text-[52px] xl:flex-1/5 pointer-events-none font-poppins font-bold w-fit h-fit max-xl:mx-auto xl:[writing-mode:vertical-rl] xl:rotate-180'>Skills</h1> */}

      <div className="flex flex-col w-full items-stretch">
        {skillsData.map((data, index) => (
          <SkillsItem
            key={index}
            category={data.category}
            description={data.description}
            skills={data.skills}
            video={data.video}
          ></SkillsItem>
        ))}
      </div>
    </section>
  );
};

export default Skills;
