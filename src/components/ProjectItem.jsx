import { ArrowRight, SquareArrowOutUpRight } from 'lucide-react';
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
    <div className="relative project w-full max-sm:w-[80%] shrink-0 flex lg:items-center justify-center px-[10%] text-3xl flex-row border-y-0 gap-10 z-10 max-lg:flex-col max-lg:py-12 max-md:py-4 max-md:px-6 max-md:border-y-2 max-md:last:border-r-2 max-md:first:border-l-2">
          
      <div className='lg:w-2/5 w-full h-fit flex flex-col items-start justify-center max-md:justify-start'>
        <div className='relative flex flex-col items-start mb-8 max-md:mb-4'>
          <div className='relative flex flex-row items-baseline justify-center gap-2 text-pretty'>
            <h2 className='text-4xl font-poppins font-bold max-sm:text-2xl'>{title}</h2>
            {subtitle && <p className='text-xl max-md:text-lg max-sm:text-sm font-montserrat max-sm:hidden'>a.k.a. {subtitle}</p>}
            </div>
          <p className='text-xl max-sm:text-lg font-montserrat'>{date}</p>
        </div>
        <p className='text-xl text-pretty max-md:text-lg max-sm:text-xs mb-6 font-montserrat'>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className='text-primary-light not-dark:text-light bg-light not-dark:bg-dark p-2 px-4 font-poppins font-bold text-3xl max-md:text-sm transition-all duration-500'>Live Demo</a>
      </div>

      <div className='relative lg:w-3/5 w-full h-min aspect-video flex group justify-center items-center rounded max-md:items-end'>
        <a href={link} target="_blank" rel="noopener noreferrer" className='flex justify-center items-center w-full h-full cursor-pointer'>
          <img 
            src={`./${type}${images[1]}`}  
            alt="project-image" 
            className='h-full object-cover md:rounded group-hover:brightness-50 saturate-75 transition-all duration-300' 
          />
          <img 
            src={`./${type}${images[0]}`}  
            alt="project-image" 
            className='absolute w-full h-full object-cover opacity-0 dark:opacity-100 brightness-200 blur-3xl saturate-150 transition-all duration-300 -z-10' 
          />
          {/* <div className='bg-dark absolute w-full h-full dark:opacity-0 brightness-200 blur-2xl saturate-150 transition-all duration-300 -z-10'></div> */}
          <SquareArrowOutUpRight className='absolute text-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 '/>
        </a>
      </div>

      
    </div> 
  );
};

export default ProjectItem;
