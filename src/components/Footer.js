import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AICC Asesorías Integrales y Capacitación.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors text-sm font-medium"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-600 transition-colors text-sm font-medium"
            >
              Instagram
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};
