import React from 'react';
import {
  FaPhoneAlt,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-scroll';
import AvatarLogoIIT from '../../../assets/images/AvatarLogoIIT.png';
import { ButtonUp } from '../../atoms';

function Footer() {
  return (
    <div>
      <footer className="container mx-auto p-8 md:flex md:justify-between md:items-start">
        <div className="mb-8 md:mr-12">
          <img
            src={AvatarLogoIIT}
            alt="Inovasi IT"
            className="w-32 sm:w-46 mb-4"
          />
          <h1 className="text-2xl font-bold text-gradient mb-2">Inovasi IT</h1>
          <span className="text-white block">
            Dusun Karangmulya, RT.008/RW.004, <br />
            Desa. Lemahmulya, Kec. Majalaya, <br />
            Kab.Karawang, Jawa Barat 41371.
          </span>
          <div className="flex items-center my-1">
            <FaPhoneAlt className="mr-2 text-2xl text-white hover:text-accent" />
            <h3 className="font-medium text-white">+62 823 6148 4992</h3>
          </div>
          <div className="flex items-center my-1">
            <MdEmail className="mr-2 text-2xl text-white hover:text-accent" />
            <h3 className="font-medium text-white">himati.sttiss@gmail.com</h3>
          </div>
        </div>

        <div className="mb-8">
          <div className="mb-4">
            <span className="font-bold text-gradient block mb-2">Tautan</span>
            <Link
              to="home"
              activeClass="text-white"
              smooth
              spy
              offset={-200}
              className="link link-hover hover:text-accent text-white block mb-1 cursor-pointer"
            >
              Beranda
            </Link>
            <Link
              to="about"
              activeClass="text-white"
              smooth
              spy
              className="link link-hover hover:text-accent text-white block mb-1 cursor-pointer"
            >
              Tentang
            </Link>
            <Link
              to="events"
              activeClass="text-white"
              smooth
              spy
              className="link link-hover hover:text-accent text-white block mb-1 cursor-pointer"
            >
              Events
            </Link>
            <Link
              to="sponsor"
              activeClass="text-white"
              smooth
              spy
              className="link link-hover hover:text-accent text-white block mb-1 cursor-pointer"
            >
              Sponsor
            </Link>
            <Link
              to="contact"
              activeClass="text-white"
              smooth
              spy
              className="link link-hover hover:text-accent text-white block mb-1 cursor-pointer"
            >
              Kontak
            </Link>
          </div>
        </div>

        <div className="mb-8">
          <span className="font-bold text-gradient block mb-2">
            Media Sosial
          </span>
          <div className="flex items-center">
            <a
              aria-label="link"
              href="https://www.linkedin.com/company/himati-sttiss/?viewAsMember=true"
              target="_blank"
              className="text-2xl text-white hover:text-accent hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              aria-label="link"
              href="https://www.instagram.com/himati_sttiss/"
              target="_blank"
              className="text-2xl text-white hover:text-accent hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
              rel="noreferrer"
            >
              <FaInstagramSquare />
            </a>
            <a
              aria-label="link"
              href="https://web.facebook.com/profile.php?id=61551036928622&_rdc=1&_rdr"
              target="_blank"
              className="text-2xl text-white hover:text-accent hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
              rel="noreferrer"
            >
              <FaFacebookSquare />
            </a>
            <a
              aria-label="link"
              href="https://twitter.com/himati_sttiss"
              target="_blank"
              className="text-2xl text-white hover:text-accent hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
              rel="noreferrer"
            >
              <FaTwitterSquare />
            </a>
          </div>
        </div>
      </footer>

      <footer className="px-10 text-sm sm:py-6 py-12 text-center text-base-100 translate-y-[-40%] sm:translate-y-[0%]">
        <div className="w-full h-[1px] bg-white" />
        <div className="flex flex-col items-center justify-center mt-6 md:flex-row text-white">
          <p>
            &copy; Copyright 2023,{' '}
            <span className="font-bold">Inovasi IT - HIMATI-STTISS.</span> All
            Rights Reserved
          </p>
        </div>
      </footer>
      <ButtonUp />
    </div>
  );
}

export default Footer;
