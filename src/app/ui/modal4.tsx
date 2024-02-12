import React from "react";

interface Props {
  nom: string;
  descr: string;
  prcio: string; 
  stck: number;
  imgen: string;
  empr: string;
  rut: string;
  clickscounter: number;
  onClose: () => void;
}

const Modal4: React.FC<Props> = ({ nom, descr, stck, rut, imgen, empr, clickscounter, onClose }) => {
  return (
    <div className="modal2-overlay" onClick={onClose}>
      <div className="modal2-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="mb-[10px]">{nom}</h2>
        {imgen ? (
          <img className="mb-[15px]" src={imgen} alt="Evento Imagen" />
        ) : (
          <span>No image available</span>
        )}
        <p className="mb-[10px]">{descr}</p>
        <p className="mb-[10px]">cantidad: {stck}</p>
        <p className="mb-[10px]">empresa: {empr}</p>
        <button className="close-button" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default Modal4;
