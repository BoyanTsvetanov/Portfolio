import React, { useState, useEffect } from "react";
import { navLinks } from "../constants";
import clsx from "clsx";
import { Link as LinkScroll } from "react-scroll";
import { Sun, Moon } from "lucide-react";
import { getTheme, setTheme } from "../constants/theme.js";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

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
      className="font-sofiasans leading-normal uppercase z-10 cursor-pointer group max-lg:text-primary-dark  transition-colors duration-200"
    >
      {title}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
    </LinkScroll>
  );

  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applySystemTheme = () => {
      const isDark = mediaQuery.matches;
      setDarkMode(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    };

    // Apply on mount
    applySystemTheme();

    // React to system changes
    mediaQuery.addEventListener("change", applySystemTheme);

    return () => {
      mediaQuery.removeEventListener("change", applySystemTheme);
    };
  }, []);

  // Toggle theme and save to localStorage
  //   const toggleTheme = () => {
  //     const next = darkMode ? "light" : "dark";
  //     setDarkMode(next === "dark");
  //     setTheme(next);
  //   };

  return (
    <header
      className={clsx(
        "px-16 max-md:px-8 fixed z-50 w-full mix-blend-difference text-white transition-all duration-500",
        hasScrolled
          ? "lg:py-6 md:py-4 max-md:py-2"
          : "lg:py-6 md:py-4 max-md:py-2"
      )}
    >
      <nav className="flex justify-between items-center max-md:justify-between ">
        <LinkScroll to="Hero" className="" smooth>
          {/* <img src="./icons/logo-light.png" alt="logo" width={130}/> */}

          <h1 className="font-bebas lg:text-4xl sm:text-2xl max-sm:text-lg">
            Boyan Tsvetanov
          </h1>
          <p className="font-poppins max-md:text-sm leading-none!">
            Front-End Developer
          </p>
        </LinkScroll>

        <div className="relative w-fit flex flex-row items-center gap-10">
          {/* <button
            onClick={toggleTheme}
            className={clsx(
              "p-2 rounded-lg  text-primary-light dark:text-primary-dark cursor-pointer transition-colors",
              hasScrolled ? "bg-light dark:bg-dark" : "bg-transparent"
            )}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button> */}

          <ul
            className={clsx(
              "relative flex justify-center text-xl items-center gap-16 max-lg:flex-col max-lg:text-4xl w-fit max-lg:h-screen max-lg:top-0 max-lg:right-0 max-lg:size-8 transition-all duration-500",
              isOpen
                ? "opacity-100 translate-y-0"
                : "pointer-events-none opacity-0 -translate-y-1/4"
            )}
          >
            {navLinks.map((item) => (
              <li key={item.label} className="z-10">
                <NavLink title={item.label}></NavLink>
              </li>
            ))}

            <div className="hidden max-lg:block w-full h-full inset-0 absolute">
              <video
                src="./videos/slidebar1.mp4"
                muted
                autoPlay
                loop
                className="absolute w-full object-cover h-full"
              ></video>
            </div>
          </ul>

          <button
            className="block z-10"
            onClick={() => setIsOpen((prevState) => !prevState)}
          >
            <img
              src={`./icons/${isOpen ? "close" : "hamburger"}.svg`}
              alt="menu"
              className="p-1 mix-blend-difference invert w-9 h-9 hover:cursor-pointer"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
