import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../atoms';

function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center">
      <h1 className="text-[8rem] font-bold text-white animate-bounce">404</h1>
      <div className="w-24 h-1 md:w-1 md:h-24 bg-white my-6 md:my-0 md:mx-8" />
      <div className="flex flex-col items-center">
        <h2 className="text-2xl text-center mb-4">
          Maaf, Halaman ini tidak tersedia
        </h2>
        <Link to="/">
          <Button>
            <span>Kembali Ke Beranda</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
