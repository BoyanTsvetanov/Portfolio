import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { navLinks } from "../constants";
import clsx from "clsx";
import { gsap } from "gsap";

const Header = ({ isOpen, setIsOpen }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const navRef = useRef(null);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const [blendEnabled, setBlendEnabled] = useState(true);

  // Auto-hide header refs
  const lastScrollY = useRef(0);
  const isHiddenRef = useRef(false);

  // Track scrolled state
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-hide header on scroll down / reveal on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Keep visible near top of page or when mobile menu is open
      if (isOpen || currentScrollY < 50) {
        if (isHiddenRef.current) {
          gsap.to(headerRef.current, {
            yPercent: 0,
            duration: 0.35,
            ease: "power2.out",
          });
          isHiddenRef.current = false;
        }
        lastScrollY.current = currentScrollY;
        return;
      }

      // Hide when scrolling down
      if (currentScrollY > lastScrollY.current && !isHiddenRef.current) {
        gsap.to(headerRef.current, {
          yPercent: -100,
          duration: 0.35,
          ease: "power2.out",
        });
        isHiddenRef.current = true;
      }
      // Show when scrolling up
      else if (currentScrollY < lastScrollY.current && isHiddenRef.current) {
        gsap.to(headerRef.current, {
          yPercent: 0,
          duration: 0.35,
          ease: "power2.out",
        });
        isHiddenRef.current = false;
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Standard anchor NavLink
  const NavLink = ({ title, href }) => (
    <a
      onClick={() => setIsOpen(false)}
      href={href || `#${title}`}
      className="font-bebas leading-none uppercase z-10 cursor-pointer group text-primary-dark transition-colors duration-200"
    >
      {title}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-2 bg-white"></span>
    </a>
  );

  const menuTl = useRef(null);
  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!navRef.current) return;

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
        { y: -20, opacity: 0 },
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

  // Handle Mobile Menu toggle + Scrollbar Shift Compensation
  useEffect(() => {
    if (!menuTl.current || !hasMounted.current) return;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isOpen) {
      setBlendEnabled(false);

      // Lock scroll and offset padding to prevent layout shift
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

  return (
    <header
      ref={headerRef}
      className={clsx(
        "px-16 max-md:px-8 fixed z-50 w-full transition-all duration-500",
        hasScrolled
          ? "lg:py-6 md:py-4 max-md:py-2"
          : "lg:py-6 md:py-4 max-md:py-2",
        blendEnabled ? "mix-blend-difference text-white" : "text-transparent",
      )}
    >
      <nav className="flex justify-between items-center max-md:justify-between">
        <div
          ref={logoRef}
          className={clsx("z-50 block", isOpen && "text-primary-dark")}
        >
          {/* Logo direct <a> link */}
          <a href="#Hero" className="mix-blend-difference">
            <h2 className="font-bebas lg:text-4xl sm:text-2xl max-sm:text-lg">
              Boyan Tsvetanov
            </h2>
            <p className="font-poppins max-md:text-sm leading-none!">
              Software Engineer - Web
            </p>
          </a>
        </div>

        <div className="relative w-fit flex flex-row items-center gap-10">
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
        >
          <video
            src="./videos/slidebar1.mp4"
            autoPlay
            muted
            loop
            className="absolute top-0 right-0 h-full object-cover -z-10 hidden sm:block"
          ></video>
          <div className="absolute top-0 left-0 h-full w-2/5 bg-dark -z-5 hidden sm:block"></div>
          {navLinks.map((item) => (
            <li key={item.label}>
              <NavLink
                title={item.label}
                href={item.path || `#${item.label}`}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
