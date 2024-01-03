import React from "react";
import { fetchMesesTodos } from '@/app/lib/data';
import Link from "next/link";


async function Calendario() {

    const meses = await fetchMesesTodos();
    const back = '/calendario'
    return (
        <div className="flex flex-col">
        {meses.map((mes) => (                     
              <Link
              key={mes.nombre}
              href={mes.ruta}>
              <div>
              <h1 className='text-white text-center subcat'>{mes.nombre}</h1>
              </div> 
              </Link>           
          ))}
        </div>
    )
}

export default Calendario