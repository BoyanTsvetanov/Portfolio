import React from 'react';

const About = () => {
  return (
    <section name="About" className="flex items-center px-[6%] relative lg:mt-20 my-10">
      <div className="relative flex max-md:flex-col w-full max-h-80 h-80 rounded-2xl justify-center items-center">
        <div className='relative sm:w-full lg:h-full h-3/5 rounded-2xl max-sm:rounded-full max-lg:aspect-square overflow-hidden'>
          <video
            src="./videos/about.mp4"
            autoPlay
            muted
            loop
            className="absolute w-full h-full object-cover -z-10 dark:invert touch-none"
          ></video>
          <picture>
            <source media="(max-width: 640px)" srcset="./images/about-sm.png" />
            <source media="(max-width: 1024px)" srcset="./images/about-md.png" />
            <img
              src="./images/about.png"
              alt="myself-about"
              className="w-full h-full absolute object-contain max-lg:pt-2 bottom-0"
              loading='lazy'
            />
          </picture>
        </div>

        <div className="relative flex flex-col w-full h-2/5 min-h-[25%] px-6 sm:py-3 justify-center max-lg:text-center text-pretty max-md:text-sm">
         <h2 className="font-bold font-poppins text-2xl lg:my-2 max-lg:mb-2 max-sm:hidden">About Me</h2>
          <p className="font-montserrat text-pretty md:text-lg max-md:text-sm">
            An independent and self-motivated Front-End Developer looking to apply my knowledge and skills in programming. I love creating beautiful programs with attention to detail.
          </p>
       </div>
      </div>
      <img src="./images/tron.png" alt="bg" className='absolute sm:hidden w-full object-contain top-10 left-0 -z-20 dark:invert' />
    </section>
  );
};

export default About;
