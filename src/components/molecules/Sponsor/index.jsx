import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  sectionBodyAnimation,
  headingAnimation,
} from '../../../hooks/UseAnimation';
import LogoMSN from '../../../assets/images/sponsors/MSN.png';
import LogoAFILIYA from '../../../assets/images/sponsors/AFILIYA.png';
import LogoHIMATI from '../../../assets/images/sponsors/HIMATI.png';
import LogoSTTISS from '../../../assets/images/sponsors/STTISS.png';
import { BottomLine } from '../../atoms';

function Sponsor() {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView]);

  const logos = [
    { src: LogoMSN, alt: 'MSN Logo' },
    { src: LogoAFILIYA, alt: 'Afiliya Logo' },
    { src: LogoHIMATI, alt: 'HIMATI Logo' },
    { src: LogoSTTISS, alt: 'STTISS Logo' },
  ];

  return (
    <section className="section" id="sponsor" ref={ref}>
      <div className="mx-auto">
        <div>
          <motion.div
            initial="hidden"
            animate={viewDiv && 'visible'}
            variants={headingAnimation}
            className={`flex-1 ${viewDiv ? 'mt-0' : 'lg:mt-0'}`}
          >
            <h3 className="text-center text-[#45b8ff]">
              Terima kasih kepada Sponsor & Media Partner
            </h3>
            <h1 className="text-4xl font-semibold text-center drop-shadow-md">
              Sponsor
            </h1>
            <BottomLine />
            <motion.div
              initial="hidden"
              animate={viewDiv && 'visible'}
              variants={sectionBodyAnimation}
              className={`lg:grid lg:grid-cols-2 lg:gap-8 md:grid-cols-2 ${viewDiv ? 'mt-20' : 'lg:mt-0'}`}
            >
              {logos.map((logo, index) => (
                <motion.div
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  className="relative group"
                >
                  <motion.img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-40 lg:w-40 md:w-60 md:p-0 h-30 md:h-60 lg:h-auto object-cover object-center justify-center items-center mx-auto translate-y-[-40%] sm:translate-y-[-0%] duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Sponsor;
