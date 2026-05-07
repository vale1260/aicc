import React, { Component } from 'react'
import { MainCarousel } from './MainCarousel';

export default class Relleno extends Component {
    render() {
        return (
            <div className="overflow-x-hidden">
                <section className="py-12 md:py-20 bg-white">
                    <MainCarousel />

                    <div className="max-w-4xl mx-auto px-6 mt-8 text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-2">AICC</h1>
                        <h2 className="text-xl md:text-2xl font-medium text-blue-600 mb-8">Asesorías Integrales y Capacitación</h2>

                        <div className="text-start space-y-6 text-gray-600 leading-relaxed text-lg px-4 md:px-0">
                            <p>
                                Somos una empresa dedicada a la capacitación orientada a la formación y desarrollo de los trabajadores.
                                Entregamos un sistema de aprendizaje garantizado, con herramientas apropiadas y adecuadas con el fin de brindar un servicio
                                de calidad a nuestros alumnos y, al mismo tiempo, posicionarlos en un campo laboral competitivo y consolidarlos hacia un mejor futuro.
                            </p>
                            <p>
                                Nuestra misión es contribuir en la automatización, diversificar el idioma y capacitar en actividades que proporcionen herramientas para
                                desempeñarse en el campo laboral, cultural y en el desarrollo personal. En cuanto a nuestra visión, aspiramos a ser partícipes del desarrollo
                                del país en los ámbitos cultural y laboral, y mejorar la calidad de vida de sus habitantes, ya sea a través de la revalorización profesional o
                                manteniéndolos actualizados con tecnologías de punta.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">¿Por qué elegirnos?</h1>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Experiencia", desc: "AICC Capacitaciones es una empresa creada y funcionando ininterrumpidamente desde abril del año 1996." },
                                { title: "Confianza", desc: "Tenemos un gran compromiso con el aprendizaje constante es por ello, que nuestros alumnos creen fielmente en nosotros asegurándonos de brindarle todo el apoyo educativo que se merecen." },
                                { title: "Calidad", desc: "Todas nuestras clases son presenciales con profesores Nacionales y extranjeros titulados en universidades de distintas partes del mundo, Profesionales jóvenes con metodología actual." },
                                { title: "Flexibilidad Horaria", desc: "Puedes elegir la hora y el día que quieres estudiar." },
                                { title: "Teórico - Práctico", desc: "Aprende simultáneamente con el contenido teórico y práctico." },
                                { title: "Clases Personalizadas", desc: "Profesores que te brindarán apoyo en cada momento y guiándote a un aprendizaje garantizado." }
                            ].map((feature, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <h2 className="text-xl font-bold mb-4 text-blue-600">{feature.title}</h2>
                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}