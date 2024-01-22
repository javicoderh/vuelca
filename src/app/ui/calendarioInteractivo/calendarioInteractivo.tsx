"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { EneroEventos, MarzoEventos, defaultEneroValues } from "@/lib/types";
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
import Modal from "../../ui/modal";
import { useState } from "react";
import EneroInteractivo from "@/app/ui/calendarioInteractivo/eneroInteractivo";
import FebreroInteractivo from "@/app/ui/calendarioInteractivo/febreroInteractivo";
import MarzoInteractivo from "@/app/ui/calendarioInteractivo/marzoInteractivo";
import AbrilInteractivo from "@/app/ui/calendarioInteractivo/abrilInteractivo";
import MayoInteractivo from "@/app/ui/calendarioInteractivo/mayoInteractivo";
import JunioInteractivo from "@/app/ui/calendarioInteractivo/junioInteractivo";
import AgostoInteractivo from "@/app/ui/calendarioInteractivo/agostoInteractivo";
import SeptiembreInteractivo from "@/app/ui/calendarioInteractivo/septiembreInteractivo";
import OctubreInteractivo from "@/app/ui/calendarioInteractivo/octubre";
import NoviembreInteractivo from "@/app/ui/calendarioInteractivo/noviembreInteractivo";
import DiciembreInteractivo from "@/app/ui/calendarioInteractivo/diciembreInteractivo";
import JulioInteractivo from "@/app/ui/calendarioInteractivo/julioInteractivo";



const CalendarioInteractivo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EneroEventos[] | null>(null);
  const back = '/calendario';

  return (
    <div className="calendario-interactivo">
      <EneroInteractivo />
      <FebreroInteractivo />
      <MarzoInteractivo />  
      <AbrilInteractivo />
      <MayoInteractivo />
      <JunioInteractivo />
      <JulioInteractivo />
      <AgostoInteractivo />
      <SeptiembreInteractivo />
      <OctubreInteractivo />
      <NoviembreInteractivo />
      <DiciembreInteractivo />
    </div>
  );
};

export default CalendarioInteractivo;
