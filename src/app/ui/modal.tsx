import React from "react";
import '../globals.css';
import { EneroEventos } from "@/lib/types";
import plus from '../../../public/plus.png'
import Image from "next/image";
import Link from "next/link";

interface ModalProps {
  eventos: EneroEventos[];
  onClose: () => void;
}

const editarEventos = '/calendario';

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
        <Link href={editarEventos}>
          <button><Image className='modificar-evento-button mt-3' src={plus} width={40} height={40} alt="Ver detalles" /></button>
        </Link>
      </div>
    </div>
  );
};

export default Modal;


