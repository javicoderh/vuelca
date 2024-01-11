import React from "react";
import '../globals.css';
import { MarzoEventos } from "@/lib/types";

interface ModalProps {
  evento: MarzoEventos;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ evento, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{evento.nombre}</h2>
        
        <p>{evento.descripcion}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
