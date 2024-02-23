import React from "react";
import '../globals.css'
import Image from "next/image";
import salud from '../../../public/ecofriendly.jpg'

function Contacto() {
  return (
    <div className="contacto-container">
     <h1 className="text-gray-700">Contactanos</h1>
     <br />
     <h4 className="text-gray-700">Mail:  a@gmail.com</h4>
     <br />
     <h4 className="text-gray-700">Telefono: xxxxxxxxx</h4>    
    </div>
  );
}

export default Contacto;