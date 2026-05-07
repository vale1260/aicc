import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import peluca from './../img/compu.jpg';
import secre from './../img/ingles.jpg';
import ingles from './../img/peluq.jpg';
import computin from './../img/secreta-2.jpg';

export const MainCarousel = () => {
  const slides = [
    { src: peluca, alt: "First slide" },
    { src: secre, alt: "Second slide" },
    { src: ingles, alt: "Third slide" },
    { src: computin, alt: "Fourth slide" },
  ];

  return (
    <div className="w-full overflow-hidden">
      <Carousel className="w-full" controls={true} indicators={true}>
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx} interval={2000}>
            <img
              className="d-block w-full h-[500px] md:h-[700px] lg:h-[800px] object-cover"
              src={slide.src}
              alt={slide.alt}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
