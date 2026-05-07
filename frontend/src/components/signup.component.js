import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [rut, setRut] = useState('');
  const [dv, setDv] = useState('');
  const [prefijo, setPrefijo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('');

  const navigate = useNavigate();

  const registerUser = () => {
    const telefonoCompleto = `+${prefijo}${telefono}`;
    
    axios.post('http://127.0.0.1:5000/signup', {
      nombre: nombre,
      apellido: apellido,
      rut: rut,
      dv: dv,
      telefono: telefonoCompleto,
      email: email,
      password: password,
      rol: rol
    })
    .then(function (response) {
      console.log(response);
      navigate("/");
    })
    .catch(function (error) {
      console.log(error, 'error');
      if (error.response.status === 401) {
        alert("Invalid credentials");
      }
    });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">

      <form>
        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
          <p className="lead fw-normal mb-0 me-3">Registro de usuario</p>
        </div>

        <div className="form-outline mb-3">
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} id="nombre" className="form-control form-control-lg" placeholder="Nombre" />
        </div>

        <div className="form-outline mb-3">
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} id="apellido" className="form-control form-control-lg" placeholder="Apellido" />
        </div>

        <div className="form-outline mb-3">
          <input type="text" value={rut} onChange={(e) => setRut(e.target.value)} id="rut" className="form-control form-control-lg" placeholder="Rut" />
        </div>

        <div className="form-outline mb-3">
          <input type="text" value={dv} onChange={(e) => setDv(e.target.value)} id="dv" className="form-control form-control-lg" placeholder="Dígito verificador" />
        </div>

        <div className="form-outline mb-3">
          <div className="input-group">
            <span className="input-group-text">+ </span>
            <input
              type="text"
              value={prefijo}
              onChange={(e) => setPrefijo(e.target.value)}
              id="prefijo"
              className="form-control form-control-lg"
              placeholder="Prefijo"
            />
            <input
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              id="telefono"
              className="form-control form-control-lg"
              placeholder="Teléfono"
            />
          </div>
        </div>


        <div className="form-outline mb-3">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="form-control form-control-lg" placeholder="Correo electrónico" />
        </div>

        <div className="form-outline mb-3">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="form-control form-control-lg" placeholder="Contraseña" />
        </div>

        <div className="form-outline mb-3">
          <select
            id="rol"
            className="form-select form-select-lg"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
          >
            <option value="" disabled>Selecciona el rol de este usuario</option>
            <option value="estudiante">Estudiante</option>
            <option value="profesor">Profesor</option>
            <option value="administrador">Administrador</option>
          </select>
        </div>

        <div className="text-center text-lg-start mt-4 pt-2">
          <button type="button" className="btn btn-primary btn-lg" onClick={() => registerUser()} >Registrar</button>
        </div>
      </form>
      </div>
    </div>
  );
}
