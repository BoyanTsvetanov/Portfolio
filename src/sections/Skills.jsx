import React from 'react'
import { skillsData } from '../constants'
import SkillsItem from '../components/SkillsItem'

const Skills = () => {
  return (
    <section name="Skills" className='flex my-10 max-xl:flex-col justify-center'>
        <h1 className='text-[220px] max-lg:text-[80px] max-sm:text-[60px] pointer-events-none font-poppins font-bold rounded-full w-fit h-fit xl:ml-8 max-xl:mx-auto xl:[writing-mode:vertical-rl] xl:rotate-180'>Skills</h1>

        <div className='flex max-xl:flex-col xl:w-full justify-between items-start mx-[10%] gap-8'>
            {skillsData.map((data, index) => (
                <SkillsItem key={index} category={data.category} description={data.description} skills={data.skills} video={data.video}></SkillsItem>
            ))}
        </div>
    </section>
  )
}

export default Skills