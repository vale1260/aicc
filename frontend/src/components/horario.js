import React from 'react';
import { ScheduleTable } from './ScheduleTable';

const Horario = () => {
  const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  const horarios = [
    { hora: '09:00 AM', disponible: true, lunes: true, martes: false, miercoles: true, jueves: false, viernes: true },
    { hora: '10:00 AM', disponible: true, lunes: false, martes: true, miercoles: false, jueves: true, viernes: false },
    { hora: '11:00 AM', disponible: false, lunes: true, martes: true, miercoles: false, jueves: true, viernes: false },
    { hora: '12:00 PM', disponible: true, lunes: true, martes: false, miercoles: true, jueves: false, viernes: true },
    { hora: '13:00 PM', disponible: true, lunes: false, martes: true, miercoles: false, jueves: false, viernes: true },
    { hora: '14:00 PM', disponible: false, lunes: true, martes: true, miercoles: false, jueves: false, viernes: true },
    { hora: '15:00 PM', disponible: true, lunes: true, martes: false, miercoles: true, jueves: true, viernes: false },
    { hora: '16:00 PM', disponible: true, lunes: false, martes: true, miercoles: false, jueves: false, viernes: true },
    { hora: '17:00 PM', disponible: false, lunes: true, martes: true, miercoles: false, jueves: false, viernes: true },
    { hora: '18:00 PM', disponible: true, lunes: true, martes: false, miercoles: true, jueves: false, viernes: true },
    { hora: '19:00 PM', disponible: true, lunes: false, martes: true, miercoles: false, jueves: false, viernes: true },
    { hora: '20:00 PM', disponible: false, lunes: true, martes: true, miercoles: false, jueves: false, viernes: true },
    { hora: '21:00 PM', disponible: true, lunes: true, martes: false, miercoles: true, jueves: true, viernes: false }
  ];

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Horarios Disponibles
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nuestros horarios son altamente flexibles, permitiendo a cada estudiante asistir un máximo de <span className="text-blue-600 font-bold underline decoration-2 decoration-blue-200">8 horas por semana</span>.
          </p>
        </div>

        {/* Schedule Table Component */}
        <ScheduleTable days={diasSemana} schedule={horarios} />

      </div>
    </div>
  );
};

export default Horario;
