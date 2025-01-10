import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import {
  headingAnimation,
  sectionBodyAnimation,
} from '../../../hooks/UseAnimation';
import { BottomLine } from '../../atoms';

function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
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
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={viewDiv && 'visible'}
            variants={headingAnimation}
            className={`flex-1 ${viewDiv ? 'mt-40' : 'lg:mt-0'}`}
          >
            <h3 className="text-center text-[#45b8ff]">Apa itu Inovasi IT?</h3>
            <h1 className="text-4xl font-semibold text-center drop-shadow-md">
              Tentang Kami
            </h1>
            <BottomLine />
            <motion.p
              ref={ref}
              initial="hidden"
              animate={viewDiv && 'visible'}
              variants={sectionBodyAnimation}
              className="text-center mt-20"
            >
              Inovasi IT merupakan ajang bergengsi yang diinisiasi oleh Himpunan
              Mahasiswa Teknik Informatika (HIMATI) Sekolah Tinggi Teknologi
              Informatika Sony Sugema. Sejak pertama kali digelar pada tahun
              2020, acara ini telah menjadi platform inspiratif bagi mahasiswa
              dan praktisi di bidang teknologi. Setiap tahun, Inovasi IT
              menghadirkan rangkaian kegiatan yang dinamis dan edukatif,
              meliputi seminar, webinar, workshop, serta kompetisi, yang
              dirancang untuk memperluas wawasan dan mendorong terciptanya
              inovasi di dunia teknologi
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
