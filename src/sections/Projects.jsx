import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {projectsData} from "../constants/index.js";
import ProjectItem from "../components/ProjectItem.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {

    if(isMobile) return

    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".project");
      
      // Calculate total width
      const totalWidth = horizontalRef.current.offsetWidth;
      const sectionHeight = sectionRef.current.offsetHeight;

      // Set up the ScrollTrigger to pin and scroll horizontally
      gsap.to(horizontalRef.current, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1.2,
          markers: false,
          snap: 1 / (sections.length - 1),
          start: "top-=80 top", // The start point: trigger when the section is at the top of the viewport
          end: `+=${totalWidth}`, // The end point: when we've scrolled the full width of the section horizontally
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, [isMobile]);

  return (
    <section name="Projects" className="relative w-full mx-auto overflow-hidden max-lg:w-[80%]">
      <h1 className="z-10 justify-self-center px-2 text-[80px] max-sm:text-[60px] font-bold text-center font-poppins mt-10">Projects</h1>
      <div ref={sectionRef} className="relative md:h-[calc(100dvh-80px)] max-md:items-stretch w-full mx-auto scroll-hide overflow-hidden max-md:overflow-x-auto ">
        {/* <h1 className="absolute max-lg:hidden top-0 left-1/2 -translate-x-1/2 z-10 text-primary-dark justify-self-center px-2 text-[80px] max-sm:text-[60px] font-bold text-center font-poppins">Projects</h1> */}
        {/* <video src="./videos/test1.mp4" autoPlay loop muted className="absolute w-full h-full object-cover -z-10 max-md:hidden"></video> */}
        {/* <div className='absolute -z-5 w-full h-full bg-gradient-to-br from-transparent from-40% to-90% to-black max-md:hidden'></div> */}
        {/* <img src="./images/sticker.png" alt="" className="absolute w-full h-full object-contain -z-10 max-md:hidden" /> */}
        <div ref={horizontalRef} className="flex md:h-full w-full items-stretch">
          {projectsData.map((project, index) => (
            <ProjectItem key={index} title={project.title} subtitle={project.subtitle} date={project.date} description={project.description} images={project.images} type={project.type} link={project.link} >
            </ProjectItem>
          ))}
        </div>
      </div>
    </section>
  );
}
