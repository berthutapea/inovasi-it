import React, { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { motion, useAnimation } from 'framer-motion';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { BottomLine } from '../../atoms';
import { useInView } from 'react-intersection-observer';
import { headingAnimation } from '../../../hooks/UseAnimation';

import './Gallery.css';

import Galery1 from '../../../assets/images/gallery/01.jpg';
import Galery2 from '../../../assets/images/gallery/02.jpg';
import Galery3 from '../../../assets/images/gallery/03.jpg';
import Galery4 from '../../../assets/images/gallery/04.jpg';
import Galery5 from '../../../assets/images/gallery/05.jpg';
import Galery6 from '../../../assets/images/gallery/06.jpg';
import Galery7 from '../../../assets/images/gallery/07.jpg';
import Galery8 from '../../../assets/images/gallery/08.jpg';

const galleryImages = [
  { src: Galery1, alt: 'gallery1' },
  { src: Galery2, alt: 'gallery2' },
  { src: Galery3, alt: 'gallery3' },
  { src: Galery4, alt: 'gallery5' },
  { src: Galery5, alt: 'gallery5' },
  { src: Galery6, alt: 'gallery6' },
  { src: Galery7, alt: 'gallery7' },
  { src: Galery8, alt: 'gallery8' },
];

function Gallery() {
  const [ref, inView] = useInView();
  const [open, setOpen] = useState(false);
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={viewDiv && 'visible'}
        variants={headingAnimation}
      >
        <h3 className="text-center text-[#45b8ff]">
          Dokumentasi ide Kreatif & terobosan Teknologi menuju Transformasi
          Digital
        </h3>
        <h1 className="text-4xl font-semibold text-center drop-shadow-md">
          Gallery
        </h1>
        <BottomLine />
      </motion.div>
      
      <div className="grid grid-cols-12 gap-8  sm:py-40 parent translate-y-[5%] sm:translate-y-[-0%]">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12"
          >
            <div className="loading-container">
              {!loadedImages[index] && <div className="spinner"></div>}
              <img
                src={image.src}
                alt={image.alt}
                className={`gallery-img rounded-md cursor-pointer ${loadedImages[index] ? 'loaded' : ''}`}
                onLoad={() => handleImageLoad(index)}
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        zoom={{
          maxZoomPixelRatio: 10,
          scrollToZoom: true,
        }}
        slides={galleryImages.map((image) => ({ src: image.src }))}
      />
    </>
  );
}

export default Gallery;
