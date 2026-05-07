import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const logInUser = () => {
    setEmailError('');
    setPasswordError('');
  
    if (email.length === 0) {
      setEmailError('Email ha sido dejado en blanco');
    } else if (password.length === 0) {
      setPasswordError('Contraseña ha sido dejada en blanco');
    } else {
      axios.post('http://127.0.0.1:5000/auth/login', {
        email: email,
        password: password
      })
        .then(function (response) {
          const { access_token } = response.data;
          // Almacena el token
          localStorage.setItem('token', access_token);
  
          setLoggedIn(true);

          navigate("/");
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error, 'error');
          if (error.response && error.response.status === 401) {
            setPasswordError('Credenciales inválidas');
          }
        });
    }
  }
  

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Accede con tu cuenta</p>
          </div>

          <div className="form-outline mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="form3Example3"
              className={`form-control form-control-lg ${emailError ? 'is-invalid' : ''}`}
              placeholder="Correo electrónico"
            />
            {emailError && <div className="invalid-feedback">{emailError}</div>}
          </div>

          <div className="form-outline mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="form3Example4"
              className={`form-control form-control-lg ${passwordError ? 'is-invalid' : ''}`}
              placeholder="Contraseña"
            />
            {passwordError && <div className="invalid-feedback">{passwordError}</div>}
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <Link to="#!" className="text-body">
              Olvidaste tu contraseña?
            </Link>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg" onClick={logInUser}>
              Ingresar
            </button>
            <p className="small fw-bold mt-2 pt-1 mb-0">
              Quieres estudiar con nosotros? <Link to="/matricula" className="link-danger">Matriculate</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
