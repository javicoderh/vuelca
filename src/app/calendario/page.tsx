import React from "react";
import { fetchMesesTodos } from '@/app/lib/data';
import Link from "next/link";
import '../globals.css'


async function Calendario() {

    const meses = await fetchMesesTodos();
    const back = '/'
    return (
    <div className="flex meses-container items-center justify-center flex-col">
        <h1 className="meses-title">Calendario 2024</h1>
        <ul className="flex meses flex-col">
        {meses.map((mes) => (                     
              <Link
              key={mes.nombre}
              href={mes.ruta}>
              <li>
              <h2 className='text-white mes text-center subcat'>{mes.nombre}</h2>
              </li> 
              </Link>           
          ))}
        </ul>
        <Link href={back}>
        <button className="boton-calendario">atras</button>
        </Link>
        <h3 className="mt-[5rem] calendario-footer text-[1.6rem]">no te pierdas ninguno de nuestros eventos este 2024</h3>
    </div>
    )
}

export default Calendario