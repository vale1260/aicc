import React, { useState, useEffect } from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import axios from 'axios';

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState('perfil');
  const [userData, setUserData] = useState(null);

  const handleFileUpload = () => {
    // Aquí puedes agregar la lógica para manejar la carga de archivos
    console.log('Subir archivo...');
  };

const [selectedBlocks, setSelectedBlocks] = useState([]);
const [selectedCount, setSelectedCount] = useState(0);

const handleBlockSelection = (day, hour) => {
  const blockKey = `${day}-${hour}`;
  
  if (selectedBlocks.includes(blockKey)) {
    // Si el bloque ya está seleccionado, lo deseleccionamos
    setSelectedBlocks(selectedBlocks.filter(block => block !== blockKey));
    setSelectedCount(selectedCount - 1);
  } else {
    // Si el bloque no está seleccionado, lo seleccionamos si no hemos alcanzado el límite de 8 bloques
    if (selectedCount < 8) {
      setSelectedBlocks([...selectedBlocks, blockKey]);
      setSelectedCount(selectedCount + 1);
    }
  }
};

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Realizar una solicitud GET a la ruta del backend
        const response = await axios.get('http://127.0.0.1:5000/get_user_data', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Incluye el token de acceso en los encabezados
          },
        });

        // Establecer los datos del usuario en el estado
        setUserData(response.data);
      } catch (error) {
        console.error('Error al obtener los datos del usuario', error);
        // Manejar el error según sea necesario
      }
    };

    // Llamar a la función para obtener los datos del usuario al cargar el componente
    fetchUserData();
  }, []); // El segundo argumento [] asegura que esto se ejecute solo una vez al montar el componente


  return (
    <div className="d-flex flex-row">
      <div className="flex-shrink-0 p-3 bg-body-tertiary" style={{ backgroundColor: 'white', marginTop: "110px" }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
          <span className="fs-4">AICC</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className={`nav-link ${selectedOption === 'perfil' ? 'active' : ''}`} onClick={() => setSelectedOption('perfil')}>
              <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
              Perfil
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className={`nav-link ${selectedOption === 'compras' ? 'active' : ''}`} onClick={() => setSelectedOption('compras')}>
              <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
              Historial de Compras
            </a>
          </li>
        </ul>
        <hr />
        <div className="d-flex align-items-center">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" style={{ marginRight: '8px' }} />
          {userData ? (
          <strong>{userData.nombre}</strong>
          ) : (
            <p></p>
          )}
        </div>
      </div>

      <div className="flex-grow-1 p-3">
        <div className="flex-shrink-0 p-3 bg-body-tertiary" style={{ backgroundColor: 'white', marginTop: "100px" }}>
          {selectedOption === 'perfil' && (
            <div>
              <h2>Perfil de Usuario</h2>
              {userData ? (
                <div>
                  <p>Nombre: {userData.nombre} {userData.apellido}</p>
                  <p>Correo: {userData.email}</p>
                  <p>Tipo de usuario: {userData.rol}</p>
                  {/* Agrega otros campos según sea necesario */}
                </div>
              ) : (
                <p></p>
              )}
          </div>
          )}

          {selectedOption === 'compras' && (
            <div>
              <h2>Avance Curricular</h2>
              <div className="container">
                <table className="table mx-auto">
                  <thead>
                    <tr>
                      <th>Materia</th>
                      <th>Créditos</th>
                      <th>Nota</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Matemáticas</td>
                      <td>3</td>
                      <td>A</td>
                    </tr>
                    <tr>
                      <td>Ciencias Sociales</td>
                      <td>4</td>
                      <td>B+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>    
  );
};

export default Sidebar;
