import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { NavLink } from './NavLink';

export const Header = ({ isLoggedIn, onLogout, onProfileRedirect }) => {
  const location = useLocation();
  const isProfileActive = location.pathname.startsWith('/profile');

  const navLinks = [
    { path: "/profesores", label: "Profesores" },
    { path: "/matricula", label: "Matrícula" },
    { path: "/horario", label: "Horario" },
    { path: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="flex justify-between items-center h-20 px-8">
        <Logo />
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} label={link.label} />
            ))}
            {isLoggedIn && (
              <button
                onClick={onProfileRedirect}
                className={`px-2 py-1 text-sm transition-all duration-200 font-medium ${isProfileActive
                    ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-blue-600'
                  }`}
              >
                Mi Perfil
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center gap-6">
          {isLoggedIn ? (
            <button
              onClick={onLogout}
              className="text-gray-400 hover:text-red-500 text-sm font-medium transition-colors"
            >
              Cerrar Sesión
            </button>
          ) : (
            <Link
              to="/sign-in"
              className="bg-blue-600 text-white hover:bg-blue-700 hover:no-underline px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 shadow-sm"
            >
              Ingresar
            </Link>
          )}
        </div>

      </div>
    </nav>
  );
};
