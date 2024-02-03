import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { headingAnimation } from '../../../hooks/UseAnimation';
import { Button, Input, TextArea, BottomLine } from '../../atoms';
import { Map } from '../../organisms';

function Contact() {
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
    <section
      className="section  translate-y-[5%] sm:translate-y-[40%]"
      id="contact"
    >
      <div className="container mx-auto">
        <h2 className="h2 text-accent text-center">Hubungi Kami</h2>
        <BottomLine />
        <div className="flex flex-col lg:flex-row mt-7 translate-y-[5%] sm:translate-y-[10%]">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={viewDiv && 'visible'}
            variants={headingAnimation}
            className="flex-1 flex justify-start items-center relative" // Add relative positioning
            style={{ zIndex: 1 }} // Ensure the map is properly layered
          >
            <div>
              <Map />
            </div>
          </motion.div>
          <motion.form
            initial="hidden"
            animate={viewDiv && 'visible'}
            variants={headingAnimation}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <Input type="text" placeholder="Nama" />
            <Input type="text" placeholder="Email" />
            <Input type="text" placeholder="Subjek" />
            <TextArea placeholder="Pesan" />
            <Button>Kirim</Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
