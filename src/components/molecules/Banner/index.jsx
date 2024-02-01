import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import Image from '../../../assets/images/avatar.svg';
import { fadeIn } from '../../../hooks/Variants';
import { Button } from '../../atoms';

function Banner() {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-cool gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              BEN <span>AIDEN</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'Designer',
                  2000,
                  'Yotuber',
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              numquam. Harum deleniti id sapiente.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Button>
                Contact me
                <a href="/">My Portfolio</a>
              </Button>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="/" aria-label="Link to YouTube">
                <FaYoutube />
              </a>
              <a href="/" aria-label="Link to GitHub">
                <FaGithub />
              </a>
              <a href="/" aria-label="Link to Dribble">
                <FaDribbble />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView="show"
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
