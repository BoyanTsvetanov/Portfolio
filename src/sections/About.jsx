import React from 'react';

const About = () => {
  return (
    <section name="About" className="flex items-center px-[6%]">
      {/* <div className="w-24 max-md:w-12 h-1 bg-dark dark:bg-light"></div> */}
      <div className="relative flex w-full h-[70dvh] border-4 rounded-2xl p-4">
        <div className="flex lg:px-10 z-1 h-full justify-center max-lg:items-end items-center relative">
          <video
            src="./videos/about.mp4"
            autoPlay
            muted
            loop
            className="absolute w-full h-full object-cover -z-10 rounded-2xl max-md:rounded-xl dark:invert touch-none"
          ></video>
          <img
            src="./images/about.png"
            alt="myself-about"
            className="flex-1 h-full object-contain max-lg:absolute max-md:bottom-0"
          />
          <div className="relative flex flex-1 flex-col max-lg:justify-stretch max-md:max-h-[50%] min-h-[25%] backdrop-blur-xs rounded-2xl border-2 border-primary-dark text-primary-dark dark:text-primary-light dark:max-md:text-primary-dark dark:max-md:backdrop-brightness-75 max-lg:rounded-b-xl max-lg:rounded-none max-lg:border-0 px-6 py-3 justify-center text-pretty max-md:text-sm max-md:pb-10">
            <h2 className="font-bold font-poppins text-2xl lg:my-2 max-lg:mb-2">About Me</h2>
            <p className="font-montserrat text-pretty">
              An independent and self-motivated Junior Web Developer looking to apply my knowledge and skills in programming. I love creating beautiful programs with attention to detail.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="w-24 max-md:w-12 h-1 bg-dark dark:bg-light"></div> */}
    </section>
  );
};

export default About;
