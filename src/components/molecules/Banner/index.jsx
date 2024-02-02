import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import AvatarLogoIIT from '../../../assets/images/AvatarLogoIIT.png';
import {
  avatarAnimation,
  sectionBodyAnimation,
} from '../../../hooks/UseAnimation';

function Banner() {
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

  return (
    <section className="min-h-[85vh] lg:min-h-[90] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-x-12 translate-y-[-5%] sm:translate-y-[-0%">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={viewDiv && 'visible'}
            variants={sectionBodyAnimation}
            className="flex-1 text-center font-secondary lg:text-left mt-20"
          >
            <h1 className="text-[55px] font-bold leading-[0.8] lg:text-[110px] text-gradient mb-8 translate-y-[-20%] sm:translate-y-[-0%">
              Inovasi <span>IT</span>
            </h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white mr-4">Events</span>
              <TypeAnimation
                sequence={[
                  'SEMINAR',
                  2000,
                  'WEBINAR',
                  2000,
                  'WORKSHOP',
                  2000,
                  'COMPETITIONS',
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0">
              Berinovasi Bersama Menuju Sukses Tak Terbatas
            </p>
          </motion.div>
          <motion.div
            variants={avatarAnimation}
            initial="hidden"
            animate="show"
            className="flex-1 max-w-[360px] lg:max-w-[482px] justify-center lg:justify-start"
          >
            <motion.img
              ref={ref}
              initial="hidden"
              animate={viewDiv && 'visible'}
              variants={sectionBodyAnimation}
              src={AvatarLogoIIT}
              alt="Inovasi IT Logo"
              className="w-full max-w-[360px] lg:max-w-[482px] mx-auto lg:mx-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
