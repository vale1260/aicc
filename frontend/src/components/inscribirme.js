import React, { Component } from 'react'

export default class Inscribirme extends Component {
  render() {
    return (
        <div>
        <div className="row justify-content-center align-items-center vh-100">
    
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-5">
              <div className="switchable__text">
                <h2 style={{ textAlign: 'center' }}><span style={{ color: '#ffff99' }}><strong>¡Quiero inscribirme inmediatamente!</strong></span></h2>
                <p className="lead">Somos la institución líder en la región metropolitana con los cursos de mejor precio. Encontrarás una educación de alta calidad a precios tan asequibles.
                                    Además, te ofrecemos la flexibilidad de pagar en cómodas cuotas para que puedas alcanzar tus metas educativas sin preocupaciones financieras."</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="bg--secondary boxed boxed--border boxed--lg cf7-holder">
                {/* Formulario aquí */}
                    <div className="auth-wrapper">
                    <div className="auth-inner">
                
                    <form>
                        <div className="mb-3">
                        <label>Nombres</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="nombres"
                        />
                        </div>

                    <div className="mb-3">
                    <label>Apellidos</label>
                    <input type="text" 
                           className="form-control" 
                           placeholder="apellidos" />
                    </div>

                    <div className="mb-3">
                    <label>Email </label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="email"
                    />
                    </div>

                    <div className="mb-3">
                    <label>Teléfono</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="teléfono"
                    />
                    </div>

                    <p><label>¿Qué quieres estudiar?</label></p>
                    <div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
                        <div class="list-group">
                            <label class="list-group-item d-flex gap-2">
                            <input class="form-check-input flex-shrink-0" type="checkbox" value="" checked=""></input>
                            <span>
                                Peluquería
                            </span>
                            </label>
                            <label class="list-group-item d-flex gap-2">
                            <input class="form-check-input flex-shrink-0" type="checkbox" value=""></input>
                            <span>
                                Computación
                            </span>
                            </label>
                            <label class="list-group-item d-flex gap-2">
                            <input class="form-check-input flex-shrink-0" type="checkbox" value=""></input>
                            <span>
                                Secretariado
                            </span>
                            </label>
                            <label class="list-group-item d-flex gap-2">
                            <input class="form-check-input flex-shrink-0" type="checkbox" value=""></input>
                            <span>
                                Inglés
                            </span>
                            </label>
                        </div>
                    </div>


                    <div className="mb-3">
                    <label>Comentarios</label>
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
        </div>
    )
  }
}