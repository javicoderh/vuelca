"use client";

import { EmpresasSalud, defaultEmpresasSaludValues } from "@/lib/types";
import { EmpresasSaludSchema } from "@/lib/models";
import "../../../globals.css";
import { trpc } from "../../../_trpc/client";

export const BiocosmeticaGet = () => {

  const empresasTiendas = trpc.empresasSalud.readAll.useQuery({
    categoria: "tiendas",
  });

  return (
    <>
      {empresasTiendas.data?.map((empresa: any) => (
        <div
          key={empresa.id}
          className="flex flex-col w-full bg-white shadow-md rounded-lg overflow-hidden mb-4"
        >
          <div className="flex justify-between items-center p-3">
            <h3 className="text-2xl font-bold">{empresa.nombreempresa}</h3>
          </div>
        </div>
      ))}
    </>
  );
};