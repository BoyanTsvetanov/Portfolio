import React from 'react';

const About = () => {
  return (
    <section name="About" className="flex mt-8 items-center">
      <div className="w-24 max-md:w-12 h-1 bg-dark dark:bg-light"></div>
      <div className="relative flex w-full h-[70vh] border-4 rounded-2xl p-4">
        <div className="flex px-10 z-1 h-full justify-center max-lg:items-end max-lg:px-4 items-center relative">
          <video
            src="./videos/about.mp4"
            autoPlay
            muted
            loop
            className="absolute w-full h-full object-cover -z-10 rounded-2xl max-md:rounded-xl dark:invert"
          ></video>
          <img
            src="./images/about.png"
            alt="myself-about"
            className="flex-1 h-full object-contain max-lg:absolute max-md:bottom-0 max-md:px-2"
          />
          <div className="relative flex flex-1 flex-col backdrop-blur-xs rounded-2xl border-2 border-primary-dark text-primary-dark dark:text-primary-light dark:max-md:text-primary-dark dark:max-md:backdrop-brightness-75 px-6 py-3 justify-center text-pretty max-md:text-sm max-lg:mb-4">
            <h2 className="font-bold font-poppins text-2xl my-2">About Me</h2>
            <p className="font-montserrat">
              An independent and self-motivated Junior Web Developer looking to apply my knowledge and skills in programming. I love creating beautiful programs with attention to detail.
            </p>
          </div>
        </div>
      </div>
      <div className="w-24 max-md:w-12 h-1 bg-dark dark:bg-light"></div>
    </section>
  );
};

export default About;
