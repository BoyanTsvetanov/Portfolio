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
    <div className="relative project w-full shrink-0 flex lg:items-center md:justify-center justify-center md:px-[5%] text-3xl flex-row border-y-0 md:gap-10 z-10 max-lg:flex-col-reverse md:py-12">
          
      <div className='lg:w-2/5 w-full h-fit flex md:flex-col md:items-start items-center justify-center max-md:justify-start max-md:px-4'>
        <div className='relative flex flex-col items-start mb-8 max-md:mb-0'>
          <div className='relative flex flex-row items-baseline justify-center gap-2 text-pretty'>
            <h2 className='text-4xl font-poppins font-bold max-sm:text-2xl'>{title}</h2>
            {subtitle && <p className='text-xl max-md:text-lg max-sm:text-sm font-montserrat max-md:hidden'>a.k.a. {subtitle}</p>}
          </div>
          <p className='text-xl max-sm:text-lg font-montserrat max-md:hidden'>{date}</p>
        </div>
        <p className='text-xl text-pretty max-md:text-lg max-sm:text-xs mb-6 max-md:mb-4 font-montserrat max-md:hidden'>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className='text-primary-light bg-light p-2 px-4 font-poppins font-bold text-3xl max-md:text-sm transition-all duration-500'>Live Demo</a>
      </div>

      <div className='relative lg:w-3/5 w-full md:h-min h-full max-md:brightness-105 md:aspect-video flex group justify-center items-center rounded max-md:-z-10'>
        <a href={link} target="_blank" rel="noopener noreferrer" className='flex justify-center items-center w-full h-full cursor-pointer'>
          <img 
            src={`./${type}${images[1]}`}  
            alt="project-image" 
            className='h-full object-cover md:rounded max-md:rounded-t-xl group-hover:brightness-50 md:saturate-75 transition-all duration-300' 
          />
          <img 
            src={`./${type}${images[0]}`}  
            alt="project-image" 
            className='absolute w-full h-full object-cover opacity-0 dark:opacity-100 md:brightness-200 brightness-150 md:blur-3xl blur-2xl saturate-150 transition-all duration-300 -z-10 max-md:p-[20%]' 
          />
          {/* <div className='bg-dark absolute w-full h-full dark:opacity-0 brightness-200 blur-2xl saturate-150 transition-all duration-300 -z-10'></div> */}
          <SquareArrowOutUpRight className='absolute text-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 '/>
        </a>
      </div>

      
    </div> 
  );
};

export default ProjectItem;
