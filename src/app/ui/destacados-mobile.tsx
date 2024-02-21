'use client'
import React, { useState } from 'react';
import './carousel.css';
import logo from '../../../public/forest.jpg'
import Image from 'next/image';
import Link from 'next/link';

interface Drink {
  name: string;
  ruta: string;
  imgsrc: string
}

const CarouselDestacadosMobile = () => {
    const drinks = [
      { name: 'Árticulos permacultura', ruta: '/articulos', imgsrc: logo},
      { name: 'tarot y otras magias', ruta: '/categorias/salud/tarot', imgsrc: logo},
      { name: 'emprendimiento 3', ruta: '/emprendimiento3', imgsrc: logo},
      { name: 'emprendimiento 4', ruta: '/emprendimiento4', imgsrc: logo},
      { name: 'emprendimiento 5', ruta: '/emprendimiento5', imgsrc: logo},
      { name: 'emprendimiento 6', ruta: '/emprendimiento6', imgsrc: logo},
      { name: 'emprendimiento 7', ruta: '/emprendimiento7', imgsrc: logo},
      { name: 'emprendimiento 8', ruta: '/emprendimiento8', imgsrc: logo},
      { name: 'emprendimiento 9', ruta: '/emprendimiento9', imgsrc: logo},
      { name: 'emprendimiento 10', ruta: '/emprendimiento10', imgsrc: logo},               
      ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % drinks.length);
  };

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + drinks.length) % drinks.length);
  };

  const visibleIndices = [
    (activeIndex - 2 + drinks.length) % drinks.length,
    (activeIndex - 1 + drinks.length) % drinks.length,
    activeIndex,
    (activeIndex + 1) % drinks.length,
    (activeIndex + 2) % drinks.length,
  ];

  const positionClass = (index: number): string => {
    const position = visibleIndices.indexOf(index);
    switch (position) {
      case 0: return 'far-left';
      case 1: return 'left';
      case 2: return 'center';
      case 3: return 'right';
      case 4: return 'far-right';
      default: return '';
    }
  };

  return (
    <div className="carousel-container2">
      <div className="carousel-controls carousel-controls-prev" onClick={goToPrevious}>
        <button>Anterior</button>
      </div>
      <div className="carousel">
        {visibleIndices.map((index) => {
          const drink = drinks[index];
          const isActive = index === activeIndex;
          return (            
            <div
              className={`carousel-item ${isActive ? 'active' : ''} ${positionClass(index)}`}
              key={index}
            >
            <Link href={drinks[activeIndex].ruta}>
              <Image src={drink.imgsrc} alt='foto' width='100' height='100' />
            </Link>
            {isActive && <h2 className='nombre-mobile'>{drink.name}</h2>}
            </div>           
          );
        })}
      </div>
      <div className="carousel-controls carousel-controls-next" onClick={goToNext}>
        <button>Siguiente</button>
      </div>
    </div>
  );
};

export default CarouselDestacadosMobile;
