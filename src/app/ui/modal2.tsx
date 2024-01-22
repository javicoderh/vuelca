import React from "react";

interface Props {
    nombre: string;
    mes: string;
    descripcion: string;
    imagen1: string;
    contacto: string;
    fecha: string;
    eslogan: string;
    onClose: () => void;
  }

const Modal2 = ({ nombre, mes, descripcion, imagen1, contacto, fecha, eslogan, onClose }: Props) => {
    return (
      <div className="modal2-overlay" onClick={onClose}>
        <div className="modal2-content" onClick={(e) => e.stopPropagation()}>
          <h2 className="mb-[10px]">{nombre}</h2>         
          <img className="mb-[15px]" src={imagen1} alt="Evento Imagen" /> 
          <p className="mb-[10px]">{descripcion}</p>
          <p className="mb-[10px]">Contacto: {contacto}</p>
          <p className="mb-[10px]">Fecha: {fecha}-{mes}</p>
          <p className="mb-[10px]">Eslogan: {eslogan}</p>         
          <button className="close-button" onClick={onClose}>X</button> 
        </div>
        
      </div>
    );
  };

  export default Modal2