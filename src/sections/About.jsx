import React from 'react';

const About = () => {
  return (
    <section name="About" className="flex items-center px-[6%]">
      <div className="relative flex max-lg:flex-col w-full max-h-80 h-80 rounded-2xl justify-center items-center">
        <div className='relative lg:w-full lg:h-full h-3/5 rounded-2xl max-lg:rounded-full max-lg:aspect-square overflow-hidden'>
          <video
            src="./videos/about.mp4"
            autoPlay
            muted
            loop
            className="absolute w-full h-full object-cover -z-10 dark:invert touch-none"
          ></video>
          <picture>
            <source media="(max-width:1000px)" srcset="./images/about-sm.png"></source>
            <img
              src="./images/about.png"
              alt="myself-about"
              className="w-full h-full absolute object-contain max-lg:pt-2 bottom-0"
              loading='lazy'
            />
          </picture>
        </div>

        <div className="relative flex flex-col h-2/5 min-h-[25%] px-6 py-3 justify-center max-lg:text-center text-pretty max-md:text-sm">
         <h2 className="font-bold font-poppins text-2xl lg:my-2 max-lg:mb-2 max-md:hidden">About Me</h2>
          <p className="font-montserrat text-pretty">
            An independent and self-motivated Front-End Developer looking to apply my knowledge and skills in programming. I love creating beautiful programs with attention to detail.
          </p>
       </div>
      </div>
    </section>
  );
};

export default About;
