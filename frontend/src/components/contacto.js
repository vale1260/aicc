import React, { Component } from 'react';

export default class Contacto extends Component {
  render() {
    const containerStyle = {
      backgroundColor: 'white',
      borderRadius: '15px', // Ajusta según tus preferencias
      padding: '20px', // Ajusta según tus preferencias
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra opcional
    };

    return (
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-6" style={containerStyle}>
            <div className="switchable__text text-center">
              <p className="lead">
                <strong>Huérfanos 725, Piso 7, Santiago de Chile</strong>
              </p>
              <p className="lead">Email: Info@aicc.cl</p>
              <p className="lead">Teléfono: 226648485 - 226648486</p>
              <p className="lead">
                Horario de atención: 09:00 AM - 21:00 PM de Lunes a Domingo
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="map-container" style={containerStyle}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.3872692801697!2d-70.6493896848009!3d-33.439215580777145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a222ba8381%3A0x7504dd0b8f3d016d!2sHu%C3%A9rfanos+725%2C+Oficina+7%2C+Santiago%2C+Regi%C3%B3n+Metropolitana!5e0!3m2!1ses!2scl!4v1526160744701"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
