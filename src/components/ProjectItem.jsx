import React, { useState, useEffect } from 'react';

const ProjectItem = ({ title, subtitle, date, description, images, type, link }) => {
  const [isSmall, setIsSmall] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative project w-full max-sm:w-[80%] shrink-0 h-full flex items-center justify-center px-[10%] py-16 text-3xl flex-row  gap-4 z-10
                    max-lg:flex-col max-lg:gap-0 max-lg:justify-center max-lg:py-12 max-md:py-6 max-md:px-8 max-sm:py-4 max-sm:px-6 max-sm:border-y-2 max-sm:last:border-r-2 max-sm:first:border-l-2">

      
      {/* Text Content */}
      <div className='w-full h-full flex flex-col items-start justify-center max-sm:h-[60%] sm:text-primary-dark'>
        <div className='relative flex flex-col items-start mb-8 '>
          <div className='relative flex flex-row items-baseline justify-center gap-2 text-pretty'>
            <h2 className='text-4xl font-bebas font-bold max-sm:text-2xl'>{title}</h2>
            {subtitle && <p className='text-xl max-md:text-lg max-sm:text-sm font-oswald max-sm:hidden'>a.k.a. {subtitle}</p>}
            </div>
          <p className='text-xl max-sm:text-lg font-montserrat'>{date}</p>
        </div>
        <p className='text-xl text-pretty max-md:text-lg max-sm:text-xs mb-6 font-oswald'>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className='text-primary-light bg-light hover:scale-105 p-2 rounded-2xl font-bebas max-md:text-sm transition-all duration-500 origin-left'>Check out</a>
      </div>

      <div className='relative w-full h-full flex justify-center items-center'>
        <img 
          src={`./${type}${isSmall ? images[1] : images[0]}`}  
          alt="project-image" 
          className='absolute w-fit h-full object-contain max-lg:h-fit rounded-2xl' 
        />
        </div>
      </div> 
  );
};

export default ProjectItem;
