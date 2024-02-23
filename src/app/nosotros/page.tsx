import React from "react";
import '../globals.css'
import Image from "next/image";
import salud from '../../../public/ecofriendly.jpg'

function About() {
  return (
    <div className="nosotros-container">
      <div className="nosotros-nest">
        <div className="nosotros-texto">
          <h1 className="mb-[20px] inner-eventos-tit text-gray-700">Quiénes somos?</h1>
          <p className="text-gray-700">vuelca es un directorio de empresas sustentables que nace en el 2xxx...</p>
        </div> 
        <div className="nosotros-img-container relative">
          <div className="nosotros-tooltip">
            <p className="text-gray-700">Javiera es la directora de Vuelca, periodista de profesión .....</p>
          </div>
          <Image className="nosotros-img" src={salud} width={300} height={400} alt="" /> 
          <div className="flex-col mt-7">
            <h4 className="text-gray-700">Javiera</h4>
            <h4 className="text-gray-700">periodista...</h4>
          </div>
        </div>                 
      </div>
      <p className="text-gray-700 ml-2 mt-4">nuestra misión es .....</p>
    </div>
  );
}

export default About;
