import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import logoaicc from './img/aicc.png';
import axios from 'axios';

import Login from './components/login.component'
import SignUp from './components/signup.component'
import Cursos from './components/cursos'
import Contacto from './components/contacto'
import Profesores from './components/profesores'
import Relleno from './components/relleno'
import Horario from './components/horario'
import Perfil from './components/profile'
import Perfil_profe from './components/profile_prof'

function App() {
  //const handleSelect = (eventKey) =>
  const [isLoggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

  const Logout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  const [userData, setUserData] = useState(null);

  const handleProfileRedirect = async () => {
    try {
      // Realizar una solicitud GET a la ruta del backend
      const response = await axios.get('http://127.0.0.1:5000/get_user_data', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Incluye el token de acceso en los encabezados
        },
      });
  
      const userRole = response.data.rol;
  
      // Redirigir al usuario según su rol
      switch (userRole) {
        case 'estudiante':
          window.location.href = '/profile';
          break;
        case 'profesor':
          window.location.href = '/profile_prof';
          break;
        case 'admin':
          window.location.href = '/profile_admin'; // Asumo que tienes una página profile_admin.js
          break;
        default:
          window.location.href = '/';
          break;
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  return (
    <Router>
      <div className="App">
        <Nav activeKey='1' className="navbar navbar-light fixed-top custom-nav-container">
            <div className="navbar navbar-expand-lg custom-nav-left">
              <Nav.Item eventKey='1'>
                <Link className="navbar-brand justify-content-start"  to={'/home'}>
                  <img src={logoaicc} alt='AICC' width="100" height="50"/>
                </Link>
              </Nav.Item>
              <Nav.Item as={Link} to="/profesores" eventKey='8'className='custom-nav'>Profesores</Nav.Item>
              <Nav.Item as={Link} to="/matricula" eventKey='5'className='custom-nav'>Matricula</Nav.Item>
              <Nav.Item as={Link} to="/horario" eventKey='3'className='custom-nav'>Horario</Nav.Item>
              <Nav.Item as={Link} to="/contacto" eventKey='7'className='custom-nav'>Contacto</Nav.Item>
              {isLoggedIn && (
                <Nav.Item as={Link} onClick={handleProfileRedirect} className='custom-nav'>
                  Mi perfil
                </Nav.Item>
              )}
            </div>
            <div className="custom-nav-right">
              {isLoggedIn ? (
                <Nav.Item as={Link} to="/" eventKey='6' className='custom-nav' style={{ float: 'right' }} onClick={Logout}>
                  Cerrar Sesión
                </Nav.Item>
              ) : (
                <Nav.Item as={Link} to="/sign-in" eventKey='6' className='custom-nav' style={{ float: 'right' }}>
                  Ingresar
                </Nav.Item>
              )}
            </div>
          </Nav>
            <Routes>
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/cursos" element={<Cursos/>}/>
              <Route path="/relleno" element={<Relleno/>}/>
              <Route path="/contacto" element={<Contacto/>}/>
              <Route path="/profesores" element={<Profesores/>}/>
              <Route path="/horario" element={<Horario/>}/>
              <Route path="/profile" element={<Perfil/>}/>
              <Route path="/profile_prof" element={<Perfil_profe/>}/>
            </Routes>
      <Relleno />

      <div class="container" style={{marginTop:"860px"}}>
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <span class="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="nav-item"><a href="#" className="nav-link white-link">Facebook</a></li>
            <li className="nav-item"><a href="#" className="nav-link white-link">Instagram</a></li>
          </ul>
        </footer>
      </div>   
      </div>
    </Router>
  )
}

export default App
