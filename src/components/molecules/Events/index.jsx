import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Events.css';
import events from '../../../utils/events';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  headingAnimation,
  sectionBodyAnimation,
} from '../../../hooks/UseAnimation';
import { BottomLine, Button } from '../../atoms';

function Events() {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = React.useRef();

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <section
      className="py-40 sm:py-40 parent translate-y-[10%] sm:translate-y-[-0%]"
      id="events"
    >
      <motion.div
        className="mb-8"
        ref={ref}
        initial="hidden"
        animate={viewDiv && 'visible'}
        variants={headingAnimation}
      >
        <h3 className="text-center text-[#45b8ff]">4 Events</h3>
        <h1 className="text-4xl font-semibold text-center drop-shadow-md">
          Events
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={viewDiv && 'visible'}
        variants={sectionBodyAnimation}
      >
        <Slider
          ref={sliderRef}
          dots={settings.dots}
          arrows={settings.arrows}
          infinite={settings.infinite}
          speed={settings.speed}
          slidesToScroll={settings.slidesToScroll}
          slidesToShow={settings.slidesToShow}
          autoplay={settings.autoplay}
          pauseOnHover={settings.pauseOnHover}
          responsive={settings.responsive.map((item) => ({
            breakpoint: item.breakpoint,
            settings: {
              ...item.settings,
            },
          }))}
        >
          {events.map((event) => (
            <div key={event.id}>
              <div className="mx-4 single-blog grid grid-cols-1 md:grid-cols-2 gap-4 items-center translate-y-[-15%] sm:translate-y-[-0%]">
                <div className="md:col-span-1">
                  <img
                    src={event.img}
                    alt="event"
                    className="w-full h-80  md:h-full object-cover object-center"
                  />
                </div>
                <div className="md:col-span-1  translate-y-[-50%] sm:translate-y-[-0%]">
                  <div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-[25px] font-bold leading-[0.8] lg:text-[30px] text-gradient mb-4 sm:mb-4">
                      {event.title}
                    </h2>
                  </div>
                  <p className="text-left text-sm md:text-base">
                    {event.description}
                  </p>
                  <a href={event.link} aria-label="Link to Event">
                    <button className="secondary-button mt-4" type="submit">
                      Daftar
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="hidden md:flex">
          <Button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className=" text-white py-2 px-4 absolute left-20 transform -translate-y-60"
          >
            <FaArrowLeft />
          </Button>
          <Button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="py-2 px-4 rounded-full absolute right-20 transform -translate-y-60"
          >
            <FaArrowRight />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

export default Events;
