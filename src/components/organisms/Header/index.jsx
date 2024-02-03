import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import LogoIIT from '../../../assets/images/logo/LogoIIT.png';
import { Button } from '../../atoms';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header
      className={`py-4 transition-all ${isScrolled ? 'fixed top-0 left-0 right-0 bg-white/20 backdrop-blur-3xl z-50' : ''}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" aria-label="Link to Logo">
            <img
              className={`w-40 pr-20 ${isScrolled ? '' : ''}`}
              src={LogoIIT}
              alt="Inovasi IT Logo"
            />
          </a>
        </div>
        <div className="flex items-center">
          {!isMobile && (
            <>
              <Link
                to="home"
                activeClass="active-nav"
                smooth
                spy
                offset={-200}
                className="cursor-pointer ml-10 font-bold"
              >
                Beranda
              </Link>
              <Link
                to="about"
                activeClass="active-nav"
                smooth
                spy
                className="cursor-pointer ml-10 font-bold"
              >
                Tentang
              </Link>
              <Link
                to="events"
                activeClass="active-nav"
                smooth
                spy
                className="cursor-pointer ml-10 font-bold"
              >
                Events
              </Link>
              <Link
                to="sponsor"
                activeClass="active-nav"
                smooth
                spy
                className="cursor-pointer ml-10 font-bold"
              >
                Sponsor
              </Link>
              <Link
                to="contact"
                activeClass="active-nav"
                smooth
                spy
                className="cursor-pointer ml-10 font-bold"
              >
                Kontak
              </Link>
            </>
          )}
          <div className="ml-10">
            <Button>Login</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
