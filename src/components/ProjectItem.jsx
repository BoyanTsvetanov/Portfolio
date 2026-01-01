import { ChevronDown, ChevronUp, SquareArrowOutUpRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const ProjectItem = ({
  title,
  subtitle,
  date,
  description,
  images,
  type,
  link,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 769;
      setIsSmallScreen(isSmall);
      if (!isSmall) setIsOpen(true);
      if (isSmall) setIsOpen(false);
    };

    handleResize(); // initialize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative project w-full shrink-0 flex lg:items-center justify-center px-16 flex-row lg:gap-10 md:gap-5 z-10 max-lg:flex-col-reverse">
      <div className="lg:w-2/5 w-full h-fit flex flex-col md:items-start items-center justify-center max-md:justify-between max-md:bg-gray-200 max-md:dark:bg-[#1b1b1b] max-md:p-2 max-md:rounded-b-lg">
        <div className="relative flex flex-col items-start mb-2 max-md:mb-0 w-full">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-4xl font-poppins font-bold max-sm:text-2xl">
              {title}
            </h2>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="max-md:block md:hidden"
              aria-expanded={isOpen}
              aria-controls="slidedown-content"
            >
              {isOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
          </div>
        </div>

        <div id="slidedown-content" className="w-full h-full">
          <SlideDown closed={isSmallScreen && isOpen === false}>
            <div className="flex flex-col h-full items-start w-full space-y-2">
              {/* {subtitle && (
                <p className='text-xl max-md:text-lg max-sm:text-sm font-sofiasans'>{subtitle}</p>
              )} */}
              <p className="text-lg font-sofiasans text-current/75">{date}</p>
              <p className="text-xl text-pretty max-md:text-lg max-sm:text-sm font-sofiasans leading-normal">
                {description}
              </p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-light not-dark:bg-dark text-primary-light not-dark:text-primary-dark demo-button text-nowrap md:mt-4 mt-2 p-2 px-4 font-poppins font-bold text-3xl max-md:rounded max-md:text-lg max-sm:text-sm transition-all duration-500"
              >
                Live Demo
              </a>
            </div>
          </SlideDown>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative lg:w-3/5 w-full md:h-min h-full max-md:brightness-105 md:aspect-video flex group justify-center items-center max-md:-z-10 project-container">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center w-full h-full cursor-pointer"
        >
          <img
            src={`./${type}${images[1]}`}
            alt="project"
            className="h-full object-cover max-md:rounded-t-lg group-hover:brightness-50 md:saturate-75 transition-all duration-300 project-card"
          />
          <img
            src={`./${type}${images[0]}`}
            alt="blurred project bg"
            className="absolute w-full h-full object-cover opacity-0 dark:opacity-100 max-md:hidden md:brightness-200 brightness-150 blur-2xl saturate-150 scale-x-105 transition-all duration-300 -z-10 max-md:p-[20%]"
          />
          <SquareArrowOutUpRight className="absolute text-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 " />
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
