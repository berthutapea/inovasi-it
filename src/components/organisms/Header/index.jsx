import React from 'react';
import LogoIIT from '../../../assets/images/logo/LogoIIT.png';
import { Button } from '../../atoms';

function Header() {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/" aria-label="Link to Logo">
            <img className="w-40 pr-20" src={LogoIIT} alt="Logo Inovasi IT" />
          </a>
          <Button>Login</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
