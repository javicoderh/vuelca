"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { JunioEventos } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { EneroEventosSchema } from "@/lib/models";
import '../../globals.css'
import { trpc } from "../../_trpc/client";
import Link from "next/link";
import Image from "next/image";
import calendario from '../../../../public/timetable.svg';
import edit from '../../../../public/edit.jpg';
import plus from '../../../../public/plus.png'
import borrar from '../../../../public/delete.png'
import Modal from "../modal";
import { useState } from "react";



const JunioInteractivo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<JunioEventos[] | null>(null);
  const back = '/calendario';
  const eventos = trpc.junio.readAll.useQuery()?.data as JunioEventos[] | undefined;
  return (
      <div className="mes-interactivo">
        <h2 className="text-white">junio</h2>      
        <button
          className="mr-3"
          onClick={() => {
            setSelectedEvent(eventos || []);
            setModalVisible(true);
          }}
        >
          <Image className='modificar-evento-button mt-3' src={plus} width={40} height={40} alt="Ver detalles" />
        </button>
        
        {modalVisible && selectedEvent && (
          <Modal eventos={selectedEvent} onClose={() => setModalVisible(false)} />
        )}
      </div>
  )
}

export default JunioInteractivo