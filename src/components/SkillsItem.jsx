import React from 'react'

const SkillsItem = ({category, description, skills, video}) => {
  return (
    <div className='text-pretty w-full h-full relative flex flex-col rounded-2xl dark:bg-[#1b1b1b] max-w-xl group transition-all duration-100'>
        {/* <video src={video} autoPlay loop muted className='absolute w-full h-full object-cover saturate-150 -z-10 rounded-xl touch-none opacity-0 max-lg:opacity-100 transition-opacity duration-500'></video> */}
        <h2 className='text-[40px] max-md:text-2xl font-poppins font-bold self-center p-2 max-md:max-w-[90%] text-center mb-4 max-md:mb-2 transition-all duration-300'>{category}</h2>
    
        <div className="grid grid-cols-2 w-full h-full justify-center items-center gap-2.5 flex-wrap pb-2 px-2">
            {skills.map((skill, index) => (
            <div key={index} className="w-full h-full flex dark:bg-[#363636] bg-gray-200 rounded-xl justify-center items-center text-center max-lg:h-24 max-md:h-16 p-2 md:text-xl hover:-translate-y-1 transition-transform duration-200">
                <img src={skill.img} alt={skill.name} loading='lazy' className='w-8 h-8 max-md:w-6 max-md:h-6 mr-2 dark:invert transition-all duration-300' />
                <p>{skill.name}</p>
            </div>
            ))}
        </div>

    </div>
  )
}

export default SkillsItem