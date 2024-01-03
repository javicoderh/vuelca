import React from "react";
import { fetchMeses } from '@/app/lib/data';
import Link from "next/link";


export default async function Calendario() {

    const meses = await fetchMeses();

    return (
        <div className="flex flex-col">
        {meses.map((mes) => (         
              
              <Link
              href={mes.ruta}>
              <div>
              <h1 className='text-white text-center subcat'>{mes.nombre}</h1>
              </div> 
              </Link>           
          ))}
        </div>
    )
}