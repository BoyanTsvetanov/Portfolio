import React from 'react'

const SkillsItem = ({category, description, skills, video}) => {
  return (
    <div className='text-pretty w-full h-full relative flex flex-col border-2 rounded-2xl group hover:text-primary-dark max-sm:text-primary-dark'>
        <video src={video} autoPlay loop muted className='absolute w-full h-full object-cover -z-10 rounded-xl opacity-0 group-hover:opacity-100 max-sm:opacity-100 transition-opacity duration-500'></video>
        <h2 className='text-[40px] font-poppins font-bold self-center p-2 rounded-b-xl mb-8 max-md:mb-2 max-sm:backdrop-brightness-50 group-hover:backdrop-brightness-50 transition-all duration-300'>{category}</h2>
        {/* {description && <p>{description}</p>} */}

        <div className="grid xl:grid-cols-[repeat(auto-fit,minmax(175px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-sm:grid-cols-[repeat(auto-fit,minmax(125px,1fr))] w-full h-full gap-2 justify-self-end px-6 py-3">
            {skills.map((skill, index) => (
            <div key={index} className="group-hover:backdrop-blur-md group-hover:backdrop-brightness-50 group-hover:font-semibold max-sm:backdrop-brightness-50 max-sm:backdrop-blur-xs  w-full h-full max-xl:h-16 flex rounded-2xl justify-center items-center xl:text-xl md:text-xl border-2 group-hover:border-0 transition-all duration-100">
                {skill}
            </div>
            ))}
        </div>

    </div>
  )
}

export default SkillsItem