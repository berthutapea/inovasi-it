import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../hooks/Variants';
import { Button, Input, TextArea } from '../../atoms';

function Contact() {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
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
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
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
