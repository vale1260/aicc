import React, { Component } from 'react';

export default class Computacion extends Component {
  render() {
    const containerStyle = {
      backgroundColor: 'white',
      borderRadius: '15px', // Ajusta según tus preferencias
      padding: '20px', // Ajusta según tus preferencias
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra opcional
    };

    return (
      <div className="row justify-content-center align-items-center vh-100" style={{ marginTop: '70px' }}>
        <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div style={containerStyle}>
            <h1>
              <span>
                <strong>Curso de Computación Personalizada</strong>
              </span>
            </h1>
            <p className="lead">
              <strong>
                <span>En Aicc te ofrecemos la mejor enseñanza, recibe capacitación de computación donde podrás aprender y adquirir grandes conocimientos.</span>
              </strong>
            </p>
          </div>
        </div>

        <div className="col-sm-5 col-md-4">
          <div style={containerStyle}>
            <h4 className="color--primary-1">Clases de Windows</h4>
            <h4 className="color--primary-1">Clases de Word</h4>
            <ul>
              <li>Aprende todas la opciones y técnicas que te brinda las herramientas de Word, el programa mas usado para realizar documentos escritos.</li>
            </ul>
            <h4 className="color--primary-1">Clases de Internet</h4>
            <ul>
              <li>Conoce los inicios del Internet, descubre la forma correcta para realizar investigaciones y un sin fin de formas para navegar en el mundo digital.</li>
            </ul>
            <h4 className="color--primary-1">Clases de Excel</h4>
            <ul>
              <li>Aprende todas la opciones y técnicas que te brinda las herramientas de Excel, el programa mas usado para realizar documentos escritos.</li>
            </ul>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    );
  }
}
