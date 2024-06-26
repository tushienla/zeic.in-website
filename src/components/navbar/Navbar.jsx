import React, { useState, useEffect } from 'react';
import zeicLogo from '../../assets/images/logo/zeic_logo.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ navbarClassName }) => {
  const [color, setColor] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener('scroll', changeColor);
    return () => window.removeEventListener('scroll', changeColor);
  }, []);

  const getNavLinkClass = (path) => {
    const currentPath = window.location.pathname;
    return `transition-all duration-300 ease-in-out border-red-500 ${
      currentPath === path ? 'border-b-2' : ''
    } hover:border-b-2 hover:border-red-500`;
  };

  const handleNavChange = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`w-full px-4 fixed top-12 z-20 ${navbarClassName} ${
        color
          ? 'bg-gray-700 bg-opacity-50 backdrop-filter backdrop-blur-sm'
          : ''
      }`}
    >
      <div className='flex justify-between items-center w-full h-20 m-auto text-white'>
        <Link
          to='/'
          onClick={scrollToTop}
          className='flex items-center cursor-pointer'
        >
          <img className='h-20' src={zeicLogo} alt='zeic logo' />
          <h1 className='text-3xl font-bold ml-2'>ZEIC</h1>
        </Link>

        {/* Desktop view */}
        <ul className='hidden md:flex'>
          <li>
            <NavLink
              exact={true ? 'true' : undefined}
              to='/'
              className={getNavLinkClass('/')}
              onClick={scrollToTop}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/aboutus'
              className={getNavLinkClass('/aboutus')}
              onClick={scrollToTop}
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/products'
              className={getNavLinkClass('/products')}
              onClick={scrollToTop}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/services'
              className={getNavLinkClass('/services')}
              onClick={scrollToTop}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/career'
              className={getNavLinkClass('/career')}
              onClick={scrollToTop}
            >
              Career
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className={getNavLinkClass('/contact')}
              onClick={scrollToTop}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div
          className='md:hidden z-10 cursor-pointer'
          onClick={handleNavChange}
        >
          {isMenuOpen ? (
            <FontAwesomeIcon icon={faXmark} className='size-4' />
          ) : (
            <FontAwesomeIcon icon={faBars} className='size-4' />
          )}
        </div>

        {/* Mobile view */}
        <div
          className={
            isMenuOpen
              ? 'absolute right-0 top-0 w-full bg-gray-800 px-4 py-7 md:hidden ease-in-out duration-200'
              : 'absolute right-[-100%] top-1 ease-in-out duration-200'
          }
        >
          <ul>
            <li className='border-b'>
              <NavLink to='/' onClick={scrollToTop}>
                Home
              </NavLink>
            </li>
            <li className='border-b'>
              <NavLink to='/aboutus' onClick={scrollToTop}>
                About us
              </NavLink>
            </li>
            <li className='border-b'>
              <NavLink to='/products' onClick={scrollToTop}>
                Products
              </NavLink>
            </li>
            <li className='border-b'>
              <NavLink to='/services' onClick={scrollToTop}>
                Services
              </NavLink>
            </li>
            <li className='border-b'>
              <NavLink to='/career' onClick={scrollToTop}>
                Career
              </NavLink>
            </li>
            <li className='border-b'>
              <NavLink to='/contact' onClick={scrollToTop}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
