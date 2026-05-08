import React from 'react';

export const ContactInfo = () => {
  return (
    <div className="text-start space-y-4">
      <div>
        <h4 className="text-lg font-semibold opacity-[0.87]">Ubicación</h4>
        <p className="text-md text-gray-600 opacity-60">Huérfanos 725, Piso 7, Santiago de Chile</p>
      </div>

      <div>
        <h4 className="text-lg font-semibold opacity-[0.87]">Correo Electrónico</h4>
        <p className="text-md text-gray-600 opacity-60">Info@aicc.cl</p>
      </div>

      <div>
        <h4 className="text-lg font-semibold opacity-[0.87]">Teléfonos</h4>
        <p className="text-md text-gray-600 opacity-60">226648485 - 226648486</p>
      </div>

      <div>
        <h4 className="text-lg font-semibold opacity-[0.87]">Horario de atención</h4>
        <p className="text-md text-gray-600 opacity-60">09:00 AM - 21:00 PM (Lunes a Domingo)</p>
      </div>
    </div>
  );
};
