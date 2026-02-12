import React, {
  useState,
  useEffect,
  useRef,
  use,
  useLayoutEffect,
} from "react";
import { navLinks } from "../constants";
import clsx from "clsx";
import { Link as LinkScroll } from "react-scroll";
import { Sun, Moon } from "lucide-react";
import { getTheme, setTheme } from "../constants/theme.js";
import { gsap } from "gsap";

const Header = ({ isOpen, setIsOpen }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const navRef = useRef(null);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const [blendEnabled, setBlendEnabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = ({ title }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={title}
      offset={-80}
      spy
      smooth
      activeClass="nav-active"
      className="font-bebas leading-none uppercase z-10 cursor-pointer group text-primary-dark  transition-colors duration-200"
    >
      {title}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-2 bg-white"></span>
    </LinkScroll>
  );

  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage on mount
  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");

  //   const applySystemTheme = () => {
  //     const isDark = mediaQuery.matches;
  //     setDarkMode(isDark);
  //     document.documentElement.classList.toggle("dark", isDark);
  //   };

  //   // Apply on mount
  //   applySystemTheme();

  //   // React to system changes
  //   mediaQuery.addEventListener("change", applySystemTheme);

  //   return () => {
  //     mediaQuery.removeEventListener("change", applySystemTheme);
  //   };
  // }, []);

  const menuTl = useRef(null);
  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!navRef.current) return;

    // Set initial CLOSED position (no animation)
    gsap.set(navRef.current, {
      xPercent: 100,
      y: window.innerHeight,
    });

    menuTl.current = gsap.timeline({ paused: true }).to(navRef.current, {
      xPercent: 0,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    });

    hasMounted.current = true;
  }, []);

  useLayoutEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        [logoRef.current, menuRef.current],
        {
          y: -20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          delay: 3.2,
        },
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!menuTl.current || !hasMounted.current) return;

    if (isOpen) {
      setBlendEnabled(false);
      document.body.style.overflow = "hidden";
      menuTl.current.play();
    } else {
      menuTl.current.reverse();
      menuTl.current.eventCallback("onReverseComplete", () => {
        setBlendEnabled(true);
        document.body.style.overflow = "";
      });
    }
  }, [isOpen]);

  // Toggle theme and save to localStorage
  //   const toggleTheme = () => {
  //     const next = darkMode ? "light" : "dark";
  //     setDarkMode(next === "dark");
  //     setTheme(next);
  //   };

  return (
    <header
      ref={headerRef}
      className={clsx(
        "px-16 max-md:px-8 fixed z-50 w-full transition-all duration-500",
        hasScrolled
          ? "lg:py-6 md:py-4 max-md:py-2"
          : "lg:py-6 md:py-4 max-md:py-2",
        blendEnabled ? "mix-blend-difference text-white" : "text-transparent",
        // isOpen
        //   ? "lg:mix-blend-difference text-white"
        //   : "mix-blend-difference text-white",
      )}
    >
      <nav className="flex justify-between items-center max-md:justify-between">
        <div ref={logoRef}>
          <LinkScroll to="Hero" className="mix-blend-difference" smooth>
            {/* <img src="./icons/logo-light.png" alt="logo" width={130}/> */}

            <h2 className="font-bebas lg:text-4xl sm:text-2xl max-sm:text-lg">
              Boyan Tsvetanov
            </h2>
            <p className="font-poppins max-md:text-sm leading-none!">
              Front-End Developer
            </p>
          </LinkScroll>
        </div>

        <div className="lg:relative w-fit flex flex-row items-center gap-10">
          {/* <button
            onClick={toggleTheme}
            className={clsx(
              "p-2 rounded-lg  text-primary-light dark:text-primary-dark cursor-pointer transition-colors",
              hasScrolled ? "bg-light dark:bg-dark" : "bg-transparent"
            )}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button> */}

          <button
            ref={menuRef}
            className="block z-50"
            onClick={() => setIsOpen((prevState) => !prevState)}
          >
            <img
              src={`./icons/${isOpen ? "close" : "hamburger"}.svg`}
              alt="menu"
              className="p-0 w-9 h-9 hover:cursor-pointer invert"
            />
          </button>
        </div>
        <ul
          ref={navRef}
          className="fixed inset-0 w-full h-dvh bg-dark flex flex-col justify-center items-start px-16 max-md:px-8 text-8xl z-40"
          // isOpen
          //   ? "opacity-100 translate-y-0"
          //   : "pointer-events-none opacity-0 -translate-y-1/4",
          // )}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <NavLink title={item.label}></NavLink>
            </li>
          ))}

          {/* <div className="hidden max-lg:block w-full h-full inset-0 absolute mix-blend-normal!">
              <video
                src="./videos/slidebar1.mp4"
                muted
                autoPlay
                loop
                className="absolute w-full object-cover h-full"
              ></video>
            </div> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
