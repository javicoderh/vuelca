import React from "react";
import Image from "next/image";
import { EneroEventos } from "@/lib/types";
import plus from "../../../public/plus.png";
import closeIcon from "../../../public/close.png";
import Link from "next/link";

interface ModalProps {
  eventos: EneroEventos[];
  onClose: () => void;
}

const editarEventos = "/calendario";

const Modal: React.FC<ModalProps> = ({ eventos, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {eventos.map((evento, index) => (
          <div key={index}>
            <h2>{evento.nombre}</h2>
            <p>{evento.descripcion}</p>
          </div>
        ))}
        <div className="button-container">
          <Link href={editarEventos}>
            <button className="action-button">
              <Image
                className="modificar-evento-button"
                src={plus}
                width={40}
                height={40}
                alt="Ver detalles"
              />
            </button>
          </Link>
          <button className="close-button" onClick={onClose}>
            <Image src={closeIcon} width={40} height={40} alt="Cerrar" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
