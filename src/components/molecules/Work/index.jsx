import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { headingAnimation } from '../../../hooks/UseAnimation';
import Img1 from '../../../assets/images/portfolio-img1.png';
import Img2 from '../../../assets/images/portfolio-img2.png';
import Img3 from '../../../assets/images/portfolio-img3.png';
import { Button } from '../../atoms';

function Work() {
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
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            initial="hidden"
            animate={viewDiv && 'visible'}
            variants={headingAnimation}
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
            initial="hidden"
            animate={viewDiv && 'visible'}
            variants={headingAnimation}
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
