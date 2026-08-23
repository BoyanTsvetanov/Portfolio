import { ChevronDown, ChevronUp, SquareArrowOutUpRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const ProjectItem = ({
  title,
  subtitle,
  date,
  description,
  tags,
  images,
  type,
  link,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    typeof window !== "undefined" && window.innerWidth < 768,
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 769;
      setIsSmallScreen(isSmall);
      if (!isSmall) setIsOpen(true);
      if (isSmall) setIsOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative project w-full shrink-0 flex lg:items-center justify-center px-16 max-md:px-8 flex-row lg:gap-10 md:gap-5 z-10 max-lg:flex-col-reverse">
      {/* Text Section */}
      <div className="lg:w-2/5 w-full h-fit flex flex-col md:items-start items-center justify-center max-md:justify-between max-md:p-2 card-background max-sm:bg-neutral-400/10!">
        <div className="relative flex flex-col items-start mb-2 max-md:mb-0 w-full">
          <div className="flex items-center justify-between w-full overflow-hidden">
            <h2 className="project-reveal text-4xl font-poppins max-sm:font-sofiasans font-bold max-sm:text-2xl max-sm:uppercase">
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
            <div className="flex flex-col h-full items-start w-full space-y-3">
              <div className="overflow-hidden w-full">
                <p className="project-reveal text-lg font-sofiasans text-current/75">
                  {date}
                </p>
              </div>

              <div className="overflow-hidden w-full">
                <p className="project-reveal text-xl text-pretty max-md:text-lg font-sofiasans leading-normal">
                  {description}
                </p>
              </div>

              {tags.length > 0 && (
                <div className="overflow-hidden w-full pt-1">
                  <div className="project-reveal flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 text-xs font-semibold rounded-md bg-current/10 border border-current/20 text-current/90 font-poppins"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="overflow-hidden md:mt-4 mt-2">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-reveal inline-block dark:bg-light bg-dark text-primary-light not-dark:text-primary-dark demo-button text-nowrap p-2 px-4 font-poppins font-bold text-3xl max-md:text-xl transition-all duration-500"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </SlideDown>
        </div>
      </div>

      {/* Image Section Wrapper */}
      <div className="relative isolate lg:w-3/5 w-full md:h-min h-full max-md:brightness-105 md:aspect-video flex group justify-center items-center project-container">
        {/* Ambilight Image (Negative inset expands bleed past main image bounds) */}
        <img
          src={`./${type}${images[0]}`}
          alt="blurred project bg"
          className="project-reveal-fade absolute inset-0 w-full h-full object-cover pointer-events-none max-md:hidden not-dark:hidden brightness-150 contrast-125 saturate-200 blur-3xl z-0"
        />

        {/* Masked Main Image Container */}
        <div className="overflow-hidden w-full h-full flex justify-center items-center z-10">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-reveal flex justify-center items-center w-full h-full cursor-pointer"
          >
            <img
              src={`./${type}${images[1]}`}
              alt="project"
              className="h-full w-full object-cover group-hover:brightness-50 md:saturate-75 saturate-90 transition-all duration-300 project-card"
            />
            <SquareArrowOutUpRight className="absolute text-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
