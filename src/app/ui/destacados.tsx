import React from 'react';
import CarouselDestacados from './carousel-destacados';


const Destacados = () => {
  return (
    <div className="w-full hidden md:flex flex-col h-[30vh] items-center justify-center destacados w-full">
        <h1 className="text-xl font-bold text-white mb-3">Emprendimientos destacados</h1>
        <h3 className='text-white mb-3'>emprendimiento 1</h3>
        <p className='text-white text-center'> blablbalabalabalbaalabl <br/> blablabalablbalabalbaalbalabalabal <br/> blablablabalabalbabla <br/> blablbalabalabalbaalabl <br/> blablabalablbalabalbaalbalabalabal <br/> blablablabalabalbabla  </p>           
        <CarouselDestacados />     
    </div>
  );
};

export default Destacados;
