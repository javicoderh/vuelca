import React from 'react';

import '../globals.css'
import CarouselDestacadosMobile from './destacados-mobile';


const DestacadosMobile = () => {
  return (
    <div className="w-full md:hidden md:flex flex-col h-[30vh] items-center justify-center destacados2 w-full">
        <h1 className="destacados-title2 font-bold text-white mb-3">Emprendimientos destacados</h1>        
        <CarouselDestacadosMobile />     
    </div>
  );
};

export default DestacadosMobile;
