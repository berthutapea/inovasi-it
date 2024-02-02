import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { headingAnimation } from '../../../hooks/UseAnimation';
import { Button, Input, TextArea } from '../../atoms';

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
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            initial="hidden"
            animate={viewDiv && 'visible'}
            variants={headingAnimation}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-x1 uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Lets work <br /> together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            initial="hidden"
            animate={viewDiv && 'visible'}
            variants={headingAnimation}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <Input type="text" placeholder="Your name" />
            <Input type="text" placeholder="Your email" />
            <TextArea placeholder="Your message" />
            <Button>Send message</Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
