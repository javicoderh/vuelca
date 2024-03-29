import React from 'react';
import CarouselDestacados from './carousel-destacados';
import '../globals.css'


const Destacados = () => {
  return (
    <div className="w-full hidden md:flex flex-col h-[30vh] items-center justify-center destacados w-full">
        <h1 className="destacados-title font-bold mb-3">Secciones destacadas</h1>        
        <CarouselDestacados />     
    </div>
  );
};

export default Destacados;
