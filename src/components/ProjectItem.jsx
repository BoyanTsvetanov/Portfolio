import { ChevronDown, ChevronUp, SquareArrowOutUpRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';

const ProjectItem = ({ title, subtitle, date, description, images, type, link }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(typeof window !== 'undefined' && window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 769;
      setIsSmallScreen(isSmall);
      if (!isSmall) setIsOpen(true);
      if (isSmall) setIsOpen(false);
    };

    handleResize(); // initialize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative project w-full shrink-0 flex lg:items-center md:justify-center justify-center px-[10%] text-3xl flex-row md:gap-10 z-10 max-lg:flex-col-reverse">
      
      
      <div className='lg:w-2/5 w-full h-fit flex flex-col md:items-start items-center justify-center max-md:justify-between max-md:not-dark:bg-gray-300 max-md:p-2 max-md:rounded-b-xl'>

        
        <div className='relative flex flex-col items-start mb-4 max-md:mb-0 w-full'>
          <div className='flex items-center justify-between w-full'>
            <h2 className='text-4xl font-poppins font-bold max-sm:text-2xl'>{title}</h2>
              <button
                onClick={() => setIsOpen(prev => !prev)}
                className='max-md:block md:hidden'
                aria-expanded={isOpen}
                aria-controls="slidedown-content"
              >
                {isOpen ? <ChevronUp /> : <ChevronDown />}
              </button>
          </div>
        </div>

        
        <div id="slidedown-content" className="w-full h-full">
          <SlideDown closed={isSmallScreen && isOpen===false}>
            <div className="flex flex-col h-full items-start w-full space-y-4">
              {/* {subtitle && (
                <p className='text-xl max-md:text-lg max-sm:text-sm font-montserrat'>{subtitle}</p>
              )} */}
              <p className='text-xl max-sm:text-lg font-montserrat'>{date}</p>
              <p className='text-xl text-pretty max-md:text-lg max-sm:text-xs font-montserrat'>{description}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className='bg-light not-dark:bg-dark text-primary-light not-dark:text-primary-dark text-nowrap p-2 px-4 font-poppins font-bold text-3xl max-md:text-sm transition-all duration-500'
              >
                Live Demo
              </a>
            </div>
          </SlideDown>
        </div>
      </div>

      {/* Image Section */}
      <div className='relative lg:w-3/5 w-full md:h-min h-full max-md:brightness-105 md:aspect-video flex group justify-center items-center rounded max-md:-z-10'>
        <a href={link} target="_blank" rel="noopener noreferrer" className='flex justify-center items-center w-full h-full cursor-pointer'>
          <img 
            src={`./${type}${images[1]}`}  
            alt="project" 
            className='h-full object-cover md:rounded max-md:rounded-t-xl group-hover:brightness-50 md:saturate-75 transition-all duration-300' 
          />
          <img 
            src={`./${type}${images[0]}`}  
            alt="blurred project bg" 
            className='absolute w-full h-full object-cover opacity-0 dark:opacity-100 md:brightness-200 brightness-150 md:blur-3xl blur-2xl saturate-150 transition-all duration-300 -z-10 max-md:p-[20%]' 
          />
          <SquareArrowOutUpRight className='absolute text-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ' />
        </a>
      </div>
    </div> 
  );
};

export default ProjectItem;
