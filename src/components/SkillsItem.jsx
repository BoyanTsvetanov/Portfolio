import React from 'react'

const SkillsItem = ({category, description, skills, video}) => {
  return (
    <div className='text-pretty w-full h-full relative flex flex-col border-2 rounded-2xl group hover:text-primary-dark max-lg:text-primary-dark transition-all duration-100 hover:border-transparent'>
        <video src={video} autoPlay loop muted className='absolute w-full h-full object-cover -z-10 rounded-xl touch-none opacity-0 group-hover:opacity-100 max-lg:opacity-100 transition-opacity duration-500'></video>
        <h2 className='text-[40px] font-poppins font-bold self-center p-2 rounded-b-xl max-md:max-w-[90%] text-center mb-8 max-md:mb-2 max-lg:backdrop-brightness-50 group-hover:backdrop-brightness-50 transition-all duration-300'>{category}</h2>
    
        <div className="grid grid-cols-2 w-full h-full justify-center items-center gap-2 flex-wrap pb-2 px-2">
            {skills.map((skill, index) => (
            <div key={index} className="group-hover:backdrop-blur-sm group-hover:backdrop-brightness-50 group-hover:font-semibold max-lg:backdrop-brightness-50 max-lg:backdrop-blur-xs w-full h-full flex rounded-2xl justify-center items-center max-lg:h-16 xl:text-xl md:text-xl border-2 group-hover:border-transparent transition-all duration-100">
                <p>{skill}</p>
            </div>
            ))}
        </div>

    </div>
  )
}

export default SkillsItem