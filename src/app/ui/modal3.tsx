import React from "react";

interface Props {
  nombre: string;
  descrip: string;
  email: string;
  tel: string;
  img1: string;
  img2: string;
  log: string;
  catgoria: string;
  route: string;
  clickscounter: number;
  onClose: () => void;
}

const Modal3: React.FC<Props> = ({ nombre, descrip, img1, img2, email, tel, catgoria, route, clickscounter, onClose }) => {
  return (
    <div className="modal2-overlay" onClick={onClose}>
      <div className="modal2-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="mb-[10px]">{nombre}</h2>
        {img1 ? (
          <img className="mb-[15px]" src={img1} alt="Evento Imagen" />
        ) : (
          <span>No image available</span>
        )}
        <p className="mb-[10px]">{descrip}</p>
        <p className="mb-[10px]">Contacto: {email} + {tel}</p>
        <p className="mb-[10px]">:Categoría: {catgoria}</p>
        <button className="close-button" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default Modal3;
