import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Tracks navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks last scroll position
  const navigate = useNavigate();

  // Toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Navigation handler for scrolling and updating the URL
  const handleNavigation = (section) => {
    const sectionElement = document.getElementById(section); 
    console.log(sectionElement);// Locate section by ID
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    }
  };

  // Handle scroll direction for navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Hide navbar on scroll down if scrolled beyond 50px
        setIsVisible(false);
      } else {
        // Show navbar on scroll up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="flex flex-wrap items-center justify-between p-4 w-full container mx-auto">
        {/* Hamburger Menu Toggle Button (Mobile Only) */}
        <div className="block md:hidden mx-2 ml-auto">
          <button
            onClick={toggleMenu}
            className="text-blue-900 hover:text-blue-500 focus:outline-none"
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Center - Navigation Links */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:flex md:flex-1 md:justify-center md:w-auto`}
        >
          <div
            className="rounded-lg px-4 py-4"
            style={{
              background: 'linear-gradient(135deg, #f0f4f8, #cfd9e4)',
            }}
          >
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 ">
              <NavLink
                to="/home"
                onClick={() => handleNavigation('home')}
                className={({ isActive }) =>
                  `cursor-pointer text-blue-950 hover:text-blue-500 ${
                    isActive ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text' : ''
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => handleNavigation('about')}
                className={({ isActive }) =>
                  `cursor-pointer text-blue-950 hover:text-blue-500 ${
                    isActive ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text' : ''
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/technology"
                onClick={() => handleNavigation('technology')}
                className={({ isActive }) =>
                  `cursor-pointer text-blue-950 hover:text-blue-500 ${
                    isActive ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text' : ''
                  }`
                }
              >
                Technology
              </NavLink>
              <NavLink
                to="/project"
                onClick={() => handleNavigation('project')}
                className={({ isActive }) =>
                  `cursor-pointer text-blue-950 hover:text-blue-500 ${
                    isActive ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text' : ''
                  }`
                }
              >
                Project
              </NavLink>
          
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
