import React from 'react';

const StatusBadge = ({ available, active }) => {
  if (!active) return <span className="text-gray-200">-</span>;

  return (
    <span className={`px-2 py-1 rounded text-[12px] ${available
      ? 'bg-green-50 text-green-600'
      : 'bg-red-50 text-red-500'
      }`}>
      {available ? 'Disponible' : 'Ocupado'}
    </span>
  );
};

export const ScheduleTable = ({ days, schedule }) => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Hora
                </th>
                {days.map((dia) => (
                  <th key={dia} className="px-4 py-2 text-center text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    {dia}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {schedule.map((slot, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-2 text-left whitespace-nowrap left-0 text-xs font-bold text-gray-600 bg-gray-50/50">
                    {slot.hora}
                  </td>
                  {days.map((dia) => {
                    const diaKey = dia.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    const isActive = slot[diaKey];
                    return (
                      <td key={dia} className="px-4 py-1.5 whitespace-nowrap text-center">
                        <StatusBadge available={slot.disponible} active={isActive} />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-6 text-[10px] font-medium text-gray-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          Disponible
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-400"></span>
          Ocupado
        </div>
      </div>
    </div>
  );
};
