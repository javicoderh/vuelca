"use client";

import { EmpresasSalud, defaultEmpresasSaludValues } from "@/lib/types";
import { EmpresasSaludSchema } from "@/lib/models";
import "../../../../globals.css";
import { trpc } from "../../../../_trpc/client";
import Image from "next/image";
import ecofriendly from '../../../../../public/ecofriendly.jpg'
import Link from "next/link";

export const AngyGet = () => {

  const empresasTiendas = trpc.productosSalud.readAll.useQuery({
    empresa: "angy",
  });
  console.log("🚀 ~ obteniendo productos de angy ~ empresasTiendas:", empresasTiendas)

  return (
    <>
      {empresasTiendas.data?.map((producto: any) => (
        <div
          key={producto.id}
          className="flex flex-col w-[500px] producto-card-container shadow-md rounded-lg overflow-hidden mb-4"
        >
          <div className="empresa-card flex flex-row items-start p-3">
          <div className="flex flex-col p-3">
            <h3 className="text-2xl font-bold">{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <br />
            <br />
            <p>${producto.precio}</p>
            <p>agenda en angy@gmail.com <br /> o al +569XXXXXX</p>
          </div>            
          </div>
        </div>
      ))}
    </>
  );
};