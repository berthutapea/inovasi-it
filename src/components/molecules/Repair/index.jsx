import React from 'react';
import RepairImg from '../../../assets/images/repair.png';

function Repair() {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center">
      <div className="min-h-screen flex justify-center items-center">
        <img src={RepairImg} alt="Inovasi IT" className="w-70 h-70" />
      </div>
      <div className="w-24 h-1 md:w-1 md:h-32 bg-white my-6 md:my-0 md:mx-8 " />
      <div className="flex flex-col items-center translate-y-[-120%] sm:translate-y-[-0%]">
        <h2 className="text-2xl text-center mb-4">
          Mohon maaf, fitur ini sedang dalam tahap perbaikan, <br /> silahkan
          kunjungi Halaman Seminar untuk Pendaftaran Seminar!
        </h2>
        <a href="/seminar" aria-label="Link to Logo">
          <button
            className="btn btn-lg ml-10 translate-y-[70%] sm:translate-y-[-0%]"
            type="submit"
          >
            Pendaftran Seminar
          </button>
        </a>
      </div>
    </div>
  );
}

export default Repair;
