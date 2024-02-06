import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  IoNewspaperOutline,
  IoCalendarOutline,
  IoTimeOutline,
  IoMapOutline,
} from 'react-icons/io5';
import { SiWhatsapp, SiInstagram } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import seminars from '../../utils/seminars';
import './Seminar.css';
import {
  avatarAnimation,
  sectionBodyAnimation,
} from '../../hooks/UseAnimation';
import { Button } from '../../components/atoms';

function Seminar() {
  const { id } = useParams();
  const [seminar, setSeminar] = useState({});
  const url = window.location.href;
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const [enlargeImage, setEnlargeImage] = useState(false);
  const animation = useAnimation();
  const imageRef = useRef(null);

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation, viewDiv]);

  useEffect(() => {
    // eslint-disable-next-line camelcase
    const current_seminar = seminars.find((s) => s.id === id);
    setSeminar(current_seminar);
  }, [id]);

  const handleImageClick = () => {
    setEnlargeImage(true);
    document.body.style.overflow = 'hidden';
  };

  const handleExitClick = () => {
    setEnlargeImage(false);
    document.body.style.overflow = 'auto';
  };

  const handleOutsideClick = (event) => {
    if (enlargeImage && !imageRef.current.contains(event.target)) {
      handleExitClick(); 
    }
  };

  useEffect(() => {
    if (enlargeImage) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [enlargeImage]);

  return (
    <>
      <div className="mt-20 parent">
        <h1 className="text-[50px] font-bold leading-[1.1] text-center text-gradient">
          {seminar?.title}
        </h1>
        <div className="flex items-center justify-center my-10">
          <motion.div
            variants={avatarAnimation}
            initial="hidden"
            animate="show"
          >
            <motion.img
              ref={(element) => {
                ref(element);
                imageRef.current = element;
              }}
              initial="hidden"
              animate={viewDiv && 'visible'}
              variants={sectionBodyAnimation}
              src={seminar?.img}
              alt="Seminar Inovasi IT"
              className={`main_seminar_image ${enlargeImage ? 'hidden' : ''}`} 
              onClick={handleImageClick}
            />
          </motion.div>
          {enlargeImage && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black  bg-opacity-50 backdrop-blur-3xl z-50">
              <div className="relative">
                <motion.img
                  src={seminar?.img}
                  alt="Seminar Inovasi IT"
                  className="main_seminar_image_enlarge"
                />
              </div>
              <button
                type="submit"
                className="absolute top-2 right-2 text-white text-4xl font-semibold mx-6 mt-4"
                onClick={handleExitClick}
              >
                X
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between flex- mt-16 mb-4">
          <h1 className="text-white text-4xl font-semibold text-center drop-shadow-md">
            Transformasi Digital: Peluang dan Tantangan Di Era Digital 5.0
          </h1>
          <a
            className="mt-4 mx-7"
            aria-label="link form pendaftran seminar Inovasi IT"
            href="https://forms.gle/ere1KUPaRBA2hRHZ9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Daftar Sekarang</Button>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2 lg:col-span-3">
            {seminar.description?.split('\n')?.map((s) => (
              <React.Fragment key={s}>
                <p className="text-neutral text-justify">{s}</p>
                <br />
              </React.Fragment>
            ))}
          </div>
          <div className="md:col-span-2 lg:col-span-1 px-4 py-6 rounded shadow-lg border-seminar">
            <div>
              <h4 className="text-2xl font-medium text-center mb-6">
                Informasi Event
              </h4>
              <p className="flex items-center gap-3 mb-2">
                <span className="text-xl">
                  <IoNewspaperOutline />
                </span>
                <span>{seminar?.type}</span>
                <br />
              </p>
              <p className="flex items-center gap-3 mb-2">
                <span className="text-xl">
                  <IoCalendarOutline />
                </span>
                <span>{seminar?.date}</span>
              </p>
              <p className="flex items-center gap-3 mb-2">
                <span className="text-xl">
                  <IoTimeOutline />
                </span>
                <span>{seminar?.time}</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-xl">
                  <IoMapOutline />
                </span>
                <span>{seminar?.map}</span>
              </p>
            </div>

            <div className="w-full h-[1px] bg-neutral my-6" />

            <h4 className="text-2xl font-medium text-center mb-6">
              Informasi Lainnya
            </h4>
            <div className="flex items-center gap-3 flex-wrap">
              <p className="flex items-center gap-3">
                <span className="text-xl">
                  <SiInstagram />
                </span>
                <a
                  href={seminar?.instagram_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline flex items-center"
                >
                  <span>Instagram</span> <FiExternalLink />
                </a>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-xl">
                  <SiWhatsapp />
                </span>
                <a
                  href={seminar?.whatsapp_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline flex items-center"
                >
                  <span>Whatsapp</span> <FiExternalLink />
                </a>
              </p>
            </div>

            <div className="w-full h-[1px] bg-neutral my-6" />

            <h4 className="text-2xl font-medium text-center mb-6">Tags</h4>
            <div>
              {seminar?.tags?.map((tag) => (
                <button
                  type="submit"
                  key={tag}
                  className="bg-gray-300 text-white bg-opacity-40 px-2 py-0 m-1 rounded"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20" />
    </>
  );
}

export default Seminar;
