"use client";

import { EmpresasSalud, defaultEmpresasSaludValues } from "@/lib/types";
import { EmpresasSaludSchema } from "@/lib/models";
import "../../../../globals.css";
import { trpc } from "../../../../_trpc/client";
import Image from "next/image";
import ecofriendly from '../../../../../public/ecofriendly.jpg'
import Link from "next/link";
import { useState, useEffect } from "react";

interface DetallesState {
  [key: string]: boolean;
}

export const AngyGet = () => {

  const [detalles, setDetalles] = useState<boolean[]>([]);

  const toggleDetalles = (index: number) => {
    setDetalles(prevDetalles => {
      const newDetalles = [...prevDetalles];
      newDetalles[index] = !newDetalles[index];
      return newDetalles;
    });
  };

  const empresasTiendas = trpc.productosSalud.readAll.useQuery({
    empresa: "angy",
  });

  
  useEffect(() => {
    if (empresasTiendas.data) {
      setDetalles(Array(empresasTiendas.data.length).fill(false));
    }
  }, [empresasTiendas.data]);

  console.log("🚀 ~ obteniendo productos de angy ~ empresasTiendas:", empresasTiendas);

  return (
    <div className="grid grid-cols-4">
      {empresasTiendas.data?.map((producto: any, index: number) => (
        <div
          key={producto.nombre}
          className="flex flex-col w-[500px] producto-card-container shadow-md rounded-lg overflow-hidden mb-4"
        >
          <div onClick={() => toggleDetalles(index)} className="empresa-card flex flex-col items-start p-3">
            <h3 className="text-2xl font-bold">{producto.nombre}</h3>
            
            {detalles[index] ? (
              <div className="flex flex-col p-3">
                <p>{producto.descripcion}</p>               
                <br /> 
                <p>valor: ${producto.precio}</p>
                <br /> 
                <p>contactame en angy@gmail.com <br /> o llama al +569XXXXXX</p>
              </div>
            ) : (
              <h1 className="bg-black text.white p-2 border-2-white">mostrar</h1>
            )}           
          </div>
        </div>
      ))}
    </div>
  );
};