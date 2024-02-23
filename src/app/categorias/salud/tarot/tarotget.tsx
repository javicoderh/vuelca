"use client";

import { EmpresasSalud, defaultEmpresasSaludValues } from "@/lib/types";
import { EmpresasSaludSchema } from "@/lib/models";
import "../../../globals.css";
import { trpc } from "../../../_trpc/client";
import Image from "next/image";
import ecofriendly from '../../../../../public/ecofriendly.jpg'
import Link from "next/link";
import { useState } from "react";

export const TarotGet = () => {

  const [ detalles, setDetalles] = useState(false)
  const handledetalles = () => {
    setDetalles(true)
  }
  const empresasTiendas = trpc.empresasSalud.readAll.useQuery({
    categoria: "tarot",
  });
  console.log("🚀 ~ BiocosmeticaGet ~ empresasTiendas:", empresasTiendas)

  return (
    <>
      {empresasTiendas.data?.map((empresa: any) => (
  <Link key={empresa.id} href={empresa.ruta}>
    <div
      key={empresa.id}
      className="flex flex-col w-[30vw] empresa-card-container shadow-md rounded-lg overflow-hidden mb-4">     
      <div className="empresa-card flex flex-row items-start p-3">
          <div className="flex flex-col p-3"> 
          <h3 className="text-2xl font-bold text-gray-700">{empresa.nombreempresa}</h3>
          <br />
            <p className="text-gray-700">{empresa.descripcion}</p>
            <br />
            <p className="text-gray-700">puedes contactarme en:</p>
            <p className="text-gray-700">{empresa.mail}</p>
            <p className="text-gray-700">{empresa.telefono}</p>
            <p className="text-gray-700">
              visita mi página{" "}
              <Link className="text-blue-300 hoveredLink" href={empresa.ruta}>
                aquí
              </Link>
            </p>
          </div>
      </div>
    </div>
  </Link>
))}

    </>
  );
};