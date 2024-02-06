import React from 'react';
import { BiUser } from 'react-icons/bi';
import { BsChatSquareText } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { SiGithubsponsors } from 'react-icons/si';
import { IoCalendarClearOutline, IoHomeOutline } from 'react-icons/io5';

function Navigation() {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="lg:hidden">
          <div className="w-full h-[80px] bg-white/20 backdrop-blur-3xl rounded-2xl max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
            <Link
              to="home"
              activeClass="active"
              smooth
              spy
              offset={-200}
              className="cursor-pointer w-[60-px] h-[60px] flex items-center justify-center"
            >
              <IoHomeOutline />
            </Link>
            <Link
              to="about"
              activeClass="active"
              smooth
              spy
              className="cursor-pointer w-[60-px] h-[60px] flex items-center justify-center"
            >
              <BiUser />
            </Link>
            <Link
              to="events"
              activeClass="active"
              smooth
              spy
              className="cursor-pointer w-[60-px] h-[60px] flex items-center justify-center"
            >
              <IoCalendarClearOutline />
            </Link>
            <Link
              to="sponsor"
              activeClass="active"
              smooth
              spy
              className="cursor-pointer w-[60-px] h-[60px] flex items-center justify-center"
            >
              <SiGithubsponsors />
            </Link>
            <Link
              to="contact"
              activeClass="active"
              smooth
              spy
              className="cursor-pointer w-[60-px] h-[60px] flex items-center justify-center"
            >
              <BsChatSquareText />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
