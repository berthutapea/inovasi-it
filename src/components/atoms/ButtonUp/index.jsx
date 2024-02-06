import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Button from '../Button';

function ButtonUp() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      aria-label="link"
      type="button"
      onClick={handleClick}
      className={`fixed z-10 bottom-2 right-2 ${showButton ? 'block' : 'hidden'}`}
    >
      <Button className=" py-2 px-4 rounded-full absolute right-2 transform -translate-y-40">
        <FaArrowUp />
      </Button>
    </button>
  );
}

export default ButtonUp;
