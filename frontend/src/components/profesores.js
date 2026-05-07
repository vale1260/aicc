import React, { Component } from 'react';

export default class Profesores extends Component {
  render() {
    const containerStyle = {
      backgroundColor: 'white',
      borderRadius: '15px', // Ajusta según tus preferencias
      padding: '20px', // Ajusta según tus preferencias
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra opcional
    };

    return (
      <div className="row justify-content-center align-items-center vh-100" style={{ marginTop: '70px' }}>
        <div className="container marketing">
          <div className="container text-center" style={containerStyle}>
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                </svg>
                <h2 className="fw-normal">Profesor de Inglés</h2>
                <p>DESCRIPCIÓN DEL PROFESOR</p>
              </div>
              <div className="col-lg-6 mx-auto">
                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                </svg>
                <h2 className="fw-normal">Profesor de Computación</h2>
                <p>DESCRIPCIÓN DEL PROFESOR</p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 mx-auto">
                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                </svg>
                <h2 className="fw-normal">Profesor de Peluquería</h2>
                <p>DESCRIPCIÓN DEL PROFESOR</p>
              </div>
              <div className="col-lg-6 mx-auto">
                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                </svg>
                <h2 className="fw-normal">Profesor de Secretariado</h2>
                <p>DESCRIPCIÓN DEL PROFESOR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
