import React, { useState } from 'react';
import { Form, Dropdown, Button } from 'react-bootstrap';

const Sidebar = () => {
    const [selectedOption, setSelectedOption] = useState('perfil');
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
    };

    const handleListaCurso = (option) => {
      setSelectedOption(option);
    }
  
    const handleFileUpload = () => {
      // Aquí puedes agregar la lógica para manejar la carga de archivos
      console.log('Subir archivo...');
    };
  
    const handleEvaluateStudents = () => {
      // Aquí puedes agregar la lógica para iniciar el proceso de evaluación de estudiantes
      console.log('Iniciar evaluación de estudiantes...');
    };

    const [stateStudentId, setStateStudentId] = useState('');
    const [stateCourse, setStateCourse] = useState('');
    const [stateScore, setStateScore] = useState('');
    const [stateComment, setStateComment] = useState('');

    const containerStyle = {
      backgroundColor: 'white',
      borderRadius: '15px', // Ajusta según tus preferencias
      padding: '20px', // Ajusta según tus preferencias
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra opcional
    };

  return (
    <div className="d-flex flex-row">
      <div className="flex-shrink-0 p-3 bg-body-tertiary" style={{ backgroundColor: 'white', marginTop: "110px" }}>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className={`nav-link ${selectedOption === 'perfil' ? 'active' : ''}`} onClick={() => handleOptionSelect('perfil')}>
              <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#house-door"></use></svg>
              Perfil
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className={`nav-link ${selectedOption === 'modulos' ? 'active' : ''}`} onClick={() => handleOptionSelect('modulos')}>
              <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#file-earmark-text"></use></svg>
              Módulos
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className={`nav-link ${selectedOption === 'cursos' ? 'active' : ''}`} onClick={() => handleListaCurso('curso')}>
              <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#check-square"></use></svg>
              Cursos
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className={`nav-link ${selectedOption === 'evaluar' ? 'active' : ''}`} onClick={() => handleOptionSelect('evaluar')}>
              <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#check-square"></use></svg>
              Evaluar Estudiantes
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className={`nav-link ${selectedOption === 'notificacion' ? 'active' : ''}`} onClick={() => handleOptionSelect('notificacion')}>
              <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#file-earmark-text"></use></svg>
              Notificación
            </a>
          </li>
        </ul>
        <hr />
        <div className="d-flex align-items-center">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" style={{ marginRight: '8px' }} />
          <strong>Valentina</strong>
        </div>
      </div>

      <div className="flex-grow-1 p-3">
        <div className="flex-shrink-0 p-3 bg-body-tertiary" style={{ containerStyle, marginTop: "100px" }}>
          {selectedOption === 'perfil' && (
            <div style={containerStyle}>
                <h2>Perfil de Profesor</h2>
                <div>
                <div className="center">
                <div className="imagen-perfil"></div>
                <div className="informacion-perfil">
                    <p>Valentina Ibarra</p>
                    <p>Email: valentina.ibarra@example.com</p>
                    <p>Biografía: Poner Información</p>
                    {/* Otros detalles del perfil */}
                </div>
                </div>
                </div>
            </div>
          )}

          {selectedOption === 'modulos' && (
            <div style={containerStyle}>
              <h2>Módulos</h2>

              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="moduleDropdown">
                    Contenidos
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#">Material 1</Dropdown.Item>
                    <Dropdown.Item href="#">Material 2</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                    <button className="btn" onClick={handleFileUpload}>
                        <span className="me-2">+</span> Subir Archivo
                    </button>
                    </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}

          {selectedOption === 'curso' && (
            <div style={containerStyle}>
                <h2>Cursos disponibles</h2>
                
            </div>
          )}

          {selectedOption === 'evaluar' && (
            <div style={containerStyle}>
              <h2>Evaluación de Estudiantes</h2>
              <p>Aquí puedes agregar detalles sobre la evaluación de estudiantes.</p>
                  
              <Form style={{ maxWidth: '400px', margin: 'auto' }}>
                <Form.Group controlId="studentId">
                  <Form.Label>ID del Estudiante</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa el ID del estudiante"
                    value={stateStudentId}
                    onChange={(e) => setStateStudentId(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="course">
                  <Form.Label>Curso</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa el curso"
                    value={stateCourse}
                    onChange={(e) => setStateCourse(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="score">
                  <Form.Label>Puntuación</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa la puntuación"
                    value={stateScore}
                    onChange={(e) => setStateScore(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="comment">
                  <Form.Label>Comentario (máximo 200 caracteres)</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    maxLength={200}
                    value={stateComment}
                    onChange={(e) => setStateComment(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" onClick={handleEvaluateStudents}>
                  Enviar Evaluación
                </Button>
              </Form>
            </div>
          )}

        {selectedOption === 'notificacion' && (
            <div style={containerStyle}>
              <h2>Enviar Notificación</h2>
              <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-6">
                    <div className="bg--secondary boxed boxed--border boxed--lg cf7-holder">
                        {/* Formulario aquí */}
                        <div className="auth-wrapper">
                        <div className="auth-inner">
                            <form>
                            <div className="mb-3">
                                <label>Título</label>
                                <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                />
                            </div>

                            <div className="mb-3">
                                <label>Párrafo</label>
                                <input
                                type="password"
                                className="form-control"
                                />
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">
                                Enviar
                                </button>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
