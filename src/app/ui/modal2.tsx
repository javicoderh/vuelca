import React from "react";

interface Props {
  nombre: string;
  mes: string;
  descripcion: string;
  imagen1: string | null | undefined;
  contacto: string;
  fecha: number;
  eslogan: string;
  onClose: () => void;
}

const Modal2: React.FC<Props> = ({ nombre, mes, descripcion, imagen1, contacto, fecha, eslogan, onClose }) => {
  return (
    <div className="modal2-overlay" onClick={onClose}>
      <div className="modal2-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="mb-[10px]">{nombre}</h2>
        {imagen1 ? (
          <img className="mb-[15px]" src={imagen1} alt="Evento Imagen" />
        ) : (
          <span>No image available</span>
        )}
        <p className="mb-[10px]">{descripcion}</p>
        <p className="mb-[10px]">Contacto: {contacto}</p>
        <p className="mb-[10px]">Fecha: {fecha}-{mes}</p>
        <p className="mb-[10px]">Eslogan: {eslogan}</p>
        <button className="close-button" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default Modal2;
