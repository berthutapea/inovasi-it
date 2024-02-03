import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { sectionBodyAnimation } from '../../../hooks/UseAnimation';
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
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen translate-y-[5%] sm:translate-y-[-0%]">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={viewDiv && 'visible'}
            variants={sectionBodyAnimation}
            className={`flex-1 ${viewDiv ? 'mt-40' : 'lg:mt-0'}`}
          >
            <h2 className="h2 text-accent text-center">Sponsor</h2>
            <BottomLine />
            <motion.div
              ref={ref}
              initial="hidden"
              animate={viewDiv && 'visible'}
              variants={sectionBodyAnimation}
              className={`lg:grid lg:grid-cols-2 lg:gap-8 ${viewDiv ? 'mt-20' : 'lg:mt-0'}`}
            >
              {logos.map((logo, index) => (
                <motion.div
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  whileHover={{ scale: 1.2 }} // Animasi saat hover menggunakan Framer Motion
                  className="relative group"
                >
                  <motion.img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full lg:w-40 md:w-64 h-60 md:h-60 lg:h-auto object-cover object-center justify-center items-center
                 md:max-w-xs lg:max-w-full md:max-h-xs lg:max-h-full mx-auto translate-y-[-40%] sm:translate-y-[-0%] duration-300"
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
