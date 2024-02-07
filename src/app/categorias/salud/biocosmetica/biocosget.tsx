"use client";

import { useForm } from "react-hook-form";
import { AgostoEventos, EmpresasSalud, defaultEmpresasSaludValues } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmpresasSaludSchema } from "@/lib/models";
import '../../../globals.css'
import { trpc } from "../../../_trpc/client";
import Link from "next/link";
import Image from "next/image";
import calendario from '../../../../../public/timetable.svg';
import edit from '../../../../../public/edit.jpg';
import plus from '../../../../../public/plus.png'
import borrar from '../../../../../public/delete.png'
import { useState } from "react";
import Modal2 from "../../../ui/modal2";
import { useMediaQuery } from "react-responsive";
import Modal3 from "@/app/ui/modal3";



export const BiocosmeticaGet = () => {
  const { register, handleSubmit, reset } = useForm<EmpresasSalud>({
    defaultValues: defaultEmpresasSaludValues,
    resolver: zodResolver(EmpresasSaludSchema),
  });



return (

    <div>
        
    </div>
)
}