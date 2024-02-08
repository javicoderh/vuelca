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

  const empresasTiendas = trpc.empresasSalud.readAll.useQuery({
    categoria: 'tiendas'
  });

  return (
    <>
      {empresasTiendas.data?.map((empresa) => (
        <div key={empresa.id} className="flex flex-col w-full bg-white shadow-md rounded-lg overflow-hidden mb-4">
          <div className="flex justify-between items-center p-3">
            <h3 className="text-2xl font-bold">{empresa.nombreempresa}</h3>
            <div className="flex items-center">
              <Link href={`/categorias/salud/biocosmetica/edit/${empresa.id}`}>
                <a>
                  <Image src={edit} alt="editar" width={30} height={30} />
                </a>
              </Link>
              <Image src={borrar} alt="borrar" width={30} height={30} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};