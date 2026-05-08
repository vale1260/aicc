import React from 'react';

export const ProfessorCard = ({ name, role, description, imageUrl }) => {
  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-md transition-all duration-300 group">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-blue-50 group-hover:scale-105 transition-transform duration-300">
        <img
          src={imageUrl || 'https://via.placeholder.com/150'}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold opacity-[0.87] mb-1">{name}</h3>
      <p className="text-md font-medium text-blue-600 mb-4">{role}</p>
      <p className="text-sm text-center leading-relaxed italic opacity-60">
        "{description}"
      </p>
    </div>
  );
};
