import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const NavLink = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`
        px-2 py-1 text-sm transition-all duration-200 hover:no-underline
        ${isActive
          ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
          : 'text-gray-500 hover:text-blue-600'}
      `}
    >
      {label}
    </Link>
  );
};
