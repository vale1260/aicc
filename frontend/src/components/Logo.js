import React from 'react';
import { Link } from 'react-router-dom';
import logoaicc from '../img/aicc.png';

export const Logo = () => {
  return (
    <Link className="flex items-center" to={'/'}>
      <img src={logoaicc} alt='AICC' className="w-[120px] h-auto object-contain" />
    </Link>
  );
};
