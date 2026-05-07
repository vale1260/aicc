import React, { Component } from 'react'
import peluca from './../img/compu.jpg';
import secre from './../img/ingles.jpg';
import ingles from './../img/peluq.jpg';
import computin from './../img/secreta-2.jpg';
import Carousel from 'react-bootstrap/Carousel'

export default class Relleno extends Component {
    render() {
      return (
        <div style={{marginTop:'50px', paddingTop: '100px'}}>
            <div className="row justify-content-center align-items-center vh-100">
                <div class="row featurette">
                    <Carousel>
                        <Carousel.Item interval={2000}>
                            <img
                            width={900} height={500}
                            src={peluca}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                            width={900} height={500}
                            src={secre}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                            width={900} height={500}
                            src={ingles}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                            width={900} height={500}
                            src={computin}
                            alt="Fourth slide"
                            />
                        </Carousel.Item>    
                    </Carousel>
                    
                </div>
                <div>
                <div class="row-md-7 order-md-2" style={{paddingTop:'50px'}}>
                    <center>
                    <h1 class="text-body-secondary">AICC</h1>
                    <h2 class="text-body-secondary">Asesorías Integrales y Capacitación</h2>
                    </center>

                    <justify>
                    <p class="lead col" style={{margin:'0 100px 0 100px', padding:'0 100px 0 100px'}}>Somos una empresa dedicada a la capacitación orientada a la formación y desarrollo de los trabajadores. 
                    Entregamos un sistema de aprendizaje garantizado, con herramientas apropiadas y adecuadas con el fin de brindar un servicio 
                    de calidad a nuestros alumnos y, al mismo tiempo, posicionarlos en un campo laboral competitivo y consolidarlos hacia un mejor futuro.</p>
                    <p class="lead col" style={{margin:'0 100px 0 100px', padding:'0 100px 0 100px'}}>Nuestra misión es contribuir en la automatización, diversificar el idioma y capacitar en actividades que proporcionen herramientas para 
                    desempeñarse en el campo laboral, cultural y en el desarrollo personal. En cuanto a nuestra visión, aspiramos a ser partícipes del desarrollo 
                    del país en los ámbitos cultural y laboral, y mejorar la calidad de vida de sus habitantes, ya sea a través de la revalorización profesional o 
                    manteniéndolos actualizados con tecnologías de punta.</p>
                    </justify>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center vh-100" style={{marginTop:"50px"}}>
                <div>
                    <h1>¿Por qué elegirnos?</h1>
                </div>

                <section class="text-center  bg--secondary space--xxs">
                <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="feature feature-3 boxed boxed--lg boxed--border"> <i class="icon icon-Diploma-2 icon--lg"></i>
                                <h2><strong>Experiencia</strong></h2>
                                <p class="lead">AICC Capacitaciones es una empresa creada y funcionando ininterrumpidamente desde abril del año 1996.</p>
                                <p>&nbsp;</p>
                            
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="feature feature-3 boxed boxed--lg boxed--border"> <i class="icon icon-Handshake icon--lg"></i>
                                <h2><strong>Confianza</strong></h2>
                                <p class="lead">Tenemos un gran compromiso con el aprendizaje constantes es por ello, que nuestros alumnos creen fielmente en nosotros asegurándonos&nbsp;de brindarle todo el apoyo educativo que se merecen.</p>
                                <p>&nbsp;</p>
                            
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="feature feature-3 boxed boxed--lg boxed--border"> <i class="icon icon-Check-2 icon--lg"></i>
                            
                                <h2><strong>Calidad</strong></h2>
                                <p class="lead">Todas nuestras clases son presenciales con profesores Nacionales y extranjeros titulados en universidades de distintas partes del mundo, Profesionales jóvenes con metodología actual.</p>
                                <p>&nbsp;</p>
                        </div>
                    </div>
                </div>
                </div>
                </section>


                <section class="text-center  bg--secondary space--sm">
                <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="feature feature-3 boxed boxed--lg boxed--border"> <i class="icon icon-Clock-Forward icon--lg"></i>
                                <h2><strong>Flexibilidad Horaria</strong></h2>
                                <p class="lead">Puedes elegir la hora y el día que quieres estudiar.</p>
                            
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="feature feature-3 boxed boxed--lg boxed--border"> <i class="icon icon-File-Edit icon--lg"></i>
                                <h2><strong>Teórico - Practico</strong></h2>
                                <p class="lead">Aprende simultáneamente con el contenido teórico y practico.</p>
                            
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="feature feature-3 boxed boxed--lg boxed--border"> <i class="icon icon-Teacher icon--lg"></i>
                                <h2><strong>Clases Personalizadas</strong></h2>
                                <p class="lead">Profesores que te brindaran apoyo en cada momento y guiándote a un aprendizaje garantizado.</p>
                        </div>
                    </div>
                </div>
                </div>
                </section>
                </div>
            </div>
        </div>
        )
    }
}
  