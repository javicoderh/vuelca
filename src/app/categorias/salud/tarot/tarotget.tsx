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
      className="flex flex-col w-full empresa-card-container shadow-md rounded-lg overflow-hidden mb-4"
    >
      <h3 className="text-2xl font-bold">{empresa.nombreempresa}</h3>
      <div className="empresa-card flex flex-row items-start p-3">
          <div className="flex flex-col p-3">
            <p>{empresa.descripcion}</p>
            <br />
            <p>puedes contactarme en:</p>
            <br />
            <p>{empresa.mail}</p>
            <p>{empresa.telefono}</p>
            <p>
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