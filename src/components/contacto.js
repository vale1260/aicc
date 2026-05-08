import React from 'react';
import { ContactInfo } from './ContactInfo';
import { MapSection } from './MapSection';

const Contacto = () => {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Contacto
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Encuéntranos en el centro de Santiago o contáctanos por nuestros canales digitales.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Map Section */}
          <div className="lg:col-span-7">
            <MapSection height="350px" />
          </div>

          {/* Info Section */}
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contacto;
