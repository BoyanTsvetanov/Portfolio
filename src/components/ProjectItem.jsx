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
    <div className="relative project w-full max-sm:w-[80%] shrink-0 flex items-center justify-center px-[10%] py-16 text-3xl flex-row lg:gap-8 z-10 max-lg:flex-col max-lg:justify-center max-lg:py-12 max-md:py-4 max-md:px-6 max-md:border-y-2 max-md:last:border-r-2 max-md:first:border-l-2">
          
      <div className='w-full h-full flex flex-col items-start justify-center max-md:justify-start md:text-primary-dark'>
        <div className='relative flex flex-col items-start mb-8 max-md:mb-4'>
          <div className='relative flex flex-row items-baseline justify-center gap-2 text-pretty'>
            <h2 className='text-4xl font-bebas font-bold max-sm:text-2xl'>{title}</h2>
            {subtitle && <p className='text-xl max-md:text-lg max-sm:text-sm font-oswald max-sm:hidden'>a.k.a. {subtitle}</p>}
            </div>
          <p className='text-xl max-sm:text-lg font-montserrat'>{date}</p>
        </div>
        <p className='text-xl text-pretty max-md:text-lg max-sm:text-xs mb-6 font-oswald max-md:font-montserrat'>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className='text-primary-light not-dark:max-md:text-light bg-light not-dark:max-md:bg-dark hover:scale-x-105 p-2 px-4 font-bebas max-md:text-sm transition-all duration-500 origin-left'>Live Demo</a>
      </div>

      <div className='relative w-full h-full max-md:h-min flex justify-center items-center max-md:items-end'>
        <img 
          src={`./${type}${isSmall ? images[1] : images[0]}`}  
          alt="project-image" 
          className='w-fit h-full object-contain max-lg:h-fit' 
        />
        </div>
      </div> 
  );
};

export default ProjectItem;
