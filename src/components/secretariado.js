import React, { Component } from 'react';

export default class Secretariado extends Component {
  render() {
    const containerStyle = {
      backgroundColor: 'white',
      borderRadius: '15px',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    return (
      <div className="row justify-content-center align-items-center vh-100" style={{ marginTop: '70px' }}>
        <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div style={containerStyle}>
            <h1>
              <span>
                <strong>Curso de Secretariado Computacional Bilingüe Contable</strong>
              </span>
            </h1>
            <p className="lead">
              <strong>
                <span>El curso busca potenciar habilidades técnicas y destrezas, promoviendo la eficiencia en el trabajo y el compromiso ético, además de enseñar a diseñar esquemas de trabajo individual y de equipo.</span>
              </strong>
            </p>
          </div>
        </div>

        <div className="col-sm-5 col-md-4">
          <div style={containerStyle}>
            <h4 className="color--primary-1">Programa</h4>
            <p><span>✔&nbsp;</span>“Computacional”</p>
            <p><span>✔&nbsp;</span>“Bilingüe”</p>
            <p><span>✔&nbsp;</span>“Contable”</p>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    );
  }
}
