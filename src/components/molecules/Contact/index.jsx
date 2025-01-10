import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaPhoneAlt, FaLocationArrow } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useInView } from 'react-intersection-observer';
import { headingAnimation } from '../../../hooks/UseAnimation';
import { BottomLine } from '../../atoms';
import { Map } from '../../organisms';

function Contact() {
  const form = useRef();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const handleSend = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_6xnj05v',
        'template_exk29f8',
        form.current,
        'kLfLk-o6LKj-L9c77'
      )
      .then(
        (result) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Message has been sent',
            showConfirmButton: false,
            timer: 500,
          });
        },
        (error) => {}
      );
    e.target.reset();
  };
  return (
    <div className="py-40 parent" id="contact">
      <motion.div
        initial="hidden"
        animate={viewDiv && 'visible'}
        variants={headingAnimation}
      >
        <h3 className="text-center text-[#45b8ff]">Kontak</h3>
        <h1 className="text-4xl font-semibold text-center drop-shadow-md">
          Hubungi Kami
        </h1>
        <BottomLine />
        <h2 className="py-5 text-center text-white">
          Apakah anda memiliki pertanyaan, menghadapi permasalahan, atau ingin
          memberikan saran? Kami sangat bersemangat untuk mendengarnya dari anda
          dan siap membantu dengan apapun yang anda butuhkan.
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 gap-20 mt-8 md:grid-cols-2">
        <motion.div
          className=""
          ref={ref}
          initial="hidden"
          animate={viewDiv && 'visible'}
          variants={headingAnimation}
        >
          <form ref={form} onSubmit={handleSend}>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
              <input
                className="input-field bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="text"
                name="name"
                id="name"
                placeholder="Nama"
                required
              />
              <input
                className="input-field bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <input
              className="input-field bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              name="subject"
              id="subject"
              placeholder="Subjek"
              required
            />
            <textarea
              className="input-field bg-transparent border-b py-2 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12 "
              name="message"
              id="message"
              placeholder="Pesan"
              required
            />
            <button type="submit" value="Send Message" className="btn btn-lg">
              <span>Kirim</span>
            </button>
          </form>
        </motion.div>
        <motion.div
          className=""
          initial={{ y: 50, opacity: 0 }}
          animate={viewDiv && 'visible'}
          variants={headingAnimation}
        >
          <div className="flex items-center my-6">
            <FaPhoneAlt className="mr-8 text-2xl duration-300 hover:text-accent" />
            <h3 className="font-medium text-white">+62 823 6148 4992</h3>
          </div>
          <div className="flex items-center my-6">
            <MdEmail className="mr-8 text-3xl duration-300 hover:text-accent" />
            <h3 className="font-medium text-white">inovasiit.sttisonysugema@gmail.com</h3>
          </div>
          <div className="flex items-center my-6">
            <FaLocationArrow className="mr-8 text-4xl duration-300 hover:text-accent" />
            <h3 className="font-medium text-white">
              Dusun Karangmulya, RT.008/RW.004, Desa. Lemahmulya, Kec. Majalaya,
              Kab.Karawang, Jawa Barat 41371
            </h3>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        animate={viewDiv && 'visible'}
        variants={headingAnimation}
      >
        <Map />
      </motion.div>
    </div>
  );
}

export default Contact;
