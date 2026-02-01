import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";

gsap.registerPlugin("ScrollTrigger", "SplitText");

const Contacts = () => {
  const headingRef = useRef(null);
  const sectionRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(headingRef.current, {
        type: "lines",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "+=200px",
          scrub: 1,
          markers: false,
        },
      });

      tl.from(split.lines, {
        opacity: 0,
        y: 20,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.3,
      }).from(
        contactRef.current.children, // ✅ correct
        {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: "power2.out",
          stagger: 0.5,
        },
        "-=0.4", // overlap with heading animation
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      name="Contact"
      className="relative flex flex-col justify-center items-start pl-24 pr-16 max-sm:px-8 min-h-[80dvh]"
      ref={sectionRef}
    >
      <div
        className="font-poppins font-bold md:text-9xl text-5xl text-left py-8 uppercase gap-10"
        ref={headingRef}
      >
        {/* <h2 className="md:hidden">Contact</h2> */}
        <p className="text-5xl max-sm:font-medium leading-none!">
          Let's build something remarkable
        </p>
        <span className="leading-none! tracking-widest! w-full">Together</span>
      </div>

      <div
        ref={contactRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full font-poppins text-sm"
      >
        {/* ───────── Hire Me ───────── */}
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-bold uppercase tracking-wider">
            Hire Me
          </h4>

          <a
            href="mailto:boyantsvetanov05@gmail.com"
            className="bg-gray-200 dark:bg-[#363636] flex items-center gap-3 p-3"
          >
            <i className="fas fa-envelope text-3xl min-w-8"></i>
            <div>
              <h3 className="font-bold">E-Mail</h3>
              <p className="text-xs">boyantsvetanov05@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+359887377160"
            className="bg-gray-200 dark:bg-[#363636] flex items-center gap-3 p-3"
          >
            <i className="fas fa-phone text-3xl min-w-8"></i>
            <div>
              <h3 className="font-bold">Phone</h3>
              <p className="text-xs">+359 887 377 160</p>
            </div>
          </a>

          <div className="bg-gray-200 dark:bg-[#363636] flex items-center gap-3 p-3">
            <i className="fas fa-map-marker-alt text-3xl min-w-8"></i>
            <div>
              <h3 className="font-bold">Location</h3>
              <p className="text-xs">Sofia, Bulgaria</p>
            </div>
          </div>
        </div>

        {/* ───────── Social ───────── */}
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-bold uppercase tracking-wider">Social</h4>

          <a
            href="https://www.linkedin.com/in/boyan-tsvetanov-26aa2a32b/"
            target="_blank"
            className="bg-gray-200 dark:bg-[#363636] flex items-center gap-3 p-3"
          >
            <i className="fab fa-linkedin text-3xl min-w-8"></i>
            <h3 className="font-bold">LinkedIn</h3>
          </a>
        </div>

        {/* ───────── Open Source ───────── */}
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-bold uppercase tracking-wider">
            Open Source
          </h4>

          <a
            href="https://github.com/BoyanTsvetanov"
            target="_blank"
            className="bg-gray-200 dark:bg-[#363636] flex items-center gap-3 p-3"
          >
            <i className="fab fa-github text-3xl min-w-8"></i>
            <h3 className="font-bold">GitHub</h3>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contacts;
