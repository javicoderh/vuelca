import React from "react";
import { AstrologiaGet } from "./astrologiaget";

 function Astrologia() {
   
  return (
    <div className="inner-eventos-container enero-bg">
        <h1 className="mb-[20px] inner-eventos-tit">Astrólogos 2024</h1>
        <AstrologiaGet />    
    </div>
    )
  ;
}

export default Astrologia;