import React, { Component } from 'react';

export default class Horario extends Component {
  constructor() {
    super();
    this.state = {
      diasSemana: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
      horarios: [
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
      ],
    };
  }

  renderTableHeader() {
    return (
      <tr>
        <th>Hora/Día</th>
        {this.state.diasSemana.map((dia, index) => (
          <th key={index}>{dia}</th>
        ))}
      </tr>
    );
  }

  renderHorarioRow(horario, index) {
    return (
      <tr key={index}>
        <td>{horario.hora}</td>
        {this.state.diasSemana.map((dia, i) => (
          <td
            key={i}
            className={horario[dia.toLowerCase()] ? (horario.disponible ? 'disponible' : 'no-disponible') : ''}
          >
            {horario[dia.toLowerCase()] ? (horario.disponible ? 'Disponible' : 'No disponible') : ''}
          </td>
        ))}
      </tr>
    );
  }

  render() {
    return (
      <div className="row justify-content-center align-items-center vh-100" style={{ marginTop: "40px" }}>
        <div style={{ marginRight: '20px', textAlign: 'center' }}>
          <h1>Horarios Disponibles</h1>
          <p>Los horarios son bastante flexibles, permitiendo a cada estudiante asistir un máximo de 8 horas por semana</p>
        </div>
        <div style={{ overflow: 'hidden', borderRadius: '10px', border: '2px solid #ddd' }}>
          <table style={{ backgroundColor: 'white', borderRadius: '10px', borderCollapse: 'collapse', width: '100%' }}>
            <thead>{this.renderTableHeader()}</thead>
            <tbody>{this.state.horarios.map((horario, index) => this.renderHorarioRow(horario, index))}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
