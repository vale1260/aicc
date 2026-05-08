import React from 'react';
import { ProfessorCard } from './ProfessorCard';

const Profesores = () => {
  const profesoresData = [
    {
      name: "Juan Pérez",
      role: "Profesor de Inglés",
      description: "Especialista en metodologías comunicativas con más de 10 años de experiencia.",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "María García",
      role: "Profesora de Computación",
      description: "Experta en ofimática y herramientas digitales para la productividad.",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Ricardo Soto",
      role: "Profesor de Peluquería",
      description: "Estilista profesional enfocado en las últimas tendencias internacionales.",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Ana Morales",
      role: "Profesora de Secretariado",
      description: "Líder en gestión administrativa y relaciones públicas corporativas.",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la página */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Nuestros Profesores
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce al equipo de expertos dedicados a brindarte la mejor capacitación y asesoría integral.
          </p>
        </div>

        {/* Cuadrícula de Profesores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {profesoresData.map((profe, index) => (
            <ProfessorCard 
              key={index}
              name={profe.name}
              role={profe.role}
              description={profe.description}
              imageUrl={profe.imageUrl}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Profesores;
