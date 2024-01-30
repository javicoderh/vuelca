import React from 'react';

import '../globals.css'
import CarouselDestacadosMobile from './destacados-mobile';


const DestacadosMobile = () => {
  return (
    <div className="w-full md:hidden md:flex flex-col h-[30vh] items-center justify-center destacados2 w-full">        
        <CarouselDestacadosMobile />     
    </div>
  );
};

export default DestacadosMobile;
