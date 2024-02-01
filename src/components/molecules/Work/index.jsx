import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../hooks/Variants';
import Img1 from '../../../assets/images/portfolio-img1.png';
import Img2 from '../../../assets/images/portfolio-img2.png';
import Img3 from '../../../assets/images/portfolio-img3.png';
import { Button } from '../../atoms';

function Work() {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repeliat, hic! Harum quis, cum velit neque esse eos molestias
                dolormque explicabo!
              </p>
              <Button> View all projects</Button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300" />
              {/* img */}
              <img
                className="group-hover:scale-125 transiton-all duration-500"
                src={Img1}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300" />
              {/* img */}
              <img
                className="group-hover:scale-125 transiton-all duration-500"
                src={Img2}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300" />
              {/* img */}
              <img
                className="group-hover:scale-125 transiton-all duration-500"
                src={Img3}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Work;
