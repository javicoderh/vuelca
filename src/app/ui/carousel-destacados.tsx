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

const CarouselDestacados = () => {
    const drinks = [
        { name: 'Emprendimiento 1', ruta: '/categorias/salud', imgsrc: 'imagen'},
        { name: 'emprendimiento 2', ruta: '/emprendimiento2', imgsrc: '1'},
        { name: 'emprendimiento 3', ruta: '/emprendimiento3', imgsrc: '2'},
        { name: 'emprendimiento 4', ruta: '/emprendimiento4', imgsrc: '3'},
        { name: 'emprendimiento 5', ruta: '/emprendimiento5', imgsrc: '4'},
        { name: 'emprendimiento 6', ruta: '/emprendimiento6', imgsrc: '5'},
        { name: 'emprendimiento 7', ruta: '/emprendimiento7', imgsrc: '6'},
        { name: 'emprendimiento 8', ruta: '/emprendimiento8', imgsrc: '7'},
        { name: 'emprendimiento 9', ruta: '/emprendimiento9', imgsrc: '8'},
        { name: 'emprendimiento 10', ruta: '/emprendimiento10', imgsrc: '9'},              
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
    <div className="carousel-container">
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
              <Image src={logo} alt='foto' width='100' height='100' />
            </Link>
            </div>
           
          );
        })}
      </div>
      <div className="carousel-controls carousel-controls-next" onClick={goToNext}>
        <button>Siguiente</button>
      </div>
      <h2 className='nombre'>{drinks[activeIndex].name}</h2>
    </div>
  );
};

export default CarouselDestacados;
