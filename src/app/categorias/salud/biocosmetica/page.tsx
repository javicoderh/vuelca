import React from "react";
import { BiocosmeticaGet } from "./biocosget";

 function Biocosmetica() {
   
  return (
    <div className="inner-eventos-container enero-bg text-gray-100">
        <h1 className="mb-[20px] inner-eventos-tit">Empresas Biocosmetica 2024</h1>
        <BiocosmeticaGet />    
    </div>
    )
  ;
}

export default Biocosmetica;