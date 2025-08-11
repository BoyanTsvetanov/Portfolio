import React from 'react'
import { skillsData } from '../constants'
import SkillsItem from '../components/SkillsItem'

const Skills = () => {
  return (
    <section name="Skills" className='flex md:mb-20 mb-10 max-xl:flex-col justify-center xl:justify-between px-[10%]'>
        <div className="flex flex-col justify-center items-center xl:flex-1/5 pointer-events-none max-xl:mx-auto xl:[writing-mode:vertical-rl] xl:rotate-180 mt-10 max-xl:mb-8 z-10">
          <h2 className="font-bold text-center font-poppins">Skills</h2>
          <p className="xl:text-[110px] text-7xl max-md:text-5xl font-bold text-center font-poppins">Expertise</p>
        </div>
        {/* <h1 className='text-[220px] max-lg:text-[80px] max-sm:text-[52px] xl:flex-1/5 pointer-events-none font-poppins font-bold w-fit h-fit max-xl:mx-auto xl:[writing-mode:vertical-rl] xl:rotate-180'>Skills</h1> */}

        <div className='flex max-lg:flex-col xl:flex-4/5 xl:w-full justify-end max-lg:items-center items-stretch gap-8'>
            {skillsData.map((data, index) => (
                <SkillsItem key={index} category={data.category} description={data.description} skills={data.skills} video={data.video}></SkillsItem>
            ))}
        </div>
    </section>
  )
}

export default Skills