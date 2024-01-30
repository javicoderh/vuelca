import React from 'react';

import '../globals.css'
import CarouselDestacadosMobile from './destacados-mobile';


const DestacadosMobile = () => {
  return (
    <div className="w-full md:hidden md:flex flex-col h-[30vh] items-center justify-center destacados2 w-full">
        <h2 className='text-white reubicado'>Empresas destacadas</h2>        
        <CarouselDestacadosMobile />     
    </div>
  );
};

export default DestacadosMobile;
