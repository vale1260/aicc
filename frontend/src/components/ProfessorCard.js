import React from 'react';

export const ProfessorCard = ({ name, role, description, imageUrl }) => {
  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-blue-50 shadow-inner group-hover:scale-105 transition-transform duration-300">
        <img 
          src={imageUrl || 'https://via.placeholder.com/150'} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
      <p className="text-blue-600 font-medium text-sm mb-4 uppercase tracking-wider">{role}</p>
      <p className="text-gray-500 text-center leading-relaxed text-sm italic">
        "{description}"
      </p>
    </div>
  );
};
