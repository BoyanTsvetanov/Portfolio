import React, { useState, useEffect } from 'react'
import { navLinks } from '../constants'
import clsx from 'clsx'
import { Link as LinkScroll } from "react-scroll";
import { Sun, Moon } from 'lucide-react';


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 32)
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll); 
        }
      }, [])


      const NavLink = ({ title }) => (
        <LinkScroll
          onClick={() => setIsOpen(false)}
          to={title}
          offset={-100}
          spy
          smooth
          activeClass="nav-active"
          className='font-bebas leading-normal z-10 cursor-pointer group max-lg:text-primary-dark hover:text-primary-dark transition-colors duration-200'
        >
          {title}
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-dark max-lg:bg-primary-dark"></span>
        </LinkScroll>
      );

      const [darkMode, setDarkMode] = useState(false);

        // Load theme from localStorage on mount
        useEffect(() => {
            const savedTheme = localStorage.getItem('theme') === 'dark';
            setDarkMode(savedTheme);
            document.documentElement.classList.toggle('dark', savedTheme);
        }, []);

        // Toggle theme and save to localStorage
        const toggleTheme = () => {
            const newTheme = !darkMode;
            setDarkMode(newTheme);
            localStorage.setItem('theme', newTheme ? 'dark' : 'light');
            document.documentElement.classList.toggle('dark', newTheme);
        };


    return (
        <header className={clsx('px-16 max-md:px-8 fixed z-50 w-full transition-all duration-500',
            hasScrolled ? 'py-2 max-md:py-1 text-primary-dark not-dark:bg-dark dark:bg-[#B22222]' : 'lg:py-6 md:py-4 max-md:py-2')}>
            <nav className='flex justify-between items-center max-md:justify-between'>
            <a href='/' className=''>
                {/* <img src="./icons/logo-light.png" alt="logo" width={130}/> */}
               
            <h1 className='font-bebas lg:text-4xl sm:text-2xl max-sm:text-lg'>Boyan Tsvetanov</h1>
            <p className='font-poppins max-md:text-sm'>Web Developer</p>
        
            </a>
            

            <div className='flex flex-row items-center justify-center gap-20'>
            <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-light dark:bg-dark transition-colors"
            >
                {darkMode ? <Sun size={20} /> : <Moon size={20}  className='text-primary-light' />}
            </button>
            
            <ul className={clsx('flex justify-center text-xl items-center gap-16 max-lg:opacity-0 max-lg:absolute max-lg:flex-col max-lg:text-4xl max-lg:w-[100%] max-lg:h-screen max-lg:top-0 max-lg:right-0  max-lg:size-8 ', isOpen ? 'max-lg:opacity-100' : 'max-lg:pointer-events-none')}>
                {navLinks.map((item) => (
                    <li key={item.label} className='z-10'>
                    <NavLink title={item.label}
                    >
                    </NavLink>
                    </li>
                ))}
                
                <div className='hidden max-lg:block w-full h-full inset-0 absolute'>
                   <video src="./videos/slidebar1.mp4" muted autoPlay loop className='absolute w-full object-cover h-full'></video>
                </div>
                
            </ul>
            </div>
           
            <button className='hidden max-lg:block z-10' onClick={() => setIsOpen((prevState) => !prevState)}>
                <img src={`./icons/${isOpen ? 'close' : 'hamburger'}.svg`} alt="menu" className={clsx('p-1 dark:invert w-10 h-10', hasScrolled && 'not-dark:bg-light')} />
            </button>
            
            </nav>
        </header>
    );
    
}

export default Header