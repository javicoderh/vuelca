import React from "react";
import '../../globals.css'
import { useState } from "react";
import Enero2 from "./enero";
import Febrero2 from "./febrero";
import Marzo2 from "./marzo";
import Abril2 from "./abril";
import Mayo2 from "./mayo";
import Junio2 from "./junio";
import Julio2 from "./julio";
import Agosto2 from "./agosto";
import Septiembre2 from "./septiembre";
import Octubre2 from "./octubre";
import Noviembre2 from "./noviembre";
import Diciembre2 from "./diciembre";



const MesesLista = () => {

const [mes, setMes] = useState(<Enero2 />) 

function setEnero() {
setMes(<Enero2/>)
}

function setFebrero() {
setMes(<Febrero2/>)
}

function setMarzo() {
setMes(<Marzo2/>)
}

function setAbril() {
setMes(<Abril2/>)
}

function setMayo() {
setMes (<Mayo2 />)
}

function setJunio() {
setMes (<Junio2/>)
}

function setJulio() {
setMes (<Julio2 />)
}

function setAgosto() {
setMes (<Agosto2/>)
}

function setSeptiembre() {
setMes (<Septiembre2 />)
}

function setOctubre() {
setMes (<Octubre2 />)
}

function setNoviembre() {
setMes (<Noviembre2 />)
}

function setDiciembre() {
setMes (<Diciembre2 />)
}


  return (

    <div className="calendario2">
        {mes}
        <ul className="meses-container2">
            <li className="mes-small">            
                <div onClick={setEnero} className="dias-small">enero</div>
            </li>              
            <li className="mes-small">
                <div onClick={setFebrero} className="dias-small">febrero</div>
            </li>    
            <li className="mes-small">
                <div onClick={setMarzo} className="dias-small">marzo</div>
            </li>  
            <li className="mes-small">
                <div onClick={setAbril} className="dias-small">abril</div>
            </li>  
            <li className="mes-small">
                <div onClick={setMayo} className="dias-small">mayo</div>
            </li>  
            <li className="mes-small">
                <div onClick={setJunio} className="dias-small">junio</div>
            </li> 
            <li className="mes-small">
                <div onClick={setJulio} className="dias-small">julio</div>
            </li> 
            <li className="mes-small">
                <div onClick={setAgosto} className="dias-small">agosto</div>
            </li> 
            <li className="mes-small">
                <div onClick={setSeptiembre} className="dias-small">septiembre</div>
            </li> 
            <li className="mes-small">
                <div onClick={setOctubre} className="dias-small">octubre</div>
            </li> 
            <li className="mes-small">
                <div onClick={setNoviembre} className="dias-small">noviembre</div>
            </li> 
            <li className="mes-small">
                <div onClick={setDiciembre} className="dias-small">diciembre</div>
            </li>  
        </ul>
    </div>
  );
};

export default MesesLista;