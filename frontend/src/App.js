import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
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
      <div className="App min-h-screen flex flex-col">
        <Header
          isLoggedIn={isLoggedIn}
          onLogout={Logout}
          onProfileRedirect={handleProfileRedirect}
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/relleno" element={<Relleno />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/profesores" element={<Profesores />} />
            <Route path="/horario" element={<Horario />} />
            <Route path="/profile" element={<Perfil />} />
            <Route path="/profile_prof" element={<Perfil_profe />} />
          </Routes>
          <Relleno />
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
