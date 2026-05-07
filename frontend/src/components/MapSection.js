import React from 'react';

export const MapSection = ({ height = "450px" }) => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-200 shadow-xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.3872692801697!2d-70.6493896848009!3d-33.439215580777145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a222ba8381%3A0x7504dd0b8f3d016d!2sHu%C3%A9rfanos+725%2C+Oficina+7%2C+Santiago%2C+Regi%C3%B3n+Metropolitana!5e0!3m2!1ses!2scl!4v1526160744701"
        width="100%"
        height={height}
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
        title="Ubicación AICC"
      ></iframe>
    </div>
  );
};
