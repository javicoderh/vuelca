"use client";

import { EmpresasSalud, defaultEmpresasSaludValues } from "@/lib/types";
import { EmpresasSaludSchema } from "@/lib/models";
import "../../../globals.css";
import { trpc } from "../../../_trpc/client";
import Image from "next/image";
import ecofriendly from '../../../../../public/ecofriendly.jpg'
import Link from "next/link";

export const BiocosmeticaGet = () => {

  const empresasTiendas = trpc.empresasSalud.readAll.useQuery({
    categoria: "biocosmetica",
  });
  console.log("🚀 ~ BiocosmeticaGet ~ empresasTiendas:", empresasTiendas)

  return (
    <>
      {empresasTiendas.data?.map((empresa: any) => (
        <div
          key={empresa.id}
          className="flex flex-col w-[30vw] empresa-card-container shadow-md rounded-lg overflow-hidden mb-4"
        >
          <div className="empresa-card flex flex-row items-start p-3">
          <div className="flex flex-col p-3">
            <h3 className="text-2xl text-gray-700 font-bold">{empresa.nombreempresa}</h3>
            <p>{empresa.descripcion}</p>
            <br />
            <p className="text-gray-600">puedes contactarnos en:</p>
            <br />
            <p className="text-gray-600">{empresa.mail}</p>
            <p className="text-gray-600">{empresa.telefono}</p>
            <p className="text-gray-600">visita nuestra tienda <Link className="text-blue-300 hoveredLink" href={empresa.ruta}>aquí</Link></p>
          </div>            
          </div>
        </div>
      ))}
    </>
  );
};