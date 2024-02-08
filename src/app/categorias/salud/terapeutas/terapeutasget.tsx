"use client";

import { EmpresasSalud, defaultEmpresasSaludValues } from "@/lib/types";
import { EmpresasSaludSchema } from "@/lib/models";
import "../../../globals.css";
import { trpc } from "../../../_trpc/client";
import Image from "next/image";
import ecofriendly from '../../../../../public/ecofriendly.jpg'
import Link from "next/link";

export const TerapeutasGet = () => {

  const empresasTiendas = trpc.empresasSalud.readAll.useQuery({
    categoria: "terapeutas",
  });
  console.log("🚀 ~ yogacaGet ", empresasTiendas)

  return (
    <>
      {empresasTiendas.data?.map((empresa: any) => (
        <div
          key={empresa.id}
          className="flex flex-col w-full empresa-card-container shadow-md rounded-lg overflow-hidden mb-4"
        >
          <div className="empresa-card flex flex-row items-start p-3">
          <div className="flex flex-col p-3">
            <h3 className="text-2xl font-bold">{empresa.nombreempresa}</h3>
            <p>{empresa.descripcion}</p>
            <br />
            <p>puedes contactarnos en:</p>
            <br />
            <p>{empresa.mail}</p>
            <p>{empresa.telefono}</p>
            <p>visita nuestra tienda <Link className="text-blue-300 hoveredLink" href={empresa.ruta}>aquí</Link></p>
          </div>            
          </div>
        </div>
      ))}
    </>
  );
};